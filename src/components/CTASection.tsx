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
    <section id="cta" className="py-28 lg:py-40 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-6xl font-display font-bold mb-6 leading-tight">
          Are you ready for better results?
        </h2>
        
        <p className="text-xl mb-12 opacity-90 leading-relaxed">
          Let's Talk
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm h-12 rounded-xl px-6"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 font-medium rounded-xl px-8 h-12 whitespace-nowrap transition-all duration-300"
            >
              Book Audit
            </Button>
          </div>
        </form>

        <p className="text-sm mt-6 opacity-75">
          No fluff. No sales pitch. Just data and strategy.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
