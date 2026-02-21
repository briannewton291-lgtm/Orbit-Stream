import { motion } from "framer-motion";
import { Phone, Wifi, Zap, Globe, Satellite, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import GradientBlobs from "@/components/GradientBlobs";
import OrbitingParticles from "@/components/OrbitingParticles";

const plans = [
  { name: "Basic", speed: "100 Mbps", price: "39.99", features: ["Unlimited data", "Free modem rental", "Email support"], best: false },
  { name: "Standard", speed: "300 Mbps", price: "59.99", features: ["Unlimited data", "Free modem + router", "24/7 phone support", "Free installation"], best: true },
  { name: "Premium", speed: "1 Gbps", price: "79.99", features: ["Unlimited data", "Wi-Fi 6 router included", "Priority support", "Free installation", "Static IP option"], best: false },
  { name: "Ultra", speed: "2 Gbps", price: "109.99", features: ["Unlimited data", "Mesh Wi-Fi system", "Dedicated support line", "Free installation", "Static IP included", "Network monitoring"], best: false },
];

const types = [
  { name: "Fiber Optic", desc: "Fastest speeds with symmetrical upload/download. Ideal for streaming and gaming.", icon: Zap, speed: "Up to 5 Gbps" },
  { name: "Cable", desc: "Widely available with reliable speeds for everyday use and HD streaming.", icon: Wifi, speed: "Up to 1 Gbps" },
  { name: "DSL", desc: "Budget-friendly option using phone lines. Good for basic browsing and email.", icon: Globe, speed: "Up to 100 Mbps" },
  { name: "Satellite", desc: "Available everywhere, even rural areas. Great for basic connectivity.", icon: Satellite, speed: "Up to 150 Mbps" },
];

const Internet = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <OrbitingParticles count={15} />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">High-Speed Internet Plans</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Compare the fastest internet plans from top providers. Find the perfect speed at the right price.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+18883023455" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 302-3455</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Plans */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Internet Plans" subtitle="Choose the speed that fits your lifestyle." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl border p-6 card-hover ${plan.best ? "border-primary glow-teal bg-card" : "border-border bg-card"}`}
            >
              {plan.best && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="mb-1 text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mb-1 text-2xl font-extrabold text-primary">{plan.speed}</div>
              <div className="mb-4 text-sm text-muted-foreground">Starting at <span className="text-foreground font-semibold">${plan.price}</span>/mo</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+18883023455">Get This Plan</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Connection Types */}
    <section className="bg-gradient-section py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Connection Types" subtitle="Understanding your options helps you choose the best fit." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <t.icon className="mb-3 h-8 w-8 text-primary animate-float" style={{ animationDelay: `${i * 0.3}s` }} />
              <h4 className="mb-1 font-semibold text-foreground">{t.name}</h4>
              <p className="mb-2 text-xs font-medium text-primary">{t.speed}</p>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-cta py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Not Sure Which Plan Is Right for You?</h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Our experts will match you with the perfect plan based on your needs and budget.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+18883023455" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 302-3455</a>
        </Button>
      </div>
    </section>
  </>
);

export default Internet;
