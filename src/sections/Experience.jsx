import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const experiences = [
  {
    period: "Sep 2024 — Present",
    role: "Senior Manager",
    company: "Superior University",
    description:
      "Leading incubators and technology incubation initiatives, supervising BSCS students’ FYP projects, and advising IEEE WIE Chapter.",
    technologies: ["Incubation", "AI Research", "Student Supervision", "Leadership"],
    current: true,
  },
  {
    period: "Jan 2020 — Sep 2024",
    role: "Senior Lecturer of Software Engineering",
    company: "Superior University Lahore",
    description:
      "Taught Database Systems, Data Structures & Algorithms, supervised FYP projects, and mentored students; advisor for IEEE WIE chapter.",
    technologies: ["Teaching", "Database Systems", "Algorithms", "Student Mentorship"],
    current: false,
  },
  {
    period: "Nov 2015 — Feb 2020",
    role: "Lecturer of Computer Science",
    company: "Superior University",
    description:
      "Delivered courses in computer science, supported deep learning projects, and contributed to departmental training programs.",
    technologies: ["Teaching", "Deep Learning", "Training Sessions", "Python"],
    current: false,
  },
  {
    period: "Sep 2017 — Sep 2024",
    role: "Head of Training and Development",
    company: "Department of Computer Science & IT, Superior University",
    description:
      "Organized faculty and student training sessions to enhance skill sets and knowledge in modern technologies.",
    technologies: ["Training", "Skill Development", "Coaching", "Workshops"],
    current: false,
  },
];

/* Animation Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Experience = () => {
  /* Parallax background drift */
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Cursor magnetic effect */
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

  return (
    <section
      id="work"
      className="py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Glows */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ y: offsetY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/10 rounded-full blur-3xl"
        style={{ y: -offsetY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of Miss Tayyaba Farhat’s professional growth, highlighting her contributions in education, research, and incubation management.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.period}-${exp.role}`}
                variants={itemVariants}
                className="relative grid md:grid-cols-2 gap-8 cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <motion.div
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-[0_25px_50px_rgba(32,178,166,0.25)] transition-all duration-500"
                    style={{
                      x: (mousePos.x - window.innerWidth / 2) * 0.02,
                      y: (mousePos.y - window.innerHeight / 2) * 0.02,
                    }}
                  >
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={`${exp.role}-${tech}`}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
