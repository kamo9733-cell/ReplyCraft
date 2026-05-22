import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(rootDir, "dist");
const PORT = 4178;
const BASE = `http://localhost:${PORT}`;

const routes = [
  "/",
  "/about",
  "/pricing",
  "/faq",
  "/case-studies",
  "/try-it-out",
  "/blog",
  "/blog/what-is-icp",
  "/blog/email-warming-importance",
  "/blog/landing-in-spam",
];

// Rendered to dist/404.html so Vercel returns a real 404 status for
// unmatched URLs instead of a soft 200.
const NOT_FOUND_ROUTE = "/__not-found__";

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

const server = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--strictPort"],
  { cwd: rootDir, stdio: "ignore" }
);

try {
  await waitForServer(BASE);

  const browser = await launchBrowser();

  const rendered = [];
  for (const route of routes) {
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

  console.log(`prerendered ${rendered.length} routes + 404.html`);
} finally {
  server.kill();
}
