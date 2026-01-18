// App.jsx
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Endorsements } from "@/sections/Endorsements";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { CursorGlow } from "@/components/CursorGlow";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Premium cursor glow */}
      <CursorGlow />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Endorsements />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
