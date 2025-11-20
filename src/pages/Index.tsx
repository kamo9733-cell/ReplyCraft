import Navigation from "@/components/Navigation";
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
      <Navigation />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <CTA /> {/* your contact section */}
      
    </div>
  );
};

export default Index;
