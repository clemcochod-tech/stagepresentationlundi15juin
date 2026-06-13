"use client";

import { motion } from "framer-motion";
import SlideShell, { fadeUp } from "@/components/SlideShell";
import AnimatedCounter from "@/components/AnimatedCounter";

const SKILLS = [
  "Vue Ventes",
  "Top Clients",
  "Analyse Marque",
  "N vs N-1",
  "Vue Achats",
  "Évolution PR",
  "Stock Entrepôts",
  "Consos vs Prévisions",
];

const CHAINE = [
  { label: "CA Brut", formula: "Montant HT + Don + Taxes" },
  { label: "CA HD", formula: "Montant HT + Don" },
  { label: "CA Net", formula: "CA Brut + Remises + Casse DLUO" },
];

export default function SlideVentes() {
  return (
    <SlideShell
      kicker="Ventes · Jours 1–2"
      title={
        <>
          Couche sémantique Ventes —{" "}
          <span className="text-gradient">complète et validée</span>
        </>
      }
    >
      <motion.div variants={fadeUp} className="flex flex-wrap items-stretch gap-4">
        {CHAINE.map((step, i) => (
          <div key={step.label} className="flex items-center gap-4">
            <div className="card card-hover px-6 py-4">
              <p className="text-2xl font-extrabold text-gold">{step.label}</p>
              <p className="mt-1 font-mono text-xs text-slate-400">
                {step.formula}
              </p>
            </div>
            {i < CHAINE.length - 1 && (
              <span className="text-2xl text-gold">→</span>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card px-6 py-5">
          <p className="text-5xl font-extrabold text-gold">
            <AnimatedCounter value={8} />
            <span className="ml-2 text-xl font-semibold text-slate-300">
              skills Omni créés
            </span>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-light"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card border-emerald-400/30 px-6 py-5">
          <p className="text-5xl font-extrabold text-emerald-400">
            <AnimatedCounter value={0.001} decimals={3} />
            <span className="text-2xl">%</span>
            <span className="ml-3 text-3xl">✅</span>
          </p>
          <p className="mt-2 text-sm text-slate-300">
            d&apos;écart vs Excel SSAS sur{" "}
            <span className="font-bold text-white">4 Mds XPF</span> d&apos;achats
            2025 — la donnée Omni est fiable.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            + 11 mesures opérationnelles : ca_brut, ca_net, ca_hd, colis_livr,
            taux_remise, panier_moyen, ticket_moyen…
          </p>
        </div>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-6 text-sm text-slate-400">
        Topic <span className="font-semibold text-slate-200">Prévisions Ventes</span>{" "}
        créé depuis zéro, avec mesures YTD dynamiques et règle anti-fanout
        documentée.
      </motion.p>
    </SlideShell>
  );
}
