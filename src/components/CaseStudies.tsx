import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Search,
  Lightbulb,
  Leaf,
  Sparkles,
  Quote,
  type LucideIcon,
} from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  industry: string;
  title: string;
  tagline: string;
  challenge: string;
  approach: string;
  metrics: Metric[];
  testimonial: string;
  author: string;
  company: string;
  Icon: LucideIcon;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: "B2B SaaS",
    title: "From zero pipeline to $45K in 60 days",
    tagline:
      "How a seed-stage devtools startup booked meetings with their exact ICP.",
    challenge:
      "A seed-stage B2B SaaS startup had built a product they believed in — but with no marketing engine and no SDR team, they were watching their runway shrink while waiting for inbound that never came. They needed qualified demo calls quickly, both to validate product-market fit and to give investors something tangible to point to.",
    approach:
      "We built their outreach system around a tightly-defined ICP — CTOs and product heads at companies running specific tech stacks where their product would slot in cleanly. After identifying 1,200 high-fit prospects on LinkedIn, we layered in real-time signals like company news, recent funding announcements, and activity hints. Each cold email referenced something specific about the prospect's company, and a three-touch sequence kept the conversation alive without ever feeling automated.",
    metrics: [
      { value: "51%", label: "Open rate" },
      { value: "9%", label: "Reply rate" },
      { value: "14", label: "Meetings booked" },
      { value: "$45K", label: "Pipeline generated" },
    ],
    testimonial:
      "We didn't have time to build a cold email engine in-house — this system got us meetings with high-intent prospects fast.",
    author: "Co-founder",
    company: "DevTools SaaS",
    Icon: Rocket,
    gradient: "from-primary/30 via-primary/10 to-secondary",
  },
  {
    industry: "Agency",
    title: "5 new clients in 30 days, without an SDR",
    tagline: "How a 3-person SEO agency built a predictable client pipeline.",
    challenge:
      "ElevateSEO was a small but talented SEO agency stuck in the classic agency trap — every founder hour was billable, leaving no time for new business. Hiring a dedicated SDR was financially out of reach, and referrals had plateaued. They needed a way to fill the pipeline that didn't depend on founder bandwidth.",
    approach:
      "We focused outreach on a specific, high-signal segment: eCommerce brands running Shopify whose technical SEO showed clear weaknesses — exactly the kind of fix ElevateSEO sells. We enriched each prospect with a real signal of growth intent — a recent marketing or growth hire — then personalized every opener with a specific SEO issue we'd already identified on their site. The result felt less like cold outreach and more like a free site audit.",
    metrics: [
      { value: "38%", label: "Open rate" },
      { value: "6.5%", label: "Reply rate" },
      { value: "5", label: "Clients signed" },
      { value: "$15K", label: "New MRR" },
    ],
    testimonial:
      "This system is like having a full-time BDR and a web auditor in one. The personalization was insane.",
    author: "Founder",
    company: "ElevateSEO",
    Icon: Search,
    gradient: "from-secondary via-primary/10 to-primary/25",
  },
  {
    industry: "Coaching",
    title: "4 high-ticket clients from a single 30-day sprint",
    tagline:
      "How a leadership coach replaced content marketing with signal-driven outreach.",
    challenge:
      "This executive coach had built a strong reputation through referrals but wanted to grow beyond word-of-mouth. Content marketing and paid ads weren't a fit — they felt off-brand for the kind of high-trust, high-ticket clients she worked with. She needed a quieter, more deliberate way to start meaningful conversations with the right people.",
    approach:
      "We narrowed targeting to founders and C-level executives at SaaS companies that had recently raised funding — exactly the kind of leaders facing the scaling challenges she specializes in. Outreach was deeply personal: every email referenced a recent press mention, a hiring spike, or a public milestone, paired with a soft, conversational ask. No selling, no funnels — just a genuine opening for a conversation.",
    metrics: [
      { value: "47%", label: "Open rate" },
      { value: "10%", label: "Reply rate" },
      { value: "4", label: "High-ticket clients" },
      { value: "$3.5K+", label: "Per engagement" },
    ],
    testimonial:
      "I used to hate cold outreach — now it feels like I'm having meaningful conversations instead of shouting into the void.",
    author: "Executive Coach & Author",
    company: "Leadership Practice",
    Icon: Lightbulb,
    gradient: "from-primary/20 via-accent/10 to-primary/5",
  },
  {
    industry: "E-commerce",
    title: "18 influencer partnerships in time for launch",
    tagline:
      "How a sustainable apparel brand built genuine launch buzz with intent-driven outreach.",
    challenge:
      "EarthWear Co. was preparing to launch their summer collection and needed to build genuine community momentum — not just paid reach. Traditional influencer agencies were expensive and slow, and the brand wanted partnerships that felt authentic: collaborators whose audiences actually cared about sustainability, not just anyone with a follower count.",
    approach:
      "We identified 800+ micro-influencers on Instagram and YouTube whose content centered on sustainability, segmented by tone (lifestyle, fashion-forward, activist), and reached out across DMs and email with messaging tailored to each segment's voice. Every message included a preview of the lookbook and a clear collaboration offer — no generic templates, no vague pitches.",
    metrics: [
      { value: "62%", label: "Open rate" },
      { value: "18", label: "Partnerships" },
      { value: "3", label: "Boutique deals" },
      { value: "150%", label: "Social engagement lift" },
    ],
    testimonial:
      "Our outreach felt personal, not automated — and it led to genuine long-term collaborations that boosted brand visibility.",
    author: "Founder",
    company: "EarthWear Co.",
    Icon: Leaf,
    gradient: "from-accent/20 via-primary/15 to-secondary",
  },
  {
    industry: "Agency",
    title: "From zero to a full client roster in 45 days",
    tagline:
      "How a new AI marketing agency closed its first 10 clients without ads.",
    challenge:
      "AutomateIQ launched as a new marketing agency in a crowded niche, with no referral base, no case studies, and no budget for paid acquisition. They needed to prove the model fast — both to themselves and to early prospects — without burning runway on ads or waiting months for content to compound.",
    approach:
      "We targeted tech startups actively hiring for growth or marketing roles on LinkedIn — a precise buying signal that they were investing in this exact problem. Outreach was short, direct, and ROI-focused, with every email reviewed manually to catch the kind of personalization automation misses. A tight automated sequence kept conversations moving without becoming spammy.",
    metrics: [
      { value: "54%", label: "Open rate" },
      { value: "11%", label: "Reply rate" },
      { value: "9", label: "Discovery calls" },
      { value: "$28K", label: "Revenue closed" },
    ],
    testimonial:
      "We went from zero clients to a full roster in under two months. It felt like having a growth partner, not just a tool.",
    author: "CEO",
    company: "AutomateIQ Agency",
    Icon: Sparkles,
    gradient: "from-primary/35 via-primary/10 to-accent/5",
  },
];

