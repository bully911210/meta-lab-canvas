import franzPortrait from "@/assets/franz-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 min-w-[350px]">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Built by an engineer,
              <br />
              <span className="text-gradient">not a marketer.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Franz Badenhorst, and I don't believe in fluffy marketing promises or
                vanity metrics. I believe in systems, data, and repeatable processes that
                compound results over time.
              </p>

              <p>
                After scaling Meta campaigns from startup budgets to seven-figure monthly
                ad spends, I've learned that success isn't about creative genius or lucky
                breaks—it's about engineering frameworks that turn advertising into a
                predictable revenue channel.
              </p>

              <p>
                LeadLabs was built on a simple principle: if you can't measure it, you
                can't improve it. Every campaign is instrumented. Every decision is
                data-driven. Every dollar is accountable.
              </p>

              <p className="text-foreground font-semibold">
                This isn't marketing. It's revenue engineering.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex-1 min-w-[140px] bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-gradient">8+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="flex-1 min-w-[140px] bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-gradient">$12M+</div>
                <div className="text-sm text-muted-foreground mt-1">Ad Spend Managed</div>
              </div>
              <div className="flex-1 min-w-[140px] bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-display font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Brands Scaled</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 min-w-[350px] text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
              <img
                src={franzPortrait}
                alt="Franz Badenhorst - Meta Revenue Engineer"
                className="relative w-full max-w-[500px] rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
