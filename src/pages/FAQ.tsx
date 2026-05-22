// src/pages/FAQ.tsx
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";

const FAQPage = () => {
  return (
    <>
      <SEO
        title="FAQ | Reply Craft"
        description="Frequently asked questions about Reply Craft’s AI-driven lead generation and outreach services."
        canonical="https://reply-craft.com/faq"
      />
      <FAQ />
      
    </>
  );
};

export default FAQPage;
