"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiGoogle,
  SiCursor,
  SiClaude,
  SiCline,
  SiWarp,
  SiOllama,
  SiOpenrouter,
  SiGooglecloud,
  SiN8N,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Bot } from "lucide-react";

type ToolData = {
  name: string;
  icon: any;
  color: string;
  command: string;
  description: string;
  output: string[];
};

const TOOLS: ToolData[] = [
  {
    name: "Google Antigravity",
    icon: SiGoogle,
    color: "#4285F4",
    command: "agy run agent.py --orchestrate",
    description: "Designing, building, and executing autonomous multi-agent developer workflows with the Google Antigravity SDK.",
    output: [
      "[AGY] Initializing agent environment...",
      "[AGY] Loading codebase workspace context...",
      "[AGY] Executing code re-write checks...",
      "[AGY] Re-compilation check passed. Status: ACTIVE."
    ],
  },
  {
    name: "OpenAI Codex",
    icon: TbBrandOpenai,
    color: "#10A37F",
    command: "openai api codex.complete --model davinci-codex",
    description: "Writing complex algorithmic blocks, code translations, and testing frameworks powered by OpenAI Codex models.",
    output: [
      "[Codex] Model loaded successfully: davinci-codex",
      "[Codex] Context tokens: 2,048 / Max tokens: 4,096",
      "[Codex] Running logic synthesis...",
      "[Codex] Output generated. 0 compilation warnings."
    ],
  },
  {
    name: "Cursor",
    icon: SiCursor,
    color: "#55F7A6",
    command: "cursor --install-extension code-intelligence",
    description: "Drafting, refactoring, and navigating deep logic paths with local IDE chat integrations.",
    output: [
      "Installing extension 'code-intelligence'...",
      "Extension successfully installed and enabled globally.",
      "Workspace analysis completed. Index: 4,812 declarations."
    ],
  },
  {
    name: "Claude Code",
    icon: SiClaude,
    color: "#D97756",
    command: "claude-code verify-changes --strict",
    description: "Refactoring application design patterns and code structures using high-performance Claude reasoning models.",
    output: [
      "[Claude] Verifying diff blocks in src/app/...",
      "[Claude] Inspecting file dependencies...",
      "[Claude] Security audit check passed.",
      "[Claude] Refactor verified. Output conforms to guidelines."
    ],
  },
  {
    name: "Cline",
    icon: SiCline,
    color: "#FF5D0A",
    command: "cline run-task 'analyze dependencies'",
    description: "Running sandboxed terminal tasks and automated environment operations for local debugging.",
    output: [
      "[Cline] Target sandbox initialized: Node 20.x environment",
      "[Cline] Executing terminal commands...",
      "[Cline] Output captured. Task completed successfully."
    ],
  },
  {
    name: "Warp",
    icon: SiWarp,
    color: "#00C2FF",
    command: "warp-cli connect --session-id=SD-PORTFOLIO",
    description: "Speeding up development CLI flows using Warp's GPU-accelerated terminal workflows.",
    output: [
      "Connecting to Warp Dev Space...",
      "Session linked successfully. ID: SD-PORTFOLIO",
      "Loaded 8 custom command blocks."
    ],
  },
  {
    name: "Ollama",
    icon: SiOllama,
    color: "#FFFFFF",
    command: "ollama run deepseek-coder:6.7b",
    description: "Running deep coding helper models locally on a GPU-accelerated environment for absolute privacy.",
    output: [
      "pulling manifest...",
      "loading model deepseek-coder:6.7b into memory...",
      "running on Apple Metal GPU...",
      ">>> Ready for prompt."
    ],
  },
  {
    name: "OpenRouter",
    icon: SiOpenrouter,
    color: "#7B2CBF",
    command: "openrouter-cli fetch --models='anthropic/claude-3-sonnet'",
    description: "Routing prompts through a single aggregated API endpoint to explore and compare model responses.",
    output: [
      "[OpenRouter] Authenticating API tokens...",
      "[OpenRouter] Active endpoint: Sonnet-v3.5",
      "[OpenRouter] Fetch successful. Response latency: 145ms"
    ],
  },
  {
    name: "ManusAI",
    icon: Bot,
    color: "#FF2A54",
    command: "manus run-agent --target='automate report generation'",
    description: "Deploying multi-step autonomous AI agents to build, verify, and document data aggregation tasks.",
    output: [
      "[Manus] Running target agent: ReportAutomator",
      "[Manus] Navigating browser source pages...",
      "[Manus] Data scraping completed successfully.",
      "[Manus] PDF report generated. Output path: ./reports/"
    ],
  },
  {
    name: "Google Flow",
    icon: SiGooglecloud,
    color: "#4285F4",
    command: "gcloud flows deploy sd-portfolio-workflows",
    description: "Deploying and managing data routing, AI validation loops, and integration steps on Google Cloud platforms.",
    output: [
      "Deploying workflow 'sd-portfolio-workflows' to region asia-south1...",
      "Setting IAM trigger permissions...",
      "Deployment completed successfully. Revision: 2."
    ],
  },
  {
    name: "N8N",
    icon: SiN8N,
    color: "#FF6C37",
    command: "n8n start --port=5678",
    description: "Orchestrating visual workflow automations, webhooks, database insertions, and messaging notifications.",
    output: [
      "Initializing n8n server...",
      "n8n ready on port 5678.",
      "Database schema verified. Active flows: 14."
    ],
  },
];

