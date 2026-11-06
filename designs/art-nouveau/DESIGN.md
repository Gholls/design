---
version: "alpha"
name: "Art Nouveau"
description: "Design an Art Nouveau landing page with flowing organic lines and nature-inspired motifs. Ideal for design de pôsteres, capas de livros, branding orgânico e romântico, ilustração editorial. AI-ready template."
colors:
  primary: "#4A6741"
  secondary: "#B8860B"
  tertiary: "#FFF8DC"
  neutral: "#4A1942"
  surface: "#C67A4B"
  accent: "#87CEEB"
typography:
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Cormorant Garamond
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
  order: 155
  author: "designmd.app"
  source: "https://designmd.app/library/art-nouveau"
  tags: ["风格模板", "design de pôsteres", "capas de livros", "ilustração editorial"]
---

## Overview

Design an Art Nouveau landing page with flowing organic lines and nature-inspired motifs. Ideal for design de pôsteres, capas de livros, branding orgânico e romântico, ilustração editorial. AI-ready template. Art Nouveau didn't just decorate surfaces — it fundamentally rejected the machine. Born in the 1890s across Brussels, Paris, and Vienna, the movement was a full-throated rebellion against industrial standardization. Architects like Horta and Guimard bent iron into whiplash curves. Mucha turned commercial posters into sacred geometry. The entire philosophy insisted that art belonged everywhere: door handles, metro entrances, perfume bottles. Nothing was too mundane to deserve beauty.

What makes Art Nouveau endure isn't nostalgia — it's the underlying logic. Every curve follows botanical growth patterns. Every ornament serves a structural or compositional purpose. The movement understood something we keep rediscovering: nature's forms aren't decorative afterthoughts, they're engineering solutions. When you trace a Guimard railing or a Tiffany lamp, you're following the same mathematical progressions found in fern fronds and nautilus shells.

The movement collapsed by 1910, crushed under its own production costs and the rising appetite for geometric simplicity. But its DNA persists in every brand that chooses organic flow over rigid grids — every time a designer reaches for a tendril instead of a straight line.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 8/10 — Cinematic

- **Style:** Fluid, Organic, Floral, Nature-Inspired
- **Keywords:** Art Nouveau, fluid lines, organic forms, floral motifs, nature-inspired, rounded typography, illustration, handmade, romantic, whiplash curves
- **Era:** 1890-1910 Art Nouveau Movement
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Moss Green** (#4A6741) — Primary surface or dominant color
- **Warm Gold** (#B8860B) — Premium accent, decorative highlights
- **Cream** (#FFF8DC) — Light surface, card backgrounds
- **Deep Plum** (#4A1942) — Supporting palette color
- **Terracotta** (#C67A4B) — Extended palette, decorative use
- **Sky Blue** (#87CEEB) — Secondary accent
- **Dusty Rose** (#C9A0A0) — Extended palette, decorative use
- **Olive** (#6B7B3A) — Extended palette, decorative use


## Typography

- **Display / Hero:** Cormorant Garamond — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant Garamond — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant Garamond — 0.875rem, weight 500, slight letter-spacing
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

Flowing SVG organic borders (whiplash curves), floral motif corner decorations, nature-inspired section dividers, rounded flowing typography, gentle parallax on botanical elements, warm gradient backgrounds with organic shapes

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (organic/variable font-family: 'Cormorant Garamond') shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (organic/variable font-family: 'Cormorant Garamond') corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Flowing organic SVG borders
- Do Floral motif decorations
- Do Nature-inspired color palette
- Do Rounded flowing serif typography
- Do Illustration merged with type
- Do Romantic organic atmosphere
- Do Responsive with simplified organic elements on mobile


## Use Case

Design de pôsteres, Capas de livros, Branding orgânico e romântico, Ilustração editorial

<!-- Source: https://designmd.app/library/art-nouveau · designmd.app -->
