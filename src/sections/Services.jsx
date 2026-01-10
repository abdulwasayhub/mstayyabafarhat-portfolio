import {
  Brain,
  Lightbulb,
  Network,
  GraduationCap,
  Briefcase,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Data Science Consultancy",
    description:
      "Providing expert guidance to organizations, researchers, and startups in designing and implementing AI-driven solutions that solve real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Startup & Innovation Advisory",
    description:
      "Helping early-stage startups with AI strategy, product validation, and scalable system architecture to transform ideas into intelligent products.",
  },
  {
    icon: Network,
    title: "Agentic AI Solutions",
    description:
      "Designing and solving complex problems related to autonomous AI agents, multi-agent systems, reasoning pipelines, and decision-making architectures.",
  },
  {
    icon: Briefcase,
    title: "AI System Architecture",
    description:
      "Designing end-to-end AI architectures including data pipelines, model training workflows, deployment strategies, and scalable ML systems.",
  },
  {
    icon: GraduationCap,
    title: "Education & Mentorship",
    description:
      "Offering academic guidance in Artificial Intelligence, Machine Learning, Deep Learning, research methodology, and project supervision.",
  },
  {
    icon: Palette,
    title: "Design & Intelligent Applications",
    description:
      "Contributing to design-oriented and AI-powered projects including intelligent dashboards, AI interfaces, and human-centered systems.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            What I{" "}
            <span className="font-serif italic font-normal text-white">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Specialized services combining research, innovation, and practical
            AI solutions to support academia, startups, and industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
