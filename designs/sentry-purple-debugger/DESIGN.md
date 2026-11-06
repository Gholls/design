---
version: "alpha"
name: "Sentry Purple Debugger"
description: "Sentry-inspired dark purple developer landing page. Ideal for monitoramento de erros, devops, ferramentas developer, observabilidade. AI-ready template."
colors:
  primary: "#1f1633"
  secondary: "#150f23"
  tertiary: "#ffffff"
  neutral: "#c2ef4e"
  surface: "#6a5fc1"
  accent: "#79628c"
typography:
  h1:
    fontFamily: Rubik
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Rubik
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 13px
  md: 26px
  lg: 39px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 701
  author: "designmd.app"
  source: "https://designmd.app/library/sentry-purple-debugger"
  tags: ["风格模板", "devops", "observabilidade"]
---

## Overview

Sentry-inspired dark purple developer landing page. Ideal for monitoramento de erros, devops, ferramentas developer, observabilidade. AI-ready template. Purple has always been the color of the liminal — the space between known and unknown. In debugging, that's exactly where you live. Sentry didn't stumble into purple by accident. Their brand evolution from generic error logging to full observability platform demanded a color that said 'we see what others miss.' The deep violet spectrum communicates both the technical depth of stack traces and the almost mystical act of finding a needle in a haystack of production logs.

This palette draws from the lineage of terminal aesthetics meeting futurism. Think of the purple glow of CRT monitors at 3am, the neon signage of cyberpunk interfaces, the phosphor burn of a debugger stepping through memory. It's not decorative — it's functional mythology. The color carries meaning before a single word is read: something is being investigated, dissected, understood.

The futuristic angle isn't about chrome and gradients. It's about the confidence that comes from tooling that actually works. Purple here is assertive, not playful. It says 'we caught the error before your users did.' That's the energy this system channels — vigilance dressed in violet.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Dark Purple IDE, Lime-Green Accent, Inset Button Shadows, Frosted Glass, Dual Display Fonts
- **Keywords:** sentry, purple, debugger, dark IDE, lime green, inset shadows, frosted glass, Rubik, uppercase labels, ambient glow, developer tool
- **Era:** 2024-2026 Developer Error Monitoring
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Roxo Profundo** (#1f1633) — Primary background surface
- **Roxo Escuro** (#150f23) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Verde Lima** (#c2ef4e) — Supporting palette color
- **Roxo Sentry** (#6a5fc1) — Accent color, emphasis elements
- **Roxo Muted** (#79628c) — Secondary text, borders, muted elements
- **Coral** (#ffb287) — Extended palette, decorative use
- **Rosa** (#fa7faa) — Decorative accent, highlight elements


## Typography

- **Display / Hero:** Rubik — Weight 700, tight tracking, used for headline impact
- **Body:** Rubik — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Rubik — 0.875rem, weight 500, slight letter-spacing
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

Fundos purple-black (#1f1633, #150f23) evocando sessões de debug noturnas. Verde lima (#c2ef4e) como acento de alta visibilidade — usado com parcimônia para máximo impacto. Botões com inset shadows (rgba(0,0,0,0.1) 0px 1px 3px inset) criando qualidade tátil. Efeitos frosted glass (blur(18px) saturate(180%)). Font display com personalidade para hero (88px weight 700). Rubik como font UI com sistema uppercase + letter-spacing 0.2px. Ambient glow roxo (rgba(22,15,36,0.9)).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 13px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (13px buttons) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (13px buttons) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fundos purple-black
- Do Verde lima #c2ef4e sparingly
- Do Inset shadows em botões
- Do Frosted glass blur(18px)
- Do Display 88px weight 700
- Do Rubik UI com uppercase
- Do Ambient glow roxo
- Do Responsivo


## Use Case

Monitoramento de erros, DevOps, Tools developer, Observabilidade

<!-- Source: https://designmd.app/library/sentry-purple-debugger · designmd.app -->
