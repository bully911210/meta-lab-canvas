import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setEmail("");
    }
  };

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Ready to engineer your revenue?
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Book a free audit. We'll analyze your current setup, identify bottlenecks, and show you exactly how we'd scale your system.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm h-14 text-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-14 text-lg whitespace-nowrap"
            >
              Book Audit
            </Button>
          </div>
        </form>

        <p className="text-sm text-white/70 mt-6">
          No fluff. No sales pitch. Just data and strategy.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
