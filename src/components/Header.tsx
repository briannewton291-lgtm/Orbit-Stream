import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrbitLogo from "./OrbitLogo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Internet", path: "/internet" },
  { label: "TV & Streaming", path: "/tv-streaming" },
  { label: "Bundles", path: "/bundles" },
  { label: "Deals", path: "/deals" },
  { label: "Coverage", path: "/coverage" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <OrbitLogo className="h-9 w-9" />
          <span className="text-xl font-bold text-gradient-teal">Orbit Stream</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+18883023455" className="flex items-center gap-1.5 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" />
            (888) 302-3455
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+18883023455">Call Now</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary ${
                  location.pathname === link.path ? "text-primary bg-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border/50 pt-3">
              <a href="tel:+18883023455" className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Phone className="h-4 w-4" /> (888) 302-3455
              </a>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+18883023455">Call Now</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
