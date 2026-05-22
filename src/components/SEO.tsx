import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SITE_BASE = "https://reply-craft.com";

const DEFAULT_TITLE = "Reply Craft – AI Outreach & Lead Generation";
const DEFAULT_DESCRIPTION =
  "AI-powered outreach, email automation, and ICP-targeted lead generation system.";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  noindex,
}) => {
  const location = useLocation();

  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = canonical || `${SITE_BASE}${location.pathname}`;
    const resolvedImage = ogImage || `${SITE_BASE}/og-image.png`;

    // --- TITLE ---
    document.title = resolvedTitle;

    // --- META DESCRIPTION ---
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", resolvedDescription);

    // --- CANONICAL URL ---
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    const setMetaTag = (attr: "property" | "name", key: string, value?: string) => {
      if (!value) return;
      let m = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute(attr, key);
        document.head.appendChild(m);
      }
      m.setAttribute("content", value);
    };

    // --- OPEN GRAPH TAGS ---
    setMetaTag("property", "og:title", ogTitle || resolvedTitle);
    setMetaTag("property", "og:description", ogDescription || resolvedDescription);
    setMetaTag("property", "og:image", resolvedImage);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType || "website");

    // --- TWITTER CARD TAGS ---
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", ogTitle || resolvedTitle);
    setMetaTag("name", "twitter:description", ogDescription || resolvedDescription);
    setMetaTag("name", "twitter:image", resolvedImage);

    // --- ROBOTS ---
    const robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (robots) {
        robots.setAttribute("content", "noindex, follow");
      } else {
        const m = document.createElement("meta");
        m.setAttribute("name", "robots");
        m.setAttribute("content", "noindex, follow");
        document.head.appendChild(m);
      }
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, noindex, location.pathname]);

  return null;
};

export default SEO;
