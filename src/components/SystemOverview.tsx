import { Code, BarChart3, Target, Zap, Users, TrendingUp } from "lucide-react";

const systems = [
  {
    icon: Code,
    title: "Revenue Architecture",
    description: "Built on data. Optimized for scale. Engineered with precision to turn ad spend into predictable revenue.",
  },
  {
    icon: Target,
    title: "Audience Engineering",
    description: "Precision targeting systems that identify and convert your highest-value customer segments systematically.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Continuous algorithmic improvements. Every campaign instrumented, measured, and enhanced for compound growth.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Infrastructure",
    description: "Real-time dashboards showing what matters. Complete visibility into every dollar spent and earned.",
  },
  {
    icon: Zap,
    title: "Rapid Scaling Protocol",
    description: "Tested methodologies to 10x spend while maintaining or improving efficiency across all channels.",
  },
  {
    icon: Users,
    title: "Creative Testing",
    description: "Systematic creative development and testing frameworks that identify winning messages at scale.",
  },
];

const SystemOverview = () => {
  return (
    <section id="system" className="py-32 lg:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-[1.15]">
            Achieve all your Meta growth goals in one place.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Forget fluffy marketing plans. We create Meta revenue systems that deliver real growth. Our team handles all the technical optimization so you can focus on what you do best — making money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <system.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
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
