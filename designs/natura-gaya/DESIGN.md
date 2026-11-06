---
name: Natura GaYa Design System
description: >
  Design system multi-brand da Natura &Co (GaYa), construído como monorepo
  com tokens compartilhados via @naturacosmeticos/natds-themes. Suporta React (web),
  React Native, Android e iOS. Serve múltiplas marcas do grupo (Natura, Avon, Aesop,
  The Body Shop) através de temas intercambiáveis com tokens unificados.
colors:
  brand:
    primaryMain: "#F4AB34"
    primaryLight: "#F6B854"
    primaryLightest: "#F8C675"
    primaryDark: "#CD902C"
    primaryDarkest: "#A67423"
    secondaryMain: "#FF6B0B"
    secondaryLight: "#FF8332"
    secondaryLightest: "#FF9A59"
    secondaryDark: "#D65A09"
    secondaryDarkest: "#AD4907"
  semantic:
    surface: "#FFFFFF"
    surfaceDark: "#4E4E4E"
    background: "#FAFAFA"
    onBackground: "#111111"
    highlight: "#111111"
    highEmphasis: "#363636"
    mediumEmphasis: "#737373"
    lowEmphasis: "#8C8C8C"
  feedback:
    info: "#1267CF"
    infoLight: "#A5C0FC"
    success: "#2F833E"
    successLight: "#92D492"
    warning: "#E5B815"
    warningLight: "#FFD75D"
    alert: "#DE3529"
    alertLight: "#FFA392"
    link: "#1267CF"
  neutral:
    neutral0: "#FFFFFF"
    neutral50: "#FAFAFA"
    neutral75: "#EEEEEE"
    neutral100: "#E1E1E1"
    neutral200: "#C9C9C9"
    neutral300: "#BDBDBD"
    neutral400: "#A4A4A4"
    neutral500: "#8C8C8C"
    neutral600: "#737373"
    neutral700: "#4E4E4E"
    neutral800: "#363636"
    neutral900: "#111111"
typography:
  families:
    - Roboto
    - Roboto Mono
  weights:
    regular: 400
    medium: 500
    bold: 700
  sizes:
    level1: 13
    level2: 14
    level3: 16
    level4: 18
    level5: 20
    level6: 23
    level7: 26
    level8: 29
    level9: 32
    level10: 36
    level11: 41
    level12: 46
    level13: 52
    level14: 58
    level15: 66
    level16: 74
    level17: 83
  lineHeights:
    auto: 1
    reset: 1
    small: 1.25
    medium: 1.5
    large: 2
rounded:
  none: "0px"
spacing:
  none: "0px"
  micro: 4
  tiny: 8
  small: 16
  standard: 24
  semi: 32
  large: 48
  xLarge: 64

gallery:
  order: 1689
  author: "designmd.app"
  source: "https://designmd.app/brands/natura-gaya"
  tags: ["真实品牌"]
gradients:
  primary: "linear-gradient(101deg, #F4AB34, #FF6B0B)"
---

## Overview

**GaYa** (anteriormente NatDS — Natura Design System) é o design system multi-plataforma e multi-brand da **Natura &Co**, grupo brasileiro de cosméticos que inclui Natura, Avon, Aesop e The Body Shop.

O sistema é distribuído como monorepo com pacotes independentes para cada plataforma:

| Pacote | Função |
|--------|--------|
| `@naturacosmeticos/natds-themes` | Tokens unificados — single source of truth |
| `@naturacosmeticos/natds-react` | Componentes React para web |
| `@naturacosmeticos/natds-rn` | Componentes React Native |
| `@naturacosmeticos/natds-icons` | Biblioteca de ícones SVG |
| `@naturacosmeticos/natds-styles` | Estilos CSS pré-compilados |
| `NatDS` (CocoaPods/SPM) | Componentes iOS (Swift) |
| `natds-android` | Componentes Android (Kotlin) |

O GaYa serve **15 temas de marca** (natura, natura_v2, natura_v3, avon, avon_v2, avon_v3, aesop, biome, theBodyShop, consultoriaDeBeleza, casaEestilo, forcaDeVendas, entre outros) com um único codebase de componentes, trocando apenas os tokens do tema.

### Princípios

