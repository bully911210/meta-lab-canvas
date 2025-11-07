import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SystemOverview from "@/components/SystemOverview";
import Services from "@/components/Services";
import ProofSection from "@/components/ProofSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SystemOverview />
        <Services />
        <ProofSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
