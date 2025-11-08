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
    <section id="services" className="py-32 lg:py-44 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-[1.15]">
            More than just another ad agency.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Confusing campaigns lose money. We engineer Meta revenue systems that feel effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* DFY Service */}
          <div className="bg-background border-2 border-border rounded-2xl p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Done-For-You
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hand off your Meta advertising completely. We build, manage, and optimize your entire system.
              </p>
            </div>

            <ul className="space-y-5 mb-10">
              {[
                "Complete account setup & structure",
                "Creative production & testing",
                "Daily optimization & monitoring",
                "Weekly strategy calls",
                "Dedicated account manager",
                "Guaranteed response SLA",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={scrollToCTA}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg py-6 text-base transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </Button>
          </div>

          {/* DWY Service */}
          <div className="bg-background border-2 border-border rounded-2xl p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Done-With-You
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Build internal capability with expert guidance. We architect the system, train your team, and provide strategic support.
              </p>
            </div>

            <ul className="space-y-5 mb-10">
              {[
                "System audit & roadmap",
                "Strategy workshops",
                "SOPs & documentation",
                "Team training & enablement",
                "Ongoing advisory access",
                "Performance review sessions",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={scrollToCTA}
              variant="outline"
              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg py-6 text-base transition-all duration-200 shadow-sm hover:shadow-lg"
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
