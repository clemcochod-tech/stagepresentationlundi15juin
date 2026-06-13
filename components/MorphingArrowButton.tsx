"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MorphingArrowButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
  label: string;
};

function Chevron({ left }: { left: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={left ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export default function MorphingArrowButton({
  direction,
  onClick,
  disabled = false,
  label,
}: MorphingArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = direction === "left";
  const hovered = isHovered && !disabled;

  const containerVariants = {
    initial: { width: "64px" },
    hover: { width: "120px" },
  };

  const buttonVariants = {
    initial: {
      borderRadius: "50%",
      height: "64px",
      padding: "0px",
    },
    hover: {
      borderRadius: isLeft ? "50px 14px 14px 50px" : "14px 50px 50px 14px",
      height: "64px",
      padding: "0px 10px",
    },
  };

  const lineVariants = {
    initial: { width: "0%" },
    hover: { width: "calc(100% - 50px)" },
  };

  const arrowVariants = {
    initial: { x: "-50%", y: "-50%" },
    hover: { x: isLeft ? "-120%" : "20%", y: "-50%" },
  };

  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <div
      className={cn(
        "inline-flex w-[120px] overflow-visible",
        isLeft ? "justify-start" : "justify-end",
      )}
    >
      <motion.div
        className={cn(
          "flex items-center",
          isLeft ? "justify-end" : "justify-start",
        )}
        variants={containerVariants}
        initial="initial"
        animate={hovered ? "hover" : "initial"}
        transition={transition}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.button
          onClick={onClick}
          disabled={disabled}
          aria-label={label}
          className={cn(
            "relative flex w-full cursor-pointer items-center justify-center overflow-hidden border bg-ocean-950/40 backdrop-blur transition-colors duration-300",
            hovered ? "border-gold text-gold" : "border-white/30 text-slate-200",
            disabled && "cursor-default opacity-20",
          )}
          variants={buttonVariants}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          transition={transition}
        >
          <div className="relative flex h-full w-full items-center">
            <motion.div
              className={cn(
                "absolute top-1/2 h-0.5 -translate-y-1/2 bg-gold",
                isLeft ? "right-5" : "left-5",
              )}
              variants={lineVariants}
              initial="initial"
              animate={hovered ? "hover" : "initial"}
              transition={transition}
            />
            <motion.div
              className="absolute left-1/2 top-1/2"
              variants={arrowVariants}
              initial="initial"
              animate={hovered ? "hover" : "initial"}
              transition={transition}
            >
              <Chevron left={isLeft} />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}
