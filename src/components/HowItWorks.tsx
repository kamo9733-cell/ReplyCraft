const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Our AI agents scan LinkedIn profiles, company websites, and public data sources to build comprehensive prospect profiles with contact information, role details, and recent activities."
  },
  {
    number: "02", 
    title: "Smart Analysis",
    description: "Advanced algorithms analyze the collected data to identify key personalization opportunities, pain points, and optimal messaging angles for each prospect."
  },
  {
    number: "03",
    title: "Email Crafting",
    description: "AI generates highly personalized email content that references specific company news, role responsibilities, and individual achievements to maximize engagement."
  },
  {
    number: "04",
    title: "Automated Outreach",
    description: "Deploy your personalized campaigns with intelligent timing, follow-up sequences, and A/B testing to optimize performance and drive conversions."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From data collection to conversion - our AI handles the entire personalized outreach process
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
                  <span className="text-primary font-semibold">LinkedIn, Web, CRM</span>
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