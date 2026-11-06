---
version: "alpha"
name: "Vaporwave Aesthetic"
description: "Vaporwave aesthetic interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FF71CE"
  secondary: "#1C1C5E"
  tertiary: "#E63E85"
  neutral: "#E8AF3F"
  surface: "#01CDFE"
  accent: "#B967FF"
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
  order: 812
  author: "designmd.app"
  source: "https://designmd.app/library/vaporwave-aesthetic"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Vaporwave aesthetic interface. Ideal for landing pages, saas. AI-ready template. Before vaporwave had a name, it had a cover. Macintosh Plus's "Floral Shoppe" (2011) dropped a chopped-and-screwed Diana Ross track over a Greek bust rendered in that specific shade of pink-purple that CRT monitors never quite got right. That image — marble sculpture, Japanese text, checkerboard floor fading into nothing — became the entire genre's visual thesis. Not the glitchy, VHS-tracking side. The dreamy one. The side that whispers rather than stutters.

The aesthetic pulled from a very particular technological moment: Windows 95 startup screens, early web clip art, those 3D-rendered palm trees that populated every shareware screensaver. But it recontextualized them through a haze of nostalgia for something most of its audience never actually experienced. That's the surreal quality — mourning a past that was always already fictional. Greek statues weren't references to classicism. They were references to the mall fountain you walked past as a kid, rendered in 256 colors.

This dreamlike branch diverged sharply from synthwave's neon aggression and glitch art's deliberate corruption. Where those styles attack, vaporwave's surreal side floats. It became internet shorthand for a specific emotional register: melancholy wrapped in pastel, capitalism critiqued through its own abandoned aesthetics, nostalgia as both comfort and trap.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Surreal, Pastel, Digital, Nostalgic
- **Keywords:** Dreamy, nostalgic, surreal, digital, glitch effects, Greek sculptures, palm trees, sunset gradients, neon pink/purple, ethereal, 90s internet
- **Era:** 1990s Internet Aesthetic
- **Light/Dark:** ✓ Full / ✓ Dark focused

## Colors

- **Hot Pink** (#FF71CE) — Primary text color
- **Deep Blue** (#1C1C5E) — Accent highlight, links and focus states
- **Magenta** (#E63E85) — Decorative accent, highlight elements
- **Gold** (#E8AF3F) — Premium accent, decorative highlights
- **Cyan** (#01CDFE) — Secondary accent
- **Purple** (#B967FF) — Accent color, emphasis elements
- **Mint** (#05FFA1) — Extended palette, decorative use


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

Neon pink/purple gradient glow, glitch effects, VHS scan lines, ethereal floating animations, surreal transitions, retro grid perspective

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

- Do Sunset gradient present
- Do Neon glow applied
- Do Retro grid visible
- Do Glitch effects subtle
- Do Ethereal atmosphere
- Do 90s nostalgia feel


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/vaporwave-aesthetic · designmd.app -->
