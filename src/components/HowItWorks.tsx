const steps = [
  {
    number: "01",
    title: "Discovery & Profile Definition",
    description:
      "We start by sitting down with you to deeply understand your business, product, and ideal customer profile (ICP). This ensures we target the right prospects who are a perfect fit.",
  },
  {
    number: "02",
    title: "Data Collection & Lead Sampling",
    description:
      "Our AI agents scan LinkedIn, company websites, and public sources to build comprehensive prospect lists. We then send you a sample batch of leads to review in real time so we can refine the search and make sure the data matches your expectations.",
  },
  {
    number: "03",
    title: "Messaging Strategy & Email Drafting",
    description:
      "Next, we discuss your outreach style and tone. Based on that, our AI crafts sample personalized emails referencing specific company news, roles, and achievements. We review and tweak these drafts with you to nail the perfect message.",
  },
  {
    number: "04",
    title: "Campaign Launch & Optimization",
    description:
      "Once approved, we roll out your personalized email campaigns with smart timing, follow-ups, and A/B testing. You get a 2-week revision window to request adjustments, so the system keeps evolving with your feedback.",
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
            From understanding your business to closing deals — our AI-driven outreach system works hand-in-hand with you every step of the way.
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
                  <span className="text-primary font-semibold">LinkedIn, Web, Glassdoor, Apollo, Tiktok and many others..</span>
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
                  <span className="text-primary font-semibold">1000+ emails/day</span>
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
