// Endorsements.jsx
import { User } from "lucide-react";
import { motion } from "framer-motion";

const endorsements = [
  {
    name: "Muhammad Ali",
    title:
      "Staff SQA Automation Engineer | Playwright, Selenium, Cypress | CI/CD | API & Performance Testing",
    date: "July 18, 2024",
    context: "Worked with Tayyaba but on different teams",
    quote:
      "I took an Advance Database and Data Science course with Professor Tayyab Farhat at Superior University Lahore in 2016. Her passion for the subject was contagious, and her ability to explain complex topics clearly and engagingly made the learning process enjoyable and effective. I highly recommend Tayyaba.",
  },
  {
    name: "Mian Asad Ali",
    title:
      "CEO @ Appsians | $5M Annual Revenue | Custom Software & SaaS Product Development",
    date: "July 10, 2024",
    context: "Worked with Tayyaba but on different teams",
    quote:
      "I had the privilege of working alongside Miss Tayyaba on several projects. Not only is she extremely skilled in Data Sciences and Machine Learning, but she also has a knack for clear communication and team collaboration. Any company would be lucky to have her!",
  },
];

/* ---------------- MOTION VARIANTS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const Endorsements = () => {
  return (
    <section id="endorsements" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
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
            Recommendations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            What People{" "}
            <span className="font-serif italic font-normal text-white">
              Say
            </span>
          </h2>
          <p className="text-muted-foreground">
            Real testimonials from colleagues, students, and professionals who
            have worked with Tayyaba.
          </p>
        </motion.div>

        {/* ENDORSEMENTS GRID */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {endorsements.map((endorsement, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="glass p-8 rounded-3xl border border-primary/30"
            >
              {/* HEADER */}
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <User className="w-6 h-6 text-primary" />
                </motion.div>

                <div>
                  <div className="font-semibold text-lg">
                    {endorsement.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {endorsement.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {endorsement.date} · {endorsement.context}
                  </div>
                </div>
              </div>

              {/* QUOTE */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                “{endorsement.quote}”
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
