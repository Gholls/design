---
version: "alpha"
name: "Synapse Dark Hero"
description: "Pure black SaaS hero with HLS video at 100% opacity no overlay, positioned at height 80vh and absolute bottom-[35vh]. Ideal for saas de inovação, plataformas de ai, ferramentas enterprise, startups de tecnologia. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#FFFFFF"
  neutral: "#888888"
  surface: "#6B7280"
  accent: "#000000"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 761
  author: "designmd.app"
  source: "https://designmd.app/library/synapse-dark-hero"
  tags: ["风格模板", "saas de inovação", "plataformas de ai"]
---

## Overview

Pure black SaaS hero with HLS video at 100% opacity no overlay, positioned at height 80vh and absolute bottom-[35vh]. Ideal for saas de inovação, plataformas de ai, ferramentas enterprise, startups de tecnologia. AI-ready template. The dark hero pattern didn't emerge from aesthetic preference — it emerged from necessity. Early neural network visualization tools in the 2010s needed pure black backgrounds because researchers were staring at node graphs for hours. The contrast wasn't a style choice; it was ergonomic. When DeepMind and OpenAI started publishing papers with dark-themed diagrams, the visual language of 'intelligence' became inseparable from darkness.

Synapse Dark Hero takes that lineage seriously. The pure black (#000) isn't the lazy dark mode gray that every SaaS slaps on — it's the void that makes glass badges and neural pathway animations actually register as luminous. The glassmorphism here isn't decorative. It references the layered transparency of network architecture diagrams, where you need to see through one layer to understand the connections beneath.

The futuristic tech aesthetic has been done to death, but this pattern earns it. The neural motifs aren't ornamental — they're structural, guiding the eye along the same pathways that data flows through the product itself.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** SaaS, Pure Black, Glass Badges, HLS Video, Staggered Motion
- **Keywords:** SaaS, preto puro, glass badges, HLS video, staggered animations, gradient border, logo marquee, Framer Motion, navbar blur, innovation
- **Era:** 2024-2026 SaaS Dark Premium
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto Puro** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Cinza Gradiente from** (#FFFFFF) — Secondary text, borders, muted elements
- **to** (#888888) — Supporting palette color
- **Cinza Muted** (#6B7280) — Secondary text, borders, muted elements
- **Preto Botão** (#000000) — Deep contrast surface
- **Vidro Badge** (rgba(255,255,255,0.1)) — Extended palette, decorative use
- **Borda Gradiente** (rgba(255,255,255,0.3)) — Extended palette, decorative use
- **Borda Branca** (rgba(255,255,255,0.2)) — Extended palette, decorative use


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

VÍDEO: Stream HLS curto (~5s loop) com visual abstrato minimalista. Formas geométricas ou partículas sutis em movimento sobre fundo escuro. Aspect ratio ~16:9 (276x160px storyboard). Exibido em opacity 100% sem overlay, posicionado com height 80vh e absolute bottom-[35vh], flutuando atrás do conteúdo de texto. O vídeo cria profundidade visual sem competir com o conteúdo. | EFEITOS CSS: Fundo preto puro com vídeo HLS (opacity 100%, sem overlay) posicionado em height 80vh e bottom-[35vh] flutuando atrás do texto, navbar fixa com blur glassmorphism, 3 badges glassmorphism em row, headline massiva (~80px) com animação fade-in-up, botões sólido preto com borda branca e glass transparente, logo marquee estático grayscale opacity-40, animações staggered via Framer Motion

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Fundo preto puro com vídeo HLS sem overlay
- Do Vídeo h-80vh bottom-35vh
- Do Navbar fixa blur glass
- Do 3 badges glassmorphism
- Do Headline ~80px fade-in-up
- Do Botão preto + glass transparente
- Do Logo marquee grayscale
- Do Animações staggered
- Do Responsivo


## Use Case

SaaS de inovação, Platforms de AI, Tools enterprise, Startups de tecnologia

<!-- Source: https://designmd.app/library/synapse-dark-hero · designmd.app -->
