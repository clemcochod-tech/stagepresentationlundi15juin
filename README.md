# BDT Data Hub — Présentation Semaine 1

Présentation interactive Next.js pour la restitution du lundi 15/06/2026 —
stage Data Analyst, Brasserie de Tahiti.

## Lancer

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Navigation

- **Flèches ← / →** (ou espace) pour changer de slide
- Boutons latéraux cliquables
- Barre de progression et compteur « slide X / Y » en bas
- Timeline Jour 1 → 5 cliquable sur la slide Contexte

## Images

Déposer les visuels dans `public/images/` avec ces noms exacts :

| Fichier | Contenu | Utilisé sur |
|---|---|---|
| `bdt-batiment.jpg` | Photo du siège BDT (enseigne) | Fond de la slide Questions |
| `gamme-bouteilles.jpg` | Gamme Tabu / Hinano / Manuia | Slide Questions, bandeau produit |
| `omni-icon.svg` | Icône Omni (déjà incluse) | Slide Contexte (chip stack) |

Si un fichier manque, l'image est simplement masquée — la présentation
fonctionne quand même.

## Stack

- Next.js 14 (App Router), une seule page
- Tailwind CSS — dark mode, accents dorés / turquoise
- Framer Motion — transitions de slides, compteurs animés, hover effects
- Canvas natif pour les vagues et particules de la slide titre
