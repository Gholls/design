---
version: "alpha"
name: "Dark Portfolio Hero"
description: "Dark portfolio with animated loading screen (2.7s): counter 000→100 via rAF, rotating words with AnimatePresence, gradient progress bar (#89AACC to #4E85BF) with glow. Ideal for portfólios de desenvolvedores, designers criativos, freelancers fullstack, sites pessoais premium. AI-ready template."
colors:
  primary: "#0a0a0a"
  secondary: "#141414"
  tertiary: "#f5f5f5"
  neutral: "#888888"
  surface: "#f5f5f5"
  accent: "#1f1f1f"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 317
  author: "designmd.app"
  source: "https://designmd.app/library/dark-portfolio-hero"
  tags: ["风格模板", "designers criativos"]
---

## Overview

Dark portfolio with animated loading screen (2.7s): counter 000→100 via rAF, rotating words with AnimatePresence, gradient progress bar (#89AACC to #4E85BF) with glow. Ideal for portfólios de desenvolvedores, designers criativos, freelancers fullstack, sites pessoais premium. AI-ready template. The dark cinematic hero owes its DNA to two parallel lineages: demo scene culture and film title sequences. In the early 2000s, Flash portfolios weaponized loading screens — turning wait time into theater. Designers like Joshua Davis and 2Advanced Studios proved that the entrance *was* the portfolio. The loading bar became a stage curtain. When Flash died, that theatrical energy went dormant until GSAP and WebGL revived it around 2016.

The second thread is Saul Bass through Kyle Cooper through Ash Thorp. Title sequences taught us that mood precedes content. A dark field with precise typography and choreographed motion tells the viewer: this person controls every pixel. The dark portfolio hero isn't decoration — it's a credibility signal. It says you understand timing, contrast, and restraint before anyone scrolls.

Today these heroes dominate Awwwards and creative studio sites because they solve a real problem: establishing artistic authority in under three seconds. The darkness isn't aesthetic preference — it's functional. It kills distraction and forces the eye to follow motion.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Portfolio, Loading Screen, GSAP Animations, HLS Video, Gradient Accent, Role Cycling
- **Keywords:** portfolio, loading screen, GSAP, HLS video, gradient accent azul, role cycling, Instrument Serif italic, Inter font, scroll indicator, counter animation, pill navbar
- **Era:** 2024-2026 Creative Portfolio Premium
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto Fundo** (#0a0a0a) — Primary background surface
- **Superfície** (#141414) — Secondary surface or text color
- **Texto** (#f5f5f5) — Primary text color
- **Muted** (#888888) — Secondary text, borders, muted elements
- **Acento** (#f5f5f5) — Extended palette, decorative use
- **Stroke** (#1f1f1f) — Extended palette, decorative use
- **Gradiente Azul from** (#89AACC) — Secondary accent
- **to** (#4E85BF) — Extended palette, decorative use
- **Glow** (rgba(137,170,204,0.35)) — Extended palette, decorative use


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Accent:** Instrument Serif — Used for decorative or emphasis text
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Stream HLS (~17s loop) com animação abstrata de fluido escuro. Ondas e gradientes orgânicos em tons de azul marinho profundo (#1a2a4a) e preto, com movimento suave e contínuo sem texto ou objetos. Aspect ratio ~2:1 (332x160px storyboard). Overlay preto 20% sutil e gradient fade inferior (h-48 from bg to transparent) fundem o vídeo no fundo #0a0a0a da página. Cria atmosfera contemplativa e premium para o portfólio. | EFEITOS CSS: Loading screen animado (2.7s): contador 000→100 via requestAnimationFrame, palavras rotativas (Design→Create→Inspire) com AnimatePresence, barra de progresso gradiente azul com glow, fade-out 0.6s. Hero com vídeo HLS de fundo (fluid/wave dark blue), overlay preto 20%, gradient fade inferior h-48. Pill navbar flutuante com logo gradiente azul ring 36x36px, links pill active state, botão Say hi com gradient border hover. Headline massiva Instrument Serif italic com GSAP entrance (y 50→0, 1.2s). Role cycling a cada 2s com fade-in. Scroll indicator com dot animado translateY loop 1.5s. Botões CTA com gradient border hover technique

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Loading screen 2.7s contador + palavras rotativas
- Do Barra progresso gradiente azul glow
- Do Vídeo HLS fundo overlay 20%
- Do Gradient fade inferior h-48
- Do Pill navbar logo gradiente ring
- Do Headline Instrument Serif GSAP
- Do Role cycling 2s
- Do Scroll indicator dot animado
- Do Botões gradient border hover
- Do Responsivo


## Use Case

Developer portfolios, Designers criativos, Freelancers fullstack, Sites personal premium

<!-- Source: https://designmd.app/library/dark-portfolio-hero · designmd.app -->
