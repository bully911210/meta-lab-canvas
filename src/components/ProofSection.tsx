const clients = [
  "E-Commerce Brand", "SaaS Platform", "Education Co", "Service Business",
  "Tech Startup", "Health & Wellness", "Financial Services", "Real Estate",
];

const ProofSection = () => {
  return (
    <section id="proof" className="py-32 lg:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-[1.15]">
            Your growth, our obsession.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your goals, our data-driven strategy, a team fueled by passion. That's the LeadLabs formula for unstoppable Meta revenue growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { value: "R2.4M+", label: "Revenue Generated" },
            { value: "3.2x", label: "Average ROAS" },
            { value: "47%", label: "Cost Reduction" },
            { value: "12+", label: "Active Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="text-5xl lg:text-6xl font-display font-bold text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-display font-bold text-foreground mb-3">
            Why Choose LeadLabs?
          </h3>
          <p className="text-lg text-muted-foreground mb-12">Some of our clients</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 bg-card border border-border rounded-lg px-4 text-center transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-1"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-base text-muted-foreground">And 100+ other companies</p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
