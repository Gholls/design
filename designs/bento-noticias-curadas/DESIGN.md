---
version: "alpha"
name: "Bento Notícias Curadas"
description: "Personalized and organized Bento Style landing page for a curated news platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#001F3F"
  secondary: "#FFFFFF"
  tertiary: "#FFDAB9"
  neutral: "#F5F5F5"
  surface: "#2ECC40"
  accent: "#E6E6FA"
typography:
  h1:
    fontFamily: Roboto
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Roboto
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 195
  author: "designmd.app"
  source: "https://designmd.app/library/bento-noticias-curadas"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Personalized and organized Bento Style landing page for a curated news platform. Ideal for landing pages, modern websites. AI-ready template. Flipboard changed everything in 2010. Before it, news aggregation meant reverse-chronological lists — dense, undifferentiated, exhausting. Their magazine-style card layout proved something radical: editorial hierarchy could be algorithmic. A lead story gets the full-width hero. Supporting pieces tile beneath in smaller cards. The grid itself communicates importance without a single editor writing a headline slug.

Apple News refined this further, introducing the bento approach where card sizes aren't just aesthetic choices — they're semantic. A two-column span means "this matters more." A thumbnail card means "here's context if you want it." The density varies by section: politics gets breathing room, sports packs tight with scores and updates. Google Discover took it mobile-native, proving that a single-column bento with varied card heights could feel curated even when fully automated.

What makes bento grids work for news specifically is the tension between uniformity and surprise. The grid provides predictability — you know where to look. The varied card sizes provide editorial voice — someone (or something) decided this story deserves more space. That tension is the entire design problem.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Personalized, Organized, Informative
- **Keywords:** personalized news, content curation, bento grid, organized, informative, clean, intuitive, modern, relevant, engaging
- **Era:** 2026+ Consumo de Notícias Inteligente
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Azul Marinho** (#001F3F) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Suave** (#FFDAB9) — Warm accent, call-to-action secondary
- **Cinza Claro** (#F5F5F5) — Secondary text, borders, muted elements
- **Verde Esmeralda** (#2ECC40) — Success states, positive indicators
- **Roxo Lavanda** (#E6E6FA) — Accent color, emphasis elements
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Preto** (#333333) — Deep contrast surface


## Typography

- **Display / Hero:** Bento — Weight 700, tight tracking, used for headline impact
- **Accent:** Roboto — Used for decorative or emphasis text
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

Layouts de grid "Bento" para artigos de notícias, cards com manchetes e miniaturas, tipografia sans-serif legível, ícones de categoria minimalistas, micro-interações de hover com resumo de artigo, transições de elementos suaves e focadas, foco na personalização e relevância.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layouts de grid "Bento" para notícias
- Do Cards com manchetes/miniaturas
- Do Tipografia sans-serif legível
- Do Ícones de categoria minimalistas
- Do Micro-interações de resumo de artigo
- Do Transições suaves e focadas.


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/bento-noticias-curadas · designmd.app -->
