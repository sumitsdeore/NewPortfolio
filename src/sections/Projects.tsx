"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS, type Project } from "@/data/projects";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      data-cursor="button"
      whileHover="hover"
      className="group relative glass flex h-[440px] w-[85vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-3xl p-8 text-left sm:w-[520px]"
    >
      <motion.div
        variants={{ hover: { scale: 1.06 } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(155deg, rgba(255, 0, 127, 0.35), rgba(12, 9, 21, 0.95) 55%, rgba(0, 246, 255, 0.25))",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--blue), transparent 70%)" }}
      />

      <span className="eyebrow">{project.year}</span>
      <h3 className="mt-3 font-display text-3xl text-white">{project.title}</h3>
      <p className="mt-3 max-w-sm text-sm text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
        View case study
        <motion.span variants={{ hover: { x: 4, y: -4 } }}>
          <ArrowUpRight size={16} />
        </motion.span>
      </div>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 sm:p-10"
      >
        <button
          onClick={onClose}
          data-cursor="button"
          aria-label="Close project details"
          className="absolute right-6 top-6 rounded-full border border-[var(--border)] p-2 text-muted hover:text-white focus-ring"
        >
          <X size={16} />
        </button>

        <span className="eyebrow">{project.year}</span>
        <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-muted">{project.longDescription}</p>

        <div className="mt-8">
          <h4 className="font-display text-sm text-white">Key features</h4>
          <ul className="mt-3 space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="font-display text-sm text-white">Tech stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href={project.links.github ?? "#"}
            data-cursor="button"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white focus-ring"
          >
            <FaGithub size={15} /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects."
          description="A closer look at the systems and products I've architected end to end."
        />
      </div>

      <Reveal className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[max(1.5rem,calc((100vw-72rem)/2))]">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={() => setActive(project)}
          />
        ))}
      </Reveal>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
