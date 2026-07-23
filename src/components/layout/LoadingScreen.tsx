"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const timeout = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (100 - p) * 0.12 + 0.5;
        if (next >= 99.5) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 350);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--bg)]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl tracking-tight text-white"
          >
            SD<span className="text-blue">.</span>
          </motion.div>

          <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--blue), var(--cyan))",
              }}
            />
          </div>

          <span className="mt-3 font-display text-[11px] text-muted">
            {Math.min(100, Math.round(progress))}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