1. **Multi-brand por design** — mesmos componentes, tokens distintos por marca
2. **Plataforma-agnóstico** — tokens compartilhados entre web, iOS, Android e RN
3. **Semantic tokens** — cores nomeadas por uso (surface, onSurface, primary) e não por valor
4. **Acessibilidade** — pares de cor sempre fornecem `on*` (e.g., `primary` + `onPrimary`)

---

## Colors

O GaYa organiza cores em camadas progressivas: **spectrum** (paleta bruta), **brand** (identidade da marca) e **semantic** (uso contextual).

### Brand Colors (Natura)

| Token | Hex | Uso |
|-------|-----|-----|
| `brand.a.main` | `#F4AB34` | Dourado Natura — cor primária da marca |
| `brand.a.light` | `#F6B854` | Dourado claro |
| `brand.a.lightest` | `#F8C675` | Dourado muito claro |
| `brand.a.dark` | `#CD902C` | Dourado escuro |
| `brand.a.darkest` | `#A67423` | Dourado muito escuro |
| `brand.b.main` | `#FF6B0B` | Laranja Natura — cor secundária |
| `brand.b.light` | `#FF8332` | Laranja claro |
| `brand.b.lightest` | `#FF9A59` | Laranja muito claro |
| `brand.b.dark` | `#D65A09` | Laranja escuro |
| `brand.b.darkest` | `#AD4907` | Laranja muito escuro |
| `brand.gradient.primary` | `101deg, #F4AB34 → #FF6B0B` | Gradiente primário da marca |

### Semantic Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#F4AB34` | CTAs primários, destaques de marca |
| `onPrimary` | `#333333` | Texto/ícones sobre primary |
| `secondary` | `#FF6B0B` | Ações secundárias, acentos |
| `onSecondary` | `#000000` | Texto/ícones sobre secondary |
| `surface` | `#FFFFFF` | Backgrounds de cards, modais |
| `onSurface` | `#363636` | Texto sobre surfaces |
| `background` | `#FAFAFA` | Background geral da aplicação |
| `onBackground` | `#111111` | Texto principal sobre background |

### Feedback Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#2F833E` | Confirmações, estados positivos |
| `warning` | `#E5B815` | Alertas de atenção |
| `alert` | `#DE3529` | Erros, destruição, perigo |
| `info` / `link` | `#1267CF` | Links, informação, ações contextuais |

### Neutrals

| Token | Hex | Uso |
|-------|-----|-----|
| `neutral0` | `#FFFFFF` | Branco puro |
| `neutral50` | `#FAFAFA` | Background claro |
| `neutral100` | `#E1E1E1` | Bordas, dividers |
| `neutral300` | `#BDBDBD` | Bordas inativas |
| `neutral500` | `#8C8C8C` | Placeholders |
| `neutral700` | `#4E4E4E` | Texto terciário |
| `neutral900` | `#111111` | Texto máximo contraste |

---

## Typography

### Font Families

- **Roboto** — Família primária, headline e branding. Sans-serif geométrica do Google, usada em todas as variantes de peso.
- **Roboto Mono** — Família code. Monospace para snippets, dados técnicos e tabelas numéricas.
- **Arial** — Fallback cross-platform.

### Roles Tipográficos

| Role | Font Family | Weight | Uso |
|------|-------------|:------:|-----|
| `display` | Roboto | 700 (Bold) | Títulos hero, destaques |
| `headline` | Roboto | 500 (Medium) | Subtítulos, headings |
| `body.regular` | Roboto | 400 (Regular) | Corpo de texto |
| `body.bold` | Roboto | 700 (Bold) | Ênfase no corpo |
| `fallback` | Arial | 400 | Substituição quando Roboto indisponível |

### Escala Tipográfica

| Token | Tamanho (px) | Uso sugerido |
|-------|:---:|---|
| `level1` | 13 | Overline, captions mínimos |
| `level2` | 14 | Captions, labels auxiliares |
| `level3` | 16 | Corpo padrão (body1) |
| `level4` | 18 | Corpo destacado (body2) |
| `level5` | 20 | Subtitle2, subtítulos menores |
| `level6` | 23 | Subtitle1 |
| `level7` | 26 | Heading6 |
| `level8` | 29 | Heading5 |
| `level9` | 32 | Heading4 |
| `level10` | 36 | Heading3 |
| `level11` | 41 | Heading2 |
| `level12` | 46 | Heading1 |
| `level13–17` | 52–83 | Display sizes (hero, splash) |

