import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import OrbitLogo from "./OrbitLogo";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <OrbitLogo className="h-8 w-8" />
            <span className="text-lg font-bold text-gradient-teal">Orbit Stream</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your trusted partner for finding the best internet, TV, and streaming deals in your area.
          </p>
          <a href="tel:+18884054616" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" /> (888) 405-4616
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/internet" className="text-sm text-muted-foreground hover:text-primary transition-colors">Internet</Link>
            <Link to="/tv-streaming" className="text-sm text-muted-foreground hover:text-primary transition-colors">TV & Streaming</Link>
            <Link to="/bundles" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bundles</Link>
            <Link to="/deals" className="text-sm text-muted-foreground hover:text-primary transition-colors">Deals & Promotions</Link>
            <Link to="/coverage" className="text-sm text-muted-foreground hover:text-primary transition-colors">Coverage Map</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="/advertising-disclosure" className="text-sm text-muted-foreground hover:text-primary transition-colors">Advertising Disclosure</Link>
            <Link to="/cookies-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-6 space-y-3 text-center text-sm text-muted-foreground">
        <p className="text-xs leading-relaxed max-w-3xl mx-auto">
          Disclaimer: Orbit Stream is an independent authorized dealer and is not directly affiliated with any specific internet, TV, or streaming provider. Prices, plans, and availability may vary by location and are subject to change without notice. Please verify all details directly with the provider before purchasing.
        </p>
        <p>© 2026 Orbit Stream. All rights reserved. Owned by Cynthia Chambless.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
