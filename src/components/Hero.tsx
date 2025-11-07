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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-primary bg-teal-light/30 px-3 py-1.5 rounded-full">
                LeadLabs – Meta Revenue Engineering
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              I don't run ads.
              <br />
              I engineer systems.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your Meta campaigns aren't crushing it? LeadLabs builds revenue systems that actually get results.
            </p>

            <Button
              onClick={scrollToCTA}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all"
            >
              What we do best
            </Button>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Mockup Cards */}
              <div className="absolute top-0 right-0 w-80 bg-white rounded-2xl shadow-md p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                <div className="h-10 bg-primary rounded-lg w-24"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-72 bg-teal-light/20 rounded-2xl p-6 border border-primary/20">
                <div className="text-xs font-medium text-primary mb-2">Monthly Sales</div>
                <div className="text-3xl font-bold text-foreground mb-1">$4,550.00</div>
                <div className="text-sm text-primary mb-4">+14%</div>
                
                <div className="space-y-2">
                  {[250, 189, 150, 128, 98].map((value, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{5-i}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{width: `${(value/250)*100}%`}}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Ad Mockup */}
              <div className="absolute top-20 right-20 w-64 bg-white rounded-xl shadow-sm p-4 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-green-500"></div>
                  <div className="flex-1 h-2 bg-muted rounded"></div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="h-2 bg-muted rounded"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-6 bg-primary/10 rounded"></div>
                  <div className="flex-1 h-6 bg-primary/10 rounded"></div>
                </div>
              </div>

              {/* Instagram Mockup */}
              <div className="absolute bottom-32 right-32 w-48 bg-white rounded-xl shadow-sm p-3 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  <div className="h-2 bg-muted rounded w-20"></div>
                </div>
                <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-foreground"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-foreground"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
