"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.2, 0.7, 0.2, 1] as const;

/** Scroll-triggered fade/slide. Runs once per element. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Line-by-line masked rise for oversized headlines. */
export function RiseLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  onView = true,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  onView?: boolean;
}) {
  const trigger = onView
    ? { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } }
    : { animate: "show" };
  return (
    <motion.span className={`block ${className ?? ""}`} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pt-[0.08em] -mt-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{ hidden: { y: "105%" }, show: { y: "0%" } }}
            transition={{ duration: 0.9, delay: delay + i * 0.09, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
