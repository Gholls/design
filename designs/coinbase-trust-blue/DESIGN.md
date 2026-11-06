---
version: "alpha"
name: "Coinbase Trust Blue"
description: "Coinbase-inspired clean fintech landing page. Ideal for exchanges crypto, fintechs, plataformas financeiras, wallets digitais. AI-ready template."
colors:
  primary: "#0052ff"
  secondary: "#ffffff"
  tertiary: "#0a0b0d"
  neutral: "#eef0f3"
  surface: "#578bfa"
  accent: "#0667d0"
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
  sm: 56px
  md: 112px
  lg: 168px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 260
  author: "designmd.app"
  source: "https://designmd.app/library/coinbase-trust-blue"
  tags: ["风格模板", "exchanges crypto", "fintechs", "wallets digitais"]
---

## Overview

Coinbase-inspired clean fintech landing page. Ideal for exchanges crypto, fintechs, plataformas financeiras, wallets digitais. AI-ready template. Coinbase didn't invent blue in fintech — but they weaponized it. When the crypto space was drowning in neon gradients and dark-mode-everything aesthetics circa 2017-2019, Coinbase made a deliberate pivot toward institutional trust. They chose a specific blue — not the warm, friendly PayPal blue, not the corporate Chase navy — but a cooler, slightly desaturated tone that whispered 'we are the adults in the room.' It was a calculated rejection of crypto's anarchist visual roots.

The timing mattered. As Bitcoin went mainstream and regulatory scrutiny intensified, Coinbase needed to look like a bank without feeling like one. Their blue became a bridge: familiar enough to signal financial legitimacy, modern enough to retain tech credibility. It's the visual equivalent of wearing a blazer with no tie.

What makes this palette genuinely interesting is how it aged. While competitors kept chasing trends — glassmorphism, aurora gradients, AI-purple — Coinbase's trust blue remained stable. That consistency itself became a trust signal. The palette proved that in crypto, where everything moves fast and breaks things, visual restraint is a radical act.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Clean Fintech, Coinbase Blue Accent, Proprietary Four-Font System, 56px Pill Radius, Binary Light/Dark
- **Keywords:** coinbase, trust, blue, fintech, crypto, CoinbaseDisplay, CoinbaseSans, CoinbaseText, 56px pill, binary light/dark, institutional, lowercase buttons
- **Era:** 2024-2026 Institutional Crypto
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Coinbase Blue** (#0052ff) — Primary background surface
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Near Black** (#0a0b0d) — Dark surface, primary background
- **Cool Gray** (#eef0f3) — Secondary text, borders, muted elements
- **Hover Blue** (#578bfa) — Secondary accent
- **Link Blue** (#0667d0) — Primary text color
- **Dark Card** (#282b31) — Deep contrast surface
- **Borda** (rgba(91,97,110,0.2)) — Extended palette, decorative use


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

Coinbase Blue (#0052ff) como acento singular de confiança institucional. Sistema de quatro fontes proprietárias: Display para hero (80px weight 400 line-height 1.00), Sans para UI, Text para body, Icons para ícones. Botões pill com radius 56px assinatura. Seções alternando branco e dark (#0a0b0d). Hover transiciona para azul claro (#578bfa). Cool gray surface (#eef0f3) com blue tint. text-transform: lowercase em alguns labels — escolha incomum.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 56px. See rounded tokens in front matter for the full scale.


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

- Do Coinbase Blue #0052ff singular
- Do Display 80px line-height 1.00
- Do Pill buttons 56px radius
- Do Alternância branco/dark
- Do Hover azul claro
- Do Cool gray surface
- Do Focus 2px solid black
- Do Responsivo


## Use Case

Exchanges crypto, Fintechs, Platforms financeiras, Wallets digitais

<!-- Source: https://designmd.app/library/coinbase-trust-blue · designmd.app -->
