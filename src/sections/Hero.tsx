"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE } from "@/data/site";
import Image from "next/image";

export function Hero() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (100 - p) * 0.12 + 0.5;
        if (next >= 99.5) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Hold for 500ms after 100%
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 animate-fade-in"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 -z-[1] grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_20%,transparent_80%)]"
      />

      {/* Loading Screen Phase */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{
              opacity: 0,
              filter: "blur(10px)",
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black"
          >
            {/* Welcome text */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-xl sm:text-3xl font-extrabold text-white text-center tracking-wider uppercase px-4 max-w-2xl"
            >
              Welcome to Sumit&apos;s Portfolio
            </motion.h2>

            {/* Progress Bar */}
            <div className="mt-6 h-px w-40 overflow-hidden bg-white/10 rounded-full">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress Percentage */}
            <span className="mt-3 font-mono text-[10px] text-muted">
              {Math.min(100, Math.round(progress))}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Hero Layout (Once Loaded) */}
      {!isLoading && (
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-24 lg:grid-cols-12 lg:py-0">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left lg:col-span-7"
          >
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-xs text-muted font-accent font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for projects
            </div>

            <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl tracking-tight">
              Building <span className="text-gradient">AI</span> Products, <br />
              & Intelligent <br />
              <span className="text-gradient">Experiences</span>.
            </h1>

            <p className="mt-7 max-w-xl text-balance text-base text-muted sm:text-lg">
              {SITE.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="#projects" variant="primary">
                View Projects
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Contact Me
              </MagneticButton>
              <MagneticButton href="/resume" variant="ghost">
                Resume →
              </MagneticButton>
            </div>

            {/* Terminal / HUD status info */}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
              <span className="text-white font-bold">&gt;_</span>
              <span>sys_status:</span>
              <span className="text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded">active_now</span>
              <span className="text-muted-2">|</span>
              <span>loc:</span>
              <span className="text-white">Pune, India</span>
            </div>
          </motion.div>

          {/* Right Column: Photo (Shared Layout Element) */}
          <div className="flex justify-center lg:col-span-5">
            <motion.div
              layoutId="hero-photo"
              className="group relative z-10 w-full max-w-[440px] aspect-[4/5] sm:max-w-[480px] overflow-hidden rounded-3xl bg-black"
            >
              <Image
                src="/MyPhoto.png"
                alt="Sumit Deore | Software Engineer & Full Stack Developer"
                fill
                priority
                sizes="(max-w-768px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      )}

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
