import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

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

export const Projects = () => {
  return (
    <section id="research" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Research & Publications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Publications that
            <span className="font-serif italic font-normal text-white">
              {" "}
              highlight expertise.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected research work by Miss Tayyaba Farhat showcasing contributions in AI, deep learning, and medical imaging.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
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
              <p className="text-xs text-muted-foreground mb-4">Issued: {pub.issued}</p>
              <div className="flex flex-wrap gap-2">
                {pub.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Publications
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
