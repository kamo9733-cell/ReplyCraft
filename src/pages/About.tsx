import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Reply Craft | Meet Founder Hassan Kamran"
        description="Meet Hassan Kamran, founder of Reply Craft. The story and mission behind our custom, intent-signal-based outreach systems for email and LinkedIn."
        canonical="https://reply-craft.com/about"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-primary">Reply Craft</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We build custom, intent-driven outreach systems that connect
            companies with the right buyers — at the exact moment they're ready
            to listen.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-5xl font-bold shadow-elegant">
                HK
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-1">Hassan Kamran</h2>
              <p className="text-primary font-semibold mb-5">
                Founder &amp; GTM Strategist
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hassan Kamran has spent the better part of a decade in the
                trenches of go-to-market — helping companies turn scattered
                sales motions into predictable pipeline. His focus has always
                been the same: building lead generation and outreach systems
                that respect the buyer. Over the years he has designed GTM
                strategies and real-time, intent-signal-based outreach programs
                across both email and LinkedIn, helping teams reach the right
                people at the right moment instead of shouting into the void.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Reply Craft started with a frustration Hassan couldn't shake.
              Everywhere he looked, talented teams were burning budget on
              outreach that landed in spam folders and got ignored — not
              because their product was weak, but because their timing was
              wrong.
            </p>
            <p>
              The companies that won weren't sending more messages; they were
              sending them at the exact moment a buyer showed intent. So Hassan
              built a system around that idea — one that listens for real
              signals like funding rounds, hiring spikes, and product launches,
              then crafts outreach worth replying to.
            </p>
            <p>
              What began as a custom build for a single client quickly became
              something bigger. That system is now Reply Craft.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe outbound shouldn't feel like spam — it should feel like
            good timing. Our mission is to connect companies with their future
            customers at the precise moment intent appears, across email and
            LinkedIn, with messaging that earns a reply instead of an
            unsubscribe. Every system we build is custom, signal-driven, and
            designed to make outreach feel less like noise and more like the
            start of a real conversation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to build your outreach system?
          </h2>
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
    </div>
  );
};

export default About;
