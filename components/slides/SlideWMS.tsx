"use client";

import { motion } from "framer-motion";
import SlideShell, { fadeUp } from "@/components/SlideShell";
import AnimatedCounter from "@/components/AnimatedCounter";

const TOPICS = [
  {
    icon: "📦",
    name: "Performance Préparation",
    questions: "Cadence colis/heure · top opérateur · répartition horaire",
    status: "✅ Zéro blocage",
    ok: true,
  },
  {
    icon: "🚚",
    name: "Réceptions WMS",
    questions: "Volume par fournisseur · délai réception → rangement",
    status: "✅ Zéro blocage",
    ok: true,
  },
  {
    icon: "🛠️",
    name: "Ajustements WMS",
    questions: "Top articles cassés · emplacements à risque · motifs",
    status: "✅ Zéro blocage",
    ok: true,
  },
  {
    icon: "📋",
    name: "Inventaires WMS",
    questions: "Taux de fiabilité · écarts · articles en manque récurrent",
    status: "✅ Validé (questions tricky)",
    ok: true,
  },
  {
    icon: "🔄",
    name: "Réappros",
    questions: "Périmètre à valider avec Gary",
    status: "⏳ En attente",
    ok: false,
  },
];

export default function SlideWMS() {
  return (
    <SlideShell
      kicker="WMS · Jour 5"
      title={
        <>
          <span className="text-gradient">
            <AnimatedCounter value={5} /> topics WMS
          </span>{" "}
          — de zéro à validé en un jour
        </>
      }
    >
      <motion.div variants={fadeUp} className="grid gap-4 lg:grid-cols-2">
        {TOPICS.map((topic) => (
          <motion.div
            key={topic.name}
            whileHover={{ scale: 1.02 }}
            className={`card card-hover flex items-start gap-4 px-5 py-4 ${
              topic.ok ? "" : "border-amber-400/30"
            }`}
          >
            <span className="text-3xl">{topic.icon}</span>
            <div className="min-w-0">
              <p className="font-bold text-ocean-900">{topic.name}</p>
              <p className="mt-1 text-sm text-ocean-600">{topic.questions}</p>
              <p
                className={`mt-2 text-xs font-semibold ${
                  topic.ok ? "text-emerald-600" : "text-amber-500"
                }`}
              >
                {topic.status}
              </p>
            </div>
          </motion.div>
        ))}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="card card-hover border-gold/30 px-5 py-4"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-gold">
            Pattern commun
          </p>
          <p className="mt-2 font-mono text-sm text-ocean-700">
            view → ai_context → topic → test → correction → merge
          </p>
          <p className="mt-2 text-xs text-ocean-600">
            5 règles WMS factorisées dans le modèle global : qte_abs,
            annee_semaine, dates absolues, fallback temporel, SELECT FROM topic.
          </p>
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
