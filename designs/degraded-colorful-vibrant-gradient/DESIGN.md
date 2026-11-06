---
version: "alpha"
name: "Degraded Colorful / Vibrant Gradient"
description: "Vibrant gradient infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#222222"
  tertiary: "#FF0000"
  neutral: "#FF7F00"
  surface: "#FFFF00"
  accent: "#00FF00"
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
  order: 324
  author: "designmd.app"
  source: "https://designmd.app/library/degraded-colorful-vibrant-gradient"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Vibrant gradient infographic. Ideal for landing pages, modern websites. AI-ready template. Gradients in data visualization aren't new — cartographers used continuous color ramps to encode elevation long before screens existed. But the modern obsession with vibrant gradient infographics? That traces back to roughly 2016, when Instagram's rebrand dropped a sunset-spectrum logo on the world and suddenly every brand wanted that liquid color energy. Designers noticed: smooth hue transitions feel alive. They suggest movement, progression, warmth.

The shift hit infographic design hard. Flat color blocks gave way to flowing spectrums. Bar charts bled from magenta into gold. Pie segments dissolved into aurora-like arcs. The logic was sound — gradient transitions naturally encode ranges. A value moving from low to high maps intuitively onto cool-to-warm or dark-to-light. Your eye reads the progression without needing a legend.

But here's the tension. Vibrant gradients seduce. They can prioritize mood over legibility, atmosphere over accuracy. The best gradient infographics walk that line — using color flow to reinforce the data story, not replace it. When done right, they make numbers feel like something. When done wrong, they're just pretty noise.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Color gradient transitions, vibrant hues, dynamic color flows, modern aesthetics, rainbow spectrum, glossy finishes, energetic, contemporary
- **Era:** Modern Vibrant
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Text** (#222222) — Dark surface, primary background
- **Red** (#FF0000) — Error states, destructive actions
- **Orange** (#FF7F00) — Warm accent, call-to-action secondary
- **Yellow** (#FFFF00) — Warning states, attention indicators
- **Green** (#00FF00) — Success states, positive indicators
- **Blue** (#0000FF) — Secondary accent
- **Indigo** (#4B0082) — Accent color, emphasis elements
- **Violet** (#9400D3) — Accent color, emphasis elements


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

High-key bright lighting, gradient flow animations, color bleeding effects, vibrant highlight transitions, smooth gradient morphing, energetic reveals

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

- Do Gradients smooth
- Do Colors vibrant
- Do Text readable on gradients
- Do Sections color-coded
- Do Modern aesthetic
- Do Performance acceptable


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/degraded-colorful-vibrant-gradient · designmd.app -->
