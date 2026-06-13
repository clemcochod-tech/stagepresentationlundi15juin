"use client";

import { motion } from "framer-motion";
import OceanBackground from "@/components/OceanBackground";
import LiquidEffectAnimation from "@/components/LiquidEffectAnimation";

export default function SlideTitre() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Fallback hors-ligne sous l'animation liquide (chargée depuis un CDN) */}
      <OceanBackground />
      <LiquidEffectAnimation />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/70 via-sky-50/40 to-sky-50/75" />

      <div className="pointer-events-none relative z-10 flex flex-col items-center px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="kicker mb-6"
        >
          Brasserie de Tahiti · Stage Data Analyst
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-6xl font-extrabold tracking-tight lg:text-8xl"
        >
          <span className="text-gradient">BDT Data Hub</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-4 text-3xl font-bold text-ocean-900 lg:text-4xl"
        >
          Semaine 1
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 max-w-2xl text-lg text-ocean-700"
        >
          La couche sémantique Omni : du langage naturel à la donnée fiable
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-1 text-sm text-ocean-600"
        >
          <p>
            <span className="font-semibold text-ocean-900">Clément Cochod</span> ·
            Stagiaire Data — Maître de stage : Gary Kapu
          </p>
          <p>Lundi 15 juin 2026 · Jours 1 → 5 (08/06 – 12/06)</p>
        </motion.div>
      </div>
    </div>
  );
}
