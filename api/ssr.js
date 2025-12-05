import fs from "fs";
import path from "path";
import { URL } from "url";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// -------------------------------------------
// Route metadata (ALL PAGES, including homepage)
// -------------------------------------------
const ROUTE_META = {
  "/": {
    title: "ReplyCraft – AI Outreach That Converts",
    description:
      "AI-powered lead generation built around your ICP. ReplyCraft helps you personalize outreach, improve deliverability, and book more qualified meetings.",
    h1: "AI Outreach That Converts",
    canonical: "https://reply-craft.com/",
  },

  "/pricing": {
    title: "Pricing | Reply Craft",
    description:
      "Explore ReplyCraft pricing plans for AI-powered lead generation and outreach systems designed for solopreneurs, startups, and growing teams.",
    h1: "Pricing Plans that support all businesses/individuals",
    canonical: "https://reply-craft.com/pricing",
  },

  "/faq": {
    title: "FAQ | Reply Craft",
    description:
      "Find answers to common questions about ReplyCraft, pricing, AI outreach workflows, customization options, onboarding, and system setup.",
    h1: "Frequently Asked Questions",
    canonical: "https://reply-craft.com/faq",
  },

  "/tryitout": {
    title: "Try ReplyCraft",
    description: "Try ReplyCraft — test the AI outreach assistant.",
    h1: "Try ReplyCraft",
    canonical: "https://reply-craft.com/tryitout",
  },

  "/blog": {
    title: "ReplyCraft – Insights on AI Outreach & Lead Generation",
    description:
      "Explore expert guides on AI outreach, email deliverability, ICP targeting, and modern lead generation strategies.",
    h1: "AI Outreach & Lead Generation Blog",
    canonical: "https://reply-craft.com/blog",
  },

  "/case-studies": {
    title: "Case Studies | ReplyCraft",
    description:
      "See real examples of AI-powered outreach systems we've built, including ICP targeting improvements, deliverability fixes, and campaign results.",
    h1: "Case Studies",
    canonical: "https://reply-craft.com/case-studies",
  },

  "/blog/what-is-icp": {
    title: "What Is an Ideal Customer Profile (ICP)?",
    description:
      "Learn what an Ideal Customer Profile (ICP) is, how to define it, and how a strong ICP boosts outreach relevance, reply rates, and lead quality.",
    h1: "What Is an Ideal Customer Profile?",
    canonical: "https://reply-craft.com/blog/what-is-icp",
  },

  "/blog/email-warming-importance": {
    title: "Why Email Warming Still Matters in 2025",
    description:
      "Understand why email warming still matters in 2025 and how proper warm-up improves deliverability, sender reputation, and cold outreach performance.",
    h1: "Why Email Warming Still Matters in 2025",
    canonical: "https://reply-craft.com/blog/email-warming-importance",
  },

  "/blog/landing-in-spam": {
    title: "LANDING in SPAM?",
    description:
      "Learn why cold emails land in spam and how to fix deliverability using authentication, warm-up, domain setup, and advanced outreach best practices.",
    h1: "Why Your Emails Land in Spam",
    canonical: "https://reply-craft.com/blog/landing-in-spam",
  },
};

// Default fallback
const DEFAULT = {
  title: "ReplyCraft – AI Outreach & Lead Generation",
  description: "AI-powered outreach and automation system.",
  h1: "ReplyCraft",
};

// -------------------------------------------
// MAIN SSR HANDLER
// -------------------------------------------
export default function handler(req, res) {
  try {
    const distPath = path.join(__dirname, "../dist/index.html");
    let html = fs.readFileSync(distPath, "utf8");

    const urlObj = new URL(req.url, "https://reply-craft.com");
    const pathname = urlObj.pathname;

    const meta = ROUTE_META[pathname] || DEFAULT;

    // Replace <title>
    html = html.replace(/<title>.*<\/title>/i, `<title>${meta.title}</title>`);

    // Replace meta description
    html = html.replace(
      /<meta name="description".*?>/i,
      `<meta name="description" content="${meta.description}">`
    );

    // Always inject canonical
    const canonicalTag = `<link rel="canonical" href="${meta.canonical}">`;

    if (html.includes(`rel="canonical"`)) {
      html = html.replace(/<link rel="canonical".*?>/i, canonicalTag);
    } else {
      html = html.replace("</head>", `${canonicalTag}</head>`);
    }

    // Always inject H1 before React root (including homepage)
    html = html.replace(
      `<div id="root">`,
      `<h1>${meta.h1}</h1><div id="root">`
    );

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("SSR Error: " + err.message);
  }
}
