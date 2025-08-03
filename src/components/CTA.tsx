import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Replaces your entire SDR/copywriter/VA stack",
  "4-10x higher response rates than generic campaigns", 
  "Save 40+ hours per week on manual outreach",
  "Dedicated account manager for your success"
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-primary">Transform</span> Your Outreach?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our AI-powered email automation 
            to generate more qualified leads and close more deals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300 group"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Book a 15-minute demo • See real results • GDPR compliant
          </p>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTA;