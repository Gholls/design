---
version: "alpha"
name: "Cohere Enterprise Serif"
description: "Cohere-inspired enterprise landing page. Ideal for enterprise ai, infraestrutura de dados, plataformas b2b, apis corporativas. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#ffffff"
  tertiary: "#1863dc"
  neutral: "#d9d9dd"
  surface: "#212121"
  accent: "#93939f"
typography:
  h1:
    fontFamily: Georgia
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Georgia
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 22px
  md: 44px
  lg: 66px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 257
  author: "designmd.app"
  source: "https://designmd.app/library/cohere-enterprise-serif"
  tags: ["风格模板", "enterprise ai", "plataformas b2b", "apis corporativas"]
---

## Overview

Cohere-inspired enterprise landing page. Ideal for enterprise ai, infraestrutura de dados, plataformas b2b, apis corporativas. AI-ready template. The enterprise serif has always carried weight — literally and figuratively. From the dense columns of financial broadsheets to the masthead of every institution that wanted to signal permanence, serif display faces were the typography of authority. They said: we were here before you, and we'll be here after.

What Cohere does with this lineage is strip it back to the Swiss grid. No ornamental flourishes, no nostalgic warmth. Just the structural bones of a serif — the bracketed terminals, the modulated stroke contrast — placed with the spatial discipline of Müller-Brockmann. It's a deliberate tension: the humanist history of serif letterforms against the mechanical precision of International Typographic Style. The result reads as confident without being cold, institutional without being dusty.

This pairing works because it refuses the false choice between "modern sans-serif startup" and "traditional serif corporation." Enterprise AI needs to communicate both technical sophistication and established credibility. Cohere's typographic identity threads that needle — it borrows gravitas from editorial tradition while maintaining the clarity and restraint that Swiss design demands.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 8/10 — Cinematic

- **Style:** Enterprise, Serif Display, 22px Radius, Ghost Buttons, Purple Bands
- **Keywords:** cohere, enterprise, serif display, 22px radius, ghost buttons, purple bands, cool grays, interaction blue, uppercase code labels
- **Era:** 2024-2026 Enterprise AI
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Azul Interação** (#1863dc) — Accent highlight, links and focus states
- **Cinza Cool** (#d9d9dd) — Secondary text, borders, muted elements
- **Quase Preto** (#212121) — Deep contrast surface
- **Slate** (#93939f) — Extended palette, decorative use
- **Cinza Claro** (#f2f2f2) — Secondary text, borders, muted elements
- **Borda** (#e5e7eb) — Extended palette, decorative use


## Typography

- **Display / Hero:** Georgia — Weight 700, tight tracking, used for headline impact
- **Accent:** system-ui for body — Used for decorative or emphasis text
- **Body:** Georgia — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Georgia — 0.875rem, weight 500, slight letter-spacing
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

Canvas branco brilhante com bordas cool gray. Border-radius 22px como assinatura visual em todos os cards primários. Serif display para headlines com tracking negativo (-1.44px em 72px). Botões ghost/transparentes que mudam para azul (#1863dc) no hover. Seções full-width em roxo profundo para showcases de produto. Labels monospace uppercase com letter-spacing positivo. Paleta quase sem cor — preto, branco, cinzas cool.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 22px. See rounded tokens in front matter for the full scale.


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

- Do Canvas branco com bordas cool gray
- Do Radius 22px assinatura
- Do Serif display headlines
- Do Ghost buttons → azul no hover
- Do Seções roxo profundo
- Do Labels monospace uppercase
- Do Responsivo


## Use Case

Enterprise AI, Infraestrutura de dados, Platforms B2B, APIs corporativas

<!-- Source: https://designmd.app/library/cohere-enterprise-serif · designmd.app -->
