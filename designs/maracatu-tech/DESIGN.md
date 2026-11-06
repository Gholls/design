---
version: "alpha"
name: "Maracatu Tech"
description: "Maracatu percussion-inspired tech landing page. Ideal for landing pages culturais, projetos afro-brasileiros, sites energéticos. AI-ready template."
colors:
  primary: "#C41E3A"
  secondary: "#DAA520"
  tertiary: "#0D0D0D"
  neutral: "#002FA7"
  surface: "#009B3A"
  accent: "#6A0DAD"
typography:
  h1:
    fontFamily: Bebas Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bebas Neue
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 542
  author: "designmd.app"
  source: "https://designmd.app/library/maracatu-tech"
  tags: ["风格模板", "sites energéticos"]
---

## Overview

Maracatu percussion-inspired tech landing page. Ideal for landing pages culturais, projetos afro-brasileiros, sites energéticos. AI-ready template. Maracatu is not folklore frozen in amber. It's a living system — polyrhythmic, layered, built on centuries of Afro-Brazilian resistance in Pernambuco. The alfaias thunder in patterns that repeat but never feel mechanical. The abês cut through with metallic precision. Every carnival in Recife, these nações move as coordinated organisms: dozens of percussionists locked into interlocking cycles that would make any UX choreographer jealous.

So when we talk about maracatu meeting technology, we're not slapping tribal patterns on a dashboard. We're studying how complex rhythmic systems communicate hierarchy, timing, and emphasis without words. The visual culture surrounding maracatu — the rich indigos, the gold leaf on caboclos de lança, the geometric beadwork — carries information density that digital interfaces rarely achieve. Color isn't decoration; it signals role, lineage, spiritual alignment.

The translation to digital isn't literal. It's structural. How do you build an interface that breathes with the same polyrhythmic confidence? That layers information the way a batuque layers sound — each element independent yet inseparable from the whole?

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Rhythmic, Bold, Cultural, Energetic
- **Keywords:** maracatu, percussion, rhythm, bold, cultural, energetic, carnival, Pernambuco, drums, tribal, geometric patterns, African-Brazilian, vibrant, powerful
- **Era:** Tradição Afro-Brasileira Digital
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Vermelho Intenso** (#C41E3A) — Error states, destructive actions
- **Dourado Imperial** (#DAA520) — Premium accent, decorative highlights
- **Preto Profundo** (#0D0D0D) — Primary background surface
- **Azul Royal** (#002FA7) — Accent highlight, links and focus states
- **Verde Bandeira** (#009B3A) — Success states, positive indicators
- **Roxo Majestade** (#6A0DAD) — Accent color, emphasis elements
- **Laranja Fogo** (#FF4500) — Warm accent, call-to-action secondary
- **Branco Puro** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Bebas Neue — Weight 700, tight tracking, used for headline impact
- **Accent:** Oswald — Used for decorative or emphasis text
- **Body:** Bebas Neue — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bebas Neue — 0.875rem, weight 500, slight letter-spacing
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

Padrões geométricos tribais repetitivos como backgrounds e bordas, tipografia bold e impactante com peso visual forte, layouts rítmicos com alternância de blocos grandes e pequenos, elementos decorativos inspirados em estandartes e bandeiras de maracatu, animações pulsantes que remetem a batidas de tambor, gradientes dramáticos de cores intensas, bordas douradas ornamentais, texturas de tecido ou couro.

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

- Do Padrões geométricos tribais
- Do Tipografia bold impactante
- Do Layouts rítmicos
- Do Estandartes de maracatu
- Do Animações pulsantes
- Do Bordas douradas ornamentais.


## Use Case

Cultural landing pages, Afro-Brazilian projects, Energetic websites

<!-- Source: https://designmd.app/library/maracatu-tech · designmd.app -->
