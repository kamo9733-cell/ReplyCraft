import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Zap, BarChart3, Users, Mail, Clock, DollarSign, Shield, Database, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "ICP-Driven Lead Sourcing",
    description: "We identify and target high-fit prospects matching your Ideal Customer Profile from LinkedIn, Crunchbase, AngelList, and other verified sources—no generic lists."
  },
  {
    icon: Mail,
    title: "AI-Powered Hyper-Personalization",
    description: "Every outreach email is uniquely crafted with AI insights about each prospect's role, company news, and triggers—ensuring maximum engagement."
  },
  {
    icon: Shield,
    title: "Email Warming & Deliverability",
    description: "We manage inbox health, warm up email addresses, and maintain high deliverability so your messages reach real prospects consistently."
  },
  {
    icon: Clock,
    title: "Massive Time Savings",
    description: "Replaces the need for a full-time SDR, copywriter, and VA—saving 40+ hours per week on manual outreach tasks."
  },
  {
    icon: DollarSign,
    title: "Revenue Upside",
    description: "Generate more qualified responses and meetings compared to generic campaigns, increasing conversions and predictable pipeline growth."
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automated follow-ups adapt to prospect behavior, optimizing timing and messaging for maximum reply rates."
  },
  {
    icon: Database,
    title: "Seamless CRM Integration",
    description: "Sync leads, campaigns, and activity directly with HubSpot, Salesforce, Pipedrive, and other CRMs—no manual data entry required."
  },
  {
    icon: LayoutDashboard,
    title: "Custom Performance Dashboards",
    description: "Track open rates, replies, meetings booked, and ROI in real-time, with actionable insights for continuous optimization."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How We're <span className="text-primary">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every system is built around your Ideal Customer Profile. Our AI-driven approach combines prospect research, hyper-personalized messaging, and automated workflows to deliver measurable results—no generic campaigns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border hover:border-primary/30"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
