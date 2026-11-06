---
version: "alpha"
name: "Timeline Horizontal Corporativo"
description: "Horizontal corporate timeline. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#333333"
  tertiary: "#2E3B8F"
  neutral: "#FBAF18"
  surface: "#EC1C5F"
  accent: "#00AEEF"
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
  order: 792
  author: "designmd.app"
  source: "https://designmd.app/library/timeline-horizontal-corporativo"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Horizontal corporate timeline. Ideal for landing pages, modern websites. AI-ready template. Timelines went horizontal the moment screens got wide enough to justify it. For decades, the vertical stack dominated — annual reports, résumés, org charts — because print was portrait and scrolling was vertical. But widescreen monitors and landscape presentations flipped the default. Suddenly left-to-right meant forward, and the spatial metaphor clicked with how Western readers already parse progress.

The real shift came from product tools. Linear's roadmap view, Notion's timeline databases, Gantt descendants in Monday and Asana — they all trained an entire generation of knowledge workers to expect horizontal time. Swimlanes. Color-coded phases. Hover states revealing scope. These tools didn't just display timelines; they made them interactive, filterable, zoomable. That raised the bar for what a static corporate timeline needs to feel like.

So now when you drop a horizontal timeline into a company history page or a product changelog, you're competing with muscle memory from daily project tools. The component has to feel that fluid, that scannable — even if it's purely presentational. Flat vector icons and geometric modules help because they reduce cognitive load to shape recognition. No ornament, just signal.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Horizontal timeline, flat vector iconography, geometric data modules, color-coded categorization, milestone markers, corporate, structured
- **Era:** Corporate Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Text** (#333333) — Dark surface, primary background
- **Navy** (#2E3B8F) — Supporting palette color
- **Amber** (#FBAF18) — Warning states, attention indicators
- **Pink** (#EC1C5F) — Primary text color
- **Cyan** (#00AEEF) — Secondary accent
- **Purple** (#6556DF) — Accent color, emphasis elements


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Flat 2D illumination, no shadows/gradients, milestone pop-in animations, timeline draw animation, module slide-in, color-coded category reveals

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Timeline horizontal
- Do Milestones marked
- Do Color-coded sections
- Do Flat vector icons
- Do Responsive scroll
- Do Corporate aesthetic


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/timeline-horizontal-corporativo · designmd.app -->
