import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const dfyFeatures = [
  "Complete account setup & structure",
  "Creative production & testing",
  "Daily optimization & monitoring",
  "Weekly strategy calls",
  "Dedicated account manager",
  "Guaranteed response SLA",
];

const dwyFeatures = [
  "System audit & roadmap",
  "Strategy workshops",
  "SOPs & documentation",
  "Team training & enablement",
  "Ongoing advisory access",
  "Performance review sessions",
];

const Services = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Choose Your <span className="text-gradient">Engagement Model</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need full execution or strategic guidance, we have a model designed for your growth stage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* DFY Service */}
          <div className="flex-1 min-w-[320px] max-w-[500px] bg-card border border-border rounded-3xl p-10 transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] shadow-card">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-semibold text-primary">Most Popular</span>
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-4">
              Done-For-You
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hand off your Meta advertising completely. We build, manage, and optimize your entire system while you focus on fulfillment and growth.
            </p>

            <div className="space-y-4 mb-8">
              {dfyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToCTA}
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300"
              size="lg"
            >
              Get Started
            </Button>
          </div>

          {/* DWY Service */}
          <div className="flex-1 min-w-[320px] max-w-[500px] bg-card border border-border rounded-3xl p-10 transition-all duration-300 hover:border-accent/50 hover:scale-[1.02] shadow-card">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm font-semibold text-accent">For Teams</span>
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-4">
              Done-With-You
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Build internal capability with expert guidance. We architect the system, train your team, and provide ongoing strategic support.
            </p>

            <div className="space-y-4 mb-8">
              {dwyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToCTA}
              variant="outline"
              className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold py-6 rounded-xl transition-all duration-300"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
