// api/ssr.js
const fs = require("fs");
const path = require("path");
const url = require("url");

// --- Route metadata mapping ---
// Add any other routes you want crawlers to see here.
// NOTE: blog posts mapping created from the blogPosts data you provided.
const ROUTE_META = {
  "/": {
    title: "ReplyCraft – AI Outreach That Converts",
    description:
      "AI-powered outreach, email automation, and ICP-targeted lead generation.",
    h1: "AI Outreach That Converts",
    canonical: "https://reply-craft.com/",
    ogImage: "https://reply-craft.com/og-image.png",
  },
  "/pricing": {
    title: "Pricing | Reply Craft",
    description: "View Reply Craft pricing plans for AI-powered lead generation and outreach.",
    h1: "Pricing Plans",
    canonical: "https://reply-craft.com/pricing",
    ogImage: "https://reply-craft.com/og-image.png",
  },
  "/faq": {
    title: "FAQ | Reply Craft",
    description: "Frequently asked questions about ReplyCraft, pricing, features and onboarding.",
    h1: "Frequently Asked Questions",
    canonical: "https://reply-craft.com/faq",
    ogImage: "https://reply-craft.com/og-image.png",
  },
  "/tryitout": {
    title: "Try ReplyCraft",
    description: "Try ReplyCraft — test the AI outreach assistant and see instant results.",
    h1: "Try ReplyCraft",
    canonical: "https://reply-craft.com/tryitout",
    ogImage: "https://reply-craft.com/og-image.png",
  },

  // Blog posts (from your provided blogPosts)
  "/blog/what-is-icp": {
    title: "What Is an Ideal Customer Profile (ICP)?",
    description:
      "Learn how to define your Ideal Customer Profile (ICP) to improve outbound campaigns, increase reply rates, and generate high-quality leads.",
    h1: "What Is an Ideal Customer Profile (ICP)?",
    canonical: "https://reply-craft.com/blog/what-is-icp",
    ogImage: "https://reply-craft.com/og-image.png",
  },
  "/blog/email-warming-importance": {
    title: "Why Email Warming Still Matters in 2025",
    description:
      "Discover why warming your email domain and inbox is critical for deliverability, and learn the best practices for sending cold emails that reach the inbox.",
    h1: "Why Email Warming Still Matters in 2025",
    canonical: "https://reply-craft.com/blog/email-warming-importance",
    ogImage: "https://reply-craft.com/og-image.png",
  },
  "/blog/landing-in-spam": {
    title: "LANDING in SPAM? Why Your Cold Emails Aren’t Reaching the Inbox",
    description:
      "A deep technical breakdown of why cold outreach emails land in spam and how to fix it using proper authentication, warm-up, domain rotation, and advanced deliverability strategies.",
    h1: "LANDING in SPAM? Why Your Cold Emails Aren’t Reaching the Inbox",
    canonical: "https://reply-craft.com/blog/landing-in-spam",
    ogImage: "https://reply-craft.com/og-image.png",
  },
};

// Fallback defaults
const DEFAULT = {
  title: "ReplyCraft – AI Outreach & Lead Generation",
  description: "AI-powered outreach, email automation, and ICP-targeted lead generation system.",
  h1: "ReplyCraft",
  ogImage: "https://reply-craft.com/og-image.png",
};

function normalizePathname(pathname) {
  // strip trailing slash except root
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

module.exports = function handler(req, res) {
  try {
    // read the built template
    const distIndexPath = path.resolve(process.cwd(), "dist", "index.html");
    if (!fs.existsSync(distIndexPath)) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("dist/index.html not found. Please run `npm run build` before deploying.");
      return;
    }
    let template = fs.readFileSync(distIndexPath, "utf8");

    // parse incoming url path
    const parsedUrl = url.parse(req.url || "/");
    const rawPath = parsedUrl.pathname || "/";
    const pathname = normalizePathname(rawPath);

    // find metadata for this route (fallback to defaults)
    const meta = ROUTE_META[pathname] || DEFAULT;

    // -------------------------
    // Replace <title>
    // -------------------------
    // If there's an existing <title> in the template, replace it; otherwise inject into head
    if (/<title>.*<\/title>/i.test(template)) {
      template = template.replace(/<title>.*<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
    } else {
      template = template.replace(
        /<head([^>]*)>/i,
        `<head$1>\n    <title>${escapeHtml(meta.title)}</title>`
      );
    }

    // -------------------------
    // Replace or add meta description
    // -------------------------
    if (/\<meta\s+name=["']description["'][^>]*>/i.test(template)) {
      template = template.replace(
        /\<meta\s+name=["']description["'][^>]*>/i,
        `<meta name="description" content="${escapeHtml(meta.description)}">`
      );
    } else {
      template = template.replace(
        /<\/title>/i,
        `</title>\n    <meta name="description" content="${escapeHtml(meta.description)}">`
      );
    }

    // -------------------------
    // Open Graph tags
    // -------------------------
    // simple replacements / insertions for og:title, og:description, og:image
    template = upsertMetaProperty(template, "og:title", meta.title || DEFAULT.title);
    template = upsertMetaProperty(template, "og:description", meta.description || DEFAULT.description);
    template = upsertMetaProperty(template, "og:image", meta.ogImage || DEFAULT.ogImage);

    // -------------------------
    // Canonical link
    // -------------------------
    if (meta.canonical) {
      if (/\<link\s+rel=["']canonical["'][^>]*>/i.test(template)) {
        template = template.replace(
          /\<link\s+rel=["']canonical["'][^>]*>/i,
          `<link rel="canonical" href="${escapeHtml(meta.canonical)}">`
        );
      } else {
        // insert after title/meta
        template = template.replace(
          /<\/head>/i,
          `    <link rel="canonical" href="${escapeHtml(meta.canonical)}">\n</head>`
        );
      }
    }

    // -------------------------
    // Insert a top-level H1 before the #root div so crawlers see it
    // -------------------------
    // We will inject a simple H1 just before <div id="root">.
    // If an H1 is already present in the static template, we won't inject another.
    if (!/\<h1[\s\S]*?\>/i.test(template)) {
      const h1Html = `<h1 style="font-size:28px; font-weight:700; text-align:center; margin:28px 0;">${escapeHtml(meta.h1 || DEFAULT.h1)}</h1>\n`;
      template = template.replace(/<div[^>]*id=["']root["'][^>]*>/i, match => `${h1Html}${match}`);
    }

    // -------------------------
    // Send the processed HTML
    // -------------------------
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    res.end(template);
  } catch (err) {
    console.error("SSR error:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal SSR error");
  }
};

// --- helpers ---
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function upsertMetaProperty(template, prop, content) {
  const selector = new RegExp(`<meta\\s+property=["']${escapeRegExp(prop)}["'][^>]*>`, "i");
  const tag = `<meta property="${prop}" content="${escapeHtml(content)}">`;
  if (selector.test(template)) {
    return template.replace(selector, tag);
  } else {
    // try inserting after </title> or after last meta
    if (/<\/title>/i.test(template)) {
      return template.replace(/<\/title>/i, `</title>\n    ${tag}`);
    }
    if (/<meta\s+name=/i.test(template)) {
      // insert after the last meta tag
      return template.replace(/(<meta[^>]*>\s*)(?![\s\S]*<meta)/i, `$1\n    ${tag}`);
    }
    // fallback: insert at head start
    return template.replace(/<head([^>]*)>/i, `<head$1>\n    ${tag}`);
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
