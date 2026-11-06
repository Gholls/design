---
version: "alpha"
name: "Amazônia Futurista"
description: "Futuristic Amazon rainforest landing page. Ideal for landing pages tech, projetos sustentáveis, sites futuristas. AI-ready template."
colors:
  primary: "#0A3D0A"
  secondary: "#39FF14"
  tertiary: "#0A0F0A"
  neutral: "#00CED1"
  surface: "#9B30FF"
  accent: "#FFD700"
typography:
  h1:
    fontFamily: Orbitron
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Orbitron
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 132
  author: "designmd.app"
  source: "https://designmd.app/library/amazonia-futurista"
  tags: ["风格模板", "landing pages tech", "sites futuristas"]
---

## Overview

Futuristic Amazon rainforest landing page. Ideal for landing pages tech, projetos sustentáveis, sites futuristas. AI-ready template. The Amazon isn't a metaphor. It's 6.7 million square kilometers of living computation — mycorrhizal networks processing data long before silicon existed. Brazilian designers have always known this. While the Global North chased chrome minimalism, a counter-aesthetic was brewing in São Paulo labs and Manaus startups: what if technology looked like it grew?

Amazonian futurism rejects the sterile. It pulls from indigenous cosmologies — the Yanomami concept of xapiri spirits as information carriers, Kayapó terra preta as ancient bioengineering. These aren't romantic callbacks. They're design precedents. When Embrapa scientists model AI on ant colony optimization, when biotech firms in Belém patent compounds from açaí waste streams, they're continuing a tradition of technological sophistication that predates colonization by millennia.

The aesthetic consequence is unmistakable. Interfaces that breathe. Color systems derived from canopy stratification — not arbitrary palettes. Typography that references the density and layering of várzea ecosystems. This is solarpunk with mud on its boots.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Futuristic, Organic, Lush, Technological
- **Keywords:** Amazon, futuristic, organic, lush, technological, rainforest, biodiversity, bioluminescent, neon nature, cyber jungle, sustainable tech, green technology, tropical futurism
- **Era:** Amazônia 2050 - Tecnologia e Natureza
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Verde Floresta** (#0A3D0A) — Primary surface or dominant color
- **Verde Neon** (#39FF14) — Secondary surface or text color
- **Preto Amazônico** (#0A0F0A) — Dark surface, primary background
- **Azul Bioluminescente** (#00CED1) — Accent highlight, links and focus states
- **Roxo Orquídea** (#9B30FF) — Accent color, emphasis elements
- **Amarelo Tucano** (#FFD700) — Warning states, attention indicators
- **Rosa Vitória-Régia** (#FF69B4) — Decorative accent, highlight elements
- **Turquesa Rio** (#20B2AA) — Extended palette, decorative use


## Typography

- **Display / Hero:** Orbitron — Weight 700, tight tracking, used for headline impact
- **Accent:** Rajdhani — Used for decorative or emphasis text
- **Body:** Orbitron — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Orbitron — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem


## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Gradientes que simulam a profundidade da floresta (do escuro ao luminoso), elementos bioluminescentes com glow effects, tipografia futurista com toques orgânicos, layouts que remetem a camadas de vegetação, animações de partículas flutuantes como vaga-lumes, bordas com padrões de folhagens estilizadas, fundos escuros com pontos de luz neon, texturas sutis de folhas e água.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Gradientes de profundidade florestal
- Do Efeitos bioluminescentes
- Do Tipografia futurista orgânica
- Do Camadas de vegetação
- Do Partículas de vaga-lumes
- Do Fundos escuros com neon.


## Use Case

Tech landing pages, Sustainable projects, Futuristic websites

<!-- Source: https://designmd.app/library/amazonia-futurista · designmd.app -->
