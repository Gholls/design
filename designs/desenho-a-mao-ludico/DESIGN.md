---
version: "alpha"
name: "Desenho à Mão Lúdico"
description: "Playful and organic hand-drawn landing page for a children's illustrator blog. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FDFDFD"
  secondary: "#87CEEB"
  tertiary: "#7CFC00"
  neutral: "#FFD700"
  surface: "#FFB6C1"
  accent: "#FFA07A"
typography:
  h1:
    fontFamily: Permanent Marker
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Permanent Marker
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 333
  author: "designmd.app"
  source: "https://designmd.app/library/desenho-a-mao-ludico"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Playful and organic hand-drawn landing page for a children's illustrator blog. Ideal for landing pages, modern websites. AI-ready template. Before screens existed for children, picture books did all the heavy lifting. Wobbly lines, uneven fills, visible brushstrokes — these weren't flaws. They were invitations. A child sees a perfectly rendered sphere and thinks "object." A child sees a lopsided circle with crayon texture and thinks "mine."

Digital products for kids spent years chasing vector perfection. Flat design made everything clean, scalable, lifeless. Then studios like Toca Boca and Sago Mini proved what illustrators always knew: imperfection is warmth. A hand-drawn button feels touchable in a way a rounded rectangle never will. The slight wobble of a line communicates safety — someone human made this, for you.

The resurgence isn't nostalgia. It's developmental psychology dressed as aesthetics. Young brains respond to organic shapes, irregular edges, visible process. When a character looks like it could have been drawn by an older sibling, the interface stops being software and starts being a companion. That's the gap hand-drawn fills — not decoration, but emotional architecture.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Playful, Organic, Artistic
- **Keywords:** hand-drawn, illustration, children, stories, playful, organic, artistic, unique, warm, friendly
- **Era:** 2026+ Criatividade Artesanal
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco Giz** (#FDFDFD) — Light surface, card backgrounds
- **Azul Céu** (#87CEEB) — Accent highlight, links and focus states
- **Verde Grama** (#7CFC00) — Supporting palette color
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Rosa Pastel** (#FFB6C1) — Decorative accent, highlight elements
- **Laranja Suave** (#FFA07A) — Warm accent, call-to-action secondary
- **Marrom Claro** (#D2B48C) — Extended palette, decorative use
- **Cinza Lápis** (#A9A9A9) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Permanent Marker — Weight 700, tight tracking, used for headline impact
- **Body:** Permanent Marker — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Permanent Marker — 0.875rem, weight 500, slight letter-spacing
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

Ilustrações desenhadas à mão como elementos principais, tipografia que simula escrita manual, texturas de papel e giz, bordas irregulares, micro-interações de hover com animações de rabisco, transições de seção com efeito de "virar página" de caderno.

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Ilustrações desenhadas à mão
- Do Tipografia escrita manual
- Do Texturas de papel/giz
- Do Bordas irregulares
- Do Micro-interações de rabisco
- Do Transições de "virar página" de caderno.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/desenho-a-mao-ludico · designmd.app -->
