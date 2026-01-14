import { Code, Cpu, Database, Server, Layout } from "lucide-react";

const skills = [
  { name: "Python", icon: Code, level: 100 },
  { name: "Machine Learning", icon: Cpu, level: 100 },
  { name: "Deep Learning", icon: Cpu, level: 100 },
  { name: "Data Analysis", icon: Database, level: 100 },
  { name: "Web Development", icon: Layout, level: 100 },
  { name: "MLOps & Deployment", icon: Server, level: 100 },
  { name: "AI Research", icon: Cpu, level: 100 },
  { name: "SQL & Databases", icon: Database, level: 100 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            What I{" "}
            <span className="font-serif italic font-normal text-white">
              Excel At
            </span>
          </h2>
          <p className="text-muted-foreground">
            A combination of technical expertise and AI research skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass p-6 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-lg">{skill.name}</div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-primary/10 h-3 rounded-xl overflow-hidden">
                <div
                  className="bg-primary h-3 rounded-xl transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
