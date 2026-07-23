"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail, Phone, ExternalLink } from "lucide-react";
import {
  SiGithub,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiApachemaven,
  SiNodedotjs,
  SiPostman,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFirebase,
} from "react-icons/si";
import { FaReact, FaJava, FaLinkedin } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

type SkillItem = {
  name: string;
  icon: any;
  color: string;
};

const SKILL_MAP: Record<string, SkillItem> = {
  "Java": { name: "Java", icon: FaJava, color: "#E76F00" },
  "JavaScript": { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  "SQL": { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
  "HTML": { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  "CSS": { name: "CSS", icon: SiCss, color: "#1572B6" },
  "Spring Boot": { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  "React": { name: "React", icon: FaReact, color: "#61DAFB" },
  "Next.js": { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  "Node.js": { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  "MongoDB": { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  "Firebase": { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  "Git": { name: "Git", icon: SiGit, color: "#F05032" },
  "GitHub": { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  "Maven": { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
  "VS Code": { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  "Postman": { name: "Postman", icon: SiPostman, color: "#FF6C37" },
};

const CONCEPTS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "REST APIs",
  "Static Code Analysis",
  "Software Architecture",
];

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
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resume",
      "item": "https://sumitsdeore.vercel.app/resume",
    },
  ],
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:py-24 font-body relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_20%,transparent_80%)]" />

      <div className="mx-auto max-w-5xl">
        {/* Navigation Action Header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-xs text-muted hover:border-white/20 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white text-black px-5 py-2 text-xs font-semibold hover:bg-white/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>

        {/* Hero Contact Header */}
        <header className="border-b border-white/10 pb-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-accent text-xs font-bold tracking-widest text-[#FFB300] uppercase">
                Interactive CV
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase mt-2 tracking-tight">
                Sumit Deore
              </h1>
              <p className="text-muted text-sm sm:text-base mt-2 font-medium">
                AI Product Engineer & Frontend Developer
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <a
                href="tel:+918459864633"
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-muted hover:border-white/15 hover:text-white transition-all"
              >
                <Phone size={12} className="text-emerald-400" />
                +91 8459864633
              </a>
              <a
                href="mailto:deoresumit09@gmail.com"
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-muted hover:border-white/15 hover:text-white transition-all"
              >
                <Mail size={12} className="text-blue-400" />
                deoresumit09@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/sumitsdeore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-muted hover:border-white/15 hover:text-white transition-all"
              >
                <FaLinkedin size={12} className="text-[#0A66C2]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/sumitsdeore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 text-muted hover:border-white/15 hover:text-white transition-all"
              >
                <SiGithub size={12} className="text-white" />
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Bento Resume Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Experience & Projects (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Experience block */}
            <section className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md">
              <h2 className="font-accent text-sm font-semibold tracking-wider uppercase text-[#FFB300] mb-8 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300]" />
                Work Experience
              </h2>

              <div className="relative border-l border-white/10 pl-6">
                <div className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border border-white bg-black shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                  <span className="font-accent text-[10px] text-muted tracking-widest uppercase">
                    Jan 2026 — Jun 2026
                  </span>
                  <h3 className="mt-2 font-display text-lg text-white uppercase tracking-tight">
                    Web Development Intern
                  </h3>
                  <p className="text-sm text-white/60 font-medium mt-1">Àkanní</p>

                  <ul className="mt-5 space-y-3.5 text-xs text-muted leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      <span>Developed responsive frontend interfaces for the <strong>Kawalthe Konnection client project</strong>, converting Figma designs into pixel-accurate, cross-browser web pages.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      <span>Built reusable, maintainable UI components following <strong>clean coding practices</strong> to support long-term scalability of client-facing applications.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      <span>Collaborated with designers and engineering mentors in an <strong>Agile workflow</strong>, participating in sprint planning, code reviews, and iterative feature delivery.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      <span>Debugged and resolved frontend issues across client applications, improving <strong>UI consistency and interaction reliability</strong>.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                      <span>Managed version control using <strong>Git and GitHub</strong>, maintaining organized branching and commit history across a collaborative development cycle.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects block */}
            <section className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md space-y-10">
              <h2 className="font-accent text-sm font-semibold tracking-wider uppercase text-[#FFB300] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300]" />
                Featured Projects
              </h2>

              {/* Aegis project */}
              <div className="relative border-l border-white/10 pl-6">
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border border-white bg-black" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-white uppercase tracking-tight">
                      Aegis
                    </h3>
                    <p className="text-[10px] text-muted font-accent uppercase tracking-wider mt-0.5">
                      Developer Intelligence Platform
                    </p>
                  </div>
                  <a
                    href="https://github.com/sumitsdeore/AEGIS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1 text-[10px] text-white hover:bg-white/10 transition-all font-mono"
                  >
                    Repository
                    <ExternalLink size={10} />
                  </a>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Java 21", "Spring Boot", "TypeScript", "React Flow", "VS Code API"].map(
                    (t) => {
                      const item = SKILL_MAP[t];
                      return item ? (
                        <span
                          key={t}
                          className="flex items-center gap-1 rounded bg-white/[0.02] border border-white/5 px-2 py-0.5 text-[9px] text-white/70"
                        >
                          <item.icon size={9} style={{ color: item.color }} />
                          {item.name}
                        </span>
                      ) : (
                        <span
                          key={t}
                          className="rounded bg-white/[0.02] border border-white/5 px-2 py-0.5 text-[9px] text-white/50"
                        >
                          {t}
                        </span>
                      );
                    }
                  )}
                </div>

                <ul className="mt-5 space-y-3.5 text-xs text-muted leading-relaxed">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Architected a <strong>VS Code extension</strong> that performs static analysis of Spring Boot codebases to predict the impact of refactoring before code changes are made.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Engineered an AST-based parsing engine using <strong>JavaParser</strong> to extract relationships across Controllers, Services, and Repositories.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Designed a <strong>dependency graph generation system</strong> to model cross-component relationships and identify components affected by changes.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Implemented an interactive dependency visualization interface using <strong>React and React Flow</strong> for exploring project-wide code relationships.</span>
                  </li>
                </ul>
              </div>

              {/* SkillIssue project */}
              <div className="relative border-l border-white/10 pl-6 pt-6">
                <span className="absolute -left-[29px] top-[30px] h-2 w-2 rounded-full border border-white bg-black" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-white uppercase tracking-tight">
                      SkillIssue AI
                    </h3>
                    <p className="text-[10px] text-muted font-accent uppercase tracking-wider mt-0.5">
                      AI-Powered Dev Intelligence Platform
                    </p>
                  </div>
                  <a
                    href="https://github.com/sumitsdeore/Skillissue-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1 text-[10px] text-white hover:bg-white/10 transition-all font-mono"
                  >
                    Repository
                    <ExternalLink size={10} />
                  </a>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Tailwind CSS", "MongoDB"].map((t) => {
                    const item = SKILL_MAP[t];
                    return item ? (
                      <span
                        key={t}
                        className="flex items-center gap-1 rounded bg-white/[0.02] border border-white/5 px-2 py-0.5 text-[9px] text-white/70"
                      >
                        <item.icon size={9} style={{ color: item.color }} />
                        {item.name}
                      </span>
                    ) : (
                      <span
                        key={t}
                        className="rounded bg-white/[0.02] border border-white/5 px-2 py-0.5 text-[9px] text-white/50"
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>

                <ul className="mt-5 space-y-3.5 text-xs text-muted leading-relaxed">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Designed a scalable frontend architecture to support <strong>skill-gap analysis</strong>, resume evaluation, and personalized learning roadmap features.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Built reusable, responsive UI components with <strong>React and Tailwind CSS</strong>, optimized for accessibility.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    <span>Integrated <strong>AI/LLM-powered workflows</strong> through REST APIs to generate personalized career diagnostics and portfolio feedback.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Education & Technical Skills (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education block */}
            <section className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md">
              <h2 className="font-accent text-sm font-semibold tracking-wider uppercase text-[#FFB300] mb-8 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300]" />
                Education
              </h2>

              <div className="relative border-l border-white/10 pl-6 space-y-10">
                {/* Masters */}
                <div className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border border-white bg-black shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                  <span className="font-accent text-[10px] text-muted tracking-widest uppercase">
                    2026 — 2028
                  </span>
                  <h3 className="mt-1.5 font-display text-base text-white uppercase tracking-tight leading-snug">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-xs text-white/60 font-medium mt-0.5">VIT Vellore</p>
                </div>

                {/* Bachelors */}
                <div className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border border-white bg-black" />
                  <span className="font-accent text-[10px] text-muted tracking-widest uppercase">
                    2023 — 2026
                  </span>
                  <h3 className="mt-1.5 font-display text-base text-white uppercase tracking-tight leading-snug">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-xs text-white/60 font-medium mt-0.5">MIT World Peace University</p>
                </div>
              </div>
            </section>

            {/* Technical Skills block */}
            <section className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-md space-y-8">
              <h2 className="font-accent text-sm font-semibold tracking-wider uppercase text-[#FFB300] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB300]" />
                Technical Skills
              </h2>

              {/* Languages */}
              <div>
                <h3 className="font-accent text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"].map((t) => {
                    const item = SKILL_MAP[t];
                    return (
                      <span
                        key={t}
                        className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-muted hover:border-white/15 transition-all duration-300"
                        onMouseEnter={(e) => {
                          if (item) e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                        }}
                      >
                        {item && <item.icon size={11} style={{ color: item.color }} />}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h3 className="font-accent text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"].map(
                    (t) => {
                      const item = SKILL_MAP[t];
                      return (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-muted hover:border-white/15 transition-all duration-300"
                          onMouseEnter={(e) => {
                            if (item) e.currentTarget.style.borderColor = item.color;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                          }}
                        >
                          {item && <item.icon size={11} style={{ color: item.color }} />}
                          <span>{t}</span>
                        </span>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="font-accent text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "Firebase"].map((t) => {
                    const item = SKILL_MAP[t];
                    return (
                      <span
                        key={t}
                        className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-muted hover:border-white/15 transition-all duration-300"
                        onMouseEnter={(e) => {
                          if (item) e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                        }}
                      >
                        {item && <item.icon size={11} style={{ color: item.color }} />}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Developer Tools */}
              <div>
                <h3 className="font-accent text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">
                  Developer Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Maven", "VS Code", "Postman"].map((t) => {
                    const item = SKILL_MAP[t];
                    return (
                      <span
                        key={t}
                        className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-muted hover:border-white/15 transition-all duration-300"
                        onMouseEnter={(e) => {
                          if (item) e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                        }}
                      >
                        {item && <item.icon size={11} style={{ color: item.color }} />}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Concepts */}
              <div>
                <h3 className="font-accent text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">
                  Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CONCEPTS.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-muted hover:border-white/15 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
