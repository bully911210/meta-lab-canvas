import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 py-32 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-foreground">
          I don't run ads.
          <br />
          <span className="text-gradient">I engineer Meta revenue systems.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto mb-12 leading-relaxed">
          Built for scale. Optimized for ROI. Engineered with precision.
          <br />
          The difference between campaigns and systems is measurable.
        </p>

        <Button
          onClick={scrollToCTA}
          size="lg"
          className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-glow transition-all duration-300 hover:scale-105"
        >
          Book Audit
        </Button>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { value: "3.2x", label: "Avg ROAS" },
            { value: "$2.4M+", label: "Revenue Generated" },
            { value: "47%", label: "Cost Reduction" },
            { value: "12+", label: "Active Clients" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
