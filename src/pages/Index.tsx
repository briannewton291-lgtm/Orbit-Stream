import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Wifi, Tv, Package, Clock, Headphones, DollarSign, ShieldCheck, Star, ChevronRight, MapPin, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OrbitingParticles from "@/components/OrbitingParticles";
import GradientBlobs from "@/components/GradientBlobs";
import SectionHeading from "@/components/SectionHeading";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const stats = [
  { label: "Provider Partners", value: 50, suffix: "+", icon: Users },
  { label: "Customers Helped", value: 25000, suffix: "+", icon: Award },
  { label: "States Covered", value: 48, suffix: "", icon: MapPin },
  { label: "Customer Rating", value: 4.9, suffix: "/5", icon: Star, isDecimal: true },
];

const services = [
  { title: "High-Speed Internet", desc: "Compare fiber, cable, DSL, and satellite plans from top providers in your area.", icon: Wifi, path: "/internet" },
  { title: "TV & Streaming", desc: "Find the perfect TV or streaming package with your favorite channels and shows.", icon: Tv, path: "/tv-streaming" },
  { title: "Bundle & Save", desc: "Combine internet and TV for maximum savings with exclusive bundle deals.", icon: Package, path: "/bundles" },
];

const promises = [
  { title: "Quick Turnaround", desc: "Get connected within 24-48 hours of your order.", icon: Clock },
  { title: "7-Day Support", desc: "Our experts are available every day of the week.", icon: Headphones },
  { title: "Competitive Rates", desc: "We find you the best prices from top providers.", icon: DollarSign },
  { title: "Zero Pressure", desc: "No sales pressure — just honest recommendations.", icon: ShieldCheck },
];

const features = [
  "Compare 50+ providers side by side",
  "Exclusive online-only deals",
  "Free installation on select plans",
  "No hidden fees or contracts",
  "Expert recommendations tailored to you",
  "Satisfaction guaranteed",
];

const steps = [
  { num: "01", title: "Tell Us Your Area", desc: "Enter your zip code or city to check availability." },
  { num: "02", title: "Compare Plans", desc: "Browse internet, TV, and bundle options from top providers." },
  { num: "03", title: "Talk to an Expert", desc: "Call us for personalized recommendations and exclusive deals." },
  { num: "04", title: "Get Connected", desc: "We handle the setup so you can start streaming right away." },
];

const testimonials = [
  { name: "Marcus T.", location: "Dallas, TX", text: "Orbit Stream found me a deal I couldn't find anywhere else. Saved $40/month on my internet!", rating: 5 },
  { name: "Sarah L.", location: "Phoenix, AZ", text: "The team was incredibly helpful. They matched me with the perfect streaming bundle for my family.", rating: 5 },
  { name: "James R.", location: "Chicago, IL", text: "Quick, easy, no pressure. I was connected within 24 hours. Highly recommend Orbit Stream!", rating: 5 },
];

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Dallas", "San Antonio", "San Diego", "Denver", "Atlanta", "Miami", "Seattle"];

const faqs = [
  { q: "How does Orbit Stream work?", a: "Orbit Stream compares internet, TV, and streaming plans from 50+ providers in your area. Simply call us or enter your zip code, and we'll match you with the best deals available." },
  { q: "Is there a cost to use Orbit Stream?", a: "No! Our comparison and recommendation service is completely free. We're compensated by our provider partners, so there's never a charge to you." },
  { q: "Which providers do you work with?", a: "We partner with major providers including AT&T, Xfinity, Spectrum, Verizon, T-Mobile, and many more regional and local providers across 48 states." },
  { q: "How quickly can I get connected?", a: "Most installations happen within 24-48 hours, depending on your provider and location. Some plans offer same-day activation." },
  { q: "Do I have to sign a contract?", a: "Many of our partner plans are contract-free. We'll help you find no-contract options if that's your preference." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-banner.mp4"
        />
        <div className="absolute inset-0 bg-background/70" />
        <OrbitingParticles count={25} />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              <span className="text-gradient-hero">Find the Best</span>{" "}
              <span className="text-gradient-teal">Internet & Streaming</span>{" "}
              <span className="text-gradient-hero">Deals</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Compare plans from 50+ providers. Get personalized recommendations and exclusive deals — all with one simple call.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
                <a href="tel:+18884054616" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-base px-8">
                <a href="tel:+18884054616">Check Availability</a>
              </Button>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">
              <Phone className="inline h-4 w-4 mr-1" />
              (888) 405-4616
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-secondary/30 py-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.isDecimal ? 49 : stat.value);
            return (
              <div key={stat.label} ref={ref} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.isDecimal ? (count / 10).toFixed(1) : count.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="Everything you need to get connected, all in one place." />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <a href={s.path} className="group block rounded-xl border border-border bg-card p-8 card-hover">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <s.icon className="h-7 w-7 animate-float" style={{ animationDelay: `${i * 0.5}s` }} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="flex items-center text-sm font-medium text-primary">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Promise" subtitle="We're committed to making your experience simple and rewarding." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center card-hover"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <p.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-1 font-semibold text-foreground">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative overflow-hidden py-20">
        <GradientBlobs />
        <div className="container relative z-10 mx-auto px-4">
          <SectionHeading title="Why Choose Orbit Stream" subtitle="The smarter way to find your perfect plan." />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card/50 p-4"
              >
                <Zap className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="How It Works" subtitle="Getting connected is as simple as 1-2-3-4." />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mb-3 text-3xl font-black text-primary/20">{s.num}</div>
                <h4 className="mb-2 font-semibold text-foreground">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Our Customers Say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 card-hover"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground italic">"{t.text}"</p>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Service Areas" subtitle="We help customers find the best plans across major US cities." />
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-4">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-cta py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Find Your Perfect Plan?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            Call our experts today and start saving on internet, TV, and streaming.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10">
            <a href="tel:+18884054616" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call (888) 405-4616
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
