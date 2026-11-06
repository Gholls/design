---
version: "alpha"
name: "Bento Eventos Dinâmicos"
description: "Dynamic and organized Bento Style landing page for an event and ticketing platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#8A2BE2"
  secondary: "#FF8C00"
  tertiary: "#FFFFFF"
  neutral: "#333333"
  surface: "#32CD32"
  accent: "#00BFFF"
typography:
  h1:
    fontFamily: Montserrat
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 10px
  md: 20px
  lg: 30px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 189
  author: "designmd.app"
  source: "https://designmd.app/library/bento-eventos-dinamicos"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Dynamic and organized Bento Style landing page for an event and ticketing platform. Ideal for landing pages, modern websites. AI-ready template. Event discovery has always been a spatial problem. You're scanning a city's worth of possibilities — dates, venues, vibes — and your brain needs to pattern-match fast. Eventbrite figured this out early with their card grid: thumbnail, title, date, location. Four data points per unit. Enough to decide in under a second whether something deserves a click. The layout was utilitarian, almost brutalist in its repetition.

Luma changed the conversation. Their cards breathe. Cover images bleed to edges, typography sits confident and large, and the grid itself feels curated rather than generated. They proved that event cards don't need to look like database rows — they can carry the energy of the event itself. A techno night looks different from a founder breakfast, and the card should telegraph that before you read a single word.

Bento grids push this further. Instead of uniform rectangles, you get hierarchy through size. A featured festival takes four cells. A weekly meetup takes one. The grid becomes editorial — it has opinion about what matters tonight.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Dynamic, Organized, Engaging
- **Keywords:** events, tickets, discovery, bento grid, organized, engaging, modern, intuitive, vibrant, social
- **Era:** 2026+ Experiências ao Vivo
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Roxo Vibrante** (#8A2BE2) — Accent color, emphasis elements
- **Laranja Vibrante** (#FF8C00) — Warm accent, call-to-action secondary
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Cinza Escuro** (#333333) — Dark surface, primary background
- **Verde Limão** (#32CD32) — Success states, positive indicators
- **Azul Elétrico** (#00BFFF) — Secondary accent
- **Rosa Choque** (#FF00CC) — Decorative accent, highlight elements
- **Cinza Claro** (#F0F0F0) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Bento — Weight 700, tight tracking, used for headline impact
- **Accent:** Montserrat — Used for decorative or emphasis text
- **Body:** Bento — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bento — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid "Bento" para eventos, cards com imagens de eventos e informações concisas, tipografia sans-serif limpa, ícones de categoria de evento minimalistas, micro-interações de hover com detalhes do evento, transições de elementos suaves e dinâmicas, foco na descoberta e engajamento.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 10px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (10px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (10px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layouts de grid "Bento" para eventos
- Do Cards com imagens/informações
- Do Tipografia sans-serif limpa
- Do Ícones de categoria de evento
- Do Micro-interações de detalhes do evento
- Do Transições suaves e dinâmicas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/bento-eventos-dinamicos · designmd.app -->
