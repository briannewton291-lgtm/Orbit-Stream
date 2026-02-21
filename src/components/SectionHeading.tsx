import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  gradient?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true, gradient = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    <h2 className={`text-3xl font-bold md:text-4xl ${gradient ? "text-gradient-teal" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
