import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sumit Deore | Software Engineer | Full Stack Developer",
  description:
    "Official portfolio of Sumit Deore. Software Engineer specializing in React, Next.js, TypeScript, AI-powered applications, VS Code extensions, and full-stack web development. Explore projects including AEGIS and SkillIssue.",
  alternates: {
    canonical: "https://sumitsdeore.vercel.app",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sumitsdeore.vercel.app",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
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