### Line Heights

| Token | Multiplicador | Uso |
|-------|:---:|---|
| `auto` / `reset` | 1.0× | Single-line, ícones com texto |
| `small` | 1.25× | Headings, títulos curtos |
| `medium` | 1.5× | Corpo padrão, parágrafos |
| `large` | 2.0× | Texto com espaçamento generoso |

---

## Layout

### Spacing Scale

O GaYa utiliza uma escala de espaçamento baseada em incrementos de 4px e 8px:

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Reset |
| `micro` | 4px | Espaçamento mínimo, gaps internos de ícone |
| `tiny` | 8px | Padding mínimo, gap ícone-texto |
| `small` | 16px | Padding padrão de componentes |
| `standard` | 24px | Espaçamento entre blocos |
| `semi` | 32px | Separação entre seções menores |
| `large` | 48px | Espaçamento generoso entre seções |
| `xLarge` | 64px | Espaçamento máximo, separação de áreas |

### Size Scale (Componentes)

O sistema define tamanhos nomeados para dimensões de componentes:

| Token | Valor | Uso |
|-------|:---:|---|
| `micro` | 4px | Dots, indicators |
| `tiny` | 8px | Badges mínimos |
| `small` | 16px | Ícones pequenos, checkboxes |
| `standard` | 24px | Ícones padrão |
| `semi` | 32px | Botões compactos |
| `semiX` | 40px | Input heights |
| `medium` | 48px | Botões padrão, avatars |
| `mediumX` | 56px | App bar height |
| `large` | 64px | Avatars grandes |
| `largeXXX` | 96px | Avatars hero |
| `huge` | 128px | Thumbnails |
| `veryHuge` | 256px | Imagens featured |

---

## Elevation & Depth

O GaYa implementa 10 níveis de elevação com sombras progressivas baseadas em rgba(0, 0, 0, 0.14):

| Token | Box-shadow | Uso |
|-------|-----------|-----|
| `none` | Nenhuma | Elementos flat, inline |
| `micro` | `0 1px 1px 0 rgba(0,0,0,0.14)` | Hover sutil |
| `tiny` | `0 2px 2px 0 rgba(0,0,0,0.14)` | Cards em repouso |
| `small` | `0 3px 4px 0 rgba(0,0,0,0.14)` | Cards elevados, dropdowns |
| `medium` | `0 4px 5px 0 rgba(0,0,0,0.14)` | FABs, navigation drawers |
| `large` | `0 6px 10px 0 rgba(0,0,0,0.14)` | Modais, bottom sheets |
| `largeX` | `0 8px 10px 0 rgba(0,0,0,0.14)` | Dialogs |
| `largeXX` | `0 9px 12px 0 rgba(0,0,0,0.14)` | Menus elevados |
| `huge` | `0 12px 17px 0 rgba(0,0,0,0.14)` | Overlays |
| `hugeX` | `0 16px 24px 0 rgba(0,0,0,0.14)` | Floating panels |
| `hugeXX` | `0 24px 38px 0 rgba(0,0,0,0.14)` | Elementos máximos (pickers full-screen) |

### Opacity Scale

| Token | Valor | Uso |
|-------|:---:|---|
| `transparent` | 0.0 | Totalmente invisível |
| `lower` | 0.04 | Backgrounds sutis de hover |
| `veryLow` | 0.08 | States desabilitados muito leves |
| `low` | 0.12 | Overlays mínimos |
| `disabled` | 0.32 | Elementos desabilitados |
| `medium` | 0.48 | Overlays médios |
| `high` | 0.72 | Scrim de modais |
| `opaque` | 1.0 | Totalmente opaco |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Elementos sharp (imagens full-bleed, dividers) |
| `small` | 2px | Badges, tags compactas |
| `medium` | 4px | Inputs, selects, cards padrão |
| `large` | 8px | Botões, cards destacados, modais |
| `huge` | 16px | Chips, cards arredondados, bottom sheets |
| `pill` | 999px | Botões pill, tags arredondadas |
| `circle` | 999px | Avatares, FABs, ícones circulares |

O sistema é conservador no arredondamento — `medium` (4px) é o padrão para a maioria dos componentes, mantendo uma estética clean e profissional.

---

## Components

