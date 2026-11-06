---
version: "alpha"
name: "Pop Art"
description: "Pop Art landing page with extremely saturated bold colors and comic-strip aesthetics. Ideal for branding lúdico, design de vestuário, embalagens icônicas, capas editoriais. AI-ready template."
colors:
  primary: "#FF0000"
  secondary: "#FFFF00"
  tertiary: "#0000FF"
  neutral: "#FFFFFF"
  surface: "#FF69B4"
  accent: "#FF8C00"
typography:
  h1:
    fontFamily: Bangers
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bangers
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
  order: 639
  author: "designmd.app"
  source: "https://designmd.app/library/pop-art"
  tags: ["风格模板", "branding lúdico", "design de vestuário", "embalagens icônicas"]
---

## Overview

Pop Art landing page with extremely saturated bold colors and comic-strip aesthetics. Ideal for branding lúdico, design de vestuário, embalagens icônicas, capas editoriais. AI-ready template. Pop Art didn't ask permission. It kicked down the gallery door in the late 1950s and dragged commercial culture — soup cans, comic strips, celebrity headshots — into spaces that had been reserved for oil-on-canvas reverence. Warhol understood repetition as critique; Lichtenstein turned Ben-Day dots into a weapon against artistic pretension. The movement was a direct rejection of Abstract Expressionism's navel-gazing — suddenly art could be loud, accessible, and mass-produced without apology.

What makes Pop Art endure in design isn't nostalgia — it's the underlying philosophy. These artists treated visual culture as raw material. They flattened hierarchy between high and low, proving that a Brillo box could carry the same weight as a Rothko. That democratization of imagery is essentially what every brand designer does today when they pull from memes, street culture, or TikTok aesthetics.

The palette was never subtle. Saturated magentas, electric yellows, cyan pushed to the edge — colors chosen for maximum retinal impact, borrowed directly from commercial printing limitations that became deliberate stylistic choices.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Saturated, Bold, Comic-Strip, Repetitive
- **Keywords:** Pop art, saturated colors, bold, comic strip, Andy Warhol, Roy Lichtenstein, halftone dots, repetition, everyday objects, iconic
- **Era:** 1950s-1960s Pop Art Movement
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Pop Red** (#FF0000) — Error states, destructive actions
- **Pop Yellow** (#FFFF00) — Warning states, attention indicators
- **Pop Blue** (#0000FF) — Accent highlight, links and focus states
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Hot Pink** (#FF69B4) — Primary text color
- **Bright Orange** (#FF8C00) — Warm accent, call-to-action secondary
- **Lime Green** (#32CD32) — Success states, positive indicators
- **Black** (#000000) — Deep contrast surface


## Typography

- **Display / Hero:** Bangers — Weight 700, tight tracking, used for headline impact
- **Body:** Bangers — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bangers — 0.875rem, weight 500, slight letter-spacing
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

Halftone dot pattern overlays (CSS radial-gradient), bold black outlines (3-4px), comic speech bubble shapes, Ben-Day dots background, repetitive grid layouts (Warhol-style), high saturation filters, pop-in scale animations

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

- Do Extremely saturated bold colors
- Do Halftone dot pattern overlays
- Do Bold black outlines on all elements
- Do Comic speech bubble shapes
- Do Repetitive grid layouts
- Do Bold uppercase comic typography
- Do High saturation maintained
- Do Responsive with maintained pop energy


## Use Case

Playful branding, Clothing design, Iconic packaging, Editorial covers

<!-- Source: https://designmd.app/library/pop-art · designmd.app -->
