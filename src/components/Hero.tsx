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
                <span className="text-foreground">Custom ICP-Tailored</span>
                <br />
                <span className="text-primary animate-fall-down inline-block">
                  AI Outreach & Lead Generation Systems
                </span>
                <br />
                <span className="text-foreground">That Book More Meetings</span>
              </h1>

              <div className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up space-y-4 mt-8">
                <p>
                  We build done-for-you outbound systems around your exact Ideal Customer Profile (ICP). 
                  AI-driven prospecting, contextual personalization, and automated outreach—delivered and managed for you so your pipeline becomes predictable.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>ICP-first prospecting:</strong> source high-fit leads from LinkedIn, Crunchbase, AngelList, and other relevant signals.</li>
                  <li><strong>AI research & signals:</strong> funding, hiring, launches and other triggers inform messaging.</li>
                  <li><strong>Hyper-personalized outreach:</strong> AI + human-reviewed copy tailored to each prospect.</li>
                  <li><strong>Fully managed system:</strong> automation, deliverability, analytics and continuous optimization—no internal setup required.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up">
                <Button
                  size="lg"
                  onClick={handleScheduleDemo}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300 animate-glow"
                >
                  Get My Custom Outbound System
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
                  See Case Studies
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-3 max-w-xl">
                <span className="font-medium">Free discovery call:</span> we audit your ICP & show a sample outreach blueprint.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Dashboard preview of a custom ICP-tailored outreach system showing prospect lists, signals, and campaign performance"
                className="w-full h-auto rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl pointer-events-none"></div>
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
