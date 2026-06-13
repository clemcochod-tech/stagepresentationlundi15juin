"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  decimals = 0,
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = latest.toLocaleString("fr-FR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
    });
    return () => controls.stop();
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
