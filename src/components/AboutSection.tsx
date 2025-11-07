import franzPortrait from "@/assets/franz-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              We're a full-service Meta powerhouse built for agility and impact.
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
              <p>
                Fueled by technology and driven by data, we deliver cutting-edge Meta advertising solutions across creative, growth, analytics, and optimization.
              </p>

              <p>
                Our structure is designed for speed, efficiency, and scalability—so you can stay ahead in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background border border-border rounded-xl">
                <div className="text-3xl font-display font-bold text-primary mb-1">8+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background border border-border rounded-xl">
                <div className="text-3xl font-display font-bold text-primary mb-1">$12M+</div>
                <div className="text-xs text-muted-foreground">Ad Spend Managed</div>
              </div>
              <div className="text-center p-4 bg-background border border-border rounded-xl">
                <div className="text-3xl font-display font-bold text-primary mb-1">50+</div>
                <div className="text-xs text-muted-foreground">Brands Scaled</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border">
              <img
                src={franzPortrait}
                alt="Franz Badenhorst"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
