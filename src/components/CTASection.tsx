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
    <section id="cta" className="py-32 lg:py-44 bg-gradient-to-br from-primary via-purple-700 to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-7xl font-display font-bold mb-8 leading-[1.15]">
          Are you ready for better results?
        </h2>
        
        <p className="text-2xl mb-14 opacity-95 leading-relaxed">
          Let's Talk
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm h-14 rounded-lg px-6 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-semibold rounded-lg px-10 h-14 whitespace-nowrap transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book Audit
            </Button>
          </div>
        </form>

        <p className="text-base mt-8 opacity-80">
          No fluff. No sales pitch. Just data and strategy.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
