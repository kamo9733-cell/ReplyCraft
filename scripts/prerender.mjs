import { spawn } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(rootDir, "dist");
const postsDir = join(rootDir, "content/posts");
const PORT = 4178;
const BASE = `http://localhost:${PORT}`;
const SITE_URL = "https://reply-craft.com";

const staticRoutes = [
  "/",
  "/about",
  "/pricing",
  "/faq",
  "/case-studies",
  "/try-it-out",
  "/blog",
];

// Rendered to dist/404.html so Vercel returns a real 404 status for
// unmatched URLs instead of a soft 200.
const NOT_FOUND_ROUTE = "/__not-found__";

// On Vercel the build container lacks the system libraries that Puppeteer's
// bundled Chromium needs, so we use @sparticuz/chromium there. Locally we use
// the full puppeteer package with its bundled browser.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const { default: chromium } = await import("@sparticuz/chromium");
    const { default: puppeteerCore } = await import("puppeteer-core");
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }
  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

// Tiny YAML-subset frontmatter parser. Matches the runtime parser in
// src/content/blogLoader.ts so the build and the app agree on field values.
function parseFrontmatter(raw) {
  const m = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!m) return {};
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[kv[1]] = value;
  }
  return data;
}

async function loadBlogPosts() {
  const files = await readdir(postsDir);
  const posts = [];
  for (const file of files) {
    if (!file.endsWith(".md") || file.startsWith("_")) continue;
    const slug = file.replace(/\.md$/, "");
    const raw = await readFile(join(postsDir, file), "utf8");
    const fm = parseFrontmatter(raw);
    posts.push({
      slug,
      date: fm.date || new Date().toISOString().slice(0, 10),
    });
  }
  return posts;
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error("Preview server did not start in time");
}

// Scroll the full page so framer-motion `whileInView` sections render their
// final state before we capture the HTML.
async function revealAllSections(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let scrolled = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        scrolled += step;
        if (scrolled >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  // Wait until the lazy route chunk has rendered (Suspense fallback gone).
  await page.waitForFunction(
    () => {
      const root = document.getElementById("root");
      return (
        !!root &&
        root.children.length > 0 &&
        !document.querySelector("[data-loading-route]")
      );
    },
    { timeout: 30000 }
  );
  await revealAllSections(page);
  await new Promise((r) => setTimeout(r, 1000));
  const html = await page.content();
  await page.close();
  return html;
}

function priorityFor(route) {
  if (route === "/") return "1.0";
  if (route === "/pricing" || route === "/case-studies") return "0.9";
  if (route === "/about" || route === "/faq" || route === "/blog") return "0.8";
  return "0.7";
}

function changefreqFor(route) {
  if (route === "/" || route === "/blog") return "weekly";
  return "monthly";
}

function buildSitemap(allRoutes, lastmodByRoute) {
  const today = new Date().toISOString().slice(0, 10);
  const entries = allRoutes.map((route) => {
    const loc = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
    const lastmod = lastmodByRoute[route] || today;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(route)}</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n\n")}
</urlset>
`;
}

const blogPosts = await loadBlogPosts();
const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);
const allRoutes = [...staticRoutes, ...blogRoutes];
const lastmodByRoute = Object.fromEntries(
  blogPosts.map((p) => [`/blog/${p.slug}`, p.date])
);

const server = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--strictPort"],
  { cwd: rootDir, stdio: "ignore" }
);

try {
  await waitForServer(BASE);

  const browser = await launchBrowser();

  const rendered = [];
  for (const route of allRoutes) {
    rendered.push({ route, html: await renderRoute(browser, route) });
    console.log(`prerendered ${route}`);
  }

  const notFoundHtml = await renderRoute(browser, NOT_FOUND_ROUTE);
  console.log("prerendered 404.html");

  await browser.close();

  for (const { route, html } of rendered) {
    const filePath =
      route === "/"
        ? join(distDir, "index.html")
        : join(distDir, route, "index.html");
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, html, "utf8");
  }
  await writeFile(join(distDir, "404.html"), notFoundHtml, "utf8");

  const sitemap = buildSitemap(allRoutes, lastmodByRoute);
  await writeFile(join(distDir, "sitemap.xml"), sitemap, "utf8");
  console.log("generated sitemap.xml");

  console.log(`prerendered ${rendered.length} routes + 404.html`);
} finally {
  server.kill();
}
