import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Subtle divider line */}
      <div className="border-t border-border"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                LeadLabs
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-base">
              Meta revenue engineering for businesses that demand measurable results. No fluff. No guesswork.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {["Done-For-You", "Done-With-You", "Strategy Audit", "Team Training"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-6 text-lg">Let's Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:franz@leadlabs.co"
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} LeadLabs. All rights reserved.
          </p>
          <div className="flex gap-8 text-base">
            <a href="#" className="text-muted-foreground hover:text-primary hover:underline transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary hover:underline transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
