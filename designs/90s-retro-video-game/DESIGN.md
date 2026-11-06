---
version: "alpha"
name: "90s Retro Video Game"
description: "90s/Y2K retro video game style landing page. Ideal for games indie, projetos nostálgicos, marketing y2k, streaming, comunidades gamer. AI-ready template."
colors:
  primary: "#FF69B4"
  secondary: "#CCFF00"
  tertiary: "#9B59B6"
  neutral: "#00BFFF"
  surface: "#FF85A2"
  accent: "#FF6B35"
typography:
  h1:
    fontFamily: Press Start 2P
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Press Start 2P
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 115
  author: "designmd.app"
  source: "https://designmd.app/library/90s-retro-video-game"
  tags: ["风格模板", "games indie", "projetos nostálgicos", "marketing y2k"]
---

## Overview

90s/Y2K retro video game style landing page. Ideal for games indie, projetos nostálgicos, marketing y2k, streaming, comunidades gamer. AI-ready template. The 90s video game aesthetic wasn't designed to be nostalgic — it was the bleeding edge. When Sega and Nintendo were locked in their console war, every pixel was a deliberate choice made under brutal technical constraints. The SNES could push 256 colors on screen from a palette of 32,768. The Genesis had a smaller palette but faster processing. These limitations forced artists to become masters of suggestion — a four-frame walk cycle that somehow conveyed personality, backgrounds built from repeating 8x8 tiles that still felt like living worlds.

What we now call '16-bit style' was really a collision of Japanese illustration traditions, American comic book energy, and the raw problem-solving of artists working within 64KB of VRAM. The typography was chunky and unapologetic — built for CRT scanlines and living room distances. Color palettes ran hot: saturated blues, electric greens, that specific shade of purple that only existed in Sonic box art.

The Y2K crossover period (roughly 1996-2001) added a layer of early 3D experimentation, metallic gradients, and that unmistakable 'future that never happened' optimism. This era's design language sits at the intersection of pixel craft and the first wave of digital maximalism.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Pixel Art, Neon, Y2K, Chunky, Nostalgic
- **Keywords:** 90s, Y2K, retro, pixel art, neon, bubblegum, chunky typography, arcade, video game, nostalgic, 8-bit
- **Era:** 1990s / Y2K (1995-2005)
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Hot Pink** (#FF69B4) — Primary text color
- **Electric Lime** (#CCFF00) — Secondary surface or text color
- **Cyber Purple** (#9B59B6) — Accent color, emphasis elements
- **Arcade Blue** (#00BFFF) — Accent highlight, links and focus states
- **Bubblegum** (#FF85A2) — Extended palette, decorative use
- **Neon Orange** (#FF6B35) — Warm accent, call-to-action secondary
- **Pixel Green** (#00FF41) — Success states, positive indicators
- **Chrome Yellow** (#FFD700) — Warning states, attention indicators


## Typography

- **Display / Hero:** Press Start 2P' or monospace — Weight 700, tight tracking, used for headline impact
- **Body:** Press Start 2P' or monospace — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Press Start 2P' or monospace — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Press Start 2P' or monospace — Used for code, metadata, and technical values

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

Pixel-art style borders (image-rendering: pixelated), neon glow text-shadow, chunky rounded typography (800+ weight), scanline overlay effect, CRT screen curvature, retro gradient backgrounds, blink/flash animations for arcade feel

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
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

- Do Pixel art style elements
- Do Neon/bubblegum color palette
- Do Chunky bold typography
- Do Scanline or CRT overlay effect
- Do Retro gradient backgrounds
- Do Arcade-style interactive elements


## Use Case

Indie games, Nostalgic projects, Y2K marketing, Streaming, Gaming communities

<!-- Source: https://designmd.app/library/90s-retro-video-game · designmd.app -->
