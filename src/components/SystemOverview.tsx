import { Gauge, BarChart3, Target, Zap, Brain, Shield } from "lucide-react";

const systems = [
  {
    icon: Brain,
    title: "Revenue Architecture",
    description: "Data-driven frameworks that turn ad spend into predictable revenue engines.",
  },
  {
    icon: Target,
    title: "Audience Engineering",
    description: "Precision targeting systems built on behavioral data and conversion patterns.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Continuous algorithmic improvements that compound growth month over month.",
  },
  {
    icon: BarChart3,
    title: "Analytics Infrastructure",
    description: "Real-time dashboards and KPI tracking for complete visibility and control.",
  },
  {
    icon: Zap,
    title: "Rapid Scaling Protocol",
    description: "Tested methodologies to 10x spend while maintaining or improving efficiency.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Account health monitoring and compliance systems to protect your assets.",
  },
];

const SystemOverview = () => {
  return (
    <section id="system" className="section-padding bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-gradient">LeadLabs System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six core components working in harmony to transform your Meta advertising from guesswork into a precision instrument.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 card-hover shadow-card group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors">
                <system.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                {system.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemOverview;
