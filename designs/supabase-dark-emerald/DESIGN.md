---
version: "alpha"
name: "Supabase Dark Emerald"
description: "Dark-mode-native developer landing page inspired by Supabase. Ideal for plataformas developer, ferramentas open-source, bancos de dados, apis. AI-ready template."
colors:
  primary: "#0f0f0f"
  secondary: "#171717"
  tertiary: "#3ecf8e"
  neutral: "#fafafa"
  surface: "#00c573"
  accent: "#2e2e2e"
typography:
  h1:
    fontFamily: Circular
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Circular
    fontSize: 1rem
    fontWeight: 400
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
  order: 754
  author: "designmd.app"
  source: "https://designmd.app/library/supabase-dark-emerald"
  tags: ["风格模板", "bancos de dados", "apis"]
---

## Overview

Dark-mode-native developer landing page inspired by Supabase. Ideal for plataformas developer, ferramentas open-source, bancos de dados, apis. AI-ready template. Supabase arrived in 2020 positioning itself as the open-source Firebase alternative, but its visual identity told a different story entirely. The emerald green on near-black palette wasn't just a color choice — it was a declaration. While every other developer tool was shipping safe blues and purples, Supabase went full terminal-green-meets-luxury. The effect was immediate: you looked at their dashboard and felt like you were piloting something powerful.

That emerald became synonymous with a new wave of developer tool aesthetics. It proved you could be technical and visually striking simultaneously. The green wasn't friendly or approachable in the conventional SaaS sense — it was confident, almost cinematic. Think sci-fi command centers, not startup landing pages.

The ripple effect across the ecosystem was undeniable. Post-Supabase, we saw a surge of developer tools embracing darker palettes with single saturated accent colors. The playbook they wrote — dark canvas, one bold hue, generous spacing, monospace touches — became the template for an entire generation of dev-focused products that wanted to signal sophistication without sacrificing developer credibility.

- Density: 8/10 — Dense
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Dark-Mode Native, Developer, Emerald Accent, Border-Defined Depth
- **Keywords:** supabase, dark mode, emerald green, developer, PostgreSQL, Circular font, pill buttons, border hierarchy, HSL tokens, terminal aesthetic
- **Era:** 2024-2026 Developer Dark
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Quase Preto** (#0f0f0f) — Dark surface, primary background
- **Escuro** (#171717) — Dark surface, primary background
- **Verde Supabase** (#3ecf8e) — Primary background surface
- **Off-White** (#fafafa) — Light surface, card backgrounds
- **Verde Link** (#00c573) — Primary text color
- **Borda Escura** (#2e2e2e) — Extended palette, decorative use
- **Borda Média** (#363636) — Extended palette, decorative use
- **Cinza** (#898989) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** Circular — Weight 700, tight tracking, used for headline impact
- **Body:** Circular — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Circular — 0.875rem, weight 500, slight letter-spacing
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

Dark-mode nativo com fundos near-black (#0f0f0f, #171717). Acento verde esmeralda (#3ecf8e) usado com precisão cirúrgica apenas em bordas, links e logo. Profundidade via hierarquia de bordas (#242424 → #2e2e2e → #363636) sem sombras. Botões pill (9999px) para CTAs primários. Hero com line-height 1.00 ultra-comprimido. Labels monospace uppercase com letter-spacing 1.2px.

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

- Do Fundo near-black (#171717)
- Do Verde esmeralda apenas em bordas/links/logo
- Do Hero line-height 1.00
- Do Pill buttons 9999px
- Do Profundidade via bordas sem sombras
- Do Labels monospace uppercase
- Do Responsivo


## Use Case

Platforms developer, Tools open-source, Bancos de dados, APIs

<!-- Source: https://designmd.app/library/supabase-dark-emerald · designmd.app -->
