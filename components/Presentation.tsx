"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideTitre from "@/components/slides/SlideTitre";
import SlideContexte from "@/components/slides/SlideContexte";
import SlideVentes from "@/components/slides/SlideVentes";
import SlideWMS from "@/components/slides/SlideWMS";
import SlideAchats from "@/components/slides/SlideAchats";
import SlideAudit from "@/components/slides/SlideAudit";
import SlideResteAFaire from "@/components/slides/SlideResteAFaire";
import SlideQuestions from "@/components/slides/SlideQuestions";
import ShaderBackground from "@/components/ShaderBackground";

const SLIDES = [
  SlideTitre,
  SlideContexte,
  SlideVentes,
  SlideWMS,
  SlideAchats,
  SlideAudit,
  SlideResteAFaire,
  SlideQuestions,
];

const variants = {
  enter: (direction: number) => ({ x: direction * 80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction * -80, opacity: 0 }),
};

export default function Presentation() {
  const [[index, direction], setState] = useState([0, 0]);

  const goTo = useCallback((next: number, dir: number) => {
    setState(([current]) => {
      if (next < 0 || next >= SLIDES.length || next === current) {
        return [current, dir];
      }
      return [next, dir];
    });
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  const ActiveSlide = SLIDES[index];

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-ocean-950">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(36, 75, 120, 0.7), transparent), radial-gradient(ellipse 60% 50% at 90% 110%, rgba(240, 196, 94, 0.14), transparent)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[30vh] opacity-80 [mask-image:linear-gradient(to_top,black_50%,transparent)]">
        <ShaderBackground />
      </div>

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative z-10 h-full w-full"
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        disabled={index === 0}
        aria-label="Slide précédente"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-slate-300 backdrop-blur transition-all hover:border-gold/50 hover:text-gold disabled:opacity-20 disabled:hover:border-white/15 disabled:hover:text-slate-300"
      >
        ←
      </button>
      <button
        onClick={next}
        disabled={index === SLIDES.length - 1}
        aria-label="Slide suivante"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-slate-300 backdrop-blur transition-all hover:border-gold/50 hover:text-gold disabled:opacity-20 disabled:hover:border-white/15 disabled:hover:text-slate-300"
      >
        →
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex items-center justify-between px-6 pb-3">
          <p className="text-xs text-slate-400">
            BDT Data Hub · Semaine 1 · ← → pour naviguer
          </p>
          <p className="text-xs font-semibold text-slate-400">
            {index + 1} / {SLIDES.length}
          </p>
        </div>
        <div className="h-1 w-full bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
            animate={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>
    </main>
  );
}
