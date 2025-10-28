import { useEffect } from "react";
import { track } from "@vercel/analytics/react";

const sectionIds = ["features", "how-it-works", "contact"];

const useSectionTracking = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.tracked) {
            entry.target.dataset.tracked = "true"; // prevent duplicates
            const section = entry.target.id;
            console.log(`👀 User viewed section: ${section}`);
            track(`viewed-${section}`); // send event to Vercel Analytics
          }
        });
      },
      { threshold: 0.5 } // fires when 50% visible
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

export default useSectionTracking;
