---
version: "alpha"
name: "Resend Frost Cinematic"
description: "Resend-inspired cinematic dark landing page. Ideal for apis de email, infraestrutura developer, saas técnico, plataformas de comunicação. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#f0f0f0"
  tertiary: "#ffffff"
  neutral: "#a1a4a5"
  surface: "#ff801f"
  accent: "#22ff99"
typography:
  h1:
    fontFamily: Georgia for hero
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: Georgia for hero
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: Georgia for hero
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
  order: 662
  author: "designmd.app"
  source: "https://designmd.app/library/resend-frost-cinematic"
  tags: ["风格模板", "apis de email", "saas técnico"]
---

## Overview

Resend-inspired cinematic dark landing page. Ideal for apis de email, infraestrutura developer, saas técnico, plataformas de comunicação. AI-ready template. The frost aesthetic in digital interfaces traces back to Apple's introduction of translucent materials in macOS and iOS — but Resend took that language somewhere entirely different. Where Apple used blur as a way to suggest depth within a familiar OS, Resend weaponized it. Their frost treatment isn't decorative; it's atmospheric. It creates a sense of looking through frozen glass at something luminous underneath, which is a surprisingly effective metaphor for infrastructure that's powerful but abstracted away from the user.

The cinematic quality comes from how they handle light. Most developer tool brands default to flat dark themes with neon accents — safe, predictable, forgettable. Resend's approach borrows from sci-fi film color grading: cool blues bleeding into warm highlights, volumetric light suggestions, and a sense that the interface exists in a physical space with actual atmosphere. It's the difference between a screenshot and a still frame.

This matters because email infrastructure is invisible by nature. You never see it working. The frost cinematic language gives Resend a visual identity that feels like peering into the machine — cold, precise, beautiful. It turned a commodity API into something developers actually want to show off.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Pure Black Void, Frost Borders, Three-Font Editorial, Multi-Color Accents, Pill Geometry
- **Keywords:** resend, frost, cinematic, void black, frost borders, Domaine Display, ABC Favorit, Inter, Commit Mono, icy blue borders, multi-color accents
- **Era:** 2024-2026 Developer Email Infrastructure
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto Void** (#000000) — Dark surface, primary background
- **Branco Near** (#f0f0f0) — Light surface, card backgrounds
- **Branco Puro** (#ffffff) — Light surface, card backgrounds
- **Silver** (#a1a4a5) — Supporting palette color
- **Laranja** (#ff801f) — Warm accent, call-to-action secondary
- **Verde** (#22ff99) — Success states, positive indicators
- **Azul** (#3b9eff) — Secondary accent
- **Borda Frost** (rgba(214,235,253,0.19)) — Extended palette, decorative use


## Typography

- **Display / Hero:** Georgia for hero — Weight 700, tight tracking, used for headline impact
- **Body:** Georgia for hero — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Georgia for hero — 0.875rem, weight 500, slight letter-spacing
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

Canvas preto puro (#000000) como void teatral. Bordas frost blue-tinted (rgba(214,235,253,0.19)) — cada borda tem brilho cristalino gelado. Hierarquia de três fontes: serif para hero (96px weight 400 line-height 1.00), geometric sans para seções (-2.8px tracking), Inter para body. Commit Mono para código. Sistema de acentos multi-cor (laranja, verde, azul, amarelo, vermelho) com escalas de opacidade. Botões pill (9999px) com fundo transparente e borda frost. Ring shadow (rgba(176,199,217,0.145) 0px 0px 0px 1px).

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Void preto puro
- Do Bordas frost blue-tinted
- Do Serif hero 96px
- Do Geometric sans seções
- Do Inter body
- Do Pill buttons frost
- Do Multi-color accents
- Do Ring shadows
- Do Responsivo


## Use Case

APIs de email, Infraestrutura developer, SaaS técnico, Platforms de comunicação

<!-- Source: https://designmd.app/library/resend-frost-cinematic · designmd.app -->
