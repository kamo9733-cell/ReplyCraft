import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const handleScheduleDemo = () => {
    // Scroll smoothly to the CTA section
    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth", block: "center" });

    // Trigger the CTA form to open after a short delay
    setTimeout(() => {
      window.dispatchEvent(new Event("open-demo-form"));
    }, 700); // adjust timing if your scroll speed differs
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary pt-32">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">We Build</span>
                <br />
                <span className="text-primary animate-fall-down inline-block">
                  Hyper Personalised
                </span>
                <br />
                <span className="text-foreground">Email Automation</span>
              </h1>

              <div className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up space-y-4 mt-8">
                <p>
                  Whether you’re a SaaS startup aiming to book demo calls after a funding round, 
                  a B2B company looking to land high-value clients, or a recruiter hunting the perfect candidates, 
                  we build tailored outreach engines that:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Source your ideal prospects from Crunchbase, AngelList, LinkedIn, and beyond</li>
                  <li>Extract real-time signals like funding news, product launches, and hiring activity</li>
                  <li>
                    Research each individual to identify opportunities where you can add value, uncover pain points, 
                    and personalize every single word and email
                  </li>
                  <li>Craft hyper-personalized emails that get replies, meetings, and sales — without you lifting a finger</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up">
                <Button
                  size="lg"
                  onClick={handleScheduleDemo}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300 animate-glow"
                >
                  Schedule a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => {
                    const section = document.querySelector("#case-studies");
                    section
                      ? section.scrollIntoView({ behavior: "smooth" })
                      : (window.location.href = "/case-studies");
                  }}
                >
                  View Case Studies
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
