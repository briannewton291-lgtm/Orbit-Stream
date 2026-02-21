import { motion } from "framer-motion";
import { Phone, Package, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import OrbitingParticles from "@/components/OrbitingParticles";

const bundles = [
  { name: "Essential Bundle", internet: "200 Mbps Internet", tv: "75+ TV Channels", price: "74.99", savings: "Save $15/mo", features: ["Free modem", "Cloud DVR", "24/7 support"], best: false },
  { name: "Popular Bundle", internet: "500 Mbps Internet", tv: "150+ TV Channels", price: "109.99", savings: "Save $30/mo", features: ["Free modem + router", "Cloud DVR 200hr", "Streaming apps included", "Free installation"], best: true },
  { name: "Premium Bundle", internet: "1 Gbps Internet", tv: "300+ TV Channels", price: "149.99", savings: "Save $50/mo", features: ["Wi-Fi 6 router", "Unlimited DVR", "HBO & Showtime", "Free installation", "Premium streaming bundle"], best: false },
];

const Bundles = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <OrbitingParticles count={15} />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">Internet + TV Bundles</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Bundle your internet and TV for the biggest savings. One bill, one call, maximum value.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+18883023455" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 302-3455</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Bundle Deals" subtitle="Combine services and save more every month." />
        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((b, i) => (
            <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl border p-6 card-hover ${b.best ? "border-primary glow-teal bg-card" : "border-border bg-card"}`}>
              {b.best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Best Value</div>}
              <Package className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-bold text-foreground">{b.name}</h3>
              <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground"><ArrowRight className="h-3 w-3 text-primary" /> {b.internet}</div>
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground"><ArrowRight className="h-3 w-3 text-accent" /> {b.tv}</div>
              <div className="mb-1 text-2xl font-extrabold text-foreground">${b.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
              <div className="mb-4 text-sm font-semibold text-accent">{b.savings}</div>
              <ul className="mb-6 space-y-2">
                {b.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" /> {f}</li>)}
              </ul>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+18883023455">Get This Bundle</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-cta py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Build Your Custom Bundle</h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Call us to create a personalized bundle that fits your needs and budget perfectly.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+18883023455" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 302-3455</a>
        </Button>
      </div>
    </section>
  </>
);

export default Bundles;
