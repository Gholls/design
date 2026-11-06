---
version: "alpha"
name: "Retro Zine"
description: "Retro Zine — Beige paper with green accent and Bebas Neue + Caveat: a riso-printed zine in HTML form. Bebas Neue typography. warm beige / khaki paper with one saturated forest green. Best for indie zine / publication, music or arts brand, creator portfolio. AI-ready design system."
colors:
  primary: "#C8B99A"
  secondary: "#B8A98A"
  tertiary: "#008F4D"
  neutral: "#00A85D"
  surface: "#1A1A1A"
  accent: "#F4EFE6"
typography:
  h1:
    fontFamily: Bebas Neue
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bebas Neue
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 1.5rem
  md: 3.0rem
  lg: 6.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 673
  author: "designmd.app"
  source: "https://designmd.app/library/retro-zine"
  tags: ["风格模板", "music or arts brand"]
---

## Overview

Retro Zine — Beige paper with green accent and Bebas Neue + Caveat: a riso-printed zine in HTML form. Bebas Neue typography. warm beige / khaki paper with one saturated forest green. Best for indie zine / publication, music or arts brand, creator portfolio. AI-ready design system. Risograph printing wasn't supposed to become an aesthetic. It was a Japanese office duplicator from the 1980s — Riso Kagaku's answer to expensive offset runs. Churches printed bulletins on it. Schools cranked out worksheets. The machine was fast, cheap, and imperfect in ways nobody cared about because the output was disposable.

Then zine makers got their hands on it. By the mid-2000s, independent publishers realized that the soy-based inks, the slight misregistration between color passes, the grain of the drum — all of it produced something that felt alive in a way laser printers never could. The limitations became the language. Beige uncoated stock wasn't a budget compromise anymore; it was a deliberate canvas that let spot colors sing differently than they would on bright white.

The green accent specifically traces back to the fluorescent ink cartridges Riso offered — colors you literally cannot reproduce in CMYK. That constraint bred a whole visual culture: limited palettes, overprint surprises, happy accidents elevated to design decisions. It's print culture's answer to lo-fi music production.

- Density: 5/10 — Balanced
- Variance: 5/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Riso-Print, Lo-Fi, Underground, Crafted
- **Keywords:** Riso-print, beige paper, green accent, Bebas Neue, Caveat, lo-fi, underground, crafted
- **Era:** 1980s Retro
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#C8B99A) — Primary surface or dominant color
- **Bg Dark** (#B8A98A) — Accent highlight, links and focus states
- **Green** (#008F4D) — Secondary accent
- **Green Light** (#00A85D) — Accent color, emphasis elements
- **Black** (#1A1A1A) — Extended palette, decorative use
- **White** (#F4EFE6) — Background alternate


## Typography

- **Display / Hero:** Bebas Neue — Weight 700, tight tracking, used for headline impact
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

display font Bebas Neue for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, riso-print grain texture, beige paper, green accent, Caveat handwriting

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Bebas Neue display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)


## Use Case

indie zine / publication, music or arts brand, creator portfolio, small-batch / craft launch, cultural / community deck

<!-- Source: https://designmd.app/library/retro-zine · designmd.app -->
