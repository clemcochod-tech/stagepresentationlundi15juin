"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Day = {
  label: string;
  title: string;
  detail: string;
};

const DAYS: Day[] = [
  {
    label: "J1",
    title: "Exploration Ventes",
    detail:
      "Découverte du périmètre Ventes dans Omni : tables, mesures, premières modélisations.",
  },
  {
    label: "J2",
    title: "Chaîne CA validée",
    detail:
      "Chaîne de valorisation CA Brut → CA Net validée par Gary. 8 skills Omni créés, topic Prévisions construit de zéro.",
  },
  {
    label: "J3",
    title: "Audit des skills",
    detail:
      "Audit systématique à 11 catégories sur les 8 skills : dates en dur, sentinelles IBM i, fanout.",
  },
  {
    label: "J4",
    title: "48 bugs corrigés",
    detail:
      "Corrections des bugs critiques (×152, ×35, jointures) et création du référentiel temporel global.",
  },
  {
    label: "J5",
    title: "SQL + WMS + Achats",
    detail:
      "Premier accès BDT_DWH : 3 tiles diagnostiquées, 5 topics WMS construits, topic Achats enrichi et validé.",
  },
];

export default function Timeline() {
  const [selected, setSelected] = useState(4);

  return (
    <div>
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-gold/20 via-gold/50 to-gold-light/60" />
        {DAYS.map((day, i) => (
          <button
            key={day.label}
            onClick={() => setSelected(i)}
            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
              selected === i
                ? "scale-110 border-gold bg-gold text-ocean-950 shadow-glow-gold"
                : "border-gold/40 bg-ocean-900 text-gold-light hover:border-gold hover:scale-105"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="card mt-5 px-6 py-4"
        >
          <p className="font-bold text-gold">{DAYS[selected].title}</p>
          <p className="mt-1 text-sm text-slate-300">{DAYS[selected].detail}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
