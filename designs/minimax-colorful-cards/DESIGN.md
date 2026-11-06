---
version: "alpha"
name: "MiniMax Colorful Cards"
description: "MiniMax-inspired landing page with white canvas and colorful product cards. Ideal for plataformas de ia multi-modelo, galerias de ai, produtos consumer ai, showcases de tecnologia. AI-ready template."
colors:
  primary: "#ffffff"
  secondary: "#222222"
  tertiary: "#1456f0"
  neutral: "#ea5ec1"
  surface: "#3b82f6"
  accent: "#181e25"
typography:
  h1:
    fontFamily: DM Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: DM Sans
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 20px
  md: 40px
  lg: 60px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 566
  author: "designmd.app"
  source: "https://designmd.app/library/minimax-colorful-cards"
  tags: ["风格模板", "galerias de ai", "produtos consumer ai"]
---

## Overview

MiniMax-inspired landing page with white canvas and colorful product cards. Ideal for plataformas de ia multi-modelo, galerias de ai, produtos consumer ai, showcases de tecnologia. AI-ready template. The colorful card on a white canvas isn't new — it's a direct descendant of the Material Design card system Google introduced in 2014, but stripped of its shadows and depth cues. What MiniMax and similar AI-native products did was flatten that paradigm further: no elevation, no border, just pure hue sitting on white. The logic is simple. When your product does something complex (generative AI, multi-modal creation), your interface needs to feel approachable. Color becomes the wayfinding system. Each card is a door, and the color tells you what's behind it before you read a single word.

This pattern gained serious traction around 2022-2023 as consumer AI products exploded. Notion AI, Character.ai, and dozens of creative tools adopted it simultaneously — not because they copied each other, but because the constraint was identical: make something powerful feel like a toy. The white canvas provides breathing room. The saturated, slightly muted palette signals playfulness without childishness. It's the design equivalent of speaking in a calm voice about something exciting.

What makes MiniMax's execution notable is the commitment to flatness. No gradients pretending to be flat. No subtle inner shadows hedging the bet. Just color, radius, and whitespace doing all the work.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** White Canvas, Colorful Product Cards, Multi-Font, Pill Nav, Purple Shadows
- **Keywords:** minimax, colorful cards, white canvas, multi-font, pill nav, purple shadows, DM Sans, Outfit, approachable AI, product gallery
- **Era:** 2024-2026 Approachable AI
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Branco** (#ffffff) — Light surface, card backgrounds
- **Quase Preto** (#222222) — Dark surface, primary background
- **Azul Brand** (#1456f0) — Primary accent, CTAs and interactive elements
- **Rosa Brand** (#ea5ec1) — Primary accent, CTAs and interactive elements
- **Azul Primary** (#3b82f6) — Primary accent, CTAs and interactive elements
- **Escuro** (#181e25) — Deep contrast surface
- **Cinza** (#45515e) — Secondary text, borders, muted elements
- **Borda** (#e5e7eb) — Extended palette, decorative use


## Typography

- **Display / Hero:** DM Sans — Weight 700, tight tracking, used for headline impact
- **Accent:** Outfit — Used for decorative or emphasis text
- **Body:** DM Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** DM Sans — 0.875rem, weight 500, slight letter-spacing
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

Canvas branco dominante com cards de produto coloridos como âncoras visuais. Cards com gradientes vibrantes (rosa, roxo, laranja, azul) como galeria de IA. Sombras purple-tinted (rgba(44,30,116,0.16)) criando glow de marca. Pill nav (9999px) para navegação e toggles. Cards generosamente arredondados (20-24px). Multi-font: DM Sans (UI), Outfit (display), Poppins (mid-tier). Hero 80px weight 500 line-height 1.10. Line-height universal 1.50.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.


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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Canvas branco com cards coloridos
- Do Gradientes vibrantes nos cards
- Do Sombras purple-tinted
- Do Pill nav 9999px
- Do Cards 20-24px radius
- Do Multi-font system
- Do Hero 80px weight 500
- Do Responsivo


## Use Case

Platforms de IA multi-modelo, Galerias de AI, Products consumer AI, Showcases de tecnologia

<!-- Source: https://designmd.app/library/minimax-colorful-cards · designmd.app -->
