---
version: "alpha"
name: "Cyber Core"
description: "Cyber core landing page with neon-lit, high-speed digital aesthetics. Ideal for marcas de gaming, design de pôsteres, branding digital edgy, portfólios tech. AI-ready template."
colors:
  primary: "#00FFFF"
  secondary: "#00FF41"
  tertiary: "#0A0A0A"
  neutral: "#C0C0C0"
  surface: "#FF00FF"
  accent: "#0066FF"
typography:
  h1:
    fontFamily: Share Tech Mono
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Share Tech Mono
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
  order: 299
  author: "designmd.app"
  source: "https://designmd.app/library/cyber-core"
  tags: ["风格模板", "marcas de gaming", "design de pôsteres", "portfólios tech"]
---

## Overview

Cyber core landing page with neon-lit, high-speed digital aesthetics. Ideal for marcas de gaming, design de pôsteres, branding digital edgy, portfólios tech. AI-ready template. Cyber Core didn't emerge from design studios — it crawled out of late-90s hacker culture, IRC channels, and the visual language of early intrusion detection systems. The aesthetic owes everything to films like Hackers (1995) and The Matrix (1999), but its real DNA lives in the interfaces nobody was supposed to see: packet sniffers, hex editors, terminal emulators with phosphor burn. Neon on black wasn't a style choice — it was a constraint of CRT monitors running at 2AM.

The revival we're seeing now is driven by cybersecurity's mainstream moment. Every breach headline, every ransomware attack, every CTF competition reinforces the visual vocabulary. Circuit board traces became ornamental. Matrix rain became shorthand for 'digital.' But the best Cyber Core work remembers that the original aesthetic was functional — high contrast for readability, monospace for alignment, color-coding for threat levels. The style works because it was never decorative to begin with.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Neon-Lit, Circuit, Metallic, High-Speed Digital
- **Keywords:** Cyber core, neon, circuit board, metallic, heavy shadows, pop-up windows, OS-style, digital, gaming, edgy, high-speed
- **Era:** 2010s-2020s Digital Subculture
- **Light/Dark:** ◐ Partial / ✓ Full

## Colors

- **Neon Cyan** (#00FFFF) — Accent highlight, links and focus states
- **Matrix Green** (#00FF41) — Secondary surface or text color
- **Deep Black** (#0A0A0A) — Dark surface, primary background
- **Chrome Silver** (#C0C0C0) — Supporting palette color
- **Neon Pink** (#FF00FF) — Primary text color
- **Electric Blue** (#0066FF) — Secondary accent
- **Warning Red** (#FF3333) — Error states, destructive actions
- **Dark Grey** (#1A1A2E) — Deep contrast surface


## Typography

- **Display / Hero:** Share Tech Mono — Weight 700, tight tracking, used for headline impact
- **Body:** Share Tech Mono — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Share Tech Mono — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Share Tech Mono — Used for code, metadata, and technical values

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

Neon glow borders (box-shadow: 0 0 15px), circuit board pattern backgrounds via CSS, metallic gradient text, OS-style window frame sections with title bars, scanline overlay, glitch animation on hover, heavy drop shadows

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 2px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Neon glow borders and text
- Do Circuit board pattern backgrounds
- Do OS-style window frame sections
- Do Metallic gradient text effects
- Do Scanline overlay
- Do Glitch hover animations
- Do Monospace tech typography
- Do Dark base with neon accents
- Do Responsive with maintained digital edge


## Use Case

Gaming brands, Poster design, Edgy digital branding, Tech portfolios

<!-- Source: https://designmd.app/library/cyber-core · designmd.app -->
