import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Improving Insights with OpenAI's Advanced Data Analysis",
    issuer: "LinkedIn",
    issued: "Aug 2024",
  },
  {
    title: "Learning Graph Neural Networks",
    issuer: "LinkedIn",
    issued: "Aug 2024",
  },
  {
    title: "Analyzing Data with Python",
    issuer: "edX",
    issued: "Jun 2021",
  },
  {
    title: "Python Essentials",
    issuer: "edX",
    issued: "Jun 2021",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications & Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Achievements that{" "}
            <span className="font-serif italic font-normal text-white">
              showcase expertise.
            </span>
          </h2>
        </div>

        {/* Certificates Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                {certificates[activeIdx].title}
              </div>

              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">{certificates[activeIdx].issuer}</span> —{" "}
                {certificates[activeIdx].issued}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
