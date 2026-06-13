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
import OceanBackground from "@/components/OceanBackground";
import LiquidEffectAnimation from "@/components/LiquidEffectAnimation";
import MorphingArrowButton from "@/components/MorphingArrowButton";
import SlideMenu from "@/components/SlideMenu";

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
  const [view, setView] = useState<"home" | "slides">("home");
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

  const jumpTo = useCallback((target: number) => {
    setState(([current]) => [target, target >= current ? 1 : -1]);
    setView("slides");
  }, []);

  const goHome = useCallback(() => setView("home"), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setView("home");
        return;
      }
      if (view !== "slides") return;
      if (event.key === "ArrowRight" || event.key === " ") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, view]);

  const ActiveSlide = SLIDES[index];

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-sky-50">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(163, 210, 241, 0.55), transparent), radial-gradient(ellipse 60% 50% at 90% 110%, rgba(240, 196, 94, 0.20), transparent)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[30vh] opacity-80 [mask-image:linear-gradient(to_top,black_50%,transparent)]">
        <ShaderBackground />
      </div>

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        {view === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 h-full w-full"
          >
            <div className="absolute inset-0 opacity-60">
              <LiquidEffectAnimation />
            </div>
            <OceanBackground />
            <div className="pointer-events-none absolute inset-0 bg-sky-50/55" />
            <div className="relative z-10 h-full w-full">
              <SlideMenu current={index} onSelect={jumpTo} />
            </div>
          </motion.div>
        ) : (
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
        )}
      </AnimatePresence>

      {view === "slides" && (
        <>
          <button
            onClick={goHome}
            className="absolute right-6 top-5 z-20 flex items-center gap-2 rounded-full border border-ocean-900/15 bg-white/70 px-4 py-2 text-sm font-semibold text-ocean-800 backdrop-blur transition-colors hover:border-gold hover:text-gold-dark"
          >
            <span aria-hidden>☰</span> Sommaire
          </button>

          <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2">
            <MorphingArrowButton
              direction="left"
              onClick={prev}
              disabled={index === 0}
              label="Slide précédente"
            />
          </div>
          <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
            <MorphingArrowButton
              direction="right"
              onClick={next}
              disabled={index === SLIDES.length - 1}
              label="Slide suivante"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="flex items-center justify-between px-6 pb-3">
              <button
                onClick={goHome}
                className="text-xs text-ocean-600 transition-colors hover:text-gold-dark"
              >
                BDT Data Hub · Semaine 1 · Échap pour le sommaire
              </button>
              <p className="text-xs font-semibold text-ocean-600">
                {index + 1} / {SLIDES.length}
              </p>
            </div>
            <div className="h-1 w-full bg-ocean-900/10">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                animate={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
