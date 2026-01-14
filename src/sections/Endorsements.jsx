import { User } from "lucide-react"; // you can replace with real avatars later

const endorsements = [
  {
    name: "Muhammad Ali",
    title: "Staff SQA Automation Engineer | Playwright, Selenium, Cypress | CI/CD | API & Performance Testing | C#, Java, JS, TS",
    date: "July 18, 2024",
    context: "Worked with Tayyaba but on different teams",
    quote: "I took an Advance Database and Data Science course with Professor Tayyab Farhat at Superior University Lahore in 2016. Her passion for the subject was contagious, and her ability to explain complex topics clearly and engagingly made the learning process enjoyable and effective. I highly recommend Tayyaba, and if you ever get a chance to work with her you will know what I mean.",
  },
  {
    name: "Mian Asad Ali",
    title: "CEO @ Appsians | $5M Annual Revenue | Custom Software & SaaS Product Development | Dedicated Dev Teams | For Startups, SMEs & B2B Companies | Open to Tech Partnerships",
    date: "July 10, 2024",
    context: "Worked with Tayyaba but on different teams",
    quote: "I had the privilege of working alongside Miss Tayyaba on several projects. Not only is she extremely skilled in Data Sciences and Machine Learning, but she also has a knack for clear communication and team collaboration. She always brings a positive attitude to the table and has an uncanny ability to stay highly focused and organized. Any company would be lucky to have her!",
  },
];

export const Endorsements = () => {
  return (
    <section id="endorsements" className="py-32 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            Real testimonials from colleagues, students, and professionals who have worked with Tayyaba.
          </p>
        </div>

        {/* Endorsements Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {endorsements.map((endorsement, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">{endorsement.name}</div>
                  <div className="text-sm text-muted-foreground">{endorsement.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{endorsement.date} · {endorsement.context}</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{endorsement.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
