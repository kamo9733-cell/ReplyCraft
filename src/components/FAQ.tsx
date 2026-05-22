import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What exactly does Reply Craft do?",
    answer:
      "Reply Craft builds fully automated, AI-powered outreach systems tailored to your Ideal Customer Profile (ICP). We combine intelligent lead sourcing, hyper-personalized messaging, and smart automation so you get booked meetings and qualified conversations — without needing a full-time SDR or copywriter.",
  },
  {
    question: "Who is this for?",
    answer:
      "Our solution works for founders, small teams, and established sales departments looking to scale outbound outreach efficiently. We customize each system to your ICP, ensuring the right prospects get the right message at the right time.",
  },
  {
    question: "Do I need to provide my own tools?",
    answer:
      "No worries — we can set up all the tools needed for your outreach system, including the ones you already have. Our team ensures everything is integrated seamlessly with your CRM and email stack, so you get a fully operational, AI-powered system without any hassle.",
  },
  {
    question: "How long does the setup take?",
    answer:
      "Typical setup is 10–15 business days, depending on workflow complexity and integrations. We provide milestone updates throughout so you’re always informed and can review progress.",
  },
  {
    question: "What if I need updates or changes later?",
    answer:
      "Our monthly maintenance plan handles prompt adjustments, campaign optimization, and system tuning to keep your outreach performing at peak levels.",
  },
  {
    question: "Can I cancel the maintenance plan anytime?",
    answer:
      "Absolutely. The plan is flexible and billed monthly. Cancel anytime without penalties or hidden terms.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Clients typically see 4–10x more qualified replies than generic campaigns, higher booked meetings, and faster pipeline growth — all powered by ICP-driven personalization and AI insights.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-28 bg-gradient-to-b from-background to-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about how Reply Craft builds AI-powered, ICP-targeted outreach systems — efficiently, transparently, and with measurable results.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-border bg-card/90 backdrop-blur-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-medium text-card-foreground">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="px-6 pb-6 pt-0 text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Book a free consultation — we’ll review your ICP and show how our AI-powered system can generate booked meetings for your business.
          </p>
          <a
            href="https://calendly.com/kamo97/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
