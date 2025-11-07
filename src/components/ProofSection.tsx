import { TrendingUp, DollarSign, Users, Zap } from "lucide-react";

const caseStudies = [
  {
    icon: DollarSign,
    company: "E-Commerce Brand",
    industry: "Fashion",
    metric: "$847K Revenue",
    result: "From $0 to $847K in 6 months",
    improvement: "4.2x ROAS",
  },
  {
    icon: TrendingUp,
    company: "SaaS Platform",
    industry: "B2B Software",
    metric: "312% Growth",
    result: "Lead quality improved 89%",
    improvement: "CAC reduced by 52%",
  },
  {
    icon: Users,
    company: "Education Company",
    industry: "Online Courses",
    metric: "2.3K Students",
    result: "Scaled to 2.3K enrollments/mo",
    improvement: "CPA down to $47",
  },
  {
    icon: Zap,
    company: "Service Business",
    industry: "Home Services",
    metric: "5.8x Scale",
    result: "Ad spend scaled from $8K to $47K/mo",
    improvement: "Maintained 3.1x ROAS",
  },
];

const ProofSection = () => {
  return (
    <section id="proof" className="section-padding bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Results That <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real businesses. Real growth. Engineering beats guesswork every time.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-5 px-5">
          <div className="flex gap-6 min-w-max md:grid md:grid-cols-2 lg:grid-cols-4 md:min-w-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[340px] md:w-auto bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <study.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="mb-2">
                  <div className="text-sm text-muted-foreground">{study.industry}</div>
                  <h3 className="text-xl font-display font-bold text-primary mt-1">
                    {study.company}
                  </h3>
                </div>

                <div className="my-6">
                  <div className="text-3xl font-display font-bold text-gradient mb-2">
                    {study.metric}
                  </div>
                  <div className="text-sm text-foreground">{study.result}</div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-xs font-semibold text-accent">
                      {study.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
