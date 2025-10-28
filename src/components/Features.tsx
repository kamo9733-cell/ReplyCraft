import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Zap, BarChart3, Users, Mail, Clock, DollarSign, Shield, Database, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "High-Quality Lead Sourcing",
    description: "Extract comprehensive data from LinkedIn, company websites, and public sources to build detailed prospect profiles - not just generic contact lists."
  },
  {
    icon: Mail,
    title: "True Hyper-Personalization",
    description: "Every single email is uniquely crafted using real-time data about each prospect's role, company news, and recent activities - no generic templates."
  },
  {
    icon: Shield,
    title: "Email Warming & Deliverability",
    description: "We warm up your email addresses and maintain high deliverability rates to ensure your personalized emails reach the inbox."
  },
  {
    icon: Clock,
    title: "Massive Time Savings",
    description: "Replaces the need for a full-time SDR, copywriter, and VA - saving you 40+ hours per week on manual outreach tasks."
  },
  {
    icon: DollarSign,
    title: "Revenue Upside",
    description: "Generate 4-10x more qualified responses compared to generic email campaigns, leading to higher conversion rates and revenue growth."
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Smart follow-up sequences that adapt based on prospect behavior, ensuring optimal timing and messaging for maximum engagement."
  },
  {
    icon: Database,
    title: "Seamless CRM Integration",
    description: "Directly sync all leads, activities, and campaign data with your existing CRM tools like HubSpot, Salesforce, or Pipedrive — no manual data entry required."
  },
  {
    icon: LayoutDashboard,
    title: "Custom Performance Dashboards",
    description: "Get real-time dashboards tracking open rates, reply rates, meetings booked, and ROI — so you always know what's working and where to optimize."
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
            We don't just source leads and build generic campaigns - every email is highly personalized and targeted for maximum results
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
