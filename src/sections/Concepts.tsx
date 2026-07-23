"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiGithubactions,
  SiLangchain,
  SiDocker,
  SiJira,
  SiFigma,
  SiK6,
} from "react-icons/si";
import {
  BrainCircuit,
  RefreshCw,
  Network,
  Bot,
} from "lucide-react";

type Concept = {
  title: string;
  description: string;
  icon: any;
  color: string;
};

const CONCEPTS: Concept[] = [
  {
    title: "SDLC",
    description: "Managing project phases from planning and system design to implementation and maintenance.",
    icon: RefreshCw,
    color: "#00E5FF",
  },
  {
    title: "CI/CD Pipeline",
    description: "Automating validation, testing, and continuous cloud deployment pipelines for robust release cycles.",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    title: "AI Automation",
    description: "Designing autonomous agent systems and tool integrations to streamline operations.",
    icon: BrainCircuit,
    color: "#10A37F",
  },
  {
    title: "LLM Integration",
    description: "Connecting state-of-the-art LLMs (Gemini, GPT) to backends for structured reasoning.",
    icon: Bot,
    color: "#FFD21E",
  },
  {
    title: "LangChain",
    description: "Orchestrating agent memory, Retrieval-Augmented Generation (RAG) chains, and model routing.",
    icon: SiLangchain,
    color: "#13C67C",
  },
  {
    title: "Containerization",
    description: "Packaging services in Docker containers to build scalable, predictable runtimes.",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    title: "Agile Development",
    description: "Driving project iteration using sprint methodologies, scrum processes, and collaborative tools.",
    icon: SiJira,
    color: "#0052CC",
  },
  {
    title: "UI/UX Design",
    description: "Developing high-fidelity frontend screens mapped precisely to Figma layouts with rich micro-interactions.",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    title: "Load Handling",
    description: "Simulating heavy workload traffic using load scripts to inspect performance bottlenecks.",
    icon: SiK6,
    color: "#7E56C2",
  },
  {
    title: "System Architecture",
    description: "Architecting microservice structures, load balancers, and relational databases for durability.",
    icon: Network,
    color: "#FF9900",
  },
];

export function Concepts() {
  return (
    <section id="concepts" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow="Practices"
        title="Core Engineering Foundations"
        description="The concepts and architectural practices I employ to build performant, modular systems."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {CONCEPTS.map((concept, i) => {
          const Icon = concept.icon;
          return (
            <Reveal key={concept.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-lg backdrop-blur-md transition-colors duration-300"
                style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = concept.color;
                  e.currentTarget.style.boxShadow = `0 0 25px ${concept.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03]"
                    style={{ color: concept.color }}
                  >
                    <Icon size={20} />
                  </div>

                  <h4 className="mt-4 font-accent text-sm font-semibold uppercase tracking-wide text-white">
                    {concept.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-muted group-hover:text-white/80 transition-colors">
                    {concept.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
