---
version: "alpha"
name: "Natureza / Elementos Botânicos"
description: "Nature botanical infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#2B5F2B"
  tertiary: "#27AE60"
  neutral: "#F39C12"
  surface: "#3498DB"
  accent: "#9B59B6"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 584
  author: "designmd.app"
  source: "https://designmd.app/library/natureza-elementos-botanicos"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Nature botanical infographic. Ideal for landing pages, modern websites. AI-ready template. Long before the sustainability wave hit corporate reporting, botanical illustration had already proven itself as a bridge between science and emotion. Think of Ernst Haeckel's radiolaria drawings — data rendered through organic form, making the invisible tangible. That lineage matters.

The modern resurgence is pragmatic, not decorative. ESG mandates forced companies to communicate environmental data to non-technical audiences. Pie charts felt cold. Bar graphs felt corporate. Designers reached for leaves, root systems, tree rings — visual metaphors people already understood intuitively. A carbon footprint shaped like mycelium networks reads faster than a stacked area chart ever could.

What's interesting now is the tension. Botanical infographics walk a razor's edge between clarity and ornament. The best ones use organic shapes structurally — vein patterns as flow diagrams, petal arrangements as proportional comparisons — rather than just wrapping conventional charts in floral borders. That structural honesty is what separates data visualization from decoration.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Botanical illustrations, floral ornaments, organic shapes, leaf motifs, nature-inspired, eco-friendly, fresh, natural flow
- **Era:** Nature-Inspired
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Forest Green** (#2B5F2B) — Secondary surface or text color
- **Emerald** (#27AE60) — Supporting palette color
- **Amber** (#F39C12) — Warning states, attention indicators
- **Blue** (#3498DB) — Secondary accent
- **Purple** (#9B59B6) — Accent color, emphasis elements
- **Red** (#E74C3C) — Error states, destructive actions
- **Cool Grey** (#95A5A6) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Warm natural lighting, soft diffuse, leaf sway animations, floral border reveals, organic shape morphing, nature-inspired transitions

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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

- Do Botanical elements present
- Do Floral borders
- Do Organic shapes
- Do Green palette dominant
- Do Natural flow layout
- Do Eco-friendly feel


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/natureza-elementos-botanicos · designmd.app -->
