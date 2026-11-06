---
version: "alpha"
name: "Filigree"
description: "Filigree-inspired landing page with intricate lace-like patterns. Ideal for convites de casamento, tipografia sofisticada, embalagens de luxo, joalherias. AI-ready template."
colors:
  primary: "#C9A84C"
  secondary: "#FFF8E7"
  tertiary: "#2C2C2C"
  neutral: "#B76E79"
  surface: "#C0C0C0"
  accent: "#F5ECD7"
typography:
  h1:
    fontFamily: Cormorant
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 397
  author: "designmd.app"
  source: "https://designmd.app/library/filigree"
  tags: ["风格模板", "embalagens de luxo", "joalherias"]
---

## Overview

Filigree-inspired landing page with intricate lace-like patterns. Ideal for convites de casamento, tipografia sofisticada, embalagens de luxo, joalherias. AI-ready template. Filigree is one of the oldest known metalworking techniques, dating back to Mesopotamia around 3000 BCE. The word itself comes from the Latin 'filum' (thread) and 'granum' (grain) — and that etymology tells you everything about what makes it special. Craftsmen twisted impossibly thin metal wire into ornamental patterns, soldering tiny beads at intersections. It spread through the Mediterranean, became a signature of Portuguese and Indian goldsmithing, and defined what 'precious' meant for millennia.

What's remarkable is how filigree anticipated modern design thinking. It's structure as decoration — the ornament IS the construction. There's no applied surface treatment here; the pattern emerges from the material logic itself. Every curl and spiral serves both aesthetic and structural purpose, distributing stress across the lattice while creating visual rhythm.

The technique nearly died in the industrial age, which tells you something important: filigree resists mass production. It demands patience, skill, and an acceptance that beauty takes time. That tension between fragility and permanence — metal made to look like lace — remains its most powerful quality for contemporary design applications.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Intricate, Lace-like, Luxurious, Arabesque
- **Keywords:** Filigree, intricate patterns, lace metalwork, marble, wood, arabesque, swirling flourishes, ornate, delicate, luxury
- **Era:** Renaissance Craftsmanship
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Antique Gold** (#C9A84C) — Premium accent, decorative highlights
- **Cream** (#FFF8E7) — Light surface, card backgrounds
- **Deep Charcoal** (#2C2C2C) — Dark surface, primary background
- **Rose Gold** (#B76E79) — Premium accent, decorative highlights
- **Soft Silver** (#C0C0C0) — Extended palette, decorative use
- **Warm Ivory** (#F5ECD7) — Secondary surface
- **Burgundy** (#722F37) — Extended palette, decorative use
- **Sage** (#8A9A5B) — Extended palette, decorative use


## Typography

- **Display / Hero:** Cormorant — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant — 0.875rem, weight 500, slight letter-spacing
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

SVG filigree border patterns, intricate corner ornaments, thin decorative lines (0.5-1px), subtle metallic shimmer on hover, elegant scroll-reveal animations (500ms), lace-like overlay patterns

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

- Do Intricate SVG border patterns
- Do Corner ornaments on key sections
- Do Gold and cream color palette
- Do Sophisticated serif typography
- Do Lace-like decorative overlays
- Do Responsive with simplified ornaments on mobile


## Use Case

Wedding invitations, Sophisticated typography, Luxury packaging, Jewelry stores

<!-- Source: https://designmd.app/library/filigree · designmd.app -->
