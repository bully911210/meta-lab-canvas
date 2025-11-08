const AboutSection = () => {
  return (
    <section id="about" className="py-32 lg:py-44 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-[1.15]">
              We're a full-service Meta powerhouse built for agility and impact.
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-xl mb-10">
              <p>
                Fueled by technology and driven by data, we deliver cutting-edge Meta advertising solutions across creative, growth, analytics, and optimization.
              </p>

              <p>
                Our structure is designed for speed, efficiency, and scalability—so you can stay ahead in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background border border-border rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-primary mb-2">8+</div>
                <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-background border border-border rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-primary mb-2">R12M+</div>
                <div className="text-sm font-medium text-muted-foreground">Ad Spend Managed</div>
              </div>
              <div className="text-center p-6 bg-background border border-border rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
                <div className="text-sm font-medium text-muted-foreground">Brands Scaled</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card border-2 border-border shadow-xl">
              <img
                src="https://i.ibb.co/1JYvx2cK/a-professional-studio-portrait-captures-k-OLMADF2-Q-GWIDHXUubq2-Q-Fq-Oui-Hd-UTS6-Ktybxh59-R-Q-1.png"
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
