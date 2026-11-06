---
version: "alpha"
name: "Y2K"
description: "Y2K landing page with vibrant neon colors and early 2000s tech optimism. Ideal for editoriais de moda, colagens digitais, campanhas de streetwear, social networks. AI-ready template."
colors:
  primary: "#FF1493"
  secondary: "#00BFFF"
  tertiary: "#32CD32"
  neutral: "#C0C0C0"
  surface: "#BF00FF"
  accent: "#F0F0FF"
typography:
  h1:
    fontFamily: Orbitron
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Orbitron
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 24px
  md: 48px
  lg: 72px
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
  order: 856
  author: "designmd.app"
  source: "https://designmd.app/library/y2k"
  tags: ["风格模板", "editoriais de moda", "colagens digitais", "social networks"]
---

## Overview

Y2K landing page with vibrant neon colors and early 2000s tech optimism. Ideal for editoriais de moda, colagens digitais, campanhas de streetwear, social networks. AI-ready template. Y2K design didn't emerge from a vacuum — it was the visual language of a generation that genuinely believed the future had arrived. Between 1997 and 2003, every surface got the treatment: inflatable chrome typography, translucent plastics lifted straight from iMac G3 casings, and color palettes that looked like someone liquefied a rave flyer. Designers were drunk on optimism and Macromedia Flash.

The aesthetic pulled from multiple streams simultaneously. Japanese street fashion, early internet culture, Britney-era pop maximalism, and the literal Y2K anxiety that made everything feel urgent and temporary. Nothing was subtle because subtlety felt like a waste when the millennium was turning over.

What makes Y2K interesting now isn't nostalgia alone — it's that the original movement was already referencing futures that never happened. We're nostalgic for an imagined tomorrow. That recursive quality gives contemporary Y2K revival its strange depth. It's not retro in the traditional sense. It's speculative fiction wearing lip gloss.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Neon, Grunge, Bubbly, Tech-Optimism
- **Keywords:** Y2K, year 2000, neon vibrant, grunge textures, bubbly typography, futuristic, tech optimism, millennium, chrome, iridescent
- **Era:** Late 1990s - Early 2000s
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Hot Pink** (#FF1493) — Primary text color
- **Electric Blue** (#00BFFF) — Accent highlight, links and focus states
- **Lime Green** (#32CD32) — Supporting palette color
- **Chrome Silver** (#C0C0C0) — Supporting palette color
- **Neon Purple** (#BF00FF) — Accent color, emphasis elements
- **Iridescent White** (#F0F0FF) — Secondary surface
- **Cyber Yellow** (#FFE000) — Warning states, attention indicators
- **Bubblegum** (#FF69B4) — Extended palette, decorative use


## Typography

- **Display / Hero:** Orbitron — Weight 700, tight tracking, used for headline impact
- **Accent:** Fredoka One — Used for decorative or emphasis text
- **Body:** Orbitron — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Orbitron — 0.875rem, weight 500, slight letter-spacing
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

Chrome/metallic text effects (background-clip: text with gradient), iridescent shimmer overlays, grunge texture backgrounds, bubbly rounded shapes (24px+), star/sparkle decorations, glitch-like hover effects, Y2K-style window frames

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


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

- Do Vibrant neon color palette
- Do Chrome/metallic text effects
- Do Iridescent shimmer overlays
- Do Bubbly rounded shapes (24px+)
- Do Star/sparkle decorations
- Do Grunge texture accents
- Do Tech-optimistic millennium energy
- Do Responsive with maintained vibrancy


## Use Case

Editoriais de moda, Colagens digitais, Campanhas de streetwear, Social networks

<!-- Source: https://designmd.app/library/y2k · designmd.app -->
