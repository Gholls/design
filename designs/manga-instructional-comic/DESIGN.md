---
version: "alpha"
name: "Manga Instructional Comic"
description: "Manga style landing page, black and white comic, speed lines, dynamic panels, ink aesthetic, instructional comic design. Ideal for landing pages, modern websites. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  tertiary: "#1A1A1A"
  neutral: "#CCCCCC"
  surface: "#000000"
  accent: "#FFFFFF"
typography:
  h1:
    fontFamily: Manga Temple
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Manga Temple
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 537
  author: "designmd.app"
  source: "https://designmd.app/library/manga-instructional-comic"
  tags: ["风格模板", "landing pages", "modern websites"]
---

## Overview

Manga style landing page, black and white comic, speed lines, dynamic panels, ink aesthetic, instructional comic design. Ideal for landing pages, modern websites. AI-ready template. Manga as instructional medium didn't emerge from some corporate brainstorm. It grew organically in post-war Japan, where publishers realized sequential art could teach everything from cooking to electronics repair. The format exploded in the 1960s and 70s — government manuals, workplace safety guides, even tax filing instructions rendered in panels with expressive characters and dramatic pacing. What made it stick wasn't novelty. It was comprehension. Studies consistently showed readers retained more from manga-format instructions than from plain text equivalents.

The retro-pop aesthetic we associate with instructional manga — bold screentones, exaggerated reactions, speed lines on mundane tasks — crystallized in the 1980s. Publishers like Gakken and Shogakukan perfected the formula: a relatable protagonist encounters a problem, a mentor figure appears, knowledge transfers through dialogue and visual demonstration. The format respected readers enough to entertain them while teaching.

Western design finally caught on decades later. Now everyone wants "manga-style onboarding" without understanding the grammar. The panel transitions, the emotional beats between information dumps, the careful balance of white space and density — these aren't decorative choices. They're pedagogical architecture refined over sixty years.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Energetic, Expressive, Narrative
- **Keywords:** manga, comic, japanese, black and white, speed lines, ink, action, panel
- **Era:** Modern Manga
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#FFFFFF) — Primary background surface
- **Text** (#000000) — Primary text color
- **Accent** (#1A1A1A) — Primary accent, CTAs and interactive elements
- **Screen Tone** (#CCCCCC) — Extended palette, decorative use
- **Speed Line** (#000000) — Extended palette, decorative use
- **Paper White** (#FFFFFF) — Secondary surface


## Typography

- **Display / Hero:** Manga Temple — Weight 700, tight tracking, used for headline impact
- **Body:** Manga Temple — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Manga Temple — 0.875rem, weight 500, slight letter-spacing
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

Dynamic comic paneling, speed lines (beta flash), impact bursts, expressive character acting, traditional ink aesthetics, halftone screentones.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Black and White dominant
- Do Manga style speed lines
- Do Angled/Dynamic panels
- Do Screentone textures
- Do Sound effect graphics (text)


## Use Case

Landing pages, Modern websites

<!-- Source: https://designmd.app/library/manga-instructional-comic · designmd.app -->
