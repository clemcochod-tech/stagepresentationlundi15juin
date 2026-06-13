"use client";

import { motion } from "framer-motion";
import SlideShell, { fadeUp } from "@/components/SlideShell";

const COLONNES = [
  {
    titre: "À faire",
    icon: "🎯",
    accent: "border-t-lagoon",
    items: [
      "Porter les tiles validées en SQL dans les dashboards Omni",
      "Topic Suivi Supports WMS (fct_mouvements_supports en dbt)",
      "Topic Traçabilité WMS (fct_tracabilite_distribution)",
    ],
  },
  {
    titre: "En attente de Gary",
    icon: "⏳",
    accent: "border-t-gold",
    items: [
      "Écart CA Brut ~124M : TypeCde F/R/C/N à clarifier",
      "Relance des pipelines WMS (données gelées mars/avril)",
      "Validation architecture + accès tables WMS brutes",
      "Périmètre du topic Réappros",
    ],
  },
  {
    titre: "Prochaines semaines",
    icon: "🗓️",
    accent: "border-t-slate-400",
    items: [
      "Dashboards Pilotage Stocks, Suivi PR, Consos vs Prévisions",
      "Occupation entrepôt (semaine 6 feuille de route)",
      "Image de stock quotidien",
    ],
  },
];

export default function SlideResteAFaire() {
  return (
    <SlideShell
      kicker="Suite"
      title={
        <>
          Ce qui reste — <span className="text-gradient">cap sur la semaine 2</span>
        </>
      }
    >
      <motion.div variants={fadeUp} className="grid gap-5 lg:grid-cols-3">
        {COLONNES.map((col) => (
          <motion.div
            key={col.titre}
            whileHover={{ y: -6 }}
            className={`card card-hover border-t-4 px-5 py-5 ${col.accent}`}
          >
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <span>{col.icon}</span> {col.titre}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {col.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-lagoon">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="card mt-8 border-l-4 border-l-lagoon px-6 py-4"
      >
        <p className="text-sm text-slate-300">
          <span className="font-bold text-lagoon">Leçon de la semaine :</span>{" "}
          l&apos;ai_context est la clé du self-service — un topic bien documenté
          répond du premier coup, un topic mal documenté hallucine. La
          documentation est un livrable au même titre que le code.
        </p>
      </motion.div>
    </SlideShell>
  );
}
