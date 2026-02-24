import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => (
  <>
    <section className="relative bg-gradient-hero py-20">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-gradient-hero">Contact Us</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Ready to find your perfect plan? We're here to help.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gradient-teal">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <a href="tel:+18884054616" className="text-primary font-semibold hover:underline">(888) 405-4616</a>
                  <p className="text-sm text-muted-foreground">Our preferred method of contact</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Clock className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday – Friday: 8 AM – 10 PM EST</p>
                  <p className="text-sm text-muted-foreground">Saturday – Sunday: 9 AM – 8 PM EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">Service Area</h4>
                  <p className="text-sm text-muted-foreground">We serve customers across 48 US states with 50+ provider partners.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="First Name" className="bg-secondary border-border" />
                <Input placeholder="Last Name" className="bg-secondary border-border" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-secondary border-border" />
              <Input placeholder="Phone Number" type="tel" className="bg-secondary border-border" />
              <Textarea placeholder="How can we help you?" rows={4} className="bg-secondary border-border" />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
            </form>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              For the fastest response, call us at <a href="tel:+18884054616" className="text-primary font-semibold">(888) 405-4616</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
