const clients = [
  "E-Commerce Brand", "SaaS Platform", "Education Co", "Service Business",
  "Tech Startup", "Health & Wellness", "Financial Services", "Real Estate",
];

const ProofSection = () => {
  return (
    <section id="proof" className="py-28 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Your growth, our obsession.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your goals, our data-driven strategy, a team fueled by passion. That's the LeadLabs formula for unstoppable Meta revenue growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { value: "R2.4M+", label: "Revenue Generated" },
            { value: "3.2x", label: "Average ROAS" },
            { value: "47%", label: "Cost Reduction" },
            { value: "12+", label: "Active Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            Why Choose LeadLabs?
          </h3>
          <p className="text-base text-muted-foreground mb-8">Some of our clients</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-card border border-border rounded-xl px-4 text-center"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">And 100+ other companies</p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
