"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/SafeImage";

export default function SlideQuestions() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <SafeImage
        src="/images/bdt-batiment.jpg"
        alt="Siège de la Brasserie de Tahiti"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/85 via-sky-50/55 to-sky-50/85" />

      <div className="relative z-10 flex flex-col items-center">
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
          className="mt-10 flex flex-col items-center gap-2 text-ocean-700"
        >
          <p className="text-lg font-semibold text-ocean-900">Clément Cochod</p>
          <p>Stagiaire Data — BDT Data Hub</p>
          <a
            href="mailto:clemcochod@gmail.com"
            className="mt-2 text-gold transition-colors hover:text-gold-dark"
          >
            clemcochod@gmail.com
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-12"
        >
          <SafeImage
            src="/images/gamme-bouteilles.jpg"
            alt="La gamme Brasserie de Tahiti — Tabu, Hinano, Manuia"
            className="h-32 w-auto rounded-2xl bg-white p-2 shadow-glow-gold lg:h-36"
          />
        </motion.div>
      </div>
    </div>
  );
}
