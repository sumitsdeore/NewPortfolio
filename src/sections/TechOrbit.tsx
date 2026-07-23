"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiApachemaven,
  SiNodedotjs,
  SiFigma,
  SiPostman,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiN8N,
} from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

const RING_1: TechItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const RING_2: TechItem[] = [
  { name: "Java", icon: FaJava, color: "#E76F00" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const RING_3: TechItem[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "n8n", icon: SiN8N, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
];

function Ring({
  items,
  radius,
  duration,
  reverse = false,
}: {
  items: TechItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-white/5"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        animation: `${reverse ? "spin-reverse" : "spin"} ${duration}s linear infinite`,
      }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        const Icon = item.icon;
        return (
          <div
            key={item.name}
            className="absolute left-1/2 top-1/2 flex items-center justify-center"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <div
              className="group/tech relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-115 hover:bg-black/90"
              style={{
                animation: `${reverse ? "spin" : "spin-reverse"} ${duration}s linear infinite`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.boxShadow = `0 0 15px ${item.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Icon
                size={18}
                style={{ color: item.color }}
                className="transition-transform duration-300 group-hover/tech:scale-110"
              />
              
              {/* Tooltip */}
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-black/95 border border-white/10 px-2 py-0.5 text-[9px] text-white opacity-0 transition-opacity group-hover/tech:opacity-100 whitespace-nowrap z-30">
                {item.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TechOrbit() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-32">
      <SectionHeading
        eyebrow="Stack"
        title="Technologies I orbit around daily."
        align="center"
      />

      <div className="relative mx-auto mt-16 hidden h-[560px] w-full max-w-2xl items-center justify-center md:flex">
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes spin-reverse { to { transform: rotate(-360deg); } }
        `}</style>
        <Ring items={RING_3} radius={260} duration={70} reverse />
        <Ring items={RING_2} radius={175} duration={50} />
        <Ring items={RING_1} radius={95} duration={32} reverse />

        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-black/80 backdrop-blur-md shadow-2xl">
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/50">Core</span>
        </div>
      </div>

      {/* mobile fallback */}
      <Reveal className="mt-12 grid grid-cols-4 gap-4 md:hidden">
        {[...RING_1, ...RING_2, ...RING_3].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
            >
              <Icon size={22} style={{ color: item.color }} />
              <span className="mt-2 text-[9px] text-muted text-center font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
