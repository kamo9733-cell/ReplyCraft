import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SITE_BASE = "https://reply-craft.com";

const DEFAULT_TITLE = "ReplyCraft – AI Outreach & Lead Generation";
const DEFAULT_DESCRIPTION =
  "AI-powered outreach, email automation, and ICP-targeted lead generation system.";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  const location = useLocation();

  useEffect(() => {
    // --- TITLE ---
    document.title = title || DEFAULT_TITLE;

    // --- META DESCRIPTION ---
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description || DEFAULT_DESCRIPTION);

    // --- CANONICAL URL ---
    const canonicalUrl = canonical || `${SITE_BASE}${location.pathname}`;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // --- OPEN GRAPH TAGS ---
    const setMetaTag = (prop: string, value?: string) => {
      if (!value) return;
      let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("property", prop);
        document.head.appendChild(m);
      }
      m.setAttribute("content", value);
    };

    setMetaTag("og:title", ogTitle || title || DEFAULT_TITLE);
    setMetaTag("og:description", ogDescription || description || DEFAULT_DESCRIPTION);
    setMetaTag("og:image", ogImage || `${SITE_BASE}/og-image.png`);

  }, [title, description, canonical, ogTitle, ogDescription, ogImage, location.pathname]);

  return null;
};

export default SEO;
