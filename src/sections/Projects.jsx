import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const publications = [
  {
    title:
      "Customer Segmentation for Targeted Marketing: A Comparative Analysis of Clustering Techniques",
    issuer: "2023 25th International Multitopic Conference (INMIC), IEEE",
    issued: "Nov 17, 2023",
    skills: [
      "Customer Segmentation",
      "K-Means Clustering",
      "Hierarchical Clustering",
      "CRISP-DM",
      "Data Mining",
      "Targeted Marketing",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10466067",
  },
  {
    title:
      "Facial Image-Based Autism Detection: A Comparative Study of Deep Neural Network Classifiers",
    issuer: "CMC",
    issued: "Aug 15, 2023",
    skills: [
      "Deep Learning",
      "VGG16",
      "MobileNet",
      "Machine Learning",
      "Computer Vision",
      "Autism Detection",
    ],
    link: "https://www.techscience.com/cmc/v78n1/55389",
  },
  {
    title: "Deep Learning for Sarcasm Identification in News Headlines",
    issuer: "Applied Sciences (MDPI)",
    issued: "Apr 16, 2023",
    skills: [
      "Natural Language Processing",
      "Deep Learning",
      "LSTM",
      "Sarcasm Detection",
      "Text Classification",
    ],
    link: "https://www.mdpi.com/2076-3417/13/9/5586",
  },
];

/* ---------------- MOTION VARIANTS ---------------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Projects = () => {
  const fullText = "Research & Publications";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="research" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center mx-auto max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            {typedText}
            <span className="inline-block w-[1px] h-4 bg-secondary-foreground ml-1 animate-pulse" />
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Publications that
            <span className="font-serif italic font-normal text-white">
              {" "}
              highlight expertise.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Selected research work by Miss Tayyaba Farhat showcasing contributions in AI, deep learning, and medical imaging.
          </p>
        </motion.div>

        {/* PUBLICATIONS GRID */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group glass rounded-2xl p-6 border border-primary/30"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{pub.issuer}</p>
              <p className="text-xs text-muted-foreground mb-4">
                Issued: {pub.issued}
              </p>
              <div className="flex flex-wrap gap-2">
                {pub.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW ALL CTA */}
       {/* VIEW ALL CTA */}
<motion.div
  className="text-center mt-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <a
    href="http://researchgate.net/profile/Tayyaba-Farhat"
    target="_blank"
    rel="noopener noreferrer"
  >
    <AnimatedBorderButton>
      View All Publications
      <ArrowUpRight className="w-5 h-5" />
    </AnimatedBorderButton>
  </a>
</motion.div>

      </div>
    </section>
  );
};
