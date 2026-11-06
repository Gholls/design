---
version: "alpha"
name: "ClickHouse Neon Volt"
description: "ClickHouse-inspired neon performance landing page. Ideal for databases, analytics em tempo real, infraestrutura de dados, data warehouses. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#faff69"
  tertiary: "#166534"
  neutral: "#141414"
  surface: "#f4f692"
  accent: "#4f5100"
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
  sm: 4px
  md: 8px
  lg: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 252
  author: "designmd.app"
  source: "https://designmd.app/library/clickhouse-neon-volt"
  tags: ["风格模板", "databases", "data warehouses"]
---

## Overview

ClickHouse-inspired neon performance landing page. Ideal for databases, analytics em tempo real, infraestrutura de dados, data warehouses. AI-ready template. Neon signage didn't become a design language by accident. It emerged from the collision of urban nightlife, cyberpunk fiction, and the raw electricity of early computing culture. The acid yellow-green — that specific wavelength that burns into your retina — traces back to phosphor CRT monitors, the original interface between humans and machines. It's the color of data in motion, of terminal cursors blinking in dark rooms where the real work happened.

ClickHouse Neon Volt takes that lineage seriously. It's not retro-futurism cosplay — it's an acknowledgment that high-performance data systems deserve a visual language as intense as their throughput. The palette channels the energy of real-time analytics: millions of rows processed per second, columnar storage compressing terabytes, queries returning before you finish blinking. That voltage isn't decorative. It's functional tension, the visual equivalent of a system running at capacity without breaking a sweat.

The futuristic tech aesthetic here isn't about flying cars or holographic nonsense. It's about the actual future we're building — one where data infrastructure is the backbone of every decision. The neon volt signals: this system is alive, it's fast, and it doesn't apologize for being loud about it.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Acid Yellow-Green on Black, Extra-Heavy Typography, Sharp Corners, Performance Cockpit
- **Keywords:** clickhouse, neon volt, acid yellow-green, extra-heavy, weight 900, sharp corners, performance, database, Inter Black, inset shadows
- **Era:** 2024-2026 Performance Database
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Neon Volt** (#faff69) — Secondary surface or text color
- **Forest Green** (#166534) — Supporting palette color
- **Quase Preto** (#141414) — Dark surface, primary background
- **Pale Yellow** (#f4f692) — Warning states, attention indicators
- **Olive Border** (#4f5100) — Extended palette, decorative use
- **Charcoal** (#414141) — Deep contrast surface
- **Silver** (#a0a0a0) — Extended palette, decorative use


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

Neon acid yellow-green (#faff69) sobre preto puro — contraste máximo. Inter weight 900 (Black) para hero headline em 96px — texto com massa física. Cards com bordas charcoal (#414141) a 80% opacity. Forest green (#166534) para CTAs secundários. Labels uppercase com letter-spacing 1.4px. Active state muda texto para pale yellow (#f4f692). Hover universal para neon. Inset shadows em elementos selecionados. Stats de performance como números oversized.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.


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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Preto com neon #faff69
- Do Inter weight 900 hero
- Do Bordas charcoal
- Do Forest green CTAs
- Do Uppercase labels 1.4px
- Do Active pale yellow
- Do Sharp corners 4px
- Do Stats oversized
- Do Responsivo


## Use Case

Databases, Analytics em tempo real, Infraestrutura de dados, Data warehouses

<!-- Source: https://designmd.app/library/clickhouse-neon-volt · designmd.app -->
