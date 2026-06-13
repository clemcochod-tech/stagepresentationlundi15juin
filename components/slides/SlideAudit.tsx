"use client";

import { motion } from "framer-motion";
import SlideShell, { fadeUp } from "@/components/SlideShell";
import AnimatedCounter from "@/components/AnimatedCounter";

const ETAT_MODELE = [
  { perimetre: "Ventes & CA", etat: "Validé par Gary", ok: true },
  { perimetre: "Prévisions & Stocks", etat: "Filtres par défaut natifs (fini les ×152 / ×35)", ok: true },
  { perimetre: "Achats", etat: "Enrichi et validé vs SSAS", ok: true },
  { perimetre: "WMS (4 topics)", etat: "Testés, zéro blocage", ok: true },
  { perimetre: "Réappros", etat: "Périmètre à valider", ok: false },
];

const CORRECTIONS = [
  "Dates en dur → 14 expressions dynamiques (this year, this week)",
  "Sentinelles IBM i 1900-01-01 exclues des calculs de délais",
  "Jointure INNER qui perdait 877 articles silencieusement → corrigée",
  "Mesures non fonctionnelles masquées + jointures interdites documentées",
];

export default function SlideAudit() {
  return (
    <SlideShell
      kicker="Audit · Jours 3–4"
      title={
        <>
          Audit du modèle — <span className="text-gradient">note 7,5/10</span>
        </>
      }
    >
      <motion.div variants={fadeUp} className="grid gap-5 lg:grid-cols-3">
        <div className="card card-hover px-6 py-5 text-center">
          <p className="text-6xl font-extrabold text-gold">
            <AnimatedCounter value={7.5} decimals={1} />
            <span className="text-2xl text-ocean-600">/10</span>
          </p>
          <p className="mt-2 text-sm text-ocean-700">
            Architecture solide, au-dessus de la moyenne
          </p>
        </div>
        <div className="card card-hover px-6 py-5 text-center">
          <p className="text-6xl font-extrabold text-gold-dark">
            <AnimatedCounter value={48} />
          </p>
          <p className="mt-2 text-sm text-ocean-700">
            bugs traités — audit à 11 catégories sur les 8 skills
          </p>
        </div>
        <div className="card card-hover px-6 py-5 text-center">
          <p className="text-6xl font-extrabold text-gold">
            <AnimatedCounter value={13} />
          </p>
          <p className="mt-2 text-sm text-ocean-700">
            topics actifs, 100% documentés
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card overflow-hidden">
          <p className="border-b border-ocean-900/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-ocean-700">
            État du modèle au 12/06
          </p>
          <table className="w-full text-sm">
            <tbody>
              {ETAT_MODELE.map((row) => (
                <tr key={row.perimetre} className="border-b border-ocean-900/10 last:border-0">
                  <td className="px-5 py-2.5 font-semibold text-ocean-900">
                    {row.perimetre}
                  </td>
                  <td className="px-5 py-2.5 text-ocean-600">{row.etat}</td>
                  <td className="px-3 py-2.5 text-right">
                    {row.ok ? "✅" : "⏳"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card px-5 py-4">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-ocean-700">
            Corrections critiques appliquées
          </p>
          <ul className="space-y-2.5 text-sm text-ocean-700">
            {CORRECTIONS.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-gold">▸</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </SlideShell>
  );
}
