"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  mode?: "mount" | "scroll";
};

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  mode = "scroll",
}: Props) {
  const transition = { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const };
  const initial = { opacity: 0, y };
  const target = { opacity: 1, y: 0 };

  if (mode === "mount") {
    return (
      <motion.div
        initial={initial}
        animate={target}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
