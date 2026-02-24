import { motion } from "framer-motion";
import { Phone, Tag, Clock, Flame, Percent, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import OrbitingParticles from "@/components/OrbitingParticles";

const deals = [
  { title: "Spring Internet Special", desc: "Get 300 Mbps for just $39.99/mo for 12 months. Free installation included.", badge: "Limited Time", icon: Zap, color: "text-primary" },
  { title: "Bundle & Save $50/mo", desc: "Combine internet + TV and save up to $50/month with our exclusive bundle pricing.", badge: "Hot Deal", icon: Flame, color: "text-accent" },
  { title: "Free Premium Streaming", desc: "Sign up for any 500+ Mbps plan and get 6 months of Netflix Premium absolutely free.", badge: "Exclusive", icon: Gift, color: "text-primary" },
  { title: "Refer a Friend Bonus", desc: "Refer a friend and both get a $100 bill credit. No limit on referrals!", badge: "Ongoing", icon: Percent, color: "text-accent" },
  { title: "Student Discount", desc: "College students save 30% on select internet plans. Valid with .edu email.", badge: "Students", icon: Tag, color: "text-primary" },
  { title: "Senior Savings Plan", desc: "Special pricing for customers 65+. Quality internet starting at $29.99/mo.", badge: "Seniors", icon: Clock, color: "text-accent" },
];

const Deals = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <OrbitingParticles count={15} />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">Deals & Promotions</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Don't miss out on exclusive limited-time offers and promotions from top providers.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+18884054616" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call for Details</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Current Offers" subtitle="Take advantage of these exclusive deals before they expire." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 card-hover">
              <div className="mb-3 flex items-center justify-between">
                <d.icon className={`h-8 w-8 ${d.color} animate-float`} style={{ animationDelay: `${i * 0.2}s` }} />
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{d.badge}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{d.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{d.desc}</p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+18884054616">Claim This Deal</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-cta py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Want Personalized Deal Alerts?</h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Call us and we'll notify you when new promotions become available in your area.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+18884054616" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 405-4616</a>
        </Button>
      </div>
    </section>
  </>
);

export default Deals;
