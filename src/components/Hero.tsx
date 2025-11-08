import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                LeadLabs – Meta Revenue Engineering
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-[1.1]">
              I don't run ads.
              <br />
              I engineer systems.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Your Meta campaigns aren't crushing it? LeadLabs builds revenue systems that actually get results.
            </p>

            <Button
              onClick={scrollToCTA}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              What We Do Best
            </Button>
          </div>

          {/* Right Animated Loader */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="card">
              <div className="loader">
                <span className="text-teal">We Build</span>
                <div className="words">
                  <span className="word">ADS</span>
                  <span className="word">FUNNELS</span>
                  <span className="word">LEAD GEN SYSTEMS</span>
                  <span className="word">ADS</span>
                </div>
              </div>
            </div>
            <style>{`
              .card {
                --bg-color: hsl(var(--card));
                background-color: var(--bg-color);
                padding: 1.5rem 2.5rem;
                border-radius: 1rem;
                box-shadow: 0 10px 40px hsl(0 0% 0% / 0.1);
                border: 1px solid hsl(var(--border));
              }

              .loader {
                color: hsl(var(--foreground));
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 28px;
                display: flex;
                align-items: center;
                height: 40px;
                gap: 8px;
              }

              .loader .text-teal {
                color: hsl(var(--primary));
              }

              .words {
                overflow: hidden;
                position: relative;
                height: 40px;
              }

              .word {
                display: block;
                height: 100%;
                color: hsl(var(--foreground));
                animation: spin_4991 6s infinite;
              }

              .words::after {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                  var(--bg-color) 10%,
                  transparent 30%,
                  transparent 70%,
                  var(--bg-color) 90%
                );
                z-index: 10;
              }

              @keyframes spin_4991 {
                10% { transform: translateY(-100%); }
                25% { transform: translateY(-100%); }
                35% { transform: translateY(-200%); }
                50% { transform: translateY(-200%); }
                60% { transform: translateY(-300%); }
                75% { transform: translateY(-300%); }
                85% { transform: translateY(-400%); }
                100% { transform: translateY(-400%); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
