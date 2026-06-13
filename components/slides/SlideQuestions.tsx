"use client";

import { motion } from "framer-motion";

export default function SlideQuestions() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="kicker mb-6"
      >
        Māuruuru
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-6xl font-extrabold tracking-tight lg:text-7xl"
      >
        <span className="text-gradient">Questions ?</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-12 flex flex-col items-center gap-2 text-slate-400"
      >
        <p className="text-lg font-semibold text-slate-200">Clément Cochod</p>
        <p>Stagiaire Data — BDT Data Hub</p>
        <a
          href="mailto:clemcochod@gmail.com"
          className="mt-2 text-lagoon transition-colors hover:text-lagoon-light"
        >
          clemcochod@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
