---
version: "alpha"
name: "Farmhouse / Cottage Core"
description: "Farmhouse/cottage core landing page with rustic countryside charm. Ideal for decoração de interiores, marcas de vestuário boutique, capas de livros, produtos artesanais. AI-ready template."
colors:
  primary: "#8B2500"
  secondary: "#FDF5E6"
  tertiary: "#8B6914"
  neutral: "#2E5A2E"
  surface: "#DAA520"
  accent: "#8E8E82"
typography:
  h1:
    fontFamily: Merriweather
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Merriweather
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 392
  author: "designmd.app"
  source: "https://designmd.app/library/farmhouse-cottage-core"
  tags: ["风格模板", "capas de livros", "produtos artesanais"]
---

## Overview

Farmhouse/cottage core landing page with rustic countryside charm. Ideal for decoração de interiores, marcas de vestuário boutique, capas de livros, produtos artesanais. AI-ready template. Farmhouse and cottage core illustration didn't emerge from design studios — it crawled out of William Morris's wallpaper workshops, Victorian botanical plates, and the honest roughness of woodcut almanacs. The Arts & Crafts movement rejected industrial perfection in favor of the handmade mark, and that DNA runs straight through every sprig of lavender and wobbly hand-lettered label you see on a jar of artisan honey today.

The modern revival owes less to nostalgia than to fatigue. After a decade of flat vectors and geometric minimalism, audiences craved texture, warmth, and visual evidence of a human hand. Cottage core illustration filled that gap — not by being technically primitive, but by choosing imperfection as a deliberate stance. Grain, bleed, uneven ink coverage — these aren't flaws, they're the vocabulary.

What separates good farmhouse illustration from Pinterest kitsch is restraint. The best work references pastoral tradition without cosplaying it. It borrows the palette of dried wildflowers and aged linen, the compositional logic of seed packet art, but applies contemporary spacing and hierarchy. It's romantic without being sentimental.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Rustic, Natural, Charming, Rural
- **Keywords:** Farmhouse, cottage core, rustic simplicity, natural fabrics, countryside, rural, charming, handmade, pastoral, cozy
- **Era:** Rural Americana & English Countryside
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Barn Red** (#8B2500) — Error states, destructive actions
- **Cream White** (#FDF5E6) — Light surface, card backgrounds
- **Natural Wood** (#8B6914) — Supporting palette color
- **Forest Green** (#2E5A2E) — Supporting palette color
- **Wheat Gold** (#DAA520) — Premium accent, decorative highlights
- **Stone Grey** (#8E8E82) — Secondary text, borders, muted elements
- **Lavender** (#9B8EC4) — Extended palette, decorative use
- **Sky Blue** (#87CEEB) — Secondary accent


## Typography

- **Display / Hero:** Merriweather — Weight 700, tight tracking, used for headline impact
- **Accent:** Kalam — Used for decorative or emphasis text
- **Body:** Merriweather — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Merriweather — 0.875rem, weight 500, slight letter-spacing
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

Wood grain texture backgrounds, gingham/plaid CSS patterns, hand-drawn botanical SVG decorations, rustic thick borders (3px), warm sepia-toned overlays, gentle sway animations on botanical elements

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Rustic earthy color palette
- Do Wood grain texture backgrounds
- Do Gingham/plaid patterns
- Do Botanical SVG decorations
- Do Warm serif + handwritten typography
- Do Pastoral cozy atmosphere
- Do Responsive with maintained charm


## Use Case

Interior decoration, Boutique clothing brands, Book covers, Artisan products

<!-- Source: https://designmd.app/library/farmhouse-cottage-core · designmd.app -->
