---
version: "alpha"
name: "Chalkboard / Hand-Drawn"
description: "Chalkboard hand-drawn interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#2D5016"
  secondary: "#FFFFFF"
  tertiary: "#FFFF00"
  neutral: "#FF6B6B"
  surface: "#4ECDC4"
typography:
  h1:
    fontFamily: hand-drawn/chalk style
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: hand-drawn/chalk style
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: hand-drawn/chalk style
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 237
  author: "designmd.app"
  source: "https://designmd.app/library/chalkboard-hand-drawn"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Chalkboard hand-drawn interface. Ideal for landing pages, saas. AI-ready template. The chalkboard aesthetic didn't start on Pinterest. It started in pubs, in classrooms, on the sidewalk signs of bakeries that couldn't afford printed menus. Hand-drawn lettering carried information before typography was democratized — and it carried personality with it. Every wobbly serif, every smudged edge said: a human was here.

Digital design rediscovered this in the early 2010s. Suddenly every coffee shop website needed a blackboard texture and some faux-chalk script. Most of it was terrible — slapping a grunge overlay on Lobster font isn't craft, it's costume. But the good stuff understood something deeper: imperfection is a trust signal. When everything around you is pixel-perfect and suspiciously polished, a hand-drawn line feels like eye contact.

Now, in a landscape flooded with AI-generated imagery, the chalkboard style hits differently. It's a deliberate rejection of frictionless production. The eraser smudges, the uneven baselines, the dust — they say this wasn't generated in three seconds. Whether that's true or not, the feeling lands. Warmth through visible effort.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Hand-Drawn, Textured, Organic, Informal
- **Keywords:** Chalk-drawn, hand-lettered, eraser smudges, classroom, educational, informal, workshop-style, sketch, whiteboard
- **Era:** Classroom Aesthetic
- **Light/Dark:** ✓ Full / ✗ No (dark BG only)

## Colors

- **Dark Green Board** (#2D5016) — Dark surface, primary background
- **Chalk White** (#FFFFFF) — Light surface, card backgrounds
- **Chalk Yellow** (#FFFF00) — Warning states, attention indicators
- **Chalk Red** (#FF6B6B) — Error states, destructive actions
- **Chalk Teal** (#4ECDC4) — Secondary accent


## Typography

- **Display / Hero:** hand-drawn/chalk style — Weight 700, tight tracking, used for headline impact
- **Body:** hand-drawn/chalk style — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** hand-drawn/chalk style — 0.875rem, weight 500, slight letter-spacing
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

Flat classroom lighting, chalk drawing animations (stroke-dasharray), eraser wipe transitions, hand-drawn wobble, sketch reveal on scroll

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

- Do Chalkboard background
- Do Chalk text effect
- Do Hand-drawn elements
- Do Eraser smudges subtle
- Do Educational feel
- Do Sketch icons present


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/chalkboard-hand-drawn · designmd.app -->