export function Tools() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeTool = TOOLS[selectedIndex];
  const IconComponent = activeTool.icon;

  return (
    <section id="tools" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow="Tools"
        title="Developer Cockpit"
        description="The frameworks, command-line interfaces, and execution environments I use daily."
      />

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left Side: Dynamic Dock Grid */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="font-accent text-xs font-semibold tracking-wider uppercase text-white/40 mb-6">
            Click to connect tool
          </p>

          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-4">
            {TOOLS.map((tool, idx) => {
              const ToolIcon = tool.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={tool.name}
                  onClick={() => setSelectedIndex(idx)}
                  className="group relative flex aspect-square flex-col items-center justify-center rounded-2xl border bg-white/[0.02] transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: isSelected ? tool.color : "rgba(255, 255, 255, 0.05)",
                    backgroundColor: isSelected ? `${tool.color}08` : "rgba(255, 255, 255, 0.02)",
                    boxShadow: isSelected ? `0 0 20px ${tool.color}15` : "none",
                  }}
                >
                  <ToolIcon
                    size={22}
                    style={{ color: tool.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Tool Label for screenreaders/tooltips */}
                  <span className="sr-only">{tool.name}</span>

                  {/* Tiny Active Dot Indicator */}
                  {isSelected && (
                    <motion.span
                      layoutId="active-tool-dot"
                      className="absolute bottom-2 h-1 w-1 rounded-full"
                      style={{ backgroundColor: tool.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
            <h4 className="font-accent text-sm font-semibold uppercase tracking-wider text-white">
              {activeTool.name}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {activeTool.description}
            </p>
          </div>
        </div>

        {/* Right Side: Mock Interactive Terminal Workspace */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070709] shadow-2xl">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-[10px] text-muted-2 uppercase tracking-widest">
                zsh — {activeTool.name.toLowerCase().replace(/\s+/g, "-")}
              </span>
              <div className="w-12" /> {/* Spacer to center the title */}
            </div>

            {/* Terminal Console Output */}
            <div className="p-6 font-mono text-xs leading-relaxed text-white">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">sumit@dev-station</span>
                <span className="text-white/60">~</span>
                <span className="text-white font-bold">%</span>
                <span className="text-white font-medium">{activeTool.command}</span>
              </div>

              <div className="mt-4 space-y-2 text-white/50">
                {activeTool.output.map((line, lIdx) => (
                  <p key={lIdx} className="whitespace-pre-wrap">
                    {line}
                  </p>
                ))}
              </div>

              {/* Cursor indicator */}
              <div className="mt-4 flex items-center gap-1 text-[var(--blue)] font-bold">
                <span>&gt;_</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="h-3 w-1.5 bg-white inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
