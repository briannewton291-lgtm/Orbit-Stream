import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallNowPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("orbit-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("orbit-popup-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-2xl glow-teal">
        <button onClick={dismiss} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Phone className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">Ready to Save on Your Plan?</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Call our experts now for personalized deals on internet, TV, and streaming bundles.
        </p>
        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+18883023455" className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" /> Call (888) 302-3455
          </a>
        </Button>
        <button onClick={dismiss} className="mt-3 text-xs text-muted-foreground hover:text-foreground">
          No thanks, maybe later
        </button>
      </div>
    </div>
  );
};

export default CallNowPopup;
