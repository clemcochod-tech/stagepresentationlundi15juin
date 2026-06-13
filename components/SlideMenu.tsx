"use client";

import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderPanel,
} from "@/components/HoverSlider";

type MenuEntry = {
  name: string;
  kicker: string;
  detail: string;
  highlight: string;
};

const ENTRIES: MenuEntry[] = [
  {
    name: "Titre",
    kicker: "BDT Data Hub",
    detail: "Semaine 1 — couche sémantique Omni",
    highlight: "J1 → J5",
  },
  {
    name: "Contexte",
    kicker: "La mission",
    detail: "Objectif, stack technique et timeline des 5 jours",
    highlight: "Omni",
  },
  {
    name: "Ventes",
    kicker: "Jours 1–2",
    detail: "Chaîne CA Brut → CA Net, 8 skills, écart 0,001%",
    highlight: "8 skills",
  },
  {
    name: "WMS",
    kicker: "Jour 5",
    detail: "5 topics construits de zéro et testés",
    highlight: "5 topics",
  },
  {
    name: "Achats",
    kicker: "Jour 5",
    detail: "373 commandes actives, 4 Mds XPF validés, 921 articles",
    highlight: "4 Mds XPF",
  },
  {
    name: "Audit",
    kicker: "Jours 3–4",
    detail: "Note 7,5/10, 48 bugs traités, 13 topics documentés",
    highlight: "7,5/10",
  },
  {
    name: "Ce qui reste",
    kicker: "Suite",
    detail: "À faire, en attente de Gary, prochaines semaines",
    highlight: "Semaine 2",
  },
  {
    name: "Questions",
    kicker: "Māuruuru",
    detail: "Échanges et contact",
    highlight: "Merci",
  },
];

type SlideMenuProps = {
  current: number;
  onSelect: (index: number) => void;
  onClose: () => void;
};

export default function SlideMenu({
  current,
  onSelect,
  onClose,
}: SlideMenuProps) {
  return (
    <div className="relative h-full w-full">
      <button
        onClick={onClose}
        aria-label="Fermer le sommaire"
        className="absolute right-6 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-slate-300 transition-colors hover:border-gold hover:text-gold"
      >
        ✕
      </button>

      <HoverSlider
        initialSlide={current}
        className="mx-auto flex h-full w-full max-w-6xl items-center justify-center gap-16 px-10"
      >
        <nav className="flex flex-col items-start gap-3 lg:gap-4">
          <p className="kicker mb-4">Sommaire</p>
          {ENTRIES.map((entry, index) => (
            <button
              key={entry.name}
              onClick={() => onSelect(index)}
              className="group flex items-baseline gap-4 text-left"
            >
              <span className="w-7 font-mono text-sm text-slate-500 transition-colors group-hover:text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <TextStaggerHover
                text={entry.name}
                index={index}
                className="cursor-pointer text-4xl font-extrabold uppercase tracking-tight text-white lg:text-5xl"
              />
            </button>
          ))}
        </nav>

        <HoverSliderImageWrap className="hidden h-[340px] w-[400px] shrink-0 rounded-3xl border border-white/15 lg:grid">
          {ENTRIES.map((entry, index) => (
            <HoverSliderPanel
              key={entry.name}
              index={index}
              className="relative flex flex-col justify-end overflow-hidden bg-gradient-to-br from-ocean-800 via-ocean-900 to-[#231803] p-8"
            >
              <span className="pointer-events-none absolute -right-4 -top-10 text-[11rem] font-extrabold leading-none text-gold/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="kicker mb-2">{entry.kicker}</p>
              <p className="text-3xl font-extrabold text-white">
                {entry.name}
              </p>
              <p className="mt-3 text-sm text-slate-300">{entry.detail}</p>
              <p className="mt-5 inline-block text-2xl font-extrabold text-gradient">
                {entry.highlight}
              </p>
            </HoverSliderPanel>
          ))}
        </HoverSliderImageWrap>
      </HoverSlider>
    </div>
  );
}
