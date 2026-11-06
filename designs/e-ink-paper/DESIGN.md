---
version: "alpha"
name: "E-Ink / Paper"
description: "Design an e-ink/paper style interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FDFBF7"
  secondary: "#F5F5F5"
  tertiary: "#1A1A1A"
  neutral: "#4A4A4A"
  surface: "#FFFF00"
typography:
  h1:
    fontFamily: serif for reading
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: serif for reading
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: serif for reading
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 339
  author: "designmd.app"
  source: "https://designmd.app/library/e-ink-paper"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an e-ink/paper style interface. Ideal for landing pages, saas. AI-ready template. E-ink changed how we think about screens. Not by adding pixels — by removing everything that made screens exhausting. When Amazon shipped the Kindle in 2007, it wasn't just a reading device. It was a quiet argument: maybe interfaces don't need to glow.

The reMarkable tablet pushed this further. A $400 device that deliberately couldn't do most things. No color. No apps. No notifications. Just paper-like texture under a stylus. Designers noticed. If people were paying premium prices for *less*, something had shifted.

By the early 2020s, digital well-being wasn't a niche concern — it was a design constraint. Screen Time reports made overuse visible. Grayscale mode became a wellness hack. And slowly, web designers started borrowing the vocabulary of paper: matte surfaces, generous whitespace, typography that breathes. Calm technology — Amber Case's term from 2015 — finally had a visual language. Not retro. Not skeuomorphic. Just... quiet. Interfaces that respect the reader's attention as a finite resource.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Paper-Like, Minimal, Calm, Readable
- **Keywords:** Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome
- **Era:** 2020s Digital Well-being
- **Light/Dark:** ✓ Full / ✗ Low (inverted only)

## Colors

- **Off-White** (#FDFBF7) — Light surface, card backgrounds
- **Paper White** (#F5F5F5) — Light surface, card backgrounds
- **Ink Black** (#1A1A1A) — Dark surface, primary background
- **Pencil Grey** (#4A4A4A) — Secondary text, borders, muted elements
- **Highlighter Yellow** (#FFFF00) — Warning states, attention indicators


## Typography

- **Display / Hero:** serif for reading — Weight 700, tight tracking, used for headline impact
- **Body:** serif for reading — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** serif for reading — 0.875rem, weight 500, slight letter-spacing
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

No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Paper background color
- Do High contrast text
- Do No animations
- Do Reading optimized
- Do Distraction-free
- Do Print-friendly


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/e-ink-paper · designmd.app -->
