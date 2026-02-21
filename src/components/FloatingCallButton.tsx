import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+18883023455"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-110"
    aria-label="Call (888) 302-3455"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default FloatingCallButton;
