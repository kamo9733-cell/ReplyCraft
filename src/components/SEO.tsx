// src/components/SEO.tsx
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
    // Title
    if (title) {
      document.title = title;
    } else {
      // fallback site title
      document.title = "Reply Craft | Custom ICP-Tailored AI Lead Generation & Outreach Systems";
    }

    // Description meta
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Canonical link
    const canonicalUrl = canonical || `${SITE_BASE}${location.pathname}`;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // Open Graph tags (og:title, og:description, og:image)
    const setMetaTag = (prop: string, value?: string) => {
      if (!value) return;
      const selector = `meta[property="${prop}"]`;
      let m = document.querySelector(selector) as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("property", prop);
        document.head.appendChild(m);
      }
      m.setAttribute("content", value);
    };

    setMetaTag("og:title", ogTitle || title || document.title);
    setMetaTag("og:description", ogDescription || description || "");
    setMetaTag("og:image", ogImage || `${SITE_BASE}/og-image.png`);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, location.pathname]);

  return null;
};

export default SEO;
