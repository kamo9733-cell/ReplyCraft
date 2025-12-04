import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    // Set title
    if (title) {
      document.title = title;
    }

    // Set meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Set canonical
    const canonicalUrl =
      canonical || `https://reply-craft.com${location.pathname}`;

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [title, description, canonical, location.pathname]);

  return null;
};

export default SEO;
