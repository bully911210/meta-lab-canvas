import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            More than just another ad agency.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Confusing campaigns lose money. We engineer Meta revenue systems that feel effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DFY Service */}
          <div className="bg-background border border-border rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                Done-For-You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Hand off your Meta advertising completely. We build, manage, and optimize your entire system.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Complete account setup & structure",
                "Creative production & testing",
                "Daily optimization & monitoring",
                "Weekly strategy calls",
                "Dedicated account manager",
                "Guaranteed response SLA",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={scrollToCTA}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-6"
            >
              Get Started
            </Button>
          </div>

          {/* DWY Service */}
          <div className="bg-background border border-border rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                Done-With-You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Build internal capability with expert guidance. We architect the system, train your team, and provide strategic support.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "System audit & roadmap",
                "Strategy workshops",
                "SOPs & documentation",
                "Team training & enablement",
                "Ongoing advisory access",
                "Performance review sessions",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={scrollToCTA}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-full py-6"
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
