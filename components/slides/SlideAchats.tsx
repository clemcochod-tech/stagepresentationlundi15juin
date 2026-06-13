"use client";

import { motion } from "framer-motion";
import SlideShell, { fadeUp } from "@/components/SlideShell";
import AnimatedCounter from "@/components/AnimatedCounter";

const CORRECTIONS = [
  {
    title: "Étapes de commande décodées",
    detail: "Codes paddés 'PC ' → \"Prix calculés\" — lisible par l'agent",
  },
  {
    title: "Taux de change corrigé",
    detail: "vl_lgru renommé « Taux de Change » (EUR = 119 XPF pour 1 unité)",
  },
  {
    title: "sample_values fiabilisés",
    detail: "Les anciens exemples de st_etap étaient complètement faux",
  },
  {
    title: "Nouvelles mesures validées",
    detail: "valeur_engagee_xpf, valeur_consommee (qte × PMP), valeur_achats",
  },
];

export default function SlideAchats() {
  return (
    <SlideShell
      kicker="Achats & Stocks · Jour 5"
      title={
        <>
          Topic Achats — <span className="text-gradient">corrigé, enrichi, validé</span>
        </>
      }
    >
      <motion.div variants={fadeUp} className="grid gap-5 lg:grid-cols-3">
        <div className="card card-hover px-6 py-5 text-center">
          <p className="text-6xl font-extrabold text-gold">
            <AnimatedCounter value={373} />
          </p>
          <p className="mt-2 font-semibold text-ocean-900">commandes actives</p>
          <p className="mt-1 text-xs text-ocean-600">
            nb_commandes_en_cours recâblé — retournait toujours 0
          </p>
        </div>
        <div className="card card-hover px-6 py-5 text-center">
          <p className="text-6xl font-extrabold text-gold-dark">
            <AnimatedCounter value={4} decimals={0} />
            <span className="text-3xl font-bold text-ocean-700"> Mds XPF</span>
          </p>
          <p className="mt-2 font-semibold text-ocean-900">d&apos;achats 2025</p>
          <p className="mt-1 text-xs text-emerald-600">
            4,115 Mds validés vs Excel SSAS — écart 0,001% ✅
          </p>
        </div>
        <div className="card card-hover px-6 py-5 text-center">
          <p className="text-6xl font-extrabold text-gold">
            <AnimatedCounter value={921} />
          </p>
          <p className="mt-2 font-semibold text-ocean-900">articles en stock</p>
          <p className="mt-1 text-xs text-ocean-600">
            Tile réparée en SQL — retournait 1 avant correction
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 grid gap-3 lg:grid-cols-2">
        {CORRECTIONS.map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ scale: 1.02 }}
            className="card card-hover px-5 py-4"
          >
            <p className="font-bold text-ocean-900">{c.title}</p>
            <p className="mt-1 text-sm text-ocean-600">{c.detail}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="mt-6 text-sm text-ocean-600">
        + 3 tiles cassées du dashboard Vue Achats &amp; Stocks diagnostiquées en
        SQL : articles en stock (921), stock par entrepôt (PUNARUU 1,79 Md),
        délais fournisseurs (MALTEUROP 341 j).
      </motion.p>
    </SlideShell>
  );
}
