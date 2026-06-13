"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SlideShellProps = {
  kicker: string;
  title: ReactNode;
  children: ReactNode;
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SlideShell({ kicker, title, children }: SlideShellProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-8 py-16 lg:px-12"
    >
      <motion.p variants={fadeUp} className="kicker mb-3">
        {kicker}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mb-8 text-4xl font-extrabold tracking-tight text-ocean-900 lg:text-5xl"
      >
        {title}
      </motion.h2>
      {children}
    </motion.div>
  );
}
