import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    title: "📌 Case Study #1 – B2B SaaS Startup",
    goal: "🚀 Goal:\nA seed-stage B2B SaaS startup needed qualified leads for demo calls to validate product-market fit and attract investors.",
    whatWeDid: "🔍 What We Did:\n- Identified 1,200 ideal customer profiles (CTOs & product heads) using LinkedIn filters and tech stack targeting\n- Scraped LinkedIn activity and company news to personalize emails based on recent milestones\n- Created a 3-email outreach sequence customized to the pain points of each industry vertical",
    results: "📈 Results (over 3 weeks):\n- 51% open rate\n- 9% reply rate\n- 14 booked meetings\n- $45k in new pipeline generated",
    testimonial: "“We didn’t have time to build a cold email engine in-house — this system got us meetings with high-intent prospects fast.”\n— Co-founder, DevTools SaaS"
  },
  {
    title: "📌 Case Study #2 – SEO Agency",
    goal: "🎯 Goal:\nA 3-person SEO agency wanted to scale client acquisition without hiring a full-time SDR.",
    whatWeDid: "🔍 What We Did:\n- Targeted eCommerce brands on Shopify with poor SEO signals (low DA, slow page speed, missing metadata)\n- Enriched data with recent marketing hires (suggesting growth focus)\n- Personalized messages based on exact website issues (e.g., “noticed your homepage takes 4.7s to load on mobile”)",
    results: "📈 Results:\n- 38% open rate\n- 6.5% reply rate\n- 5 signed clients within 30 days\n- $15,000 in MRR closed",
    testimonial: "“This system is like having a full-time BDR and a web auditor in one. The personalization was insane.”\n— Founder, ElevateSEO"
  },
  {
    title: "📌 Case Study #3 – Executive Coach / Consultant",
    goal: "🎯 Goal:\nA leadership coach wanted more 1:1 clients without relying on content or ads.",
    whatWeDid: "🔍 What We Did:\n- Scraped founders and C-level execs from SaaS companies that recently raised funding\n- Personalized intros based on recent press mentions or growth hiring\n- Used conversational, soft-ask copy (e.g., “Congrats on the raise — if leadership is growing fast, happy to share how I help founders avoid burnout while scaling.”)",
    results: "📈 Results:\n- 47% open rate\n- 10% reply rate\n- 4 high-ticket clients closed at $3,500+ each",
    testimonial: "“I used to hate cold outreach — now it feels like I'm having meaningful conversations instead of shouting into the void.”\n— Executive Coach & Author"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real <span className="text-primary">Results</span> from Real Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our personalized email automation transformed businesses across different industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground whitespace-pre-line">
                  {study.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">{study.goal}</p>
                <p className="text-muted-foreground whitespace-pre-line">{study.whatWeDid}</p>
                <p className="text-muted-foreground whitespace-pre-line">{study.results}</p>
                <p className="italic text-muted-foreground whitespace-pre-line">{study.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
