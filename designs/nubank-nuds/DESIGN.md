---
name: Nubank NuDS (Nu Design System)
description: >
  Design system da Nubank, o maior banco digital da América Latina com 118M+ clientes
  no Brasil, México e Colômbia. O NuDS é construído inteiramente no Figma com tokens
  semânticos, theming multi-mercado, server-driven UI e suporte a dark mode nativo.
  Atinge 80% de adoção nas telas do app com 100+ componentes reutilizáveis e templates
  de tela localizados. Tipografia customizada Nu Sans (2026, Blackletra) substitui
  Gellix (brand) e Graphik (app) num sistema único com 32 fontes.
colors:
  brand:
    primaryMain: "#820AD1"
    primaryLight: "#A633E6"
    primaryLightest: "#D6A3F9"
    primaryDark: "#6B08AD"
    primaryDarkest: "#530789"
    secondaryMain: "#FFFFFF"
    secondaryDark: "#F5F5F5"
  semantic:
    surface: "#FFFFFF"
    surfaceDark: "#1A1A1A"
    background: "#FFFFFF"
    backgroundDark: "#000000"
    onBackground: "#111111"
    onBackgroundDark: "#F5F5F5"
    highlight: "#820AD1"
    highEmphasis: "#111111"
    mediumEmphasis: "#6E6E6E"
    lowEmphasis: "#A3A3A3"
  feedback:
    success: "#1AAE5C"
    successLight: "#E6F9EF"
    warning: "#E5A30A"
    warningLight: "#FFF8E6"
    alert: "#E5222D"
    alertLight: "#FDE8E9"
    info: "#1E7FE6"
    infoLight: "#E8F2FD"
  neutral:
    neutral0: "#FFFFFF"
    neutral50: "#F5F5F5"
    neutral100: "#E8E8E8"
    neutral200: "#D1D1D1"
    neutral300: "#B8B8B8"
    neutral400: "#A3A3A3"
    neutral500: "#8C8C8C"
    neutral600: "#6E6E6E"
    neutral700: "#4D4D4D"
    neutral800: "#2E2E2E"
    neutral900: "#1A1A1A"
    neutral1000: "#000000"
  darkMode:
    background: "#000000"
    surfaceLevel1: "#1A1A1A"
    surfaceLevel2: "#2E2E2E"
    surfaceLevel3: "#3D3D3D"
    primaryDark: "#A633E6"
    onPrimary: "#FFFFFF"
    textPrimary: "#F5F5F5"
    textSecondary: "#B8B8B8"
    textDisabled: "#6E6E6E"
  ultravioleta:
    primaryMain: "#3D0066"
    primaryDark: "#2A0047"
    accent: "#820AD1"
    surface: "#1A0033"
    onSurface: "#FFFFFF"
typography:
  families:
    - Nu Sans
    - Nu Sans Text
    - Nu Sans Display
    - Gellix (legacy brand)
    - Graphik (legacy app)
  weights:
    light: 300
    regular: 400
    medium: 500
    bold: 700
  widths:
    condensed: "Condensed"
    normal: "Normal"
    extended: "Extended"
  opticalSizes:
    text: "Optimizado para UI e textos pequenos em tela"
    display: "Optimizado para títulos, comunicação e marketing"
  sizes:
    caption: 12
    body2: 14
    body1: 16
    subtitle2: 18
    subtitle1: 20
    heading6: 22
    heading5: 24
    heading4: 28
    heading3: 32
    heading2: 36
    heading1: 40
    display2: 48
    display1: 56
  lineHeights:
    tight: 1.2
    normal: 1.4
    relaxed: 1.6
rounded:
  none: "0px"
  circle: "9999px"
spacing:
  quarck: 4
  nano: 8
  xxxs: 12
  xxs: 16
  xs: 24
  sm: 32
  md: 40
  lg: 48
  xl: 56
  xxl: 64
  xxxl: 80
  huge: 96
  giant: 128

gallery:
  order: 1695
  author: "designmd.app"
  source: "https://designmd.app/brands/nubank-nuds"
  tags: ["真实品牌"]
