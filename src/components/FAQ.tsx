// src/components/FAQ.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What exactly does ReplyCraft do?",
    answer:
      "ReplyCraft builds fully automated, hyper-personalized outreach systems powered by AI. We combine intelligent lead sourcing, custom messaging, and automation to help you generate more qualified conversations — without needing a full-time SDR or copywriter.",
  },
  {
    question: "Who is this for?",
    answer:
      "ReplyCraft works for solopreneurs, small teams, and established companies who want to scale outbound outreach efficiently. Whether you're a founder looking for new clients or a sales team trying to increase reply rates, we tailor the system to your needs.",
  },
  {
    question: "Do I need to provide my own tools?",
    answer:
      "Yes — we set everything up using your own tools like OpenAI, Instantly, and your CRM (HubSpot, Pipedrive, or Salesforce). This ensures you keep full ownership, transparency, and data control at all times. If you want, we can set up these tools on your behalf and hand them off to you on completion of the project",
  },
  {
    question: "How long does the setup take?",
    answer:
      "Our full setup process typically takes between 10–15 business days, depending on the complexity of your workflows and integrations. You’ll be kept in the loop throughout via progress updates and milestone reviews.",
  },
  {
    question: "How do payments work?",
    answer:
      "All payments are securely handled via Upwork — ensuring verified contracts, protected transactions, and clear invoicing. You only pay once milestones are approved, giving both sides complete peace of mind.",
  },
  {
    question: "What if I need changes or updates later?",
    answer:
      "That’s what our monthly maintenance plan is for! We handle prompt adjustments, campaign tuning, and ongoing optimization to keep your outreach performing at its best.",
  },
  {
    question: "Can I cancel the maintenance plan anytime?",
    answer:
      "Absolutely. Our maintenance plans are flexible and billed monthly. You can cancel anytime — no lock-ins or hidden terms.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Most clients see 4–10x more qualified replies compared to generic cold outreach campaigns — depending on your niche, offer, and ICP quality. We focus on precision and personalization, not spam.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-background to-muted">
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
            Everything you need to know about how ReplyCraft helps you build and scale
            automated, personalized outreach — transparently and efficiently.
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
            Book a free consultation — we’ll walk you through the process and show how
            ReplyCraft can fit your workflow.
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
