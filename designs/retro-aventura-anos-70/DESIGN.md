---
version: "alpha"
name: "Retro Aventura Anos 70"
description: "Nostalgic and adventurous retro landing page for a 70s-style travel blog. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#CC5500"
  secondary: "#6B8E23"
  tertiary: "#FFD700"
  neutral: "#8B4513"
  surface: "#40E0D0"
  accent: "#CB4154"
typography:
  h1:
    fontFamily: Pacifico
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Pacifico
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 666
  author: "designmd.app"
  source: "https://designmd.app/library/retro-aventura-anos-70"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Nostalgic and adventurous retro landing page for a 70s-style travel blog. Ideal for landing pages, modern websites. AI-ready template. The 1970s adventure aesthetic wasn't manufactured — it accumulated. Dust on a VW Westfalia dashboard. A dog-eared Rand McNally atlas. The golden-hour palette of Kodachrome film stock that made every roadside pull-off look like revelation. This was the era when National Geographic still felt dangerous, when their photographers disappeared into jungles for months and came back with images that smelled like humidity and diesel.

What made it stick wasn't nostalgia — it was material honesty. Canvas, leather, oxidized metal. Typography that referenced hand-painted trail signs and national park signage. The color language pulled from actual terrain: burnt sienna from canyon walls, avocado from lichen-covered rock, mustard from late-afternoon light hitting a tent. Nothing was optimized for screens because screens didn't matter yet.

The VW van became the icon not because of marketing but because of limitation. You couldn't carry much. You slowed down. The vehicle itself enforced a philosophy — go further by going slower. That constraint produced an entire visual culture: patch-covered denim, hand-drawn maps, sunset gradient everything. It communicated that adventure meant friction, not frictionlessness.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Nostalgic, Adventurous, Earthy
- **Keywords:** travel blog, adventure, 70s retro, nostalgic, earthy, vibrant, free-spirited, authentic, exploration, warm
- **Era:** 1970s Exploration
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Verde Oliva** (#6B8E23) — Secondary surface or text color
- **Amarelo Mostarda** (#FFD700) — Warning states, attention indicators
- **Marrom Terra** (#8B4513) — Supporting palette color
- **Azul Turquesa** (#40E0D0) — Secondary accent
- **Vermelho Tijolo** (#CB4154) — Error states, destructive actions
- **Bege** (#F5F5DC) — Extended palette, decorative use
- **Branco** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Pacifico — Weight 700, tight tracking, used for headline impact
- **Body:** Pacifico — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Pacifico — 0.875rem, weight 500, slight letter-spacing
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

Cores quentes e terrosas, tipografia arredondada e psicodélica, fotografias com filtro vintage e vinheta, texturas de tecido e madeira, bordas com efeito de fita adesiva, micro-interações de hover com efeito de "zoom analógico", transições de seção com efeito de "slide de projetor".

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

- Do Cores quentes/terrosas
- Do Tipografia arredondada/psicodélica
- Do Fotos com filtro vintage
- Do Texturas de tecido/madeira
- Do Bordas com fita adesiva
- Do Transições de slide de projetor.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/retro-aventura-anos-70 · designmd.app -->
