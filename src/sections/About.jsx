import { Brain, Lightbulb, GraduationCap, Users } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    description:
      "Over a decade of experience in higher education, teaching and mentoring future engineers.",
  },
  {
    icon: Brain,
    title: "AI Research",
    description:
      "Specialized in Deep Learning, Computer Vision, and NLP with international publications.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Supervised FYPs, advised IEEE WIE chapter, and guided students toward innovation.",
  },
  {
    icon: Lightbulb,
    title: "Training & Development",
    description:
      "Led faculty and student training programs to enhance technical and research skills.",
  },
];

export const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ y: offsetY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/10 rounded-full blur-3xl"
        style={{ y: -offsetY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Empowering minds through{" "}
              <span className="font-serif italic font-normal text-white">
                research & education.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I am <strong>Tayyaba Farhat</strong>, a PhD Scholar in Deep
                Learning with more than 10 years of academic and professional
                experience in computer science and software engineering.
              </p>
              <p>
                Currently serving as a Senior Manager at Superior University, I
                actively contribute to technology incubation, faculty
                development, and research-driven innovation.
              </p>
              <p>
                My teaching and research interests include Artificial
                Intelligence, Database Systems, Data Structures & Algorithms,
                and applied machine learning for real-world problems.
              </p>
            </div>

            <motion.div
              className="glass rounded-2xl p-6 glow-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg font-medium italic text-foreground">
                "I believe education and research together have the power to
                shape intelligent systems — and responsible future leaders."
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                style={{
                  x: (mousePos.x - window.innerWidth / 2) * 0.015,
                  y: (mousePos.y - window.innerHeight / 2) * 0.015,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
