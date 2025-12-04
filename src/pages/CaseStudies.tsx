import Navigation from "@/components/Navigation";
import CaseStudies from "@/components/CaseStudies";
import SEO from "@/components/SEO";


const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies | Reply Craft"
        description="Explore real-world examples of how Reply Craft helped clients scale outbound and AI-driven lead generation."
        canonical="https://reply-craft.com/case-studies"
      />
      <Navigation />
      <CaseStudies />
    </div>
  );
};

export default CaseStudiesPage;