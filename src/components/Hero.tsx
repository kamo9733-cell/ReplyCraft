import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-foreground">We Build</span>
                <br />
                <span className="text-primary animate-fall-down inline-block">
                  Personalised
                </span>
                <br />
                <span className="text-foreground">Email Automation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up">
                Transform your outreach with AI-powered email agents that source leads, 
                extract data from LinkedIn and the web, and craft highly personalized 
                messages that convert.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300 animate-glow-pulse"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Email automation dashboard" 
                className="w-full h-auto rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;