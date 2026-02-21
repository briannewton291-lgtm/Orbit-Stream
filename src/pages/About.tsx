import { motion } from "framer-motion";
import { Phone, Heart, Target, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import GradientBlobs from "@/components/GradientBlobs";

const values = [
  { title: "Customer First", desc: "Every recommendation is based on what's best for you, not our bottom line.", icon: Heart },
  { title: "Transparency", desc: "No hidden fees, no surprise charges. What we quote is what you pay.", icon: Shield },
  { title: "Expertise", desc: "Our team stays current on every plan, deal, and promotion in the market.", icon: Award },
  { title: "Community", desc: "We proudly serve communities across 48 states with local market knowledge.", icon: Users },
];

const About = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <GradientBlobs />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">About Orbit Stream</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Founded by Cynthia Chambless, Orbit Stream is your trusted partner in finding the best connectivity solutions.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4 text-3xl font-bold text-gradient-teal">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Orbit Stream was founded by <strong className="text-foreground">Cynthia Chambless</strong> with a simple mission: make it easier for people to find the right internet, TV, and streaming plans without the hassle.
            </p>
            <p className="mb-4 text-muted-foreground">
              After years of watching consumers struggle with confusing pricing, hidden fees, and aggressive sales tactics from providers, Cynthia built Orbit Stream as an independent comparison service that puts customers first.
            </p>
            <p className="text-muted-foreground">
              Today, Orbit Stream helps thousands of customers across 48 states compare plans from 50+ providers — all with a single phone call and zero pressure.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-8 text-center glow-teal">
            <Target className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold text-foreground">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              To empower every household with transparent, honest guidance so they can make informed decisions about their internet and entertainment services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-gradient-section py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do at Orbit Stream." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center card-hover">
              <v.icon className="mx-auto mb-3 h-8 w-8 text-primary animate-float" style={{ animationDelay: `${i * 0.3}s` }} />
              <h4 className="mb-2 font-semibold text-foreground">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Disclosure */}
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="mb-4 text-xl font-bold text-foreground">Independent Dealer Disclosure</h3>
          <p className="text-sm text-muted-foreground">
            Orbit Stream, owned and operated by <strong className="text-foreground">Cynthia Chambless</strong>, is an independent authorized dealer and comparison service. We are not directly affiliated with any single internet, TV, or streaming provider. We partner with multiple providers to offer you unbiased comparisons and the best available deals. Our recommendations are based on your specific needs and preferences, and we are compensated by our provider partners for successful referrals.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-gradient-cta py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Let's Get You Connected</h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Talk to our team and experience the Orbit Stream difference.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="tel:+18883023455" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 302-3455</a>
        </Button>
      </div>
    </section>
  </>
);

export default About;
