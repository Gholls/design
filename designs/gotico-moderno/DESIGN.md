---
version: "alpha"
name: "Gótico Moderno"
description: "Modern gothic landing page. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#1A1A1A"
  secondary: "#8B0000"
  tertiary: "#C0C0C0"
  neutral: "#F5F5F5"
  surface: "#480048"
  accent: "#228B22"
typography:
  h1:
    fontFamily: UnifrakturMaguntia
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: UnifrakturMaguntia
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 445
  author: "designmd.app"
  source: "https://designmd.app/library/gotico-moderno"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Modern gothic landing page. Ideal for landing pages, saas. AI-ready template. Modern gothic design has nothing to do with haunted houses. Let's get that out of the way. It descends from a lineage that runs through Bauhaus severity, post-punk album art, and the razor-sharp tailoring of Japanese avant-garde fashion. Rick Owens didn't invent darkness — he gave it architecture. Comme des Garçons gave it asymmetry. The movement treats black not as absence but as material, something with weight and texture and temperature.

The fashion-music crossover is where this language solidified. Album packaging for bands like Bauhaus and Siouxsie, the typography of Factory Records, the brutalist stage design of industrial acts — these weren't aesthetic choices, they were philosophical ones. Restraint as rebellion. Elegance as aggression.

This is categorically different from "dark mode." Dark mode is a preference toggle. Modern gothic is a worldview. Where dark mode reduces contrast to ease eye strain, gothic design weaponizes contrast. It uses negative space like silence in music — not empty, but loaded. The palette isn't just dark; it's considered. Charcoal against obsidian. Bone white as punctuation. Every element earns its presence or gets cut.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Dark, Elegant, Edgy
- **Keywords:** modern gothic, dark, elegant, edgy, romantic, intricate, high-contrast, moody, sophisticated, architectural
- **Era:** Contemporary Gothic Revival
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Onyx Black** (#1A1A1A) — Dark surface, primary background
- **Blood Red** (#8B0000) — Error states, destructive actions
- **Silver** (#C0C0C0) — Supporting palette color
- **Off-White** (#F5F5F5) — Light surface, card backgrounds
- **Deep Purple** (#480048) — Accent color, emphasis elements
- **Forest Green** (#228B22) — Success states, positive indicators
- **White** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** UnifrakturMaguntia — Weight 700, tight tracking, used for headline impact
- **Body:** UnifrakturMaguntia — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** UnifrakturMaguntia — 0.875rem, weight 500, slight letter-spacing
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

High-contrast typography, intricate line art, modern blackletter fonts, dramatic photography, subtle smoke effects, sharp architectural lines, romantic floral elements, elegant animations

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do High-contrast typography
- Do Intricate line art
- Do Modern blackletter fonts
- Do Dramatic photography
- Do Subtle smoke effects
- Do Sharp architectural lines


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/gotico-moderno · designmd.app -->
