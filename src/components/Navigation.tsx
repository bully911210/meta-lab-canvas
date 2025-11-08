import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-xl font-display font-bold text-foreground">
            LeadLabs
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("system")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Our work
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Information
          </button>
        </div>

        <Button
          onClick={() => scrollToSection("cta")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 py-2.5 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Work With Us
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