gradients:
  primary: "linear-gradient(135deg, #820AD1, #530789)"
---

## Overview

**NuDS** (Nu Design System) é o design system da **Nubank**, a maior plataforma de serviços financeiros digitais da América Latina. Serve mais de 118 milhões de clientes no Brasil, México e Colômbia com uma experiência consistente, acessível e localizada.

### Números

| Métrica | Valor |
|---------|-------|
| Clientes | 118M+ (2025) |
| Países | Brasil, México, Colômbia |
| Designers | 200+ |
| Componentes | 100+ reutilizáveis |
| Telas do app | 3.000+ |
| Adoção NuDS | 80% das telas em compliance |
| Linhas de código Figma | ~320.000 |
| Arquitetura | Server-driven UI (80% das telas) |

### Princípios de Design

O design do Nubank segue 5 princípios fundamentais:

1. **Start Early** — Começar a projetar o mais cedo possível, envolver design em decisões estratégicas iniciais
2. **Co-create** — Colaborar constantemente com clientes, engenheiros e stakeholders
3. **Go Beyond** — Desafiar-se e não aceitar a resposta imediata; validar frequentemente
4. **Context** — Conectar-se ao contexto real das pessoas usando os serviços
5. **Humanize** — Construir para milhões de humanos diversos; empatia com dores, demografias e cultura

### Características Técnicas

- **Multi-mercado** — Suporta tokens e temas distintos por país
- **Tokens e theming** — Sistema de tokens com modos (light/dark) e variáveis Figma
- **Multiplexed Text** — Nu Sans Text mantém mesma largura em todos os pesos (key para interface)
- **Server-driven UI** — 80% das telas renderizadas via server components com NuDS Foundations
- **Figma-native compliance** — Plugin interno verifica aderência ao NuDS diretamente no Figma
- **Acessibilidade first** — Screen readers, text resizing, contraste mínimo 4.5:1 em todo componente

---

## Colors

### Filosofia de Cor

> "Purple is Nubank. It is the corporate color used in all communication, products, and internal and external pieces."

O Nubank adota uma paleta cromática com neutrals puros (sem temperatura quente ou fria), servindo como "blank canvas" para que as experiências de produto se destaquem. O roxo é o único elemento cromático forte.

### Brand Colors (Primary Purple)

| Token | Hex | Uso |
|-------|-----|-----|
| `brand.primary.main` | `#820AD1` | Roxo Nubank — CTAs, botões, header, ícones de marca |
| `brand.primary.light` | `#A633E6` | Hover, estados ativos, acentos |
| `brand.primary.lightest` | `#D6A3F9` | Backgrounds sutis, tags leves |
| `brand.primary.dark` | `#6B08AD` | Pressed states, ênfase |
| `brand.primary.darkest` | `#530789` | Gradientes profundos, hero backgrounds |

### Neutrals

| Token | Hex | Uso |
|-------|-----|-----|
| `neutral.0` | `#FFFFFF` | Background principal (light mode) |
| `neutral.50` | `#F5F5F5` | Background secundário, sections |
| `neutral.100` | `#E8E8E8` | Bordas, dividers |
| `neutral.200` | `#D1D1D1` | Bordas inativas |
| `neutral.400` | `#A3A3A3` | Placeholders, texto low emphasis |
| `neutral.600` | `#6E6E6E` | Texto medium emphasis |
| `neutral.800` | `#2E2E2E` | Texto secondary |
| `neutral.900` | `#1A1A1A` | Texto primary dark |
| `neutral.1000` | `#000000` | Background (dark mode), preto puro |

### Dark Mode

O dark mode do Nubank utiliza **preto puro (#000000)** como background principal — decisão intencional para:
- Parecer nativo em iOS e Android
- Aproveitar OLED (pixels desligados = economia de bateria)
- Manter máxima distância do light mode

| Token | Hex | Uso |
|-------|-----|-----|
| `dark.background` | `#000000` | Fundo principal |
| `dark.surface.1` | `#1A1A1A` | Cards nível 1 |
| `dark.surface.2` | `#2E2E2E` | Cards nível 2, inputs |
| `dark.surface.3` | `#3D3D3D` | Elementos elevados |
| `dark.primary` | `#A633E6` | Roxo ajustado (menos saturado) para dark |
| `dark.text.primary` | `#F5F5F5` | Texto principal |
| `dark.text.secondary` | `#B8B8B8` | Texto secundário |

O roxo em dark mode é ajustado: escurecido o suficiente, com saturação levemente reduzida, mantendo textos brancos por cima (preserva identidade de marca). Sombras projetadas em ilustrações desaparecem no contexto dark.

### Ultravioleta (Segmento Premium)

| Token | Hex | Uso |
|-------|-----|-----|
| `ultravioleta.primary` | `#3D0066` | Roxo escuro premium |
| `ultravioleta.dark` | `#2A0047` | Background profundo |
| `ultravioleta.accent` | `#820AD1` | Acentos, destaques |
| `ultravioleta.surface` | `#1A0033` | Surfaces premium |

### Feedback / Status

| Token | Hex | Uso |
|-------|-----|-----|
| `feedback.success` | `#1AAE5C` | Confirmações, transações aprovadas |
| `feedback.warning` | `#E5A30A` | Alertas de atenção |
| `feedback.alert` | `#E5222D` | Erros, falhas, bloqueios |
| `feedback.info` | `#1E7FE6` | Informações contextuais, links |

---

## Typography

### Nu Sans — A Tipografia Proprietária (2026)

A **Nu Sans** é a família tipográfica bespoke do Nubank, desenhada pela **Blackletra** (Daniel Sabino, Lucas Gini, Matheus Gonçalves) sob direção criativa de Fernando Marar.

#### Origens e Conceito

O design parte do **joint do logo** (a conexão entre n e u) como inspiração para um visual neutro e atemporal. A estrutura geométrica alinha-se com a natureza "intencionalmente simples" da marca, com detalhes sutis do subgênero grotesque para legibilidade.

#### Especificações da Família

| Dimensão | Valores |
|----------|---------|
| Optical sizes | 2: **Text** (app, UI, corpo) e **Display** (títulos, marketing, comunicação) |
| Widths | 3: Condensed, Normal, Extended |
| Weights | 4 por width (Light, Regular, Medium, Bold) |
| Italics | Sim, para todos os pesos |
| Total de fontes | **32** |

#### Nu Sans Text — Interface

- Projetada para tamanhos pequenos em tela
- Menor contraste entre traços finos e grossos
- x-height maior, espaçamento mais generoso
- **Multiplexed**: cada glifo mantém a mesma largura em todos os pesos (incluindo itálicos)
- Métricas similares ao Graphik (transição suave no app, sem quebra de layouts)
- Ideal para: UI, botões, labels, corpo de texto, dados financeiros

#### Nu Sans Display — Comunicação

- Projetada para tamanhos grandes
- Maior contraste e personalidade
- Widths condensed e extended expandem possibilidades de composição
- Suporta segmentação: Ultravioleta (premium), Under 18 (jovens)
- Ideal para: headlines, marketing, out-of-home, cartões, campanhas

#### Numerais

Para um produto financeiro, números receberam atenção especial:
- 1, 2, 3, 7 → referências grotesque
- 4, 5, 6, 8, 9 → influências geométricas
- Suporta 20+ símbolos de moeda (BRL, USD, EUR, GBP, MXN, COP, BTC, entre outros)
- Disponíveis em versão proporcional e tabular

#### Segurança Anti-fraude

A tipografia proprietária aumenta dificuldade de replicação em comunicações fraudulentas. Detalhes como o taper na junção stem-bowl e tratamentos proprietários no grupo b/d/g/p/q tornam a fonte difícil de falsificar.

### Escala Tipográfica

| Token | Tamanho | Uso |
|-------|:---:|---|
| `caption` | 12px | Legendas, footnotes, labels mínimos |
| `body2` | 14px | Texto secundário, descrições |
| `body1` | 16px | Corpo padrão, conteúdo principal |
| `subtitle2` | 18px | Subtítulos menores |
| `subtitle1` | 20px | Subtítulos |
| `heading6` | 22px | Headings de seção |
| `heading5` | 24px | Headings médios |
| `heading4` | 28px | Headings de destaque |
| `heading3` | 32px | Títulos de tela |
| `heading2` | 36px | Títulos hero |
| `heading1` | 40px | Display no app |
| `display2` | 48px | Display marketing |
| `display1` | 56px | Display hero grande |

### Pesos e Hierarquia

| Role | Weight | Uso |
|------|:------:|-----|
| Display / Hero | 700 (Bold) | Títulos principais, hero sections |
| Heading | 500 (Medium) | Subtítulos, headings de seção |
| Body | 400 (Regular) | Texto corrido, descrições |
| Emphasis | 700 (Bold) | Ênfase em corpo de texto |
| Light | 300 (Light) | Dados financeiros grandes, saldos |

### Legacy (Pré-2026)

| Família | Uso Anterior | Status |
|---------|------|--------|
| **Gellix** | Brand, comunicação, marketing | Substituída por Nu Sans Display |
| **Graphik** | App, interface, UI | Substituída por Nu Sans Text |

---

## Layout

### Spacing Scale

O NuDS utiliza uma escala progressiva baseada em múltiplos de 4px e 8px:

| Token | Valor | Uso |
|-------|:---:|---|
| `quarck` | 4px | Micro-espaçamento, gap ícone interno |
| `nano` | 8px | Gap ícone-texto, padding mínimo |
| `xxxs` | 12px | Padding interno compacto |
| `xxs` | 16px | Padding padrão de componentes |
| `xs` | 24px | Espaçamento entre elementos |
| `sm` | 32px | Separação entre blocos |
| `md` | 40px | Espaçamento de seção |
| `lg` | 48px | Separação generosa |
| `xl` | 56px | Espaçamento entre seções |
| `xxl` | 64px | Separação grande de áreas |
| `xxxl` | 80px | Margens externas |
| `huge` | 96px | Separação máxima |
| `giant` | 128px | Hero spacing, splash screens |

### Grid System

O sistema é baseado em grids modulares com estrutura flexível:

| Contexto | Colunas | Margem | Gutter |
|----------|:---:|:---:|:---:|
| Mobile (< 375px) | 4 | 16px | 16px |
| Mobile (≥ 375px) | 4 | 24px | 16px |
| Tablet | 8 | 32px | 24px |
| Desktop | 12 | Auto | 24px |

### Product Screen Template

O NuDS define uma anatomia de Product Screen modular:
1. **Header** — Navegação, título, ações
2. **Product Overview** — Status principal, dados resumidos
3. **Content** — Corpo localizado por mercado
4. **Compliance Copy** — Textos regulatórios por país
5. **Actions** — CTAs contextuais

---

## Elevation & Depth

### Filosofia

O app Nubank é predominantemente **flat** no light mode, usando separação por cor (branco vs #F5F5F5) em vez de sombras. Elevação é usada com moderação para elementos que flutuam sobre o conteúdo (sheets, modais, FABs).

No dark mode, elevação é comunicada por **variação de luminosidade** da surface (mais clara = mais elevada):

| Nível | Light Mode | Dark Mode |
|-------|-----------|-----------|
| 0 (base) | Background #FFFFFF | #000000 |
| 1 | Surface #FFFFFF | Surface #1A1A1A |
| 2 | Sombra sutil | Surface #2E2E2E |
| 3 | Sombra média | Surface #3D3D3D |
| 4 | Sombra forte | Surface #4D4D4D |

### Box Shadows (Light Mode)

| Token | Box-shadow | Uso |
|-------|-----------|-----|
| `elevation.none` | Nenhuma | Elementos inline, flat |
| `elevation.low` | `0 2px 4px 0 rgba(0,0,0,0.08)` | Cards em repouso |
| `elevation.medium` | `0 4px 8px 0 rgba(0,0,0,0.12)` | Cards elevados, dropdowns |
| `elevation.high` | `0 8px 16px 0 rgba(0,0,0,0.16)` | Bottom sheets, modais |
| `elevation.highest` | `0 16px 32px 0 rgba(0,0,0,0.20)` | Full-screen overlays |

### Opacity

| Token | Valor | Uso |
|-------|:---:|---|
| `transparent` | 0.0 | Invisível |
| `disabled` | 0.32 | Elementos desabilitados |
| `medium` | 0.48 | Overlays parciais |
| `scrim` | 0.72 | Scrim de modais/sheets |
| `opaque` | 1.0 | Totalmente opaco |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Imagens full-bleed, dividers |
| `small` | 4px | Tags compactas, badges |
| `medium` | 8px | Inputs, cards padrão, containers |
| `large` | 12px | Cards destacados, bottom sheets |
| `xLarge` | 16px | Cards hero, sections arredondadas |
| `xxLarge` | 24px | Modais, bottom sheets grandes |
| `pill` | 999px | Botões pill, chips, search bars |
| `circle` | 50% | Avatares, FABs, ícones |

O Nubank é generoso no arredondamento — a linguagem da marca é baseada em **formas oblongas** inspiradas no logo (curvas suaves, fluidez). O padrão para componentes é `medium` (8px) a `large` (12px), com buttons e chips frequentemente usando `pill`.

### Iconografia

- Formas simples e intuitivas
- Alinhamento com a geometria da marca
- Traço consistente (2px stroke no tamanho padrão 24px)
- Otimizada para interfaces digitais

---

## Components

O NuDS oferece 100+ componentes reutilizáveis, com suporte a tokens, theming, acessibilidade e localização multi-mercado:

### Navegação
- **AppBar** — Barra de topo com navegação, título e ações
- **BottomNavigation** — Navegação principal por abas (home, cartão, PIX, etc.)
- **TabBar** — Abas horizontais para conteúdo segmentado
- **NavigationDrawer** — Menu lateral deslizante

### Cards e Containers
- **Card** — Container principal com variantes (elevated, flat, outlined)
- **ProductCard** — Card especializado para exibição de produtos financeiros
- **BottomSheet** — Sheet deslizante de baixo para cima
- **Modal** — Dialog centrado para confirmações e alertas

### Formulários
- **TextField** — Input com label, helper, error state, contador de caracteres
- **Select** — Dropdown de seleção
- **Checkbox** — Seleção múltipla
- **RadioButton** — Seleção exclusiva
- **Switch** — Toggle on/off
- **PINInput** — Input de PIN/senha numérica

### Ações
- **Button** — Primário (filled purple), secundário (outlined), terciário (ghost/text)
- **IconButton** — Botão com ícone (24x24 → 48x48 touch target)
- **FloatingActionButton** — FAB para ação principal
- **Link** — Links textuais inline

### Feedback
- **Alert** — Mensagens contextuais (success, warning, error, info)
- **Snackbar** — Notificações temporárias
- **ProgressBar** — Progresso linear
- **Spinner** — Loading circular
- **Skeleton** — Placeholder de carregamento

### Dados Financeiros
- **BalanceDisplay** — Exibição de saldo com show/hide
- **TransactionList** — Lista de transações com ícones categorizados
- **CreditCardWidget** — Representação visual do cartão (vertical BR / horizontal MX+CO)
- **Chart** — Gráficos de gastos, limites, investimentos
- **StatementRow** — Linha de extrato com valor, data, categoria

### Mídia e Display
- **Avatar** — Foto de perfil ou iniciais
- **Badge** — Indicadores de notificação
- **Tag** — Labels categóricos
- **Divider** — Separador visual
- **Illustration** — Sistema de ilustrações com suporte light/dark

### Localização

O NuDS suporta variantes localizadas:
- **Cartão de crédito** — Vertical (Brasil) vs Horizontal (México, Colômbia)
- **Ilustrações** — Culturalmente adaptadas por país
- **Copy** — Variáveis Figma para toggle entre PT, ES, EN sem duplicar designs
- **Compliance** — Textos regulatórios obrigatórios por jurisdição

---

## Do's and Don'ts

### ✅ Do's

- **Use tokens semânticos** — Sempre `color.primary`, `color.surface` em vez de hex codes. Tokens mudam por tema e modo (light/dark)
- **Priorize acessibilidade** — Mínimo 4.5:1 de contraste, suporte a screen readers, text resizing em cada componente
- **Respeite o dark mode** — Teste sempre ambos os modos. Use surfaces mais claras para comunicar elevação no dark
- **Mantenha o roxo como protagonista** — O roxo é Nubank. Não dilua com cores concorrentes
- **Use Nu Sans Text para UI** — A versão Text é multiplexed (mesmo width em todos os pesos) — ideal para interfaces
- **Siga a escala de spacing** — Use tokens de espaçamento em múltiplos de 4/8px; nunca valores arbitrários
- **Localize os designs** — Teste em PT-BR, ES e EN; considere regulamentações por país
- **Preserve a simplicidade** — O princípio central é combater complexidade. Cada elemento deve justificar sua existência
- **Use border-radius generoso** — Formas oblongas e pill shapes são a linguagem visual da marca

### ❌ Don'ts

- **Não use hex codes diretos** — `#820AD1` é fixo; `color.primary` adapta-se ao tema, modo e segmento (Ultravioleta, PJ)
- **Não inverta simplesmente as cores no dark mode** — O roxo em dark mode é ajustado (mais escuro, menos saturado, texto branco preservado)
- **Não use grays quentes ou frios** — Os neutrals do Nubank são puros (sem temperatura) para servir como canvas neutra
- **Não ignore métricas tipográficas** — Nu Sans Text foi desenhada com métricas similares ao Graphik; respeitar previne quebras de layout
- **Não crie elevações com sombras no dark mode** — Use variação de luminosidade da surface, não box-shadow
- **Não duplique arquivos para localização** — Use variáveis e modes do Figma para alternar idiomas
- **Não use ilustrações sem testar no dark** — Sombras projetadas desaparecem; grays muito claros precisam ajuste de contraste
- **Não misture famílias tipográficas** — Nu Sans Text para app/UI, Nu Sans Display para marketing/comunicação. Nunca ambas na mesma superfície
- **Não reduza o touch target** — Mínimo 48x48px para elementos interativos (acessibilidade mobile)
- **Não replique o design para fins fraudulentos** — A tipografia proprietária é um asset de segurança; uso não-autorizado é vedado

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [building.nubank.com.br](https://building.nubank.com.br) |
| Brand System | [building.nubank.com.br/nu-brand-system/](https://building.nubank.com.br/nu-brand-system/) |
| Design Principles | [building.nubank.com.br/design-principles-at-nubank/](https://building.nubank.com.br/design-principles-at-nubank/) |
| Dark Mode | [building.nubank.com.br/the-birth-of-the-dark-mode/](https://building.nubank.com.br/the-birth-of-the-dark-mode-a-journey-into-nubanks-app-evolution/) |
| Figma Case Study | [figma.com/customers/nubank-design-system-accessible-experiences-with-figma/](https://www.figma.com/customers/nubank-design-system-accessible-experiences-with-figma/) |
| Typography (Nu Sans) | [blackletra.com/custom/nubank](https://blackletra.com/custom/nubank) |
| Typography Article | [medium.com/@blackletra/designing-nubanks-typeface](https://medium.com/@blackletra/designing-nubanks-typeface-69e47072f8fb) |
| BrandBook Tool | [brand.nu.com.br](https://brand.nu.com.br/) |
| Logo Redesign | [pentagram.com/work/nubank](https://www.pentagram.com/work/nubank) |
| Method | Public documentation, case studies, portfolio analysis |
| Date | 2026-07-05 |

<!-- Source: https://designmd.app/brands/nubank-nuds · designmd.app -->
