"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [variant, setVariant] = useState<"default" | "link" | "button">(
    "default"
  );
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  const glowX = useSpring(x, { damping: 40, stiffness: 120, mass: 0.6 });
  const glowY = useSpring(y, { damping: 40, stiffness: 120, mass: 0.6 });

  const raf = useRef<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setHidden(false);
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest("button, [data-cursor='button']")) {
        setVariant("button");
      } else if (target.closest("a, [data-cursor='link']")) {
        setVariant("link");
      } else {
        setVariant("default");
      }
    };

    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  const sizes = { default: 10, link: 44, button: 64 };

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      {/* trailing glow */}
      <motion.div
        className="fixed rounded-full"
        style={{
          left: glowX,
          top: glowY,
          width: 220,
          height: 220,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(77,124,255,0.16), rgba(155,107,255,0.08) 45%, transparent 70%)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* core dot */}
      <motion.div
        className="fixed rounded-full mix-blend-difference bg-white"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width: sizes[variant],
          height: sizes[variant],
        }}
        transition={{ type: "spring", damping: 22, stiffness: 300 }}
      />
    </div>
  );
}
