"use client";

import { motion } from "framer-motion";
import SlideShell, { fadeUp } from "@/components/SlideShell";
import Timeline from "@/components/Timeline";
import SafeImage from "@/components/SafeImage";

const STACK = [
  {
    name: "Omni",
    role: "Couche sémantique & agent IA",
    logo: "/images/omni-icon.svg",
  },
  { name: "SQL Server", role: "Entrepôt BDT_DWH" },
  { name: "dbt", role: "Transformations & marts" },
  { name: "SSMS", role: "Diagnostics SQL" },
  { name: "Excel / SSAS", role: "Référence de validation" },
];

export default function SlideContexte() {
  return (
    <SlideShell kicker="Contexte" title="La mission en une phrase">
      <motion.blockquote
        variants={fadeUp}
        className="card border-l-4 border-l-gold px-8 py-6 text-xl font-medium leading-relaxed text-slate-100 lg:text-2xl"
      >
        Construire la couche sémantique d&apos;Omni pour que{" "}
        <span className="text-gold">n&apos;importe quel collaborateur BDT</span>{" "}
        puisse poser une question métier en langage naturel et obtenir une{" "}
        <span className="text-lagoon">réponse fiable</span>, sans passer par un
        analyste.
      </motion.blockquote>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
        {STACK.map((tech) => (
          <div
            key={tech.name}
            className="card card-hover flex items-center gap-2 px-4 py-2"
          >
            {tech.logo && (
              <SafeImage
                src={tech.logo}
                alt={`Logo ${tech.name}`}
                className="h-5 w-5 rounded bg-white/90 object-contain p-0.5"
              />
            )}
            <span className="font-bold text-white">{tech.name}</span>
            <span className="text-xs text-slate-300">{tech.role}</span>
          </div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-10">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
          5 jours — cliquez sur un jour
        </p>
        <Timeline />
      </motion.div>
    </SlideShell>
  );
}
