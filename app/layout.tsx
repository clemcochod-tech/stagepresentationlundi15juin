import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BDT Data Hub — Semaine 1",
  description:
    "Synthèse des jours 1 à 5 — Couche sémantique Omni — Brasserie de Tahiti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-sky-50 font-sans text-ocean-900 antialiased">
        {children}
      </body>
    </html>
  );
}