O GaYa oferece uma biblioteca abrangente de componentes nativos para web, iOS, Android e React Native:

### Navegação e Estrutura
- **AppBarTop** — Barra de topo com título, ações e navegação
- **NavigationDrawer** — Menu lateral com header, seções e itens
- **Tab** — Abas de navegação horizontal
- **ExpansionPanel** — Conteúdo colapsável com título e animação

### Formulários e Inputs
- **TextField** — Campo de texto com label, helper text e estados
- **Select** — Seletor dropdown com opções
- **Checkbox** — Caixa de seleção com label
- **RadioButton** — Grupo de seleção exclusiva
- **Counter** — Input numérico com incremento/decremento
- **Rating** — Avaliação por estrelas (input e display)

### Ações
- **Button** — Botões com variantes (contained, filled, outlined, ghost, text, tonal) e cores (primary, secondary, neutral, inverse)
- **IconButton** — Botão circular com ícone (semi, medium, standard, float, overlay)
- **Link** — Links textuais com estados
- **Shortcut** — Atalhos de ação rápida (contained, outlined)

### Feedback e Informação
- **Alert** — Mensagens com título e conteúdo
- **Badge** — Indicadores numéricos e dots (primary, secondary, success, alert)
- **Snackbar** — Notificações temporárias
- **Dialog** — Modais de confirmação com título e corpo
- **ProgressIndicator** — Indicador de carregamento (standard, semi, medium, large)
- **Tag** — Labels categóricos (primary, secondary, success, alert, warning, link)
- **Divider** — Separador visual horizontal

### Mídia e Display
- **Avatar** — Foto ou iniciais de usuário (standard, semi, semiX, medium, largeXXX)
- **Card** — Container de conteúdo com elevação
- **Image** — Imagem com border-radius configurável

---

## Do's and Don'ts

### ✅ Do's

- **Use semantic tokens** — Sempre usar `color.primary`, `color.surface`, `color.onBackground` em vez de hex codes diretos
- **Respeite os pares `on*`** — Se o background é `primary`, o texto deve ser `onPrimary` para garantir contraste
- **Envolva a aplicação com ThemeProvider** — Todos os componentes dependem do tema injetado via context
- **Use a escala de spacing** — Nunca use valores arbitrários; sempre `spacing.tiny`, `spacing.small`, etc.
- **Mantenha multi-brand em mente** — Não hardcode cores da Natura; use tokens semânticos que funcionam em todos os temas
- **Use a hierarquia de elevação** — Cards em repouso com `tiny`, modais com `large`, dialogs com `largeX`
- **Siga o gradiente de peso tipográfico** — Display (700) → Headline (500) → Body (400) para hierarquia clara

### ❌ Don'ts

- **Não use cores hex diretas** — Sempre prefira tokens. `color.primary` muda por marca; `#F4AB34` é fixo.
- **Não misture pesos arbitrários** — Respeite regular (400), medium (500) e bold (700) apenas
- **Não crie elevações custom** — Use os 10 níveis do sistema; sombras fora da escala quebram consistência
- **Não use border-radius fora da escala** — Apenas none/small/medium/large/huge/pill/circle
- **Não ignore o tema dark** — O GaYa suporta light e dark em todos os temas; teste ambos
- **Não hardcode tamanhos de componentes** — Use a size scale (standard, semi, medium, large)
- **Não sobreponha a opacidade manualmente** — Use os tokens de opacity para estados disabled e overlays
- **Não misture fonts** — Roboto para conteúdo, Roboto Mono apenas para code

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [github.com/natura-cosmeticos](https://github.com/natura-cosmeticos) — natds-commons, natds-js, natds-rn, natds-ios, natds-android |
| Listing | [designsystemsbrasileiros.com/gaya](https://designsystemsbrasileiros.com/gaya/) — tags: components, repo |
| Package | [@naturacosmeticos/natds-themes](https://www.npmjs.com/package/@naturacosmeticos/natds-themes) v0.84.9 |
| Documentation | [ds.natura.design](https://ds.natura.design/) |
| Storybook | [natds-web.natura.design](https://natds-web.natura.design/react/index.html) |
| Method | Open-source repository + npm package token extraction |
| License | ISC |
| Date | 2025-07-05 |

<!-- Source: https://designmd.app/brands/natura-gaya · designmd.app -->
