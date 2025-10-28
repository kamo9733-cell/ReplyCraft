import { motion } from "framer-motion";
import { CheckCircle, Zap, Repeat, Settings, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Flexible <span className="text-primary">Pricing</span> That Fits You
          </h1>
          <p className="text-lg text-muted-foreground">
            From solopreneurs to growing teams — get the same powerful outreach automation,
            scaled to match your goals and budget.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid gap-10 lg:grid-cols-3 items-stretch">
          {/* Phase 1 – Build & Launch */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="group flex flex-col justify-between h-full border-border bg-card/90 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Phase 1: Build & Launch
                </h3>
                <p className="text-muted-foreground mb-6">
                  We design, automate, and deploy your AI-powered outreach
                  system from end to end.
                </p>
                <ul className="text-left text-muted-foreground space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Strategy & ICP Definition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    AI Prompt & Messaging Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Automation Workflow Build
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Deliverability Optimization
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-4xl font-bold mb-2 text-primary">
                    $1,000–$3,000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    One-time setup (10–15 business days)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phase 2 – Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="group flex flex-col justify-between h-full border-border bg-card/90 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-center mb-6">
                  <Repeat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Phase 2: Maintenance
                </h3>
                <p className="text-muted-foreground mb-6">
                  Keep your outreach engine running smoothly and adapting to
                  performance trends.
                </p>
                <ul className="text-left text-muted-foreground space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Deliverability Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Prompt & Campaign Updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Monthly Optimization Review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Priority Support & Insights
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-4xl font-bold mb-2 text-primary">
                    $250–$400
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Per month (cancel anytime)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="group flex flex-col justify-between h-full border-border bg-card/90 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Add-Ons & Enhancements
                </h3>
                <p className="text-muted-foreground mb-6">
                  Scale your automation stack with optional add-ons designed for
                  deeper integration and visibility.
                </p>
                <ul className="text-left text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    CRM Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Reporting Dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Custom Data Enrichment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Copy Optimization Workshop
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Transparency Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="bg-card/70 border border-border rounded-2xl p-8">
            <BarChart3 className="w-6 h-6 text-primary mx-auto mb-4" />
            <p className="text-base text-muted-foreground">
              You keep full ownership of all accounts and tools. We’ll guide you
              through setup using your own OpenAI, Instantly, and CRM
              subscriptions — ensuring transparency and full control of your
              data.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Automate Your Outreach?
          </h3>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg"
          >
            <a
              href="https://calendly.com/kamo97/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Consultation
            </a>
          </Button>
        </motion.div>

        {/* Payment & Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="bg-card/70 border border-border rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-3 text-card-foreground">
              Secure & Transparent Payments
            </h4>
            <p className="text-base text-muted-foreground">
              All payments are processed safely through{" "}
              <span className="font-medium text-primary">Upwork</span> — giving both
              sides full protection, verified contracts, and clear invoicing.
              <br />
              This ensures a smooth, secure collaboration from start to finish.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
