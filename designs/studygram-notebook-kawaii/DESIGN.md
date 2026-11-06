---
version: "alpha"
name: "Studygram / Notebook Kawaii"
description: "Studygram notebook kawaii interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#F4F2E9"
  secondary: "#2B2B2B"
  tertiary: "#6FA3D2"
  neutral: "#FF9EC6"
  surface: "#F2E66B"
  accent: "#8D6E54"
typography:
  h1:
    fontFamily: hand-written style
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: hand-written style
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: hand-written style
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 748
  author: "designmd.app"
  source: "https://designmd.app/library/studygram-notebook-kawaii"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Studygram notebook kawaii interface. Ideal for landing pages, saas. AI-ready template. Somewhere around 2016, Instagram exploded with #studygram — students posting perfectly arranged desks, color-coded notes, and hand-lettered headers. It wasn't just aesthetic flexing. It was a whole productivity subculture built on the idea that making your notes beautiful made you actually want to study. Bullet journaling fed the same beast. Ryder Carroll's system got co-opted by artists who turned task lists into illustrated spreads with washi tape borders and tiny doodle icons.

The leap to UI was inevitable. Education startups noticed that Gen Z associated learning with this handmade, sticker-covered notebook vibe — not with sterile LMS interfaces. Apps like Notion (with its emoji-heavy pages), Forest, and dozens of Korean study timer apps started borrowing the visual language: ruled-paper backgrounds, hand-drawn checkboxes, kawaii mascots cheering you on. The notebook stopped being a metaphor and became an interface pattern.

What makes it stick is the warmth. Digital tools feel cold. Notebook aesthetics smuggle in the tactile comfort of paper, the personality of someone's actual handwriting. It's skeuomorphism reborn — not as fake leather textures, but as illustrated stickers and wobbly grid lines that say: this space is yours to mess up.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Cute, Organized, Pastel, Educational
- **Keywords:** Hand-drawn illustrations, doodles, notebook aesthetic, character mascots, felt-tip pen, highlighter markers, journaling, personal, educational
- **Era:** Studygram Culture
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Warm Paper** (#F4F2E9) — Primary surface or dominant color
- **Dark Text** (#2B2B2B) — Dark surface, primary background
- **Soft Blue** (#6FA3D2) — Accent highlight, links and focus states
- **Pink Highlight** (#FF9EC6) — Primary text color
- **Yellow Highlight** (#F2E66B) — Warning states, attention indicators
- **Brown Ink** (#8D6E54) — Primary text color
- **Cool Grey** (#A8A8A8) — Secondary text, borders, muted elements


## Typography

- **Display / Hero:** hand-written style — Weight 700, tight tracking, used for headline impact
- **Body:** hand-written style — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** hand-written style — 0.875rem, weight 500, slight letter-spacing
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

Flat ambient scanning light, hand-drawn wobble animations, doodle reveal on scroll, highlighter swipe effect, sticker pop-in animations

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

- Do Notebook paper background
- Do Hand-drawn elements
- Do Doodle decorations
- Do Highlighter effects
- Do Journaling aesthetic
- Do Cute mascot present


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/studygram-notebook-kawaii · designmd.app -->
