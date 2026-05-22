import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import LogoBar from "@/components/LogoBar";
import CTA from "@/components/CTA";
import useSectionTracking from "@/hooks/useSectionTracking";

const Index = () => {
  useSectionTracking(); // ✅ enables section tracking

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Cold Email & LinkedIn Outreach Tailored to Your ICP"
        description="Custom AI-powered lead generation & outreach systems tailored to your ICP. GTM strategies, personalized prospecting, and repeatable pipelines to book more meetings."
      />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <CTA /> {/* your contact section */}
      
    </div>
  );
};

export default Index;
