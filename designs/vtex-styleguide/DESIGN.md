---
name: "VTEX Styleguide"
description: "Legacy design system for VTEX IO platform — React component library with Tachyons-based CSS framework"
status: "legacy"
successor: "VTEX Admin UI → VTEX Shoreline"
colors:
  primary: "#F71963"
  secondary: "#134CD8"
  accent: "#F71963"
  surface: "#FFFFFF"
  surface-soft: "#F3F3F3"
  on-surface: "#3F3F40"
  on-surface-soft: "#727273"
  success: "#8BC34A"
  warning: "#FFB100"
  danger: "#FF4C4C"
  muted: "#979899"
typography:
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 400
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
rounded:
  none: "0px"
  sm: "0.125rem"
  md: "0.25rem"
  lg: "0.5rem"
  full: "9999px"
spacing:
  "0": "0rem"
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "1rem"
  "4": "2rem"
  "5": "4rem"

gallery:
  order: 1706
  author: "designmd.app"
  source: "https://designmd.app/brands/vtex-styleguide"
  tags: ["真实品牌"]
---

## Overview

> ⚠️ **Status: Legacy** — VTEX Styleguide foi o primeiro design system da VTEX. Foi substituído pelo Admin UI e posteriormente pelo Shoreline.

VTEX Styleguide é a biblioteca de componentes React original da VTEX, construída sobre o framework CSS funcional **Tachyons**. Estabeleceu o icônico **Rebel Pink** (`#F71963`) como cor de destaque.

### Evolução dos Design Systems VTEX

| Período | Design System | Status |
|---|---|---|
| 2017–2021 | **Styleguide** | **Legacy** |
| 2020–2024 | Admin UI | Deprecated |
| 2023–atual | Shoreline | Ativo |

## Colors

### Brand Colors
| Token | Hex | Role |
|---|---|---|
| `rebel-pink` | `#F71963` | Cor primária da marca, botões, links |
| `serious-black` | `#142032` | Texto primário |
| `c-link` | `#134CD8` | Links, elementos interativos |
| `c-success` | `#8BC34A` | Feedback positivo |
| `c-warning` | `#FFB100` | Alertas |
| `c-danger` | `#FF4C4C` | Erros, ações destrutivas |

## Typography

Usa a stack de fontes do sistema operacional:
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Escala Tachyons
| Class | Size | Use |
|---|---|---|
| `f1` | 3rem | Headlines |
| `f5` | 1rem | Corpo padrão |
| `f6` | 0.875rem | Texto pequeno |

## Layout

### Spacing (Tachyons)
| Class | Value |
|---|---|
| `pa1/ma1` | 0.25rem (4px) |
| `pa2/ma2` | 0.5rem (8px) |
| `pa3/ma3` | 1rem (16px) |
| `pa4/ma4` | 2rem (32px) |

## Components

40+ componentes React incluindo: Button, Input, Table, Modal, Dropdown, Checkbox, Radio, Toast, Alert, Card, Tabs, Pagination.

## Do's and Don'ts

### Do's
- ✅ Use classes Tachyons para layout (`flex`, `pa3`, `mb4`)
- ✅ Siga a escala de cores semânticas

### Don'ts
- ❌ Não use Styleguide para novos projetos — migre para Shoreline
- ❌ Não misture Styleguide com Admin UI ou Shoreline

---

## Attribution
- Source: https://github.com/vtex/styleguide
- Documentation: https://styleguide.vtex.com
- npm: @vtex/styleguide
- Extracted: 2026-09-21
- Method: open-source repo
- License: Design tokens extracted from publicly available open-source repositories. No affiliation with VTEX.

<!-- Source: https://designmd.app/brands/vtex-styleguide · designmd.app -->
