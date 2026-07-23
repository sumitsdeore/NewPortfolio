import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { TechOrbit } from "@/sections/TechOrbit";
import { Concepts } from "@/sections/Concepts";
import { Tools } from "@/sections/Tools";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { AISection } from "@/sections/AISection";
import { Stats } from "@/sections/Stats";
import { GitHubStats } from "@/sections/GitHubStats";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Concepts />
        <Tools />
        <TechOrbit />
        <Projects />
        <Experience />
        <AISection />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
