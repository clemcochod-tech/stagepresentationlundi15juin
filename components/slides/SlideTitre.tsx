"use client";

import { motion } from "framer-motion";
import OceanBackground from "@/components/OceanBackground";
import SafeImage from "@/components/SafeImage";

export default function SlideTitre() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <SafeImage
        src="/images/bdt-batiment.jpg"
        alt="Siège de la Brasserie de Tahiti"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/40 to-ocean-950/80" />
      <OceanBackground />

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        className="absolute bottom-0 right-10 z-10 hidden h-[70%] items-end xl:flex"
      >
        <SafeImage
          src="/images/hinano.png"
          alt="Bouteille Hinano Tahiti"
          className="h-full w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SafeImage
            src="/images/logo-bdt.png"
            alt="Logo Brasserie de Tahiti"
            className="h-24 w-auto rounded-2xl bg-white/95 p-3 shadow-glow"
          />
        </motion.div>
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
          className="mt-4 text-3xl font-bold text-white lg:text-4xl"
        >
          Semaine 1
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 max-w-2xl text-lg text-slate-200"
        >
          La couche sémantique Omni : du langage naturel à la donnée fiable
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-1 text-sm text-slate-300"
        >
          <p>
            <span className="font-semibold text-white">Clément Cochod</span> ·
            Stagiaire Data — Maître de stage : Gary Kapu
          </p>
          <p>Lundi 15 juin 2026 · Jours 1 → 5 (08/06 – 12/06)</p>
        </motion.div>
      </div>
    </div>
  );
}
