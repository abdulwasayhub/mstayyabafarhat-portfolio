// Skills.jsx
import { Code, Cpu, Database, Server, Layout } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: Code, level: 100 },
  { name: "Machine Learning", icon: Cpu, level: 100 },
  { name: "Deep Learning", icon: Cpu, level: 100 },
  { name: "Data Analysis", icon: Database, level: 100 },
  { name: "Web Development", icon: Layout, level: 100 },
  { name: "MLOps & Deployment", icon: Server, level: 100 },
  { name: "AI Research", icon: Cpu, level: 100 },
  { name: "SQL & Databases", icon: Database, level: 100 },
];

/* ---------------- MOTION VARIANTS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
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
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            What I{" "}
            <span className="font-serif italic font-normal text-white">
              Excel At
            </span>
          </h2>
          <p className="text-muted-foreground">
            A combination of technical expertise and AI research skills.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              className="glass p-6 rounded-3xl border border-primary/30 transition-all"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <div className="font-semibold text-lg">{skill.name}</div>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full bg-primary/10 h-3 rounded-xl overflow-hidden">
                <motion.div
                  className="bg-primary h-3 rounded-xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>

              <div className="text-xs text-muted-foreground mt-1">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
