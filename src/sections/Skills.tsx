"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss,
  SiFramer,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiApachemaven,
  SiGoogle,
  SiLangchain,
  SiN8N,
  SiClaude,
  SiCline,
  SiOllama,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiWarp,
  SiVercel,
  SiJira,
} from "react-icons/si";
import { FaReact, FaJava, FaAws } from "react-icons/fa6";
import { TbBrandOpenai, TbBrandVscode } from "react-icons/tb";

type SkillItem = {
  name: string;
  icon: any;
  color: string;
};

type SkillGroup = {
  category: string;
  description: string;
  glowColor: string;
  items: SkillItem[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Developing responsive client-side interfaces and complex web architectures.",
    glowColor: "#00E5FF",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Framer Motion", icon: SiFramer, color: "#E10098" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    description: "Architecting secure database architectures and robust back-end APIs.",
    glowColor: "#6DB33F",
    items: [
      { name: "Java 21", icon: FaJava, color: "#E76F00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
    ],
  },
  {
    category: "AI & Automation",
    description: "Orchestrating agent workflows, memory structures, and model completions.",
    glowColor: "#FFB300",
    items: [
      { name: "Google Antigravity", icon: SiGoogle, color: "#4285F4" },
      { name: "LangChain", icon: SiLangchain, color: "#13C67C" },
      { name: "n8n", icon: SiN8N, color: "#FF6C37" },
      { name: "OpenAI Codex", icon: TbBrandOpenai, color: "#10A37F" },
      { name: "Claude Code", icon: SiClaude, color: "#D97756" },
      { name: "Cline", icon: SiCline, color: "#FF5D0A" },
      { name: "Ollama", icon: SiOllama, color: "#FFFFFF" },
    ],
  },
  {
    category: "Tools & Cloud",
    description: "Managing deployments, version history, task boards, and shell terminals.",
    glowColor: "#FF2A54",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
      { name: "Warp", icon: SiWarp, color: "#00C2FF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for shipping real products."
        description="Frontend, backend, and AI — the layers I work across to take an idea from architecture to a working interface."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md transition-colors hover:border-white/10"
            >
              {/* Radial glow aura */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle, ${group.glowColor}, transparent 70%)`,
                }}
              />

              <div>
                <span className="font-mono text-xs text-muted-2">{`0${i + 1}`}</span>
                <h3 className="mt-2 font-display text-xl uppercase tracking-tight text-white">
                  {group.category}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {group.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const SkillIcon = item.icon;
                    return (
                      <li
                        key={item.name}
                        className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-muted transition-all duration-300 hover:text-white"
                        style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = item.color;
                          e.currentTarget.style.backgroundColor = `${item.color}08`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
                        }}
                      >
                        <SkillIcon size={13} style={{ color: item.color }} />
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
