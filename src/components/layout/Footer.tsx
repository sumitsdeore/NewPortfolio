"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-1 font-display text-sm text-white">
          {SITE.name}
          <span className="text-cyan">.</span>
        </div>

        <div className="flex items-center gap-5 text-muted">
          <a href={SITE.socials.github} data-cursor="link" aria-label="GitHub" className="hover:text-white focus-ring rounded">
            <FaGithub size={18} />
          </a>
          <a href={SITE.socials.linkedin} data-cursor="link" aria-label="LinkedIn" className="hover:text-white focus-ring rounded">
            <FaLinkedin size={18} />
          </a>
          <a href={SITE.socials.twitter} data-cursor="link" aria-label="Twitter" className="hover:text-white focus-ring rounded">
            <FaXTwitter size={18} />
          </a>
          <a href={`mailto:${SITE.email}`} data-cursor="link" className="text-xs hover:text-white focus-ring rounded">
            {SITE.email}
          </a>
        </div>

        <a
          href="#home"
          data-cursor="button"
          aria-label="Back to top"
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 focus-ring"
        >
          <ArrowUp size={16} />
        </a>
      </div>

      <p className="mt-8 text-center text-xs text-muted-2">
        © {new Date().getFullYear()} {SITE.name}. Built with Next.js, React Three Fiber & a lot of coffee. (And yes, this portfolio is not copied, it's an original copy! 😉)
      </p>
    </footer>
  );
}
