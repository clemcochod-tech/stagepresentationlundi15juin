"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __liquidApp?: any;
    __liquidTextureUrl?: string;
  }
}

/* Texture générée localement : jaune bière sur fond bleu océan,
   à la place de l'image violette "21st.dev" du composant d'origine */
function createBeerTexture(): string {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const base = ctx.createLinearGradient(0, 0, 0, size);
  base.addColorStop(0, "#0b1e33");
  base.addColorStop(0.5, "#4a3408");
  base.addColorStop(1, "#0b1e33");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);

  const blobs = [
    { x: 0.5, y: 0.45, r: 0.55, color: "rgba(246, 193, 1, 0.95)" },
    { x: 0.8, y: 0.3, r: 0.45, color: "rgba(255, 216, 119, 0.85)" },
    { x: 0.2, y: 0.7, r: 0.42, color: "rgba(232, 163, 61, 0.75)" },
    { x: 0.75, y: 0.82, r: 0.35, color: "rgba(212, 163, 69, 0.65)" },
    { x: 0.28, y: 0.18, r: 0.32, color: "rgba(248, 221, 150, 0.6)" },
    { x: 0.55, y: 0.88, r: 0.25, color: "rgba(240, 196, 94, 0.5)" },
  ];
  for (const blob of blobs) {
    const gradient = ctx.createRadialGradient(
      blob.x * size,
      blob.y * size,
      0,
      blob.x * size,
      blob.y * size,
      blob.r * size,
    );
    gradient.addColorStop(0, blob.color);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }

  return canvas.toDataURL("image/png");
}

export default function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    window.__liquidTextureUrl = createBeerTexture();

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';

      const canvas = document.getElementById('liquid-canvas');
      if (canvas && !window.__liquidApp) {
        const app = LiquidBackground(canvas);
        app.loadImage(window.__liquidTextureUrl);
        app.liquidPlane.material.metalness = 0.75;
        app.liquidPlane.material.roughness = 0.25;
        app.liquidPlane.uniforms.displacementScale.value = 5;
        app.setRain(false);
        window.__liquidApp = app;
      }
    `;
    document.body.appendChild(script);

    return () => {
      if (window.__liquidApp?.dispose) {
        window.__liquidApp.dispose();
      }
      window.__liquidApp = undefined;
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="liquid-canvas"
      className="absolute inset-0 h-full w-full touch-none"
    />
  );
}
