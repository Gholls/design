---
version: "alpha"
name: "HUD / Sci-Fi FUI"
description: "Futuristic HUD (Heads Up Display) or FUI. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#00FFFF"
  secondary: "#0080FF"
  tertiary: "#FF0000"
  neutral: "#333333"
typography:
  h1:
    fontFamily: "monospace border: 1px solid rgba(0"
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: "monospace border: 1px solid rgba(0"
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 476
  author: "designmd.app"
  source: "https://designmd.app/library/hud-sci-fi-fui"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Futuristic HUD (Heads Up Display) or FUI. Ideal for landing pages, saas. AI-ready template. Before anyone called it FUI — Fantasy User Interface — designers in Hollywood were already solving a fascinating problem: how do you make fictional technology feel inevitable? Steven Spielberg's Minority Report (2002) hired MIT researchers to prototype gestural interfaces that wouldn't exist for another decade. Then Iron Man landed in 2008, and suddenly every screen in Tony Stark's lab needed to feel operable. That film's UI work, largely uncredited at the time, spawned an entire discipline.

Jayse Hansen changed the game. His work on Ender's Game, then later Avengers: Age of Ultron, proved that FUI wasn't just eye candy — it was interaction design under extreme narrative constraints. Every element needed to communicate function instantly, without a tutorial, to an audience watching at 24 frames per second. That's harder than most real product design.

The discipline jumped off-screen around 2015. AR headsets needed interfaces that floated in space. VR needed diegetic UI that existed within the world. Gaming HUDs borrowed directly from film FUI language. What started as movie magic became a legitimate design practice — one where the rules of flat-screen UI simply don't apply.

- Density: 7/10 — Compact
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Sci-Fi, Technical, Dark, Interface-Driven
- **Keywords:** Futuristic, technical, wireframe, neon, data, transparency, iron man, sci-fi, interface
- **Era:** 2010s Sci-Fi
- **Light/Dark:** ✓ Low / ✓ Full

## Colors

- **Neon Cyan** (#00FFFF) — Accent highlight, links and focus states
- **Holographic Blue** (#0080FF) — Accent highlight, links and focus states
- **Alert Red** (#FF0000) — Error states, destructive actions
- **Grid Lines** (#333333) — Extended palette, decorative use


## Typography

- **Display / Hero:** monospace — Weight 700, tight tracking, used for headline impact
- **Body:** monospace — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** monospace — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** monospace — Used for code, metadata, and technical values

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

Glow effects, scanning animations, ticker text, blinking markers, fine line drawing

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Fine lines 1px
- Do Neon glow text/borders
- Do Monospaced font
- Do Dark/Transparent BG
- Do Decorative tech markers
- Do Holographic feel


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/hud-sci-fi-fui · designmd.app -->
