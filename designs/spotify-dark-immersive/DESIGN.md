---
version: "alpha"
name: "Spotify Dark Immersive"
description: "Spotify-inspired dark immersive landing page. Ideal for streaming de música, plataformas de áudio, podcasts, entretenimento digital. AI-ready template."
colors:
  primary: "#121212"
  secondary: "#181818"
  tertiary: "#1f1f1f"
  neutral: "#1ed760"
  surface: "#ffffff"
  accent: "#b3b3b3"
typography:
  h1:
    fontFamily: system-ui
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: system-ui
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: system-ui
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 9999px
  md: 19998px
  lg: 29997px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 742
  author: "designmd.app"
  source: "https://designmd.app/library/spotify-dark-immersive"
  tags: ["风格模板", "streaming de música", "plataformas de áudio", "podcasts"]
---

## Overview

Spotify-inspired dark immersive landing page. Ideal for streaming de música, plataformas de áudio, podcasts, entretenimento digital. AI-ready template. Spotify didn't invent dark UI — but they made it feel inevitable. When the app launched in 2008, most music software still clung to skeuomorphic chrome and light backgrounds. Spotify went black. Not because dark mode was trendy (it wasn't yet), but because darkness made album art pop. The content became the interface. That single decision shaped an entire generation of media players.

The signature green (#1DB954) emerged as a deliberate counterpoint — electric, almost aggressive against the near-black canvas. It wasn't decorative. It was functional: a beacon for primary actions in a sea of muted grays. Over the years, Spotify refined this into something more sophisticated — layered surfaces with subtle elevation, blurred gradients pulled from album artwork, and a typographic hierarchy that breathes. The "immersive" quality comes from this layering: backgrounds that shift contextually, color extraction that makes every album feel like it owns the screen, and transitions smooth enough that navigation feels like flowing between rooms rather than clicking between pages.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Near-Black Immersive, Spotify Green Accent, Pill-and-Circle Geometry, Uppercase Wide-Tracked Buttons, Heavy Shadows
- **Keywords:** spotify, dark immersive, Spotify Green, near-black, pill buttons, circle controls, uppercase buttons, wide tracking, heavy shadows, album art, SpotifyMixUI
- **Era:** 2024-2026 Music Streaming
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Near Black** (#121212) — Dark surface, primary background
- **Dark Surface** (#181818) — Dark surface, primary background
- **Mid Dark** (#1f1f1f) — Dark surface, primary background
- **Spotify Green** (#1ed760) — Supporting palette color
- **Branco** (#ffffff) — Secondary surface
- **Silver** (#b3b3b3) — Extended palette, decorative use
- **Borda** (#4d4d4d) — Extended palette, decorative use
- **Red** (#f3727f) — Error states, destructive actions


## Typography

- **Display / Hero:** system-ui — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Canvas near-black imersivo (#121212, #181818, #1f1f1f) — UI desaparece para conteúdo brilhar. Spotify Green (#1ed760) como acento funcional singular — play buttons, estados ativos, CTAs. Geometria pill-and-circle: botões pill (500px-9999px), controles play circulares (50%). Botões uppercase com letter-spacing largo (1.4px-2px). Sombras heavy (rgba(0,0,0,0.5) 0px 8px 24px) para elementos elevados. Inset border-shadow combo em inputs. Album art como fonte primária de cor. Tipografia compacta (10px-24px range).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Near-black imersivo #121212
- Do Spotify Green #1ed760 funcional
- Do Pill buttons 9999px
- Do Circle controls 50%
- Do Uppercase buttons 1.4-2px tracking
- Do Heavy shadows 0.5 opacity
- Do Tipografia compacta
- Do Album art como cor
- Do Responsivo


## Use Case

Streaming de música, Platforms de áudio, Podcasts, Entretenimento digital

<!-- Source: https://designmd.app/library/spotify-dark-immersive · designmd.app -->
