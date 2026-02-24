import { motion } from "framer-motion";
import { Phone, Tv, Play, Film, Music, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import OrbitingParticles from "@/components/OrbitingParticles";

const plans = [
  { name: "Basic TV", channels: "75+", price: "44.99", features: ["Local channels", "Sports networks", "News channels", "Cloud DVR"], best: false },
  { name: "Choice TV", channels: "150+", price: "69.99", features: ["All Basic channels", "Premium entertainment", "Movie channels", "Cloud DVR 200hr", "On-demand library"], best: true },
  { name: "Ultimate TV", channels: "300+", price: "99.99", features: ["All Choice channels", "HBO, Showtime, Starz", "Sports packages", "Unlimited DVR", "4K channels", "Multi-screen viewing"], best: false },
];

const streaming = [
  { name: "Stream Starter", price: "14.99", features: ["Netflix Basic", "Peacock Premium", "Discovery+"], icon: Play },
  { name: "Stream Plus", price: "29.99", features: ["Netflix Standard", "Hulu (no ads)", "Disney+", "ESPN+"], icon: Film },
  { name: "Stream Max", price: "49.99", features: ["Netflix Premium", "Hulu Live TV", "Disney+ Bundle", "HBO Max", "Apple TV+", "Paramount+"], icon: Music },
];

const TVStreaming = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <OrbitingParticles count={15} />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">TV & Streaming Plans</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            From live TV to on-demand streaming, find the perfect entertainment package.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+18884054616" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 405-4616</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Cable TV */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Cable TV Plans" subtitle="Live TV with hundreds of channels and DVR recording." />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl border p-6 card-hover ${plan.best ? "border-primary glow-teal bg-card" : "border-border bg-card"}`}>
              {plan.best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Best Value</div>}
              <Tv className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-lg font-bold text-foreground">{plan.name}</h3>
              <div className="mb-1 text-xl font-extrabold text-primary">{plan.channels} Channels</div>
              <div className="mb-4 text-sm text-muted-foreground">Starting at <span className="font-semibold text-foreground">${plan.price}</span>/mo</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-primary shrink-0" /> {f}</li>)}
              </ul>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+18884054616">Get This Plan</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Streaming */}
    <section className="bg-gradient-section py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Streaming Packages" subtitle="All your favorite apps in one simple bundle." />
        <div className="grid gap-6 md:grid-cols-3">
          {streaming.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover">
              <s.icon className="mb-3 h-8 w-8 text-accent animate-float" style={{ animationDelay: `${i * 0.3}s` }} />
              <h3 className="mb-1 text-lg font-bold text-foreground">{s.name}</h3>
              <div className="mb-4 text-sm text-muted-foreground">Starting at <span className="font-semibold text-foreground">${s.price}</span>/mo</div>
              <ul className="mb-6 space-y-2">
                {s.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-accent shrink-0" /> {f}</li>)}
              </ul>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+18884054616">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-cta py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Need Help Choosing?</h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Our experts will recommend the perfect TV and streaming combo for your household.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+18884054616" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 405-4616</a>
        </Button>
      </div>
    </section>
  </>
);

export default TVStreaming;
