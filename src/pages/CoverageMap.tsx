import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";
import OrbitingParticles from "@/components/OrbitingParticles";

const regions = [
  { region: "Northeast", states: ["New York", "New Jersey", "Pennsylvania", "Connecticut", "Massachusetts", "Maine", "Vermont", "New Hampshire", "Rhode Island"], providers: 12 },
  { region: "Southeast", states: ["Florida", "Georgia", "North Carolina", "South Carolina", "Virginia", "Tennessee", "Alabama", "Mississippi", "Louisiana"], providers: 15 },
  { region: "Midwest", states: ["Illinois", "Ohio", "Michigan", "Indiana", "Wisconsin", "Minnesota", "Iowa", "Missouri", "Kansas", "Nebraska"], providers: 11 },
  { region: "Southwest", states: ["Texas", "Arizona", "New Mexico", "Oklahoma", "Nevada"], providers: 14 },
  { region: "West", states: ["California", "Washington", "Oregon", "Colorado", "Utah", "Idaho", "Montana", "Wyoming"], providers: 13 },
];

const CoverageMap = () => {
  const [search, setSearch] = useState("");
  const filtered = search
    ? regions.filter((r) => r.states.some((s) => s.toLowerCase().includes(search.toLowerCase())) || r.region.toLowerCase().includes(search.toLowerCase()))
    : regions;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <OrbitingParticles count={15} />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">Coverage Map</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Check service availability in your area. We cover 48 states with 50+ providers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by state or region..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <motion.div key={r.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-6 card-hover">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">{r.region}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{r.providers} providers</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {r.states.map((s) => (
                    <span key={s} className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 text-primary" /> {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              No results found. Try a different search or call us for assistance.
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-cta py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Can't Find Your Area?</h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">Call us and our team will personally check provider availability at your address.</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+18883023455" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Call (888) 302-3455</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CoverageMap;