// Subtle abstract line decoration rendered behind each section's content.
// Mirrors horizontally for odd sections so the visual rhythm matches the
// alternating left/right layout.
const BackgroundLines = ({ mirror }: { mirror?: boolean }) => (
  <svg
    className="absolute inset-0 w-full h-full text-primary/10 pointer-events-none"
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <g transform={mirror ? "scale(-1, 1) translate(-1200, 0)" : undefined}>
      <path
        d="M -100 220 Q 400 80, 820 360 T 1400 520"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M -100 700 Q 320 520, 720 680 T 1400 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 240 -100 L 1040 920"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        opacity="0.5"
      />
    </g>
  </svg>
);

// Small dot-pattern overlay used inside the gradient image placeholders so
// the large empty area gets a subtle texture instead of pure flat gradient.
const DotPattern = ({ id }: { id: string }) => (
  <svg
    className="absolute inset-0 w-full h-full text-primary opacity-30 pointer-events-none"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id={id}
        x="0"
        y="0"
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

const CaseStudies = () => {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-36 pb-16 bg-gradient-to-br from-background to-secondary">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            Real <span className="text-primary">Results</span> from Real Clients
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five outreach systems we built, the challenges they solved, and the
            measurable outcomes that followed. Each one custom to the client's
            ICP and the signals that mattered to their buyers.
          </p>
        </div>
      </section>

      {/* Case study sections */}
      {caseStudies.map((study, index) => {
        const isReversed = index % 2 === 1;

        const imageBlock = (
          <div
            className={`relative aspect-square w-full rounded-3xl bg-gradient-to-br ${study.gradient} shadow-elegant overflow-hidden`}
            aria-hidden="true"
          >
            <DotPattern id={`dots-${index}`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <study.Icon
                className="w-40 h-40 lg:w-48 lg:h-48 text-primary/60 drop-shadow-[0_0_40px_hsl(217_91%_60%/0.5)]"
                strokeWidth={1}
              />
            </div>
          </div>
        );

        const textBlock = (
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                The Challenge
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                The Approach
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {study.approach}
              </p>
            </div>
          </div>
        );

        return (
          <Fragment key={index}>
            {index > 0 && (
              <div className="h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
            )}
            <section
              className={`relative overflow-hidden py-24 md:py-32 ${
                index % 2 === 1 ? "bg-muted/30" : ""
              }`}
            >
              {/* Background decorations */}
              <BackgroundLines mirror={isReversed} />
              <div
                className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Industry tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary uppercase tracking-wider border border-primary/20">
                    {study.industry}
                  </span>
                </motion.div>

                {/* Title + tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-16 max-w-3xl"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                    {study.title}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    {study.tagline}
                  </p>
                </motion.div>

                {/* Image + narrative */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
                >
                  {isReversed ? (
                    <>
                      {textBlock}
                      {imageBlock}
                    </>
                  ) : (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  )}
                </motion.div>

                {/* Metric stat-strip */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mb-20"
                >
                  <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/20 p-6 md:p-8 backdrop-blur-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                      {study.metrics.map((m, i) => (
                        <div
                          key={i}
                          className={`px-4 text-center ${
                            i > 0 ? "md:border-l md:border-primary/10" : ""
                          }`}
                        >
                          <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                            {m.value}
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Pull-quote card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-3xl mx-auto"
                >
                  <blockquote className="relative bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-3xl p-10 md:p-14 shadow-elegant overflow-hidden">
                    <Quote
                      className="absolute -top-2 -left-2 w-32 h-32 md:w-40 md:h-40 text-primary/10 pointer-events-none"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-6 text-foreground">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <footer className="text-muted-foreground">
                        — {study.author},{" "}
                        <span className="text-foreground font-semibold">
                          {study.company}
                        </span>
                      </footer>
                    </div>
                  </blockquote>
                </motion.div>
              </div>
            </section>
          </Fragment>
        );
      })}

      {/* Gradient divider before closing CTA */}
      <div className="h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Closing CTA */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div
          className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Want your story to be next?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every Reply Craft system is custom-built around your ICP and the
            signals that matter to your buyers. Let's talk about what yours
            could look like.
          </p>
          <a
            href="https://calendly.com/replyycraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-elegant transition-all duration-300"
          >
            Book a call
          </a>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
