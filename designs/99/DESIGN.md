---
name: 99 (Ride-hailing Brasil)
description: >
  Design system do 99, o maior app de mobilidade urbana brasileiro, de propriedade
  da DiDi Global. Interface mobile-first focada em mapa, request de corridas, 99Food
  (delivery) e 99Pay (fintech). Tipografia proprietária Didi Sans Flex BR (variante
  brasileira da Didi Sans) com fallback Montserrat. Paleta liderada pelo amarelo
  vibrante (#FFDD00) com laranja como cor de ação principal (#FC4C02), preto (#212121)
  como texto, e sistema de cores semânticas para cada vertical (rides, food, pay,
  empresas). O site é construído com Next.js e Tailwind CSS 4 com tokens customizados.
colors:
  brand:
    yellow99Primary: "#FFDD00"
    orangePrimary: "#FC4C02"
    black99Primary: "#212121"
    white99Primary: "#FFFFFF"
    offWhitePrimary: "#F1F1F1"
    grayPrimary: "#3C2F38"
  yellow:
    primary: "#FFDD00"
    secondary100: "#FFEB66"
    secondary200: "#FFE433"
    secondary300: "#FFDD00"
    secondary400: "#F8C400"
    secondary500: "#F1B500"
  orange:
    primary: "#FC4C02"
    primary99: "#FF7B1C"
    secondary: "#FF5F14"
    dark: "#E05E00"
    accent: "#FF9447"
  blue:
    primary: "#1085D4"
    secondary100: "#52B7FF"
    secondary200: "#149DFF"
    secondary400: "#0065AD"
    secondary500: "#004D85"
    secondary600: "#053FE2"
    secondary700: "#4A82FF"
    secondary800: "#001CA8"
    fintech: "#3355FF"
  green:
    primary: "#00E070"
    secondary100: "#88FFAC"
    secondary200: "#336666"
  semantic:
    success: "#00E070"
    info: "#1085D4"
    warning: "#F1B500"
    error: "#FC4C02"
  neutral:
    white: "#FFFFFF"
    offWhite: "#F1F1F1"
    grayLighter: "#F9F9F9"
    grayLight: "#E9E8E9"
    gray300: "#C7C7C7"
    gray400: "#B3B3B3"
    gray500: "#9C9C9C"
    gray600: "#858585"
    gray700: "#757575"
    grayDarkSecondary: "#4A4B4A"
    gray800: "#424242"
    grayPrimary: "#3C2F38"
    grayDarkPrimary: "#212121"
    black: "#000000"
  opacity:
    black10: "rgba(0,0,0,0.10)"
    black20: "rgba(0,0,0,0.20)"
    black30: "rgba(0,0,0,0.30)"
    black40: "rgba(0,0,0,0.40)"
    black50: "rgba(0,0,0,0.50)"
    black60: "rgba(0,0,0,0.60)"
    black70: "rgba(0,0,0,0.70)"
    black80: "rgba(0,0,0,0.80)"
    black90: "rgba(0,0,0,0.90)"
    white10: "rgba(255,255,255,0.10)"
    white20: "rgba(255,255,255,0.20)"
  verticals:
    rides: "#FFDD00"
    food: "#FC4C02"
    pay: "#FFC81A"
    empresas: "#004F94"
  pay:
    yellowPrimary: "#FFC81A"
    yellowDark: "#DD9F00"
    yellowLight: "#FFE38C"
    blackPrimary: "#121212"
    magentaDark: "#B1317B"
    magentaLight: "#F9DCE9"
    greyPrimary: "#B0B0B0"
    greyDark: "#53565A"
    greyLight: "#D8D8D8"
    offWhite: "#F1F1F1"
typography:
  families:
    - "Didi Sans Flex BR"
    - "Didi Sans Flex VF"
    - "Didi Sans"
    - "Montserrat (fallback)"
  fallback: "sans-serif"
  weights:
    light: 100
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
    extrabold: 800
    black: 900
  sizes:
    caption: 12
    small: 13
    body2: 14
    body1: 16
    subtitle: 18
    heading6: 20
    heading5: 22
    heading4: 24
    heading3: 28
    heading2: 32
    heading1: 40
    display3: 44
    display2: 48
    display1: 56
    displayHero: 64
    displayXL: 96
  lineHeights:
    tight: 1.2
    normal: 1.4
    relaxed: 1.5
rounded:
  circle: "9999px"
spacing:
  unit: 4
  scale:
    - 4
    - 8
    - 12
    - 16
    - 20
    - 24
    - 28
    - 32
    - 40
    - 48
    - 56
    - 64
    - 80
    - 96
    - 112
    - 128

gallery:
  order: 1670
  author: "designmd.app"
  source: "https://designmd.app/brands/99"
  tags: ["真实品牌"]
---

## Overview

**99** é o maior app de mobilidade urbana do Brasil, com presença em mais de 1.600 cidades. Fundado em 2012 como 99Taxis, foi adquirido pela **DiDi Global** (China) em 2018 e expandiu para um super-app com corridas (99Pop, 99Plus, 99Taxi, 99Moto), delivery (99Food), entregas (99Entrega) e fintech (99Pay).

### Números

| Métrica | Valor |
|---------|-------|
| Presença | 1.600+ cidades no Brasil |
| Motoristas parceiros | 1M+ |
| Corridas anuais | 500M+ |
| Categorias de ride | 99Pop, 99Plus, 99Taxi, 99Moto, 99Electric-Pro |
| Verticals | Rides, Food, Entrega, Pay |
| Empresa mãe | DiDi Global (NYSE: DIDI) |
| Tech stack (web) | Next.js + Tailwind CSS 4 |
| Tipografia | Didi Sans Flex BR (proprietária) |

### Princípios de Design

1. **Mobile-first** — Toda a experiência é projetada para o contexto mobile, com mapa como canvas principal
2. **Simplicidade brasileira** — Interface limpa, direta, com linguagem acessível e culturalmente brasileira
3. **Velocidade e confiança** — O request de corrida deve ser rápido (poucos taps) e transmitir segurança
4. **Cor como affordance** — Amarelo = 99, Laranja = ação/CTA, Verde = sucesso, Azul = informação
5. **Identidade local dentro da DiDi** — O 99 mantém identidade visual própria, distinta da marca DiDi global

### Características Técnicas

- **Super-app** — Múltiplas verticals (rides, food, pay) numa única instalação
- **Didi Sans Flex BR** — Tipografia proprietária variável, localizada para o Brasil
- **Tailwind CSS 4** — Tokens customizados com namespace `99` (ex: `yellow99-primary`, `orange-primary`)
- **Next.js** — Server-side rendering para o site institucional
- **Map-centric UI** — O mapa full-screen é o background principal; UI flutua sobre ele
- **iF Design Award** — Premiado pelo projeto "Design for Brazilian: A Journey of Local Resonance"

---

## Colors

### Filosofia de Cor

> O amarelo é o 99 — vibrante, energético, brasileiro. O laranja é a ação. O preto é a confiança.

O sistema de cores do 99 é construído em torno de três eixos: **amarelo como identidade** (onipresente na marca), **laranja como ação** (CTAs, botões de corrida, preços), e **preto como âncora** (textos, cabeçalhos, confiabilidade). Cada vertical do super-app tem sua cor de assinatura.

### Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `yellow99-primary` | `#FFDD00` | Cor da marca, logo, backgrounds hero, progress bars |
| `orange-primary` | `#FC4C02` | CTAs primários, botões de ação, preços, 99Food |
| `black99-primary` | `#212121` | Texto principal, headings, ícones |
| `white99-primary` | `#FFFFFF` | Backgrounds, texto em fundos escuros |
| `offWhite-primary` | `#F1F1F1` | Backgrounds secundários, seções alternadas |

### Paleta Amarelo (Identidade)

| Token | Hex | Uso |
|-------|-----|-----|
| `yellow99-primary` | `#FFDD00` | Cor principal da marca |
| `yellow99-secondary-100` | `#FFEB66` | Backgrounds leves, highlights |
| `yellow99-secondary-200` | `#FFE433` | Hover states no amarelo |
| `yellow99-secondary-400` | `#F8C400` | Bordas ativas, scrollbar thumb |
| `yellow99-secondary-500` | `#F1B500` | Ênfases mais quentes |

### Paleta Laranja (Ação)

| Token | Hex | Uso |
|-------|-----|-----|
| `orange-primary` | `#FC4C02` | CTAs de corrida, botões principais |
| `orange-primary99` | `#FF7B1C` | Variante mais clara para hover |
| `orange-secondary` | `#FF5F14` | Acento, ícones de destaque |
| `orange-dark` | `#E05E00` | Pressed state |
| `orange-accent` | `#FF9447` | Highlights suaves |

### Paleta Azul (Informação & Empresas)

| Token | Hex | Uso |
|-------|-----|-----|
| `blue99-primary` | `#1085D4` | Links, informações, ícones blue |
| `blue99-secondary-100` | `#52B7FF` | Highlights, badges informativos |
| `blue99-secondary-500` | `#004D85` | Texto de link ativo, bordas focus |
| `companie-blue99-primary` | `#004F94` | Produto 99 Empresas |
| `blue-fintech` | `#3355FF` | Produto fintech 99Pay |

### Paleta Verde (Sucesso)

| Token | Hex | Uso |
|-------|-----|-----|
| `green99-primary` | `#00E070` | Confirmações, motorista chegou, pagamento ok |
| `green99-secondary-100` | `#88FFAC` | Background de sucesso leve |

### Cores por Vertical

| Vertical | Cor Assinatura | Hex |
|----------|---------------|-----|
| 99 Rides | Amarelo | `#FFDD00` |
| 99Food | Laranja | `#FC4C02` |
| 99Pay | Amarelo dourado | `#FFC81A` |
| 99 Empresas | Azul corporativo | `#004F94` |

### Neutros e Escalas

| Token | Hex | Uso |
|-------|-----|-----|
| `white` | `#FFFFFF` | Background principal |
| `offWhite` | `#F1F1F1` | Background alternativo, cards |
| `grayLighter` | `#F9F9F9` | Background sutilíssimo |
| `grayLight` | `#E9E8E9` | Bordas, dividers |
| `gray400` | `#B3B3B3` | Placeholder text |
| `gray500` | `#9C9C9C` | Texto desabilitado |
| `gray600` | `#858585` | Texto medium emphasis |
| `grayDarkSecondary` | `#4A4B4A` | Texto secundário |
| `grayPrimary` | `#3C2F38` | Texto em dark sections |
| `grayDarkPrimary` | `#212121` | Texto principal (= black99-primary) |
| `black` | `#000000` | Preto puro (raro, dark mode) |

---

## Typography

### Didi Sans Flex BR — A Tipografia Proprietária

O 99 utiliza a **Didi Sans Flex BR**, uma variante localizada para o Brasil da família tipográfica proprietária da DiDi Global. É uma fonte variável (Variable Font) otimizada para interfaces mobile-first, com suporte completo a português brasileiro.

O CSS declara três variantes:

| Família | Uso |
|---------|-----|
| **Didi Sans Flex BR** | Família principal do app e site BR, sans-serif otimizada para português |
| **Didi Sans Flex VF** | Variante Variable Font para animações e responsividade |
| **Didi Sans** | Família base global DiDi (fallback) |
| **Montserrat** | Fallback público (Google Fonts), usado em seções marketing |

### Escala Tipográfica

| Token | Tamanho | Uso |
|-------|:---:|---|
| `caption` | 12px | Labels mínimos, footnotes |
| `small` | 13px | Texto auxiliar, disclaimers |
| `body2` | 14px | Texto secundário, descrições curtas |
| `body1` | 16px | Corpo padrão, parágrafos |
| `subtitle` | 18px | Subtítulos, resumos |
| `heading6` | 20px | Headings de seção menores |
| `heading5` | 22px | Headings de card |
| `heading4` | 24px | Títulos de seção |
| `heading3` | 28px | Títulos de bloco |
| `heading2` | 32px | Títulos hero mobile |
| `heading1` | 40px | Títulos hero desktop |
| `display3` | 44px | Display de campanha |
| `display2` | 48px | Hero section grande |
| `display1` | 56px | Display hero |
| `displayHero` | 64px | Hero máximo desktop |
| `displayXL` | 96px | Display decorativo (números grandes) |

### Pesos e Hierarquia

| Role | Weight | Token | Uso |
|------|:------:|-------|-----|
| Light | 100 | `font-weight-light` | Textos decorativos, números grandes |
| Regular | 400 | `font-weight-normal` | Corpo de texto, descrições |
| Medium | 500 | – | Subtítulos, labels |
| Semibold | 600 | `font-weight-semibold` | **Peso padrão de UI** — headings, botões, navegação |
| Bold | 700 | `font-weight-bold` | Destaques, preços, CTAs |
| Extrabold | 800 | `font-weight-extrabold` | Display, hero headlines |
| Black | 900 | – | Números decorativos (valores financeiros grandes) |

> **Nota:** O `semibold` (600) é o peso dominante na interface — aparece 20+ vezes no CSS, usado para headings, botões e navegação. O 99 prefere semibold sobre bold para o corpo da UI.

---

## Layout

### Grid System

O 99 é mobile-first, com breakpoints customizados definidos no Tailwind:

| Breakpoint | Largura | Colunas | Contexto |
|-----------|:---:|:---:|---|
| Mobile | < 768px | 1–2 | App, mobile web |
| md | 768px | 4–6 | Tablet |
| lg | 1024px | 8–12 | Desktop pequeno |
| xl99 | 1280px+ | 12 | Desktop padrão (breakpoint custom) |

### Spacing Scale

O sistema usa base de **4px** com escala consistente:

| Valor | Uso |
|:---:|---|
| 4px | Micro-gap (ícone interno) |
| 8px | Gap ícone-texto, padding mínimo |
| 12px | Padding compacto de chip/tag |
| 16px | Padding padrão de componente |
| 20px | Espaçamento entre itens de lista |
| 24px | Padding de card, espaço entre blocos |
| 28px | Margem interna de seção (mobile) |
| 32px | Separação entre seções (mobile) |
| 40px | Margem de seção (desktop) |
| 48px | Separação generosa |
| 64px | Espaçamento de hero |
| 80px | Margem grande |
| 96px | Separação de mega-seções |
| 128px | Hero spacing máximo |

### Anatomia de Tela (Mobile App)

1. **Status bar** — Nativa do sistema
2. **Map canvas** — Mapa full-screen (Google Maps) como background
3. **Top bar** — Greeting + endereço atual + menu
4. **Search bar** — "Para onde?" — input flutuante sobre o mapa
5. **Category pills** — Filtros horizontais (99Pop, 99Moto, 99Food)
6. **Bottom sheet** — Card arrastável com detalhes da corrida, preço, motorista
7. **CTA fixo** — Botão primário laranja fixo no bottom

### Padding Padrão

| Contexto | Inline (horizontal) | Block (vertical) |
|----------|:---:|:---:|
| Seção mobile | 16–24px | 32–48px |
| Seção desktop (xl99) | 112–216px | 80–112px |
| Card interno | 16–24px | 16–24px |
| Botão | 16–32px | 12–16px |

---

## Elevation & Depth

### Filosofia

O app 99 utiliza um modelo de **elevação por sobreposição ao mapa**. O mapa é a camada base (nível 0) e todos os elementos de UI flutuam sobre ele com diferentes níveis de elevação. Sombras e overlays são moderados para não competir com o conteúdo do mapa.

### Camadas de Profundidade

| Nível | Elemento | Tratamento |
|:---:|---------|-----------|
| 0 | Mapa (background) | Full-screen, nenhuma sombra |
| 1 | Search bar, category pills | Sombra leve + background branco/translúcido |
| 2 | Cards de informação, ETA | Background sólido + sombra média |
| 3 | Bottom sheet (corrida) | Cantos arredondados superiores + sombra forte |
| 4 | Modais, confirmação | Overlay + scrim escuro |

### Box Shadows

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-top-99-footer` | `0 -5px 10px rgba(0,0,0,0.10)` | Footer flutuante |
| `shadow-bottom-99-header` | `0 0 10px rgba(0,0,0,0.23)` | Header fixo |
| `shadow-top-99-cookies-banner` | `0 -2px 6px -1px rgba(0,0,0,0.23)` | Banner cookies |
| `elevation-low` | `0 2px 4px rgba(0,0,0,0.08)` | Cards em repouso |
| `elevation-medium` | `0 4px 8px rgba(0,0,0,0.12)` | Cards flutuantes |
| `elevation-high` | `0 8px 16px rgba(0,0,0,0.16)` | Bottom sheets |

### Overlays e Transparências

| Token | Valor | Uso |
|-------|-------|-----|
| `black99-10` | `rgba(0,0,0,0.10)` | Overlay sutil sobre mapa |
| `black99-30` | `rgba(0,0,0,0.30)` | Scrim leve |
| `black99-50` | `rgba(0,0,0,0.50)` | Scrim médio (bottom sheet parcial) |
| `black99-80` | `rgba(0,0,0,0.80)` | Scrim forte (modal) |
| `white99-10` | `rgba(255,255,255,0.10)` | Glassmorphism sutil |
| `white99-20` | `rgba(255,255,255,0.20)` | Frost effect em dark sections |

---

## Shapes

### Border Radius

O 99 é generoso em arredondamento, com tendência a formas **pill** para botões e **rounded** para cards:

| Token | Valor | Uso |
|-------|:---:|---|
| `rounded-xs` | 4px | Tags compactas, badges, scrollbar |
| `rounded-sm` | 6px | Inputs menores, chips compactos |
| `rounded-md` | 8px | Inputs padrão, cards internos |
| `rounded-lg` | 10px | Cards de conteúdo |
| `rounded-xl` | 12px | Cards de seção, imagens |
| `rounded-2xl` | 16px | Cards hero, bottom sheet corners |
| `rounded-3xl` | 20px | Modais, sheets grandes |
| `rounded-4xl` | 24px | Banners arredondados |
| `rounded-5xl` | 30px | Containers hero |
| `rounded-[38px]` | 38px | Botões grandes arredondados |
| `rounded-[48px]` | 48px | Cards hero decorativos |
| `rounded-pill` | 72px / 4.5rem | Botões pill, search bar |
| `rounded-full` | 9999px | Avatares, FABs, indicators |
| `rounded-[80px]` | 80px | Containers super-arredondados (desktop) |

### Botões — Shapes

| Tipo | Border Radius | Uso |
|------|:---:|---|
| CTA principal | pill (72px) | "Quero ser motorista", "Pedir corrida" |
| Botão secundário | 8–12px | Ações secundárias |
| Botão ícone | circle (50%) | Ações de mapa, navegação |
| Chip/Pill | full (9999px) | Categorias, filtros |

### Iconografia

- Ícones custom com prefixo `99` (99car-icon, 99food-icon, 99money-icon, etc.)
- Estilo flat, monocromático (preto ou branco conforme contexto)
- Tamanhos padrão: 16px, 20px, 24px, 32px
- Ícones de seta direita usados em CTAs: `new-icon-arrow-special-right`, `btn-arrow-white-icon`

---

## Components

### Navegação

- **Header** — Logo 99 + menu hamburger + CTAs, com `shadow-bottom-99-header`
- **Mobile Nav** — Menu full-screen com categorias (Motorista, Passageiro, 99Food, 99Pay, Empresas)
- **Category Pills** — Filtros horizontais scrolláveis com ícones (99car, 99person, 99food, 99cel, 99money)
- **Footer** — Links organizados em colunas + badges de app store + redes sociais

### Cards

- **Incentive Card** — Card com ícone + título bold + descrição, usado para listar benefícios de motorista
- **Product Card** — Card com imagem, título e CTA para categorias (99Pop, 99Food, 99Pay)
- **Banner Card** — Card largo com imagem lateral e CTA pill (ex: Classificados99, Aluguel Elétrico)
- **Info Card** — Card com fundo `offWhite-primary` (#F1F1F1) e `border-radius: 16–24px`

### Botões

- **Primary CTA** — Background laranja (#FC4C02), texto branco, border-radius pill, ícone de seta
- **Secondary CTA** — Background amarelo (#FFDD00), texto preto (#212121), border-radius pill
- **Ghost Button** — Borda + texto, sem preenchimento
- **Icon Button** — Circular, para ações de mapa e navegação

### Formulários (App)

- **Search Input** — "Para onde?" — borda arredondada, ícone de lupa, fundo branco
- **Address Selector** — Input com ícone de pin + auto-complete
- **Payment Selector** — Dropdown com ícones de métodos de pagamento

### Bottom Sheet

- **Ride Summary** — Sheet arrastável com dados da corrida (preço, tempo, distância)
- **Driver Info** — Foto + nome + nota + placa + modelo do carro
- **Ride Options** — Seletor de categoria (99Pop, 99Plus, 99Taxi) com preço estimado
- Border-radius superior: 16–24px
- Handle indicator: pill centralizado no topo

### Feedback

- **Progress Bar** — Linear com `yellow99-primary` (#FFDD00) como fill
- **Loading** — Spinner animado (pulse 2s cubic-bezier)
- **Success State** — Verde (#00E070) + ícone de check
- **Error State** — Laranja/vermelho com mensagem contextual

### 99Pay (Sub-brand)

- Paleta própria: amarelo dourado (#FFC81A) + magenta (#B1317B)
- Background escuro (#121212) para contexto fintech
- Cards com gradientes magenta-to-yellow
- Tipografia mantém Didi Sans Flex BR

### Custom Scrollbar

- **Track**: `yellow99-secondary-100` (#FFEB66)
- **Thumb**: `yellow99-secondary-500` (#F1B500)
- **Border-radius**: 4px
- Variante laranja para seções 99Food

---

## Do's and Don'ts

### ✅ Do's

- **Use tokens com namespace `99`** — Sempre `yellow99-primary`, `orange-primary`, `black99-primary` em vez de hex direto. Tokens mudam por vertical e contexto
- **Mapa como canvas principal** — O mapa é o background do app; toda UI deve flutuar sobre ele com elevação adequada
- **Amarelo = marca, laranja = ação** — Não troque: amarelo identifica o 99, laranja convida à ação (CTAs, preços)
- **Use Didi Sans Flex BR para tudo** — Montserrat é fallback apenas; a fonte proprietária é obrigatória
- **Semibold (600) como peso padrão de UI** — Headings, botões e nav usam semibold; bold é para destaque extra
- **Border-radius generoso** — Botões pill, cards 16–24px, bottom sheets com cantos arredondados. O 99 é redondo e acolhedor
- **Respeite as cores por vertical** — Rides = amarelo, Food = laranja, Pay = dourado, Empresas = azul
- **Mobile-first sempre** — Design para tela pequena primeiro; desktop é adaptação, não o contrário
- **Contraste com o mapa** — Cards e inputs sobre o mapa precisam de fundo sólido branco ou sombra para leitura
- **Animate com moderação** — Pulse para loading, transições suaves; nada que distraia durante uma corrida

### ❌ Don'ts

- **Não use o amarelo como cor de CTA** — Amarelo é identidade, não ação. CTAs são laranja (#FC4C02)
- **Não misture as paletas de verticais** — 99Pay magenta não aparece em telas de Rides; 99Food laranja não aparece em telas de Pay
- **Não use sombras pesadas** — O 99 prefere elevação sutil; sombras são leves (max 0.23 opacity)
- **Não reduza border-radius para < 8px em cards** — O sistema visual é arredondado; cantos retos quebram a linguagem
- **Não use Gellix, Graphik ou outras fontes** — Apenas Didi Sans Flex BR (ou Montserrat como emergência)
- **Não coloque texto sobre o mapa sem background** — Sempre use card, pill ou overlay com contraste garantido
- **Não use preto puro (#000000) para texto** — O texto principal é `#212121` (black99-primary); preto puro é reservado para dark mode background
- **Não ignore o espaçamento de 4px** — Toda medida deve ser múltiplo de 4px; valores arbitrários quebram o rhythm
- **Não crie scroll horizontal sem indicador** — Category pills e carrosséis precisam de fade ou indicador de scroll
- **Não replique a marca DiDi no contexto brasileiro** — O 99 tem identidade visual própria; a DiDi aparece apenas no footer como "DiDi Global"

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [99app.com](https://99app.com) |
| Wikipedia | [en.wikipedia.org/wiki/99_(app)](https://en.wikipedia.org/wiki/99_(app)) |
| iF Design Award | [ifdesign.com — Design for Brazilian: A Journey of Local Resonance](https://ifdesign.com/es/winner-ranking/project/design-for-brazilian-a-journey-of-local-resonance/751211) |
| DiDi Global | [didiglobal.com](https://www.didiglobal.com) |
| Google Play | [99: Rides, Food, Pay](https://play.google.com/store/apps/details?id=com.taxis99) |
| App Store | [99 — Private drivers and Taxi](https://apps.apple.com/us/app/99-private-drivers-and-taxi/id553663691) |
| Method | Public site CSS extraction (Next.js + Tailwind CSS 4 token analysis) |
| Date | 2026-07-05 |

<!-- Source: https://designmd.app/brands/99 · designmd.app -->
