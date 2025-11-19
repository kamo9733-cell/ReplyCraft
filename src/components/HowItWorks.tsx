const steps = [
  {
    number: "01",
    title: "Discovery & ICP Definition",
    description:
      "We start by deeply understanding your business, product, and Ideal Customer Profile (ICP) to ensure the system targets only high-fit prospects.",
  },
  {
    number: "02",
    title: "Data Collection & Lead Sampling",
    description:
      "AI agents gather leads from LinkedIn, company websites, and public sources. You review a sample batch in real-time so we can refine targeting before launching full campaigns.",
  },
  {
    number: "03",
    title: "Messaging Strategy & Drafting",
    description:
      "We define your outreach tone and style. Our AI drafts personalized emails referencing company news, role, and achievements. You review and approve before launch.",
  },
  {
    number: "04",
    title: "Campaign Launch & Optimization",
    description:
      "Once approved, campaigns run with smart follow-ups and A/B testing. You get a 2-week revision window to tweak the system. Performance metrics guide ongoing optimization.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From understanding your ICP to generating booked meetings — our AI-powered outbound system works alongside you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border">
                  <span className="text-sm text-muted-foreground">Lead Sources</span>
                  <span className="text-primary font-semibold">LinkedIn, Web, Glassdoor, Crunchbase, AngelList, and more</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border">
                  <span className="text-sm text-muted-foreground">Personalization Rate</span>
                  <span className="text-primary font-semibold">98.5%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border">
                  <span className="text-sm text-muted-foreground">Response Rate</span>
                  <span className="text-primary font-semibold">4.2x Higher</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-xl border border-border">
                  <span className="text-sm text-muted-foreground">Processing Speed</span>
                  <span className="text-primary font-semibold">Unlimited emails/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
