import {
  Mail,
  Send,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/Button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tayyaba.farhat31@gmail.com",
    href: "mailto:tayyaba.farhat31@gmail.com",
    newTab: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "tayyaba-farhat",
    href: "https://www.linkedin.com/in/tayyaba-farhat/",
    newTab: true,
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "View Research Profile",
    href: "https://scholar.google.com/citations?hl=en&user=sbJdyucAAAAJ",
    newTab: true,
  },
];

export const Contact = () => {
  const fullText = "Get In Touch";
  const [typedText, setTypedText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  /* Typed Text Effect */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  /* Scroll-based parallax for blobs */
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Cursor magnetic effect */
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) =>
    setMousePos({ x: e.clientX, y: e.clientY });

  /* Form submission */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formBody = new FormData();
      formBody.append("access_key", "616efa12-19db-4af5-a7c9-aa772c86c293");
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);
      formBody.append("subject", "New Contact Form Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formBody,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ y: offsetY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/10 rounded-full blur-3xl"
        style={{ y: -offsetY }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase inline-flex items-center">
            {typedText}
            <span className="inline-block w-[1px] h-4 bg-secondary-foreground ml-1 animate-pulse" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            className="glass p-6 sm:p-8 rounded-3xl border border-primary/30"
            style={{
              x: (mousePos.x - window.innerWidth / 2) * 0.02,
              y: (mousePos.y - window.innerHeight / 2) * 0.02,
            }}
          >
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name..."
                  className="w-full px-4 py-3 rounded-xl border outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl border outline-none resize-none"
                />
              </div>

              <Button
                className="w-full flex items-center justify-center gap-2"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
              </Button>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="glass rounded-3xl p-6 sm:p-8"
              style={{
                x: (mousePos.x - window.innerWidth / 2) * 0.015,
                y: (mousePos.y - window.innerHeight / 2) * 0.015,
              }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.newTab ? "_blank" : "_self"}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-all"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-sm sm:text-base">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="glass rounded-3xl p-6 sm:p-8 border border-primary/30"
              style={{
                x: (mousePos.x - window.innerWidth / 2) * 0.015,
                y: (mousePos.y - window.innerHeight / 2) * 0.015,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
