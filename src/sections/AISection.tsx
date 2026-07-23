"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, Clock, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

type LogStep = {
  title: string;
  status: string;
  color: string;
  details: string;
};

const SIMULATION_LOGS: LogStep[] = [
  {
    title: "1. Prompt Sanitization",
    status: "Guardrail Pass",
    color: "#00E5FF",
    details: "Scanning prompt input for injection vectors and sanitizing private environment variables.",
  },
  {
    title: "2. Agent Execution",
    status: "LLM Processing",
    color: "#FFB300",
    details: "Orchestrating multi-model reasoning tree to resolve logic specifications safely.",
  },
  {
    title: "3. Output Validation",
    status: "Deterministic Check",
    color: "#6DB33F",
    details: "Parsing code syntaxes via local AST parsers to audit security and verify zero vulnerabilities.",
  },
];

export function AISection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ai" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="grid items-center gap-16 lg:grid-cols-12">
        {/* Left Side: Value Cards */}
        <div className="lg:col-span-7 space-y-8">
          <SectionHeading
            eyebrow="Artificial Intelligence"
            title="Building Secure, Time-Saving AI Agents"
            description="How I leverage large language models to construct automated systems that multiply developer output while strictly maintaining security boundaries."
          />

          <div className="space-y-4">
            {/* Zap Card */}
            <Reveal delay={0.05}>
              <div
                className="group flex gap-4 rounded-2xl border p-5 transition-all duration-300"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00E5FF";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 229, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-accent text-sm font-semibold uppercase tracking-wide text-white">
                    10x Productivity Boost
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    Automating AST code parsing, static analysis, and context search loops. Eliminating repetitive tasks lets developers focus entirely on product architecture and layout.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Clock Card */}
            <Reveal delay={0.1}>
              <div
                className="group flex gap-4 rounded-2xl border p-5 transition-all duration-300"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FF6C37";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 108, 55, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6C37]/10 text-[#FF6C37]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-accent text-sm font-semibold uppercase tracking-wide text-white">
                    Time-Saving Automations
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    Orchestrating background triggers, data pipelines, and regression testing with LangChain and n8n. Routine checks run on trigger, reducing manual testing time by hours weekly.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Shield Card */}
            <Reveal delay={0.15}>
              <div
                className="group flex gap-4 rounded-2xl border p-5 transition-all duration-300"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6DB33F";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(109, 179, 63, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6DB33F]/10 text-[#6DB33F]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-accent text-sm font-semibold uppercase tracking-wide text-white">
                    Strict Security Guardrails
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    Security-first system design. I implement sanitizers to scrub prompt queries, execute evaluations locally via secure models (Ollama), and perform static AST scans on code to prevent security leakage.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Side: Animated Safe Pipeline Dashboard (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070709] p-6 shadow-2xl">
            {/* Top glowing radial aura */}
            <div
              className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-25 blur-3xl transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${SIMULATION_LOGS[activeStep].color}, transparent 70%)`,
              }}
            />

            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                secure-agent-pipeline
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#6DB33F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6DB33F] animate-ping" />
                SYSTEM_SECURE
              </span>
            </div>

            {/* Pipeline Vector Layout */}
            <div className="relative flex justify-center py-6">
              <svg viewBox="0 0 100 240" className="h-48 w-20" aria-hidden>
                {/* Connecting track lines */}
                <line x1="50" y1="20" x2="50" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="220"
                  stroke={`url(#pipeline-grad-${activeStep})`}
                  strokeWidth="2"
                  className="transition-all duration-700"
                />

                <defs>
                  <linearGradient id={`pipeline-grad-${activeStep}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset={`${(activeStep + 1) * 33}%`} stopColor={SIMULATION_LOGS[activeStep].color} />
                    <stop offset="100%" stopColor="#070709" />
                  </linearGradient>
                </defs>

                {/* Animated flowing data pulse */}
                <motion.circle
                  cx="50"
                  cy={activeStep === 0 ? 30 : activeStep === 1 ? 110 : 190}
                  r="5"
                  fill={SIMULATION_LOGS[activeStep].color}
                  filter="drop-shadow(0 0 8px currentColor)"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />

                {/* Step 1 Node */}
                <circle cx="50" cy="30" r="10" fill="#070709" stroke={activeStep === 0 ? SIMULATION_LOGS[0].color : "rgba(255,255,255,0.1)"} strokeWidth="1.5" />
                <circle cx="50" cy="30" r="4" fill={activeStep === 0 ? SIMULATION_LOGS[0].color : "rgba(255,255,255,0.2)"} />

                {/* Step 2 Node */}
                <circle cx="50" cy="110" r="10" fill="#070709" stroke={activeStep === 1 ? SIMULATION_LOGS[1].color : "rgba(255,255,255,0.1)"} strokeWidth="1.5" />
                <circle cx="50" cy="110" r="4" fill={activeStep === 1 ? SIMULATION_LOGS[1].color : "rgba(255,255,255,0.2)"} />

                {/* Step 3 Node */}
                <circle cx="50" cy="190" r="10" fill="#070709" stroke={activeStep === 2 ? SIMULATION_LOGS[2].color : "rgba(255,255,255,0.1)"} strokeWidth="1.5" />
                <circle cx="50" cy="190" r="4" fill={activeStep === 2 ? SIMULATION_LOGS[2].color : "rgba(255,255,255,0.2)"} />
              </svg>

              {/* Float Labels near SVG nodes */}
              <div className="absolute inset-0 flex flex-col justify-between py-5 pl-24 pointer-events-none font-mono text-[8px] text-muted">
                <span style={{ color: activeStep === 0 ? SIMULATION_LOGS[0].color : "" }}>SANITIZER</span>
                <span style={{ color: activeStep === 1 ? SIMULATION_LOGS[1].color : "" }}>REASONING</span>
                <span style={{ color: activeStep === 2 ? SIMULATION_LOGS[2].color : "" }}>VALIDATOR</span>
              </div>
            </div>

            {/* Dynamic Console Text Log */}
            <div className="mt-6 rounded-2xl bg-white/[0.01] border border-white/5 p-4 min-h-[120px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase" style={{ backgroundColor: `${SIMULATION_LOGS[activeStep].color}15`, color: SIMULATION_LOGS[activeStep].color }}>
                      {SIMULATION_LOGS[activeStep].status}
                    </span>
                  </div>
                  <h4 className="mt-3 font-accent text-xs font-semibold text-white uppercase">
                    {SIMULATION_LOGS[activeStep].title}
                  </h4>
                  <p className="mt-2 font-mono text-[10px] text-muted leading-relaxed">
                    {SIMULATION_LOGS[activeStep].details}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Status log indicators */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-muted-2">
                <span>Task Loop ID: AGY-9021</span>
                <span>Interval: 3000ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
