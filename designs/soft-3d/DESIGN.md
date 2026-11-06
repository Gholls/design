---
version: "alpha"
name: "Soft 3D Illustration"
description: "Soft 3D Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion"
colors:
  primary: "#6d5ae6"
  background: "#eef1fb"
  surface: "#ffffff"
  text: "#2d2a45"
  accent: "#ff9e7d"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Quicksand', 'Poppins', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Inter', 'Quicksand', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Inter', 'Quicksand', system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "16px"
  md: "24px"
  lg: "32px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "16px"

gallery:
  order: 721
  author: "designmd.app"
  source: "https://designmd.app/library/soft-3d"
  tags: ["风格模板", "ambient occlusion"]
---
## Overview

Soft 3D Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion

- **Category:** morphism
- **Era:** 2020–present
- **Origin:** Rise of Spline, Blender, and Dribbble 3D illustration trend.
- **Reference:** Spline showcase sites; Stripe/Vercel 3D hero scenes.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Rounded, soft-lit 3D rendered objects
- Matte pastel materials, ambient occlusion
- Floating isometric-ish scenes
- Paired with flat UI chrome

## Colors

- **bg** — #eef1fb
- **surface** — #ffffff
- **surface-strong** — #f6f4ff
- **text** — #2d2a45
- **text-muted** — #6b6690
- **primary** — #6d5ae6
- **accent** — #ff9e7d
- **mint** — #7be0c4

## Typography

- Display: 'Quicksand', 'Poppins', sans-serif
- Body: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion; Floating isometric-ish scenes; Paired with flat UI chrome; sombras e elevação

## Shapes

- Radius scale: 16px, 24px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/soft-3d · designmd.app -->
