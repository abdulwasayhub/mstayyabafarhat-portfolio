import {
  Brain,
  Lightbulb,
  Network,
  GraduationCap,
  Briefcase,
  Palette,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/Button";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning Consulting",
    description:
      "Providing strategic guidance on applying artificial intelligence and machine learning to real-world business and research challenges, from problem formulation to solution design.",
  },
  {
    icon: Network,
    title: "Deep Learning & Advanced AI Solutions",
    description:
      "Designing and implementing advanced deep learning models, including neural networks, transformers, and intelligent systems for complex data-driven tasks.",
  },
  {
    icon: Lightbulb,
    title: "Custom AI Product Development",
    description:
      "Building tailored AI-powered products from concept to deployment, ensuring scalability, performance, and alignment with business objectives.",
  },
  {
    icon: GraduationCap,
    title: "AI Research & Innovation Services",
    description:
      "Supporting academic and industrial research through experimental design, model development, evaluation, and publication-oriented AI innovation.",
  },
  {
    icon: Briefcase,
    title: "AI Startup & Product Strategy Consulting",
    description:
      "Advising startups and product teams on AI-driven strategy, MVP development, feasibility analysis, and long-term product scalability.",
  },
  {
    icon: Palette,
    title: "AI-Powered Web & Mobile Solutions",
    description:
      "Developing intelligent web and mobile applications that integrate AI capabilities, delivering data-driven, user-centric digital experiences.",
  },
  {
    icon: Brain,
    title: "Model Deployment, MLOps & AI Integration",
    description:
      "Deploying, monitoring, and maintaining AI models in production environments with robust MLOps pipelines and seamless system integration.",
  },
  {
    icon: GraduationCap,
    title: "Training, Mentorship & AI Enablement",
    description:
      "Providing structured training, mentorship, and skill development programs in AI, machine learning, and deep learning for students and professionals.",
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
            Specialized services combining research, innovation, and practical
            AI solutions to support academia, startups, and industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-300"
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

        {/* Request for Services Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => {
              const contactSection =
                document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="flex items-center gap-2"
          >
            Request for Services <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
