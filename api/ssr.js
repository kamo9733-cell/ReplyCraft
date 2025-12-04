import fs from "fs";
import path from "path";
import { URL } from "url";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Route metadata
const ROUTE_META = {
  "/": {
    title: "ReplyCraft – AI Outreach That Converts",
    description:
      "AI-powered outreach, email automation, and ICP-targeted lead generation.",
    h1: "AI Outreach That Converts",
    canonical: "https://reply-craft.com/",
  },
  "/pricing": {
    title: "Pricing | Reply Craft",
    description:
      "Explore ReplyCraft pricing plans for AI-powered lead generation and outreach systems designed for solopreneurs, startups, and growing teams.",
    h1: "Pricing Plans",
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
  "/blog/what-is-icp": {
    title: "What Is an Ideal Customer Profile (ICP)?",
    description:
      "Learn what an Ideal Customer Profile (ICP) is, how to define it, and how a strong ICP boosts outreach relevance, reply rates, and lead quality.",
    h1: "What Is an Ideal Customer Profile?",
  },
  "/blog/email-warming-importance": {
    title: "Why Email Warming Still Matters in 2025",
    description:
      "Learn why cold emails land in spam and how to fix deliverability using authentication, warm-up, domain setup, and advanced outreach best practices.",
    h1: "Why Email Warming Still Matters in 2025",
  },
  "/blog/landing-in-spam": {
    title: "LANDING in SPAM?",
    description:
      "Learn why cold emails land in spam and how to fix deliverability using authentication, warm-up, domain setup, and advanced outreach best practices.",
    h1: "Why Your Emails Land in Spam",
  },
};

const DEFAULT = {
  title: "ReplyCraft – AI Outreach & Lead Generation",
  description: "AI-powered outreach and automation system.",
  h1: "ReplyCraft",
};

export default function handler(req, res) {
  try {
    const distPath = path.join(__dirname, "../dist/index.html");
    let html = fs.readFileSync(distPath, "utf8");

    const urlObj = new URL(req.url, "https://reply-craft.com");
    const pathname = urlObj.pathname;

    const meta = ROUTE_META[pathname] || DEFAULT;

    html = html.replace(/<title>.*<\/title>/i, `<title>${meta.title}</title>`);
    html = html.replace(
      /<meta name="description".*?>/i,
      `<meta name="description" content="${meta.description}">`
    );

    // Inject H1 before React root
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
