---
version: "alpha"
name: "Happy Art Tropical"
description: "Happy Art tropical landing page with vibrant saturated colors. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FF1744"
  secondary: "#FFD600"
  tertiary: "#00E5FF"
  neutral: "#FF4081"
  surface: "#76FF03"
  accent: "#FF9100"
typography:
  h1:
    fontFamily: Fredoka One
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Fredoka One
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 25px
  md: 50px
  lg: 75px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 460
  author: "designmd.app"
  source: "https://designmd.app/library/happy-art-tropical"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Happy Art tropical landing page with vibrant saturated colors. Ideal for landing pages, saas. AI-ready template. Brazil never learned to whisper with color. From the azulejo tiles of colonial Salvador to the hand-painted truck lettering on BR-101, visual excess isn't decoration — it's communication. The tropical happy art tradition pulls from this lineage directly: Carnival's sequined typography, the psychedelic album covers of Tropicália, the fruit-stand signage of São Paulo's Zona Cerealista. Color isn't applied; it's structural.

When this sensibility hits digital interfaces, something interesting happens. The warmth doesn't flatten. Saturated magentas, papaya oranges, and guava pinks carry emotional weight that cooler palettes simply can't replicate. Brazilian designers have always understood that joy is a valid design objective — not frivolity, but a deliberate choice to make people feel welcomed before they read a single word.

The movement owes as much to Hélio Oiticica's Parangolés as it does to contemporary street art in Beco do Batman. It's folk and future simultaneously. In UI terms: maximalism with purpose, density without chaos, celebration without apology.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Alegre, Tropical, Colorido, Brasileiro
- **Keywords:** happy art, vibrant, colorful, pop art, cubism, graffiti, hearts, circles, dots, stripes, patterns, bold lines, optimistic, joyful, playful, geometric, rounded shapes, tropical, bright colors, high contrast
- **Era:** Happy Art Movement Contemporâneo
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Vermelho Vibrante** (#FF1744) — Error states, destructive actions
- **Amarelo Brilhante** (#FFD600) — Warning states, attention indicators
- **Azul Elétrico** (#00E5FF) — Accent highlight, links and focus states
- **Rosa Intenso** (#FF4081) — Decorative accent, highlight elements
- **Verde Limão** (#76FF03) — Supporting palette color
- **Laranja Radiante** (#FF9100) — Warm accent, call-to-action secondary
- **Roxo Vibrante** (#D500F9) — Accent color, emphasis elements
- **Turquesa** (#1DE9B6) — Extended palette, decorative use
- **Magenta** (#F50057) — Decorative accent, highlight elements
- **Ciano** (#00B8D4) — Extended palette, decorative use
- **Branco** (#FFFFFF) — Secondary surface
- **Preto** (#000000) — Deep contrast surface


## Typography

- **Display / Hero:** Fredoka One — Weight 700, tight tracking, used for headline impact
- **Accent:** Nunito — Used for decorative or emphasis text
- **Body:** Fredoka One — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Fredoka One — 0.875rem, weight 500, slight letter-spacing
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

Formas arredondadas e curvilíneas em toda composição, padrões ousados repetitivos (círculos, pontos, listras, corações), linhas grossas e pretas delineando formas, cores planas saturadas de alto contraste, composições geométricas simplificadas, sobreposições de padrões coloridos, elementos lúdicos e divertidos, texturas visuais através de cores contrastantes, sombras suaves, gradientes sutis, áreas preenchidas com padrões intrincados

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 25px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (25px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (25px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Formas arredondadas 20-30px consistentes
- Do Cores vibrantes saturadas
- Do Padrões repetitivos (círculos/pontos/listras)
- Do Linhas grossas pretas delineando
- Do Alto contraste visual
- Do Elementos lúdicos e geométricos
- Do Sombra suave 6px


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/happy-art-tropical · designmd.app -->
