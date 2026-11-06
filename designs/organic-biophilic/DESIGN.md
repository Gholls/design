---
version: "alpha"
name: "Organic Biophilic"
description: "Biophilic organic interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#228B22"
  secondary: "#8B4513"
  tertiary: "#87CEEB"
  neutral: "#F5F5DC"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 616
  author: "designmd.app"
  source: "https://designmd.app/library/organic-biophilic"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Biophilic organic interface. Ideal for landing pages, saas. AI-ready template. Edward O. Wilson coined 'biophilia' in 1984 — the idea that humans are hardwired to seek connection with nature. For decades, architects ran with it. Interior designers ran with it. Digital? Not so much. We were too busy chasing flat design and geometric minimalism to notice.

Then the pandemic locked everyone indoors, and suddenly screens needed to breathe. Calm apps exploded. Headspace redesigned everything around soft gradients and leaf motifs. Wellness startups ditched the clinical white-and-blue palette for moss greens and terracotta. The organic shape — that wobbly, imperfect blob — became the anti-grid. A quiet rebellion against pixel-perfect rigidity.

What's interesting is how it stuck. Post-2022, biophilic UI isn't a trend anymore — it's a vertical. Sustainability brands expect it. Health platforms demand it. The visual language of 'natural' now has its own grammar: rounded corners pushed to extremes, earth-tone palettes that feel like soil after rain, illustrations that move like water. Wilson would probably hate the screen time. But he'd recognize the impulse.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Natural, Organic, Sustainable, Calming
- **Keywords:** Nature, organic shapes, green, sustainable, rounded, flowing, wellness, earthy, natural textures
- **Era:** 2020s Sustainable
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **#228B22** (#228B22) — Primary surface or dominant color
- **#8B4513** (#8B4513) — Secondary surface or text color
- **#87CEEB** (#87CEEB) — Supporting palette color
- **#F5F5DC** (#F5F5DC) — Supporting palette color


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Earth tones dominant
- Do Organic curves present
- Do Natural textures subtle
- Do Green accents
- Do Rounded everywhere
- Do Calming feel


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/organic-biophilic · designmd.app -->
