---
version: "alpha"
name: "Expo Luminous Developer"
description: "Design an Expo-inspired luminous developer landing page. Ideal for plataformas cross-platform, react native, sdks mobile, ferramentas de build. AI-ready template."
colors:
  primary: "#f0f0f3"
  secondary: "#000000"
  tertiary: "#1c2024"
  neutral: "#ffffff"
  surface: "#60646c"
  accent: "#b0b4ba"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 6px
  md: 12px
  lg: 18px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 389
  author: "designmd.app"
  source: "https://designmd.app/library/expo-luminous-developer"
  tags: ["风格模板", "react native", "sdks mobile", "ferramentas de build"]
---

## Overview

Design an Expo-inspired luminous developer landing page. Ideal for plataformas cross-platform, react native, sdks mobile, ferramentas de build. AI-ready template. Expo emerged as the antidote to React Native's notoriously painful setup process. What started as a managed workflow for beginners evolved into a legitimate production toolchain that companies like Shopify and Discord rely on daily. The shift happened around 2020-2021 when Expo stopped being "training wheels" and became the recommended way to build React Native apps — period.

The "Luminous Developer" aesthetic captures a specific moment in dev tooling design: the post-dark-mode era where tools started competing on visual identity, not just functionality. Think VS Code themes, Vercel's design language, Linear's interface. Developer tools finally admitted that aesthetics matter, that a beautiful CLI output or a well-designed error screen actually improves productivity.

This futuristic tech direction leans into luminous gradients, glowing UI elements, and high-contrast dark interfaces that signal "cutting edge" without falling into cyberpunk cliché. It's the visual language of tools that respect developers as designers of their own workflows.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Luminous Canvas, Pill Geometry, Monochromatic, Gallery Spacing, Inter Full Range
- **Keywords:** expo, luminous, developer, pill geometry, monochromatic, gallery spacing, Inter, cloud gray, whisper shadows, cross-platform
- **Era:** 2024-2026 Cross-Platform Developer
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Cloud Gray** (#f0f0f3) — Secondary text, borders, muted elements
- **Preto** (#000000) — Dark surface, primary background
- **Quase Preto** (#1c2024) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Slate Gray** (#60646c) — Secondary text, borders, muted elements
- **Silver** (#b0b4ba) — Extended palette, decorative use
- **Cobalt Link** (#0d74ce) — Primary text color
- **Borda Lavanda** (#e0e1e6) — Extended palette, decorative use


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

Canvas luminoso cool-white (#f0f0f3) com espaçamento vertical de galeria. Estritamente monocromático — cor apenas em screenshots de produto. Geometria pill em todo lugar (24px-9999px). Headlines massivas (64px) com letter-spacing extremo negativo (-1.6px a -3px). Inter como única fonte, pesos 400-900. Sombras whisper-soft que mal levantam elementos. Cards brancos flutuando sobre Cloud Gray.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 6px. See rounded tokens in front matter for the full scale.


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

- Do Canvas cool-white #f0f0f3
- Do Monocromático — cor só em screenshots
- Do Pill geometry 24px-9999px
- Do Headlines 64px tracking negativo extremo
- Do Inter 400-900
- Do Sombras whisper
- Do Espaçamento de galeria 96px+
- Do Responsivo


## Use Case

Platforms cross-platform, React Native, SDKs mobile, Tools de build

<!-- Source: https://designmd.app/library/expo-luminous-developer · designmd.app -->
