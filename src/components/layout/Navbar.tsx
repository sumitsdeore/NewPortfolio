"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { SITE } from "@/data/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-[80] flex justify-center px-4"
    >
      <nav
        className={`glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 transition-shadow ${
          scrolled ? "shadow-[0_8px_40px_-12px_rgba(255,0,127,0.35)]" : ""
        }`}
      >
        <a
          href="#home"
          data-cursor="link"
          className="font-display text-sm font-semibold tracking-tight text-white focus-ring rounded"
        >
          {SITE.name}
          <span className="text-blue">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-cursor="link"
                className="group relative text-sm text-muted transition-colors hover:text-white focus-ring rounded"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blue to-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/resume"
          data-cursor="button"
          className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105 md:block focus-ring"
        >
          Resume
        </Link>

        <button
          aria-label="Toggle menu"
          data-cursor="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden focus-ring rounded"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-20 w-[92%] max-w-4xl rounded-3xl p-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
