import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Linkedin,
} from "lucide-react";
import TayyabaFarhat from "../assets/tf.jpeg";

const skills = [
  "Artificial Intelligence",
  "Deep Learning",
  "Machine Learning",
  "Medical Image Analysis",
  "Convolutional Neural Networks (CNN)",
  "Natural Language Processing",
  "Text Classification",
  "Python",
  "Data Engineering",
  "SQL & Databases",
  "Research & Publications",
  "Startup Mentorship",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Incubation Manager • AI Researcher
            </span>

            {/* Headline with wipe animation */}
            <div className="space-y-4">
              <div className="wipe-container">
                <div className="wipe-overlay" />
                <h1 className="wipe-text text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Advancing <span className="text-primary glow-text">AI</span>
                  <br />
                  through research &
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    real-world impact.
                  </span>
                </h1>
              </div>

              {/* Paragraph with delayed wipe */}
              <div className="wipe-container mt-6">
                <div
                  className="wipe-overlay"
                  style={{ animationDelay: "0.4s" }}
                />
                <p
                  className="wipe-text text-lg text-muted-foreground max-w-lg"
                  style={{ animationDelay: "1.1s" }}
                >
                  Hi, I’m Tayyaba Farhat — a PhD Scholar in Deep Learning and an
                  Incubation Manager with expertise in artificial intelligence,
                  medical image analysis, and academic research. I work at the
                  intersection of research, education, and innovation.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
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
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Connect:
              </span>
              <a
                href="https://www.linkedin.com/in/tayyaba-farhat/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={TayyabaFarhat}
                  alt="Tayyaba Farhat"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      PhD Scholar & AI Researcher
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    10+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Areas of Expertise
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
