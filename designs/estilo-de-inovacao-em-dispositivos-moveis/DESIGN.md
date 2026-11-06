---
version: "alpha"
name: "Estilo de Inovação em Dispositivos Móveis"
description: "Sleek and modern landing page for a new foldable smartphone. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#1240AB"
  secondary: "#000000"
  tertiary: "#FFFFFF"
  neutral: "#C0C0C0"
  surface: "#50C878"
  accent: "#E6E6FA"
typography:
  h1:
    fontFamily: Helvetica
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Helvetica
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 15px
  md: 30px
  lg: 45px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 373
  author: "designmd.app"
  source: "https://designmd.app/library/estilo-de-inovacao-em-dispositivos-moveis"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Sleek and modern landing page for a new foldable smartphone. Ideal for landing pages, modern websites. AI-ready template. The iPhone didn't just change phones — it killed the button. Overnight, every interaction became a surface. A tap. A swipe. That single slab of glass forced an entire industry to rethink what "using a computer" meant when your thumb was the cursor.

Then screens got bigger. Then they folded. Samsung's Galaxy Fold cracked open a question nobody had a clean answer for: what happens to your layout when the canvas literally doubles mid-session? Foldables didn't just add screen real estate — they introduced *continuity* as a design problem. Your app now has to survive a metamorphosis while the user watches.

And now, AI lives on the device itself. Not in some distant server rack — on the chip, in the neural engine, running inference while you gesture. The phone anticipates. It pre-renders. It adapts layouts before you consciously decide what you want. We went from "mobile-first" to "mobile-intelligent" in about eighteen months, and the interfaces haven't caught up yet. That's the gap this style exists to close.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Sleek, Modern, User-Centric
- **Keywords:** smartphone, foldable, AI, innovation, sleek, modern, user-centric, vibrant, connected, intuitive
- **Era:** 2026+ Mobile AI
- **Light/Dark:** ✓ Full / ✗ No (com opções de tema)

## Colors

- **Azul Galáctico** (#1240AB) — Accent highlight, links and focus states
- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Prata** (#C0C0C0) — Supporting palette color
- **Verde Esmeralda** (#50C878) — Success states, positive indicators
- **Lavanda** (#E6E6FA) — Extended palette, decorative use
- **Dourado** (#FFD700) — Premium accent, decorative highlights
- **Cinza Escuro** (#333333) — Deep contrast surface


## Typography

- **Display / Hero:** Helvetica — Weight 700, tight tracking, used for headline impact
- **Body:** Helvetica — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Helvetica — 0.875rem, weight 500, slight letter-spacing
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

Animações de dobra de tela, visualizações de câmera com IA, brilhos sutis em elementos de design, tipografia limpa (sans-serif), micro-interações responsivas, elementos 3D do dispositivo, transições fluidas.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 15px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (15px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (15px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Animações de dobra de tela
- Do Visualizações de câmera com IA
- Do Brilhos sutis
- Do Tipografia limpa
- Do Elementos 3D do dispositivo
- Do Transições fluidas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/estilo-de-inovacao-em-dispositivos-moveis · designmd.app -->
