"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE, EDUCATION } from "@/data/experience";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa6";

type TechBadge = {
  name: string;
  icon: any;
  color: string;
};

const TECH_BADGES: Record<string, TechBadge> = {
  React: { name: "React", icon: FaReact, color: "#61DAFB" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  Figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  Git: { name: "Git", icon: SiGit, color: "#F05032" },
  GitHub: { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  Java: { name: "Java", icon: FaJava, color: "#E76F00" },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
};

const EXP_COLORS = {
  akanni: "#FF6C37",
  vit: "#FF2A54",
  mit: "#00E5FF",
};

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-32">
      <SectionHeading eyebrow="Journey" title="Experience & Education" align="center" />

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Work Experience */}
        <div>
          <h3 className="font-accent text-xs font-semibold tracking-wider uppercase text-white/40 mb-10 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: EXP_COLORS.akanni }} />
            Work History
          </h3>

          <div
            className="relative pl-6 space-y-12"
            style={{
              borderLeft: `2px solid ${EXP_COLORS.akanni}20`,
            }}
          >
            {/* Visual connecting line indicator */}
            <div
              className="absolute left-[-2px] top-0 bottom-0 w-[2px]"
              style={{
                background: `linear-gradient(to bottom, ${EXP_COLORS.akanni}, ${EXP_COLORS.akanni}30)`,
              }}
            />

            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.org} delay={i * 0.1} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-black transition-all duration-300 shadow-[0_0_10px_rgba(255,108,55,0.2)]"
                  style={{ borderColor: EXP_COLORS.akanni }}
                >
                  <span className="h-1 w-1 rounded-full" style={{ backgroundColor: EXP_COLORS.akanni }} />
                </div>

                <div
                  className="rounded-2xl border p-6 transition-all duration-300 hover:bg-white/[0.02]"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = EXP_COLORS.akanni;
                    e.currentTarget.style.boxShadow = `0 0 25px ${EXP_COLORS.akanni}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="font-accent text-[10px] font-bold tracking-widest uppercase" style={{ color: EXP_COLORS.akanni }}>
                    {job.period}
                  </span>
                  <h4 className="mt-2 font-display text-lg text-white uppercase tracking-tight">
                    {job.role}
                  </h4>
                  <p className="text-xs text-white/50 font-medium mt-0.5">{job.org}</p>

                  <ul className="mt-4 space-y-2 text-xs text-muted leading-relaxed">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags inside the card */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Git"].map((t) => {
                      const item = TECH_BADGES[t];
                      return item ? (
                        <span
                          key={t}
                          className="flex items-center gap-1 rounded-full bg-white/[0.02] border border-white/5 px-2.5 py-0.5 text-[9px] text-white/70"
                        >
                          <item.icon size={9} style={{ color: item.color }} />
                          {item.name}
                        </span>
                      ) : (
                        <span
                          key={t}
                          className="rounded-full bg-white/[0.02] border border-white/5 px-2.5 py-0.5 text-[9px] text-white/50"
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-accent text-xs font-semibold tracking-wider uppercase text-white/40 mb-10 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: EXP_COLORS.vit }} />
            Academic Path
          </h3>

          <div
            className="relative pl-6 space-y-12"
            style={{
              borderLeft: `2px solid ${EXP_COLORS.vit}20`,
            }}
          >
            {/* Visual connecting line indicator */}
            <div
              className="absolute left-[-2px] top-0 bottom-0 w-[2px]"
              style={{
                background: `linear-gradient(to bottom, ${EXP_COLORS.vit}, ${EXP_COLORS.mit})`,
              }}
            />

            {EDUCATION.map((edu, i) => {
              const eduColor = i === 0 ? EXP_COLORS.vit : EXP_COLORS.mit;
              const isVit = i === 0;

              return (
                <Reveal key={edu.degree} delay={i * 0.1} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-black transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    style={{ borderColor: eduColor }}
                  >
                    <span className="h-1 w-1 rounded-full" style={{ backgroundColor: eduColor }} />
                  </div>

                  <div
                    className="rounded-2xl border p-6 transition-all duration-300 hover:bg-white/[0.02]"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.05)",
                      backgroundColor: "rgba(255, 255, 255, 0.01)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = eduColor;
                      e.currentTarget.style.boxShadow = `0 0 25px ${eduColor}12`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span className="font-accent text-[10px] font-bold tracking-widest uppercase" style={{ color: eduColor }}>
                      {edu.period}
                    </span>
                    <h4 className="mt-2 font-display text-lg text-white uppercase tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-white/50 font-medium mt-0.5">{edu.school}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted">{edu.details}</p>

                    {/* Skills tags inside the card */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {(isVit ? ["Java", "TypeScript", "PostgreSQL"] : ["Java", "JavaScript", "Git"]).map((t) => {
                        const item = TECH_BADGES[t];
                        return item ? (
                          <span
                            key={t}
                            className="flex items-center gap-1 rounded-full bg-white/[0.02] border border-white/5 px-2.5 py-0.5 text-[9px] text-white/70"
                          >
                            <item.icon size={9} style={{ color: item.color }} />
                            {item.name}
                          </span>
                        ) : (
                          <span
                            key={t}
                            className="rounded-full bg-white/[0.02] border border-white/5 px-2.5 py-0.5 text-[9px] text-white/50"
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
