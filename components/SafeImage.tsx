"use client";

import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/* Image masquée tant que le fichier n'existe pas dans public/images/ */
export default function SafeImage({ src, alt, className }: SafeImageProps) {
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setMissing(true)}
    />
  );
}
