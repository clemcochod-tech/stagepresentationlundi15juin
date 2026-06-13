"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  alpha: number;
};

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let frame = 0;
    let rafId = 0;

    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.3 + 0.08,
      drift: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const waves = [
      { amplitude: 26, length: 0.004, speed: 0.012, offset: 0.82, color: "rgba(53, 212, 199, 0.10)" },
      { amplitude: 34, length: 0.003, speed: 0.008, offset: 0.86, color: "rgba(53, 212, 199, 0.07)" },
      { amplitude: 44, length: 0.002, speed: 0.005, offset: 0.9, color: "rgba(233, 185, 77, 0.05)" },
    ];

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      frame += 1;

      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -5) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 233, 223, ${p.alpha})`;
        ctx.fill();
      }

      for (const wave of waves) {
        ctx.beginPath();
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 4) {
          const y =
            height * wave.offset +
            Math.sin(x * wave.length + frame * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
