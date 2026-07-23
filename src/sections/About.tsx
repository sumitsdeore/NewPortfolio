"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Compass, Cpu } from "lucide-react";

type StoryStep = {
  phase: string;
  year: string;
  title: string;
  subtitle: string;
  color: string;
  text: React.ReactNode;
  icon: any;
};

const TIMELINE_STEPS: StoryStep[] = [
  {
    phase: "01 / Foundation",
    year: "2023 — 2026",
    title: "MIT WPU Pune",
    subtitle: "Bachelors of Computer Applications",
    color: "#00E5FF",
    icon: Code2,
    text: (
      <>
        My journey started at <strong>MIT World Peace University, Pune</strong>. I was drawn in by the <strong>instant feedback loop of coding</strong>—turning abstract logic into working programs. I spent nights experimenting with <strong>object-oriented patterns</strong>, databases, frontend files, and <strong>compiler concepts</strong> to understand software engineering systems from the ground up.
      </>
    ),
  },
  {
    phase: "02 / Integration",
    year: "2026",
    title: "Web Intern @ Àkanní",
    subtitle: "Translating Design to Logic",
    color: "#FF6C37",
    icon: Compass,
    text: (
      <>
        At <strong>Àkanní</strong>, I put classroom learning into production. I collaborated within <strong>Agile sprint cycles</strong>, pairing closely with designers to translate high-fidelity <strong>Figma specifications</strong> into responsive frontend layouts. Working in a version-controlled team taught me the importance of <strong>git history</strong> and automated validations.
      </>
    ),
  },
  {
    phase: "03 / Intelligence",
    year: "2026 — 2028",
    title: "VIT Vellore & AI",
    subtitle: "Masters in Computer Applications",
    color: "#FF2A54",
    icon: Cpu,
    text: (
      <>
        Currently pursuing MCA at <strong>VIT Vellore</strong>, with a primary focus on <strong>autonomous software</strong>. I build <strong>autonomous developer agents</strong> using the <strong>Google Antigravity SDK</strong>, coordinate pipelines using <strong>LangChain</strong>, automate workflows with <strong>n8n</strong>, and run local code completion assistants to augment dev flows.
      </>
    ),
  },
];

export function About() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow="Story"
        title="My Creative Journey"
        description="A storytelling map of how I evolved from writing standard code blocks to engineering autonomous, AI-driven applications."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        {/* Left Column: Interactive Story Roadmap Diagram (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="font-accent text-[10px] font-semibold tracking-wider uppercase text-white/40 mb-6 pl-2">
            Click roadmap nodes
          </p>

          <div className="relative border-l-2 border-white/10 pl-8 space-y-10">
            {/* Visual connecting line indicator */}
            <div
              className="absolute left-[-2px] top-0 bottom-0 w-[2px] transition-all duration-700"
              style={{
                background: `linear-gradient(to bottom, ${TIMELINE_STEPS[0].color}, ${TIMELINE_STEPS[1].color}, ${TIMELINE_STEPS[2].color})`,
              }}
            />

            {TIMELINE_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={step.phase}
                  onClick={() => setActiveStep(idx)}
                  className="group relative cursor-pointer"
                >
                  {/* Glowing timeline node */}
                  <div
                    className="absolute -left-[43px] top-2 flex h-6 w-6 items-center justify-center rounded-full border bg-black transition-all duration-300"
                    style={{
                      borderColor: isActive ? step.color : "rgba(255, 255, 255, 0.1)",
                      boxShadow: isActive ? `0 0 15px ${step.color}60` : "none",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-transform duration-300"
                      style={{
                        backgroundColor: step.color,
                        transform: isActive ? "scale(1.2)" : "scale(1)",
                      }}
                    />
                  </div>

                  <div
                    className="rounded-2xl border p-4 transition-all duration-300 hover:bg-white/[0.02]"
                    style={{
                      borderColor: isActive ? step.color : "rgba(255, 255, 255, 0.05)",
                      backgroundColor: isActive ? `${step.color}05` : "rgba(255, 255, 255, 0.01)",
                      boxShadow: isActive ? `0 0 20px ${step.color}08` : "none",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03]"
                        style={{ color: step.color }}
                      >
                        <StepIcon size={16} />
                      </div>
                      <div>
                        <span className="font-accent text-[9px] font-semibold tracking-widest uppercase text-muted">
                          {step.phase}
                        </span>
                        <h4 className="font-display text-xs text-white uppercase tracking-wider mt-0.5">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Narrative Story Box (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-8 backdrop-blur-md">
            {/* Top decorative glow */}
            <div
              className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-20 blur-3xl transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${TIMELINE_STEPS[activeStep].color}, transparent 70%)`,
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-accent text-xs font-bold tracking-widest uppercase" style={{ color: TIMELINE_STEPS[activeStep].color }}>
                  {TIMELINE_STEPS[activeStep].year}
                </span>

                <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-white leading-snug">
                  {TIMELINE_STEPS[activeStep].subtitle}
                </h3>

                <div className="mt-6 text-sm leading-relaxed text-muted">
                  {TIMELINE_STEPS[activeStep].text}
                </div>

                {/* Technical diagram log indicators */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-muted">
                  <span>State Node: {activeStep + 1} / 3</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full animate-ping" style={{ backgroundColor: TIMELINE_STEPS[activeStep].color }} />
                    Active Node System
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
