---
version: "alpha"
name: "Conceptual Sketch / Doodle Art"
description: "Doodle art landing page with hand-drawn, sketch-like aesthetics. Ideal for branding lúdico, creative agencies, produtos para público jovem, editoriais divertidos. AI-ready template."
colors:
  primary: "#FAFAF5"
  secondary: "#4A4A4A"
  tertiary: "#1A1A1A"
  neutral: "#4A90D9"
  surface: "#FFF176"
  accent: "#EF5350"
typography:
  h1:
    fontFamily: Caveat
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Caveat
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 267
  author: "designmd.app"
  source: "https://designmd.app/library/conceptual-sketch-doodle-art"
  tags: ["风格模板", "branding lúdico", "creative agencies"]
---

## Overview

Doodle art landing page with hand-drawn, sketch-like aesthetics. Ideal for branding lúdico, creative agencies, produtos para público jovem, editoriais divertidos. AI-ready template. The doodle is older than graphic design itself. Marginalia in medieval manuscripts, Leonardo's notebook sketches, Saul Steinberg's deceptively simple line work for The New Yorker — the conceptual sketch has always been the thinking person's visual language. It's not decoration; it's cognition made visible. The hand-drawn line carries something a vector never will: the tremor of an idea still forming.

In the 1960s and 70s, designers like Corita Kent and Sister Mary Corita proved that raw, unpolished mark-making could carry enormous conceptual weight. Later, Stefan Sagmeister's hand-scrawled typography and Christoph Niemann's abstract Sunday Sketches demonstrated that the doodle wasn't primitive — it was deliberately unfinished, inviting the viewer to complete the thought. Today, tools like Excalidraw and FigJam have digitized the aesthetic, but the best implementations still honor the original premise: a sketch is a conversation, not a deliverable.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Freeform, Spontaneous, Hand-Drawn, Playful
- **Keywords:** Doodle, sketch, hand-drawn, freeform, spontaneous, childlike, naive, unpolished, creative, notebook, scribble
- **Era:** Timeless Creative Expression
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Notebook White** (#FAFAF5) — Light surface, card backgrounds
- **Pencil Grey** (#4A4A4A) — Secondary text, borders, muted elements
- **Ink Black** (#1A1A1A) — Dark surface, primary background
- **Sketch Blue** (#4A90D9) — Accent highlight, links and focus states
- **Highlighter Yellow** (#FFF176) — Warning states, attention indicators
- **Marker Red** (#EF5350) — Error states, destructive actions
- **Doodle Green** (#66BB6A) — Success states, positive indicators
- **Crayon Orange** (#FFA726) — Warm accent, call-to-action secondary


## Typography

- **Display / Hero:** Caveat — Weight 700, tight tracking, used for headline impact
- **Body:** Caveat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Caveat — 0.875rem, weight 500, slight letter-spacing
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

Hand-drawn SVG borders (wavy/irregular), sketch-style underlines, notebook paper background (lined or grid), doodle arrow decorations, wiggle animations on hover, pencil texture overlays

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Hand-drawn style borders (wavy SVG)
- Do Notebook paper background
- Do Handwritten font family
- Do Doodle decorative elements
- Do Slight rotation on elements for sketch feel
- Do Colorful marker accent colors
- Do Responsive with maintained sketch aesthetic


## Use Case

Playful branding, Creative agencies, Youth products, Fun editorial design

<!-- Source: https://designmd.app/library/conceptual-sketch-doodle-art · designmd.app -->
