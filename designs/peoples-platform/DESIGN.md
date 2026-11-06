---
version: "alpha"
name: "People's Platform (Block & Bold)"
description: "People's Platform (Block & Bold) — Activist poster energy: blue, orange, red on cream, with Alfa Slab + Caveat Brush. Alfa Slab One typography. saturated political-poster palette: cobalt blue, signal orange, warning red, on . Best for cultural commentary, manifesto, community / civic deck. AI-ready design system."
colors:
  primary: "#2C2CDC"
  secondary: "#F2A03A"
  tertiary: "#E83A2A"
  neutral: "#F4E9D6"
  surface: "#0E0E14"
typography:
  h1:
    fontFamily: Alfa Slab One
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Alfa Slab One
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.0rem
  md: 2.0rem
  lg: 4.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 626
  author: "designmd.app"
  source: "https://designmd.app/library/peoples-platform"
  tags: ["风格模板", "orange", "red on cream", "signal orange"]
---

## Overview

People's Platform (Block & Bold) — Activist poster energy: blue, orange, red on cream, with Alfa Slab + Caveat Brush. Alfa Slab One typography. saturated political-poster palette: cobalt blue, signal orange, warning red, on . Best for cultural commentary, manifesto, community / civic deck. AI-ready design system. The activist poster tradition didn't emerge from design schools — it came from urgency. From the Atelier Populaire screenprints of May '68 to ACT UP's silence=death triangle, the most powerful political graphics were made by people who needed to be heard yesterday. Bold slab serifs weren't chosen for aesthetic reasons; they were chosen because they could be read from across a street, stenciled onto a wall, or photocopied a hundred times without losing legibility.

This pairing — Alfa Slab One's unapologetic weight against Caveat's raw handwritten energy — captures that duality perfectly. The slab says institution, authority, demand. The handwriting says human, personal, urgent. Together they recreate the visual language of movements that understood something most brands never will: typography is a political act. Every zine cover, every wheat-pasted broadsheet, every hand-lettered banner at a march carries this DNA.

The block-and-bold approach isn't decorative. It's functional dissent. It exists because marginalized voices learned that whispered messages get ignored, and that the combination of structural boldness with human imperfection is what makes people stop, read, and act.

- Density: 7/10 — Rich
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Activist Poster, Expressive, Bold, Graphic
- **Keywords:** Activist poster, Alfa Slab One, Caveat, protest energy, bold, honest, multi-accent, graphic
- **Era:** 2020s Neo-Brutalist
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Blue** (#2C2CDC) — Primary surface or dominant color
- **Orange** (#F2A03A) — Accent highlight, links and focus states
- **Red** (#E83A2A) — Secondary accent
- **Cream** (#F4E9D6) — Accent color, emphasis elements
- **Ink** (#0E0E14) — Extended palette, decorative use


## Typography

- **Display / Hero:** Alfa Slab One — Weight 700, tight tracking, used for headline impact
- **Body:** sans-serif — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** sans-serif — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** DM Mono — Used for code, metadata, and technical values

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

display font Alfa Slab One for hero headlines, bold hover color shift (150ms), high-contrast active states, activist poster color blocks, slab+handwritten font collision, red/blue/orange

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Alfa Slab One display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Brutalist borders 2-3px solid applied
- Do Offset box-shadow on cards
- Do Mobile responsive layout (stack below 768px)


## Use Case

cultural commentary, manifesto, community / civic deck, design talk, campaign pitch, founder vision

<!-- Source: https://designmd.app/library/peoples-platform · designmd.app -->
