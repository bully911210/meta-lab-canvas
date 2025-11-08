import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            I don't run ads.
            <br />
            I engineer systems.
          </h1>
          
          {/* Animated Loader - Own Row */}
          <div className="mb-8">
            <div className="card inline-block">
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
                padding: 1rem 2rem;
                border-radius: 1.25rem;
              }

              .loader {
                color: hsl(var(--foreground));
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 28px;
                display: flex;
                align-items: center;
                height: 40px;
                gap: 6px;
                white-space: nowrap;
              }

              .loader .text-teal {
                color: hsl(var(--teal));
              }

              .words {
                overflow: hidden;
                position: relative;
                height: 40px;
                white-space: nowrap;
              }

              .word {
                display: block;
                height: 100%;
                color: hsl(var(--foreground));
                animation: spin_4991 6s infinite;
                white-space: nowrap;
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

          <Button
            onClick={scrollToCTA}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all"
          >
            What we do best
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
