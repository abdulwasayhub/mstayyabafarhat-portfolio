// Services.jsx
import {
  Brain,
  Lightbulb,
  Network,
  GraduationCap,
  Briefcase,
  Palette,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning Consulting",
    description:
      "Providing strategic guidance on applying artificial intelligence and machine learning to real-world business and research challenges.",
  },
  {
    icon: Network,
    title: "Deep Learning & Advanced AI Solutions",
    description:
      "Designing and implementing advanced deep learning models including neural networks and transformers.",
  },
  {
    icon: Lightbulb,
    title: "Custom AI Product Development",
    description:
      "Building tailored AI-powered products from concept to deployment with scalability in mind.",
  },
  {
    icon: GraduationCap,
    title: "AI Research & Innovation Services",
    description:
      "Supporting academic and industrial research through experimental design and evaluation.",
  },
  {
    icon: Briefcase,
    title: "AI Startup & Product Strategy",
    description:
      "Advising startups on AI-driven strategy, MVP development, and feasibility analysis.",
  },
  {
    icon: Palette,
    title: "AI-Powered Web & Mobile Solutions",
    description:
      "Developing intelligent web and mobile apps with integrated AI capabilities.",
  },
  {
    icon: Brain,
    title: "Model Deployment, MLOps & Integration",
    description:
      "Deploying and maintaining AI models with robust MLOps pipelines.",
  },
  {
    icon: GraduationCap,
    title: "Training, Mentorship & Enablement",
    description:
      "Providing structured training and mentorship programs in AI and ML.",
  },
];

/* ------------------ MOTION VARIANTS ------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            What I{" "}
            <span className="font-serif italic font-normal text-white">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground">
            Specialized AI services combining research, innovation, and
            production-grade engineering.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
              }}
              className="glass p-8 rounded-3xl border border-primary/30 transition-all"
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-6 h-6 text-primary" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* MAGNETIC CTA BUTTON */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2"
            >
              Request for Services <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
