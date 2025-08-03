import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import LogoBar from "@/components/LogoBar";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
};

export default Index;
