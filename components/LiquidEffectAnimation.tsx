"use client";

import { useEffect, useId, useRef } from "react";

/* Texture générée localement : halos jaune & bleu clair sur fond blanc,
   pour un liquide lumineux (thème clair) */
function createLightTexture(): string {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const base = ctx.createLinearGradient(0, 0, 0, size);
  base.addColorStop(0, "#eaf4ff");
  base.addColorStop(0.5, "#fdf6e3");
  base.addColorStop(1, "#dcebfb");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);

  const blobs = [
    { x: 0.5, y: 0.45, r: 0.55, color: "rgba(248, 221, 150, 0.9)" },
    { x: 0.8, y: 0.3, r: 0.45, color: "rgba(255, 255, 255, 0.9)" },
    { x: 0.2, y: 0.7, r: 0.42, color: "rgba(163, 210, 241, 0.85)" },
    { x: 0.75, y: 0.82, r: 0.35, color: "rgba(240, 196, 94, 0.7)" },
    { x: 0.28, y: 0.18, r: 0.32, color: "rgba(255, 255, 255, 0.8)" },
    { x: 0.55, y: 0.88, r: 0.25, color: "rgba(107, 180, 230, 0.6)" },
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
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }

  return canvas.toDataURL("image/png");
}

export default function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reactId = useId();
  const canvasId = `liquid-canvas-${reactId.replace(/[:]/g, "")}`;

  useEffect(() => {
    if (!canvasRef.current) return;

    const textureUrl = createLightTexture();
    const w = window as unknown as Record<string, unknown>;
    const appKey = `__liquidApp_${canvasId}`;
    const textureKey = `__liquidTexture_${canvasId}`;
    w[textureKey] = textureUrl;

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
      const canvas = document.getElementById('${canvasId}');
      if (canvas && !window['${appKey}']) {
        const app = LiquidBackground(canvas);
        app.loadImage(window['${textureKey}']);
        app.liquidPlane.material.metalness = 0.6;
        app.liquidPlane.material.roughness = 0.35;
        app.liquidPlane.uniforms.displacementScale.value = 5;
        app.setRain(false);
        window['${appKey}'] = app;
      }
    `;
    document.body.appendChild(script);

    return () => {
      const app = w[appKey] as { dispose?: () => void } | undefined;
      if (app?.dispose) app.dispose();
      w[appKey] = undefined;
      if (script.parentNode) document.body.removeChild(script);
    };
  }, [canvasId]);

  return (
    <canvas
      ref={canvasRef}
      id={canvasId}
      className="absolute inset-0 h-full w-full touch-none"
    />
  );
}
