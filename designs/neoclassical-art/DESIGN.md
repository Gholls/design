---
version: "alpha"
name: "Neoclassical Art"
description: "Neoclassical landing page inspired by ancient Greek and Roman art. Ideal for marcas de luxo, interior design, art galleries, projetos formais e institucionais. AI-ready template."
colors:
  primary: "#FFFFF0"
  secondary: "#CFB53B"
  tertiary: "#F5F5F0"
  neutral: "#1B1F3B"
  surface: "#800020"
  accent: "#556B2F"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Playfair Display
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Playfair Display
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 2.5rem
  md: 5.0rem
  lg: 10.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 594
  author: "designmd.app"
  source: "https://designmd.app/library/neoclassical-art"
  tags: ["风格模板", "marcas de luxo", "interior design", "art galleries"]
---

## Overview

Neoclassical landing page inspired by ancient Greek and Roman art. Ideal for marcas de luxo, interior design, art galleries, projetos formais e institucionais. AI-ready template. Neoclassical art emerged in the mid-18th century as a direct rebellion against the excess of Rococo. Architects, painters, and sculptors looked back to ancient Greece and Rome—not out of nostalgia, but out of intellectual conviction. The excavations at Pompeii and Herculaneum gave artists primary sources they'd never had before. Winckelmann wrote that Greek art achieved "noble simplicity and quiet grandeur," and an entire generation took that as gospel. David, Canova, Ingres—they weren't decorating. They were making moral arguments in marble and oil.

What makes Neoclassical relevant to design today isn't the columns or the togas. It's the underlying philosophy: that restraint communicates authority, that symmetry creates trust, that referencing shared cultural memory gives your work weight it couldn't earn on its own. Every courthouse with a pediment, every university seal with a laurel wreath—that's Neoclassical thinking still doing its job two centuries later.

The style carries an implicit promise: we are serious, we are permanent, we will outlast trends. That's not a small thing to communicate visually.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Classical, Timeless, Grand, Antiquity-Inspired
- **Keywords:** Neoclassical, ancient Greece, timeless, grand, columns, marble, classical antiquity, oil painting, formal, heritage
- **Era:** 18th Century Neoclassicism
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Ivory** (#FFFFF0) — Light surface, card backgrounds
- **Gold** (#CFB53B) — Premium accent, decorative highlights
- **Marble White** (#F5F5F0) — Light surface, card backgrounds
- **Deep Navy** (#1B1F3B) — Supporting palette color
- **Burgundy** (#800020) — Extended palette, decorative use
- **Olive Green** (#556B2F) — Success states, positive indicators
- **Bronze** (#CD7F32) — Metallic accent, decorative detail
- **Parchment** (#F1E9D2) — Extended palette, decorative use


## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Subtle gold borders, classical column dividers, serif typography with elegant spacing, marble texture backgrounds, soft vignette overlays, smooth fade-in transitions (400ms)

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 2px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (2px font-family: 'Playfair Display') shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (2px font-family: 'Playfair Display') corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Serif typography with classical hierarchy
- Do Gold accent borders and dividers
- Do Marble or ivory backgrounds
- Do Column-inspired layout dividers
- Do Formal and grand visual tone
- Do Mobile responsive with stacked columns


## Use Case

Luxury brands, Interior design, Art galleries, Formal and institutional projects

<!-- Source: https://designmd.app/library/neoclassical-art · designmd.app -->
