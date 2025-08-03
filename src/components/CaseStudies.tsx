import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Mail, Clock } from "lucide-react";

const caseStudies = [
  {
    company: "SaaS Startup",
    industry: "Technology",
    challenge: "Struggling to get responses from enterprise prospects",
    before: {
      responseRate: "0.8%",
      timeSpent: "45 hours/week",
      teamSize: "2 SDRs + 1 Manager"
    },
    after: {
      responseRate: "8.2%",
      timeSpent: "5 hours/week",
      teamSize: "Fully automated"
    },
    results: [
      "10x increase in response rates",
      "Saved $180K annually on sales team costs",
      "Generated 400% more qualified leads"
    ]
  },
  {
    company: "Consulting Firm",
    industry: "Professional Services",
    challenge: "Generic outreach wasn't resonating with C-level executives",
    before: {
      responseRate: "1.2%",
      timeSpent: "30 hours/week",
      teamSize: "1 SDR + 1 Copywriter"
    },
    after: {
      responseRate: "12.5%",
      timeSpent: "3 hours/week",
      teamSize: "Fully automated"
    },
    results: [
      "10x increase in response rates",
      "Booked 45 executive meetings in first month",
      "Closed $850K in new business within 90 days"
    ]
  },
  {
    company: "E-commerce Agency",
    industry: "Digital Marketing",
    challenge: "Manual outreach was too time-consuming and ineffective",
    before: {
      responseRate: "1.5%",
      timeSpent: "25 hours/week",
      teamSize: "1 VA + Founder"
    },
    after: {
      responseRate: "9.8%",
      timeSpent: "2 hours/week",
      teamSize: "Fully automated"
    },
    results: [
      "6.5x increase in response rates",
      "Reduced outreach costs by 80%",
      "Scaled to 500+ personalized emails daily"
    ]
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
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-card-foreground">{study.company}</h3>
                    <Badge variant="secondary" className="text-xs">{study.industry}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">{study.challenge}</p>
                </div>
                
                {/* Before/After Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-destructive/10 p-4 rounded-xl border border-destructive/20">
                    <p className="text-xs text-muted-foreground mb-2">BEFORE</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-medium">{study.before.responseRate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-medium">{study.before.timeSpent}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-medium">{study.before.teamSize}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                    <p className="text-xs text-muted-foreground mb-2">AFTER</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{study.after.responseRate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{study.after.timeSpent}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{study.after.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Results */}
                <div>
                  <p className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Key Results
                  </p>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;