---
name: "UOL"
description: "Design system do UOL, maior portal de conteúdo da internet brasileira. Interface dark-first com tipografia proprietária UOLText, grid de 5px e identidade laranja-coral (#ffb171) para elementos interativos."
colors:
  brand:
    accent: "#ffb171"
    warning: "#be8e4e"
    info: "#065d83"
    danger: "#cb0003"
  semantic:
    background: "#000000"
    surface: "#181324"
    textPrimary: "#ffffff"
    textMuted: "#999999"
    border: "#4d4d4d"
  neutral:
    light1: "#f2f2f2"
    light2: "#e6e6e6"
    light3: "#cccccc"
    light4: "#b3b3b3"
    mid1: "#666666"
    mid2: "#5f6b7d"
    dark1: "#333333"
    dark2: "#212529"
    dark3: "#141414"
typography:
  headline:
    fontFamily: "UOLText, sans-serif"
    fontSize: "32px"
    fontWeight: 700
  body:
    fontFamily: "UOLText, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  code:
    fontFamily: "SFMono-Regular, monospace"
    fontSize: "14px"
    fontWeight: 400
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "100px"
spacing:
  xs: "5px"
  sm: "10px"
  md: "20px"
  lg: "30px"
  xl: "40px"

gallery:
  order: 1706
  author: "designmd.app"
  source: "https://designmd.app/brands/uol"
  tags: ["真实品牌", "Design system do UOL"]
---

## Overview

**UOL** é o maior portal de conteúdo da internet brasileira, fundado em 1996. Seu design system combina uma estética dark-first com tipografia proprietária UOLText, criando uma experiência visual única que prioriza a legibilidade de conteúdo em um ambiente de alta densidade informacional.

