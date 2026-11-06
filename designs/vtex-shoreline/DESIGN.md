---
name: "VTEX Shoreline"
description: "Current design system for VTEX Admin — modern back-office experiences with CSS custom properties, semantic tokens, and composition-based architecture"
status: "active"
predecessor: "VTEX Admin UI"
colors:
  primary: "#0366DD"
  secondary: "#F50963"
  accent: "#0366DD"
  surface: "#FFFFFF"
  surface-soft: "#F5F5F5"
  on-surface: "#1F1F1F"
  on-surface-soft: "#707070"
  success: "#019213"
  warning: "#9C7901"
  critical: "#D31A15"
  informational: "#157BF4"
typography:
  headline:
    fontFamily: "Inter"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: "2rem"
    letterSpacing: "-0.04rem"
  body:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.25rem"
    letterSpacing: "-0.00875rem"
  caption:
    fontFamily: "Inter"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1rem"
  action:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.25rem"
rounded:
  none: "0rem"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "0.75rem"
  full: "9999rem"
spacing:
  "0": "0rem"
  "05": "0.125rem"
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"

gallery:
  order: 1706
  author: "designmd.app"
  source: "https://designmd.app/brands/vtex-shoreline"
  tags: ["真实品牌", "semantic tokens"]
---

## Overview

> ✅ **Status: Active** — Shoreline é o design system atual e recomendado da VTEX.

VTEX é uma plataforma brasileira de comércio digital enterprise. O design system **Shoreline** é voltado para experiências administrativas de back-office.

### Evolução dos Design Systems VTEX

| Período | Design System | Status |
|---|---|---|
| 2017–2021 | **Styleguide** | Legacy |
| 2020–2024 | **Admin UI** | Deprecated |
| 2023–atual | **Shoreline** | **Ativo** |

## Colors

### Gray Scale (14 steps)
| Token | Hex | Role |
|---|---|---|
| gray-0 | `#FFFFFF` | Base background |
| gray-1 | `#F5F5F5` | Soft background |
| gray-12 | `#1F1F1F` | Base foreground (text) |

### Semantic Accent (Blue)
| Token | Hex | Role |
|---|---|---|
| blue-10 | `#0366DD` | **Primary accent** |
| blue-11 | `#0155B7` | Hover |
| blue-12 | `#014592` | Pressed |

### Semantic Tokens
| Token | Value | Use |
|---|---|---|
| `--sl-bg-base` | white | Page background |
| `--sl-fg-base` | gray-12 | Primary text |
| `--sl-fg-accent` | blue-10 | Links, interactive |

## Typography

**Inter** como typeface única:
```
"Inter", -apple-system, system-ui, sans-serif
```

### Text Presets
| Preset | Weight | Size | Use |
|---|---|---|---|
| `display-1` | 600 | 1.5rem | Page titles |
| `body` | 400 | 0.875rem | Default body |
| `action` | 600 | 0.875rem | Buttons |

## Layout

4px base unit com escala de 0 a 32 (128px).

| Token | Value | Use |
|---|---|---|
| `--sl-space-4` | 16px | Default gap |
| `--sl-space-8` | 32px | Card padding |

## Components (30+)

Button, IconButton, Input, Select, Checkbox, Radio, Table, Collection, Modal, Drawer, Popover, Menu, Tab, Toast, Alert, Skeleton, DatePicker, etc.

## Do's and Don'ts

### Do's
- ✅ Use semantic tokens (`--sl-bg-accent`, `--sl-fg-base`)
- ✅ Use composition pattern for overlays

### Don'ts
- ❌ Don't mix with legacy Styleguide tokens
- ❌ Don't use more than 2 shadow levels

---

## Attribution
- Source: https://github.com/vtex/shoreline
- Documentation: https://shoreline.vtex.com
- npm: @vtex/shoreline
- Extracted: 2026-09-21
- Method: open-source repo
- License: Design tokens extracted from publicly available open-source repositories. No affiliation with VTEX.

<!-- Source: https://designmd.app/brands/vtex-shoreline · designmd.app -->
