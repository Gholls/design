---
version: "alpha"
name: "Doodle / Sketch Livre"
description: "Doodle sketch infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#2A2A2A"
  tertiary: "#9B59B6"
  neutral: "#E74C3C"
  surface: "#F39C12"
  accent: "#3498DB"
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
  order: 330
  author: "designmd.app"
  source: "https://designmd.app/library/doodle-sketch-livre"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Doodle sketch infographic. Ideal for landing pages, modern websites. AI-ready template. Long before Figma or Illustrator, people explained complex ideas with a marker and a napkin. The back-of-envelope sketch has always been the fastest path from confusion to clarity — messy, immediate, human. That tradition never really left; it just went digital.

Excalidraw changed the conversation in 2020. Suddenly a free, open-source tool proved that wobbly lines and imperfect shapes could communicate architecture diagrams, user flows, and data relationships better than polished vector art. tldraw followed with the same conviction: roughness is a feature, not a bug. The aesthetic signals "this is a draft, think with me" — which lowers the stakes and invites collaboration in ways a pixel-perfect chart never could.

Hand-drawn infographics tap into something cognitive. When data looks sketched, viewers slow down. They read instead of glance. The imperfection creates intimacy — it feels like someone sat across from you and drew it out. That's why education platforms, brainstorming tools, and whiteboard apps keep reaching for this style. It makes the complex feel approachable, and the intimidating feel like a conversation.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Hand-drawn doodles, sketchy line art, whimsical illustrations, decorative elements, organic hand-drawn feel, varied line weights, casual, creative
- **Era:** Creative Casual
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Text** (#2A2A2A) — Dark surface, primary background
- **Purple** (#9B59B6) — Accent color, emphasis elements
- **Red** (#E74C3C) — Error states, destructive actions
- **Amber** (#F39C12) — Warning states, attention indicators
- **Blue** (#3498DB) — Secondary accent
- **Teal** (#1ABC9C) — Secondary accent
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

Soft natural informal lighting, doodle drawing animations (stroke-dasharray), sketch reveal on scroll, wobble effects, hand-drawn path animations

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

- Do Doodles hand-drawn feel
- Do Line weight varies
- Do Whimsical decorations
- Do Organic imperfect lines
- Do Playful arrangement
- Do Casual creative vibe


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/doodle-sketch-livre · designmd.app -->
