import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, Target, Rocket, Quote } from "lucide-react";

const caseStudies = [
  {
    title: "B2B SaaS Startup",
    goal: "A seed-stage B2B SaaS startup needed qualified leads for demo calls to validate product-market fit and attract investors.",
    whatWeDid: [
      "Identified 1,200 ideal customer profiles (CTOs & product heads) using LinkedIn filters and tech stack targeting",
      "Scraped LinkedIn activity and company news to personalize emails based on recent milestones",
      "Created a 3-email outreach sequence customized to the pain points of each industry vertical",
    ],
    results: [
      "51% open rate",
      "9% reply rate",
      "14 booked meetings",
      "$45k in new pipeline generated",
    ],
    testimonial:
      "“We didn’t have time to build a cold email engine in-house — this system got us meetings with high-intent prospects fast.”",
    author: "Co-founder, DevTools SaaS",
  },
  {
    title: "SEO Agency",
    goal: "A 3-person SEO agency wanted to scale client acquisition without hiring a full-time SDR.",
    whatWeDid: [
      "Targeted eCommerce brands on Shopify with poor SEO signals",
      "Enriched data with recent marketing hires (suggesting growth focus)",
      "Personalized messages based on exact website issues",
    ],
    results: [
      "38% open rate",
      "6.5% reply rate",
      "5 signed clients within 30 days",
      "$15k in new MRR closed",
    ],
    testimonial:
      "“This system is like having a full-time BDR and a web auditor in one. The personalization was insane.”",
    author: "Founder, ElevateSEO",
  },
  {
    title: "Executive Coach / Consultant",
    goal: "A leadership coach wanted more 1:1 clients without relying on content or ads.",
    whatWeDid: [
      "Scraped founders and C-level execs from SaaS companies that recently raised funding",
      "Personalized intros based on recent press mentions or growth hiring",
      "Used conversational, soft-ask copy tailored for high-touch outreach",
    ],
    results: [
      "47% open rate",
      "10% reply rate",
      "4 high-ticket clients closed at $3,500+ each",
    ],
    testimonial:
      "“I used to hate cold outreach — now it feels like I'm having meaningful conversations instead of shouting into the void.”",
    author: "Executive Coach & Author",
  },
  {
    title: "E-commerce Brand (Sustainable Apparel)",
    goal: "A sustainable clothing brand wanted to partner with eco-influencers and boutique stores to boost brand reach before their summer collection launch.",
    whatWeDid: [
      "Identified 800+ micro-influencers with sustainability-focused audiences on Instagram & YouTube",
      "Segmented outreach based on content style (lifestyle, fashion, activism)",
      "Automated personalized DMs and follow-up emails with lookbook previews",
    ],
    results: [
      "62% open rate",
      "18 influencer collaborations",
      "3 boutique partnerships",
      "150% increase in social engagement",
    ],
    testimonial:
      "“Our outreach felt personal, not automated — and it led to genuine long-term collaborations that boosted brand visibility.”",
    author: "Founder, EarthWear Co.",
  },
  {
    title: "Marketing Agency (AI Automation Niche)",
    goal: "A new marketing agency specializing in AI wanted to sign its first 10 clients quickly without relying on referrals or paid ads.",
    whatWeDid: [
      "Targeted tech startups hiring for growth or marketing roles on LinkedIn",
      "Used short, punchy outreach emphasizing ROI and case-specific value",
      "Set up automated sequences with manual reviews for personalization quality",
    ],
    results: [
      "54% open rate",
      "11% reply rate",
      "9 discovery calls booked",
      "5 clients closed worth $28k in revenue within 45 days",
    ],
    testimonial:
      "“We went from zero clients to a full roster in under two months. It felt like having a growth partner, not just a tool.”",
    author: "CEO, AutomateIQ Agency",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Real <span className="text-primary">Results</span> from Real Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how our personalized outreach turned conversations into
            revenue across different industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="group flex flex-col justify-between h-full hover:shadow-xl border-border bg-card/90 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 rounded-2xl">
                <CardContent className="p-8 space-y-6 flex flex-col flex-grow">
                  
                  {/* Title */}
                  <div className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-semibold text-card-foreground">
                      {study.title}
                    </h3>
                  </div>

                  {/* Goal */}
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 text-foreground">
                      <Target className="w-4 h-4 text-primary" /> Goal
                    </h4>
                    <p className="text-muted-foreground mt-1">{study.goal}</p>
                  </div>

                  {/* What We Did */}
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 text-foreground">
                      <Rocket className="w-4 h-4 text-primary" /> What We Did
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                      {study.whatWeDid.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 text-foreground">
                      <Trophy className="w-4 h-4 text-primary" /> Results
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                      {study.results.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="italic text-muted-foreground relative">
                      <Quote className="w-4 h-4 text-primary inline mr-2" />
                      {study.testimonial}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      — {study.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
