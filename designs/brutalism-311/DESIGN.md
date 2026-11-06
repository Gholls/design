---
version: "alpha"
name: "Brutalism"
description: "Brutalist landing page with raw, stark, intentionally unpolished aesthetics. Ideal for streetwear, marcas experimentais, layouts editoriais, portfólios de design. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#00FF00"
  neutral: "#FF00FF"
  surface: "#0000FF"
  accent: "#FF0000"
typography:
  h1:
    fontFamily: Courier New
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Courier New
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 1.0rem
  md: 2.0rem
  lg: 4.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 216
  author: "designmd.app"
  source: "https://designmd.app/library/brutalism-311"
  tags: ["风格模板", "streetwear", "marcas experimentais", "layouts editoriais"]
---

## Overview

Brutalist landing page with raw, stark, intentionally unpolished aesthetics. Ideal for streetwear, marcas experimentais, layouts editoriais, portfólios de design. AI-ready template. Brutalism in digital design borrows its name and attitude from Béton brut — raw concrete — the architectural movement that refused to apologize for its materials. In the 1950s and 60s, architects like Alison and Peter Smithson stripped buildings down to their structural truth. No cladding, no ornament, no comfort. The concrete was the point. When this sensibility migrated to the web around 2014, it arrived as a rejection of the homogenized, venture-backed aesthetic that had flattened every startup landing page into the same Helvetica-and-gradient soup.

Digital brutalism says: here is the markup, here is the grid, here is the system font at 72px. Deal with it. Sites like Bloomberg Businessweek's experimental covers, the Yale School of Art website, and early Cargo Collective templates proved that rawness could communicate intellectual seriousness in ways that polish never could.

The movement matters because it recenters authorship. When you strip away the safety net of established UI patterns, every decision becomes visible — and intentional. There is nowhere to hide behind a component library. Brutalism demands that designers actually design, rather than assemble.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Raw, Stark, Monochromatic, Anti-Design
- **Keywords:** Brutalism, raw, stark, monochromatic, bold, unrefined typography, anti-design, visible grid, large blocks, intentionally crude
- **Era:** 1950s Brutalist Architecture to 2010s Web Brutalism
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Pure Black** (#000000) — Dark surface, primary background
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Neon Green** (#00FF00) — Supporting palette color
- **Hot Pink** (#FF00FF) — Primary text color
- **Electric Blue** (#0000FF) — Secondary accent
- **Bright Red** (#FF0000) — Error states, destructive actions
- **Yellow** (#FFFF00) — Warning states, attention indicators
- **Grey** (#808080) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Courier New — Weight 700, tight tracking, used for headline impact
- **Body:** Courier New — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Courier New — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Courier New — Used for code, metadata, and technical values

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

No smooth transitions (instant state changes), sharp corners (0px radius), bold oversized typography (900 weight), visible thick borders (3-5px), intentionally broken/overlapping layouts, monospace system fonts, raw unpolished aesthetic

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do No border-radius (0px everywhere)
- Do No smooth transitions
- Do Bold oversized typography (900)
- Do Visible thick borders
- Do Monospace or system fonts
- Do Intentionally raw/broken layout
- Do High contrast B&W + neon accents
- Do Responsive with maintained rawness


## Use Case

Streetwear, Experimental brands, Editorial layouts, Design portfolios

<!-- Source: https://designmd.app/library/brutalism-311 · designmd.app -->
