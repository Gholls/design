---
version: "alpha"
name: "Comic Book / Pop Art"
description: "Comic book pop art interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FFDD00"
  secondary: "#FF3333"
  tertiary: "#0066CC"
  neutral: "#000000"
  surface: "#FFFFFF"
typography:
  h1:
    fontFamily: impact/bold
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: impact/bold
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: impact/bold
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 274
  author: "designmd.app"
  source: "https://designmd.app/library/comic-book-pop-art"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Comic book pop art interface. Ideal for landing pages, saas. AI-ready template. Roy Lichtenstein didn't just borrow from comics — he detonated them. Took the throwaway panels of romance and war strips, blew them up to gallery scale, and forced the art world to reckon with low culture as high form. Those Ben-Day dots weren't decoration. They were a statement about mechanical reproduction, about the distance between feeling and image. Warhol did something adjacent but different — repetition as commentary, the celebrity panel as sequential narrative without a plot.

What's wild is how naturally this translates to interface design. Comic panels ARE layout. They've always been grids with hierarchy, pacing, and deliberate reading order. Speech bubbles are tooltips and notifications before those things existed. The bold outlines that defined characters against flat color? That's contrast ratios solved intuitively decades before WCAG.

Designers building narrative interfaces — onboarding flows, storytelling microsites, game UIs — keep rediscovering what Kirby and Ditko knew in the '60s. Sequential panels create temporal rhythm on a static page. You don't need animation to imply motion. You need composition.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Bold, Colorful, Narrative, Pop
- **Keywords:** Sequential panels, speech bubbles, Ben-Day dots, thick ink outlines, jagged explosion bursts, halftone screens, heroic, bold, action
- **Era:** 1960s Pop Art
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Bright Yellow** (#FFDD00) — Warning states, attention indicators
- **Red** (#FF3333) — Error states, destructive actions
- **Blue** (#0066CC) — Accent highlight, links and focus states
- **Black** (#000000) — Dark surface, primary background
- **White** (#FFFFFF) — Light surface, card backgrounds


## Typography

- **Display / Hero:** impact/bold — Weight 700, tight tracking, used for headline impact
- **Body:** impact/bold — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** impact/bold — 0.875rem, weight 500, slight letter-spacing
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

Flat comic lighting, heavy black shadows, no smooth transitions, bold hover (color shift), panel reveal animations, speech bubble pop-in

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

- Do Thick outlines present
- Do Ben-Day dots visible
- Do Speech bubbles styled
- Do Burst shapes active
- Do Primary colors bold
- Do Panel layout sequential


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/comic-book-pop-art · designmd.app -->
