import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Zap, BarChart3, Users, Mail } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Lead Intelligence",
    description: "Extract comprehensive data from LinkedIn, company websites, and public sources to build detailed prospect profiles."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-powered lead scoring and segmentation to identify the highest-value prospects for your campaigns."
  },
  {
    icon: Mail,
    title: "Hyper-Personalization",
    description: "Craft unique, contextual emails using real-time data about each prospect's role, company, and recent activities."
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Intelligent follow-up sequences that adapt based on prospect behavior and engagement patterns."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track open rates, response rates, and conversion metrics with detailed campaign performance insights."
  },
  {
    icon: Users,
    title: "Scale & Growth",
    description: "Handle thousands of personalized outreach campaigns simultaneously while maintaining quality and relevance."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our <span className="text-primary">Email Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your outreach strategy with AI-powered personalization that delivers results
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