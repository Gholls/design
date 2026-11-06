---
version: "alpha"
name: "Afrofuturismo Digital"
description: "Design an Afrofuturist digital landing page. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#6A0DAD"
  secondary: "#E6A817"
  tertiary: "#0D0D0D"
  neutral: "#FFBF00"
  surface: "#C1440E"
  accent: "#014D4E"
typography:
  h1:
    fontFamily: Josefin Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Josefin Sans
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 121
  author: "designmd.app"
  source: "https://designmd.app/library/afrofuturismo-digital"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an Afrofuturist digital landing page. Ideal for landing pages, saas. AI-ready template. Afrofuturism didn't start as a design movement. It started as survival imagination. Sun Ra claimed Saturn as his birthplace and built entire cosmologies through jazz, costume, and film — decades before anyone called it a genre. Octavia Butler wrote futures where Black women weren't erased but centered, where technology served liberation rather than control. These weren't aesthetic choices. They were radical acts of world-building.

Then Black Panther happened, and suddenly the mainstream noticed what had been brewing for sixty years. Ruth Carter's costumes. Hannah Beachler's production design. Wakanda gave the world a visual vocabulary: African geometry meeting advanced technology, ancestral patterns rendered in vibranium. The floodgates opened.

For digital design, Afrofuturism offers something rare — a framework that's simultaneously ancient and speculative. It rejects the sterile minimalism that dominates tech interfaces. Instead, it layers meaning. Adinkra symbols become navigation patterns. Kente geometry informs grid systems. Metallic textures and deep purples evoke cosmic possibility. The result is interfaces that feel alive, rooted, and unapologetically bold. Not decoration — identity encoded in pixels.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Bold, Cultural, Futuristic
- **Keywords:** afrofuturism, digital, bold, cultural, futuristic, tribal geometry, cosmic, vibrant patterns, ancestral-tech, rhythm
- **Era:** Afro-Futuristic, Beyond Time
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Royal Purple** (#6A0DAD) — Accent color, emphasis elements
- **Sahara Gold** (#E6A817) — Premium accent, decorative highlights
- **Obsidian Black** (#0D0D0D) — Dark surface, primary background
- **Warm Amber** (#FFBF00) — Warning states, attention indicators
- **Terracotta Red** (#C1440E) — Error states, destructive actions
- **Deep Teal** (#014D4E) — Secondary accent
- **Electric Violet** (#8F00FF) — Accent color, emphasis elements
- **Sand** (#C2B280) — Extended palette, decorative use


## Typography

- **Display / Hero:** Josefin Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Josefin Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Josefin Sans — 0.875rem, weight 500, slight letter-spacing
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

Geometric tribal patterns, cosmic star fields, kente-inspired grids, pulsating rhythm animations, metallic gold accents, holographic masks, radial symmetry, ancestral symbol overlays

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Geometric tribal patterns
- Do Cosmic star fields
- Do Kente-inspired grids
- Do Pulsating rhythm animations
- Do Metallic gold accents
- Do Holographic masks


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/afrofuturismo-digital · designmd.app -->
