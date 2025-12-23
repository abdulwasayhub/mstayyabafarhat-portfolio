import { Brain, Lightbulb, GraduationCap, Users } from "lucide-react";

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
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Empowering minds through
              <span className="font-serif italic font-normal text-white">
                {" "}
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

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "I believe education and research together have the power to
                shape intelligent systems — and responsible future leaders."
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
