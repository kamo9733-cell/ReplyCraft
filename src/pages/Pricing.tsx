import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import SEO from "@/components/SEO";


const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing | Reply Craft"
        description="View Reply Craft pricing plans for AI-powered lead generation and outreach."
        canonical="https://reply-craft.com/pricing"
      />
      <Navigation />
      <Pricing />
      
    </div>
  );
};

export default PricingPage;
