---
version: "alpha"
name: "Pulp Magazine Cover Art"
description: "Pulp Magazine Cover Art visual system, translated from the Claude Artisan catalog for use in digital products. Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow"
colors:
  primary: "#d4361f"
  background: "#1a1210"
  surface: "#241a17"
  text: "#f5e6d3"
  accent: "#f2b705"
  on-primary: "#FFFFFF"
  on-surface: "#FFFFFF"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Anton', 'Oswald', 'Arial Black', sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'PT Sans', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'PT Sans', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "10px"
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
  order: 649
  author: "designmd.app"
  source: "https://designmd.app/library/pulp-magazine"
  tags: ["风格模板"]
---
## Overview

Pulp Magazine Cover Art visual system, translated from the Claude Artisan catalog for use in digital products. Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow

- **Category:** niche
- **Era:** 1930s–1950s (revival ongoing)
- **Origin:** Cheap American pulp-fiction magazine cover illustration — mass-market newsstand paperbacks and digests printed on cheap wood-pulp paper, sold to move copies fast.
- **Reference:** 'Weird Tales', 'Amazing Stories', 'Black Mask' cover paintings; Norman Saunders and Margaret Brundage newsstand cover art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dramatic, high-contrast painted single-image illustration (not sequential panels)
- Saturated primary colors against heavy black shadow
- Bold slab/condensed masthead display type
- Lurid, melodramatic newsstand energy

## Colors

- **bg** — #1a1210
- **surface** — #241a17
- **surface-2** — #33231e
- **text** — #f5e6d3
- **text-muted** — #c9ad8f
- **primary** — #d4361f
- **accent** — #f2b705
- **pulp-blue** — #1c4f8c
- **shadow-ink** — #0c0806

## Typography

- Display: 'Anton', 'Oswald', 'Arial Black', sans-serif
- Body: 'PT Sans', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow; Bold slab/condensed masthead display type; Lurid, melodramatic newsstand energy; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/pulp-magazine · designmd.app -->