A identidade visual é caracterizada pelo fundo escuro (#000000) que reduz fadiga visual em longas sessões de leitura, com a cor de acento laranja-coral (#ffb171) reservada para elementos interativos como botões, links e indicadores de foco.

### Princípios de design

1. **Dark-first** — Fundo preto como base para reduzir fadiga visual e destacar conteúdo
2. **Densidade controlada** — Grid de 5px permite composições compactas sem sacrificar respiração
3. **Tipografia proprietária** — UOLText garante identidade consistente em todo o ecossistema
4. **Acento funcional** — Laranja-coral (#ffb171) usado exclusivamente para interação, nunca decoração
5. **Hierarquia clara** — Contraste via cor e opacidade, não multiplicação de tamanhos de fonte

---

## Colors

### Paleta de marca

| Token | Hex | Uso |
|---|---|---|
| `accent` | `#ffb171` | CTAs, links, focus rings, estados ativos |
| `background` | `#000000` | Fundo principal das páginas |
| `surface` | `#181324` | Cards, painéis e containers |
| `textPrimary` | `#ffffff` | Títulos e corpo de texto |
| `textMuted` | `#999999` | Captions, placeholders, info secundária |
| `border` | `#4d4d4d` | Divisores, bordas de cards, outlines |
| `danger` | `#cb0003` | Estados de erro, ações destrutivas |
| `warning` | `#be8e4e` | Alertas, indicadores de atenção |
| `info` | `#065d83` | Destaques informativos |

### Aplicação de cor

- Use `#ffb171` para o CTA principal e elementos que pedem interação
- Use `#000000` como background padrão em todas as páginas
- Use `#181324` para superfícies elevadas (cards, modais)
- Mantenha texto em `#ffffff` para alto contraste; use `#999999` para texto secundário
- Bordas sempre em `#4d4d4d` para separação sutil

---

## Typography

### Famílias

| Papel | Família | Especificação |
|---|---|---|
| Headlines | UOLText | Bold (700), tracking normal |
| Body | UOLText | Regular (400), line-height 1.5 |
| Code | SFMono-Regular | Regular (400), monospace |

```css
@font-face {
  font-family: "UOLText";
  src: url("https://stc.uol.com/c/webfont/projeto-grafico/uol-font/uol-text-regular.woff2?v5") format("woff2");
  font-weight: 400;
}
```

### Hierarquia sugerida

| Token | Tamanho | Peso | Uso |
|---|---:|---:|---|
| `h1` | 120px | 700 | Hero headlines |
| `h2` | 100px | 700 | Títulos de seção |
| `h3` | 90px | 700 | Subtítulos |
| `body` | 14px | 400 | Texto corrido |
| `caption` | 16px | 400 | Labels e metadados |
| `code` | 14px | 400 | Blocos de código |

Limite a 3 famílias tipográficas por tela. Use cor e opacidade para hierarquia secundária, não tamanhos adicionais.

---

## Layout

O UOL utiliza um grid baseado em **5px**, permitindo composições compactas típicas de portais de notícias. A densidade é padrão (não compacta), com escala de spacing: 5, 10, 15, 20, 25, 30, 35, 40px.

### Breakpoints

| Nome | Valor | Uso |
|---|---|---|
| `xs` | 320-375px | Mobile pequeno |
| `md` | 768px | Tablet |
| `lg` | 992px | Desktop pequeno |
| `xl` | 1230px | Desktop grande |

### Max-width

Conteúdo limitado a **991px** em containers principais.

### Spacing como significado

| Spacing | Uso |
|---|---|
| 2.5-5px | Tight: itens relacionados dentro de um grupo |
| 10px | Medium: entre grupos |
| 15-20px | Wide: entre seções |
| 30px+ | Vast: quebras de seção principais |

---

## Elevation & Depth

O UOL usa um sistema de sombras expressivo para criar profundidade no tema escuro.

### Níveis de elevação

| Nível | Box-shadow | Uso |
|---|---|---|
| Flat | `inset 0 1px 0 #fff` | Hints sutis de profundidade |
| Raised | `0 0 8px rgba(0,0,0,.25)` | Cards, botões, elementos interativos |
| Floating | `0 0 16px 4px rgba(0,0,0,.3)` | Dropdowns, popovers, modais |

### Z-Index Scale

Escala definida: `0, 1, 2, 10, 20, 99, 100, 999, 1000, 9999, 10000`

---

## Shapes

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `xs` | 2px | Tags, badges compactos |
| `sm` | 4px | Inputs, campos de formulário |
| `md` | 8px | Cards padrão |
| `lg` | 12px | Cards destacados |
| `xl` | 16px | Modais, overlays |
| `pill` | 100px | Botões, chips, search bars |

---

## Components

### Botões

- **Primário:** fundo `#ffb171`, texto branco, pill-shaped
- **Ghost:** fundo transparente, borda `#4d4d4d`
- **Hover:** opacity 0.9 ou shade mais claro
- **Focus:** ring com `#ffb171`

### Cards

- Background: `#181324`
- Border: `1px solid #4d4d4d`
- Radius: `10px`
- Padding: `20px`

### Inputs

- Background: `#000000`
- Border: `1px solid #4d4d4d`
- Focus: `border-color: #ffb171`
- Radius: `10px`

### Navegação

Header com logo, links essenciais e CTA de contraste. Footer com links organizados em grid.

---

## Animation & Motion

O UOL utiliza **motion expressivo** com animações como parte integral da experiência.

### Keyframes disponíveis

- `fadeIn` / `fadeout`
- `spin`
- `skeletonAnimation`
- `loading__ellipsis1/2/3`

### Guidelines

- Duração: 150-300ms para micro-interações, 300-500ms para transições de página
- Easing: `ease-out` para entradas, `ease-in` para saídas
- Sempre respeitar `prefers-reduced-motion`

---

## Do's and Don'ts

### Faça

- Use `#ffb171` para elementos interativos (botões, links, focus rings)
- Use `#000000` como background principal
- Combine UOLText (corpo) com UOLText (display) — são as fontes permitidas
- Siga o grid de **5px** para margens, padding e gaps
- Use os shadow tokens definidos para elevação
- Use border-radius da escala: 2px, 4px, 8px, 12px, 16px, 100px

### Não faça

- Não introduza cores fora da paleta sem estender os tokens
- Não adicione famílias tipográficas além de UOLText e SFMono-Regular
- Não use valores arbitrários de spacing — mantenha múltiplos de 5px
- Não crie box-shadow customizados fora dos tokens do sistema
- Não use border-radius arbitrários
- Não duplique padrões de componentes existentes
- Não use backdrop-blur ou efeitos de blur

---

## Attribution

| Campo | Valor |
|---|---|
| Source | [UOL](https://www.uol.com.br) |
| Method | Public site CSS extraction via skillui |
| Extracted | 2026-09-11 |
| License | Design tokens extracted from publicly visible CSS. No affiliation with the brand. |

<!-- Source: https://designmd.app/brands/uol · designmd.app -->
