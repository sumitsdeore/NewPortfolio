"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  href,
  variant = "primary",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    primary:
      "bg-white text-black hover:shadow-[0_0_30px_-4px_rgba(77,124,255,0.6)]",
    secondary: "glass text-white hover:border-[var(--border-hover)]",
    ghost: "text-white underline-offset-4 hover:underline",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      // @ts-expect-error - polymorphic ref
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor="button"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn(
        "focus-ring inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-shadow duration-300",
        styles[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
