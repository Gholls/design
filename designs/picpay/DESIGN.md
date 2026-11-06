---
name: PicPay
description: >
  Sistema de design do PicPay, fintech brasileira fundada em 2012 que atende 66M+
  clientes com conta digital, cartão de crédito, Pix, empréstimos, investimentos e
  seguros. Mobile-first, o app é o canal principal com foco absoluto em simplicidade
  e praticidade. O visual é dominado pelo verde vibrante (confiança, prosperidade)
  sobre fundos brancos ou escuros, com tipografia sans-serif limpa e componentes
  arredondados. Design principles: Contextualizado, Empático, Simples, Flexível,
  Encantador, Sincronizado e Audacioso.
colors:
  brand:
    primaryGreen: "#21C25E"
    primaryGreenLogo: "#11C76F"
    primaryGreenDark: "#1AA34E"
    primaryGreenLight: "#4CD97F"
    primaryGreenLightest: "#E6F9ED"
    white: "#FFFFFF"
    black: "#1A1A1A"
  background:
    light: "#FFFFFF"
    lightSecondary: "#F5F7FA"
    dark: "#1A1A2E"
    darkSecondary: "#2D2D3A"
    darkTertiary: "#16213E"
  text:
    primary: "#1A1A1A"
    secondary: "#6B7280"
    tertiary: "#9CA3AF"
    inverse: "#FFFFFF"
    link: "#21C25E"
  semantic:
    success: "#21C25E"
    warning: "#F59E0B"
    error: "#EF4444"
    info: "#3B82F6"
  neutral:
    50: "#F9FAFB"
    100: "#F3F4F6"
    200: "#E5E7EB"
    300: "#D1D5DB"
    400: "#9CA3AF"
    500: "#6B7280"
    600: "#4B5563"
    700: "#374151"
    800: "#1F2937"
    900: "#111827"
typography:
  families:
    - PicPay Sans (proprietária, app e site)
    - system-ui, -apple-system, sans-serif (fallback)
  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
  sizes:
    caption: 12
    body2: 14
    body1: 16
    subtitle: 18
    heading6: 20
    heading5: 22
    heading4: 24
    heading3: 28
    heading2: 32
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
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 40
  xxxl: 48
  huge: 64
  giant: 80

gallery:
  order: 1699
  author: "designmd.app"
  source: "https://designmd.app/brands/picpay"
  tags: ["真实品牌"]
gradients:
  primaryCTA: "linear-gradient(135deg, #21C25E, #1AA34E)"
  heroBackground: "linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)"
  cardShimmer: "linear-gradient(90deg, transparent 0%, rgba(33,194,94,0.08) 50%, transparent 100%)"
---

## Overview

**PicPay** é a segunda maior plataforma de banco digital do Brasil, com 66 milhões de clientes e mais de 11% de todas as transações Pix do país. Fundada em 2012 em Vitória (ES), a fintech oferece conta digital, cartão de crédito sem anuidade, Pix parcelado, empréstimos, investimentos e seguros — tudo num único app mobile-first.

### Números

| Métrica | Valor |
|---------|-------|
| Clientes | 66M+ (2025) |
| Funcionários | 4.000+ |
| Transações Pix | 11% do Brasil |
| Revenue (9M 2025) | ~US$ 1,37 bilhão |
| Produtos | Conta, Cartão, Pix, Crédito, Investimentos, Seguros |
| Plataforma | iOS + Android (mobile-first) |
| IPO | Nasdaq, Janeiro 2026 (PICS) |

### Princípios de Design

O design system do PicPay é baseado em 7 princípios definidos colaborativamente pelo time de design:

1. **Contextualizado** — Entende o momento e situação do usuário
2. **Empático** — Projeta para pessoas reais com dificuldades reais
3. **Simples** — Reduz complexidade ao mínimo necessário
4. **Flexível** — Adapta-se a diferentes contextos e dispositivos
5. **Encantador** — Surpreende positivamente nos detalhes
6. **Sincronizado** — Consistente em todas as superfícies do ecossistema
7. **Audacioso** — Não tem medo de inovar e desafiar o status quo

### Características Técnicas

- **Mobile-first** — App como canal principal; web é secundária
- **Design System baseado em Atomic Design** — Tokens (átomos) → Moléculas → Organismos → Células (templates)
- **Figma-native** — Migrado de Sketch para Figma com library centralizada
- **Two-sided ecosystem** — Interfaces para consumidor (PF) e vendedor (PJ)
- **Dark sections** — Uso estratégico de fundos escuros para hero e seções premium (Black, Epic)
- **Green-dominant** — Verde como cor de ação, confiança e identidade

---

## Colors

### Filosofia de Cor

> "O verde PicPay transmite prosperidade e confiança — é a cor que conecta o usuário ao controle do seu dinheiro."

O PicPay adota uma paleta de alto contraste: verde vibrante sobre fundos brancos (light) ou escuros (dark premium). O verde é onipresente em CTAs, ícones interativos e estados de sucesso. Seções premium (Black, Platinum, Epic) usam fundos escuros com o verde como accent.

### Brand Green (Primary)

| Token | Hex | Uso |
|-------|-----|-----|
| `brand.primary` | `#21C25E` | Verde principal — CTAs, botões, ícones ativos, destaques |
| `brand.primary.logo` | `#11C76F` | Verde do wordmark/logo — usado em contextos de marca pura |
| `brand.primary.dark` | `#1AA34E` | Hover, pressed states, gradientes |
| `brand.primary.light` | `#4CD97F` | Acentos suaves, ícones secundários |
| `brand.primary.lightest` | `#E6F9ED` | Backgrounds de feedback positivo, tags, badges |

### Backgrounds

| Token | Hex | Uso |
|-------|-----|-----|
| `bg.light` | `#FFFFFF` | Background principal (light mode, maioria das telas) |
| `bg.light.secondary` | `#F5F7FA` | Seções alternadas, cards agrupados |
| `bg.dark` | `#1A1A2E` | Hero sections, seções premium (cartões Black/Epic) |
| `bg.dark.secondary` | `#2D2D3A` | Cards em contexto dark |
| `bg.dark.tertiary` | `#16213E` | Gradiente hero profundo |

### Text

| Token | Hex | Uso |
|-------|-----|-----|
| `text.primary` | `#1A1A1A` | Texto principal em fundos claros |
| `text.secondary` | `#6B7280` | Descrições, textos auxiliares |
| `text.tertiary` | `#9CA3AF` | Placeholders, labels inativos |
| `text.inverse` | `#FFFFFF` | Texto em fundos escuros |
| `text.link` | `#21C25E` | Links, texto interativo |

### Semantic / Feedback

| Token | Hex | Uso |
|-------|-----|-----|
| `feedback.success` | `#21C25E` | Transações aprovadas, confirmações (mesmo verde da marca) |
| `feedback.warning` | `#F59E0B` | Alertas, atenção necessária |
| `feedback.error` | `#EF4444` | Erros, falhas, bloqueios |
| `feedback.info` | `#3B82F6` | Informações contextuais, dicas |

### Neutrals

| Token | Hex | Uso |
|-------|-----|-----|
| `neutral.50` | `#F9FAFB` | Background sutil |
| `neutral.100` | `#F3F4F6` | Dividers, bordas suaves |
| `neutral.200` | `#E5E7EB` | Bordas de cards, separadores |
| `neutral.300` | `#D1D5DB` | Bordas de input inativas |
| `neutral.400` | `#9CA3AF` | Ícones inativos, placeholders |
| `neutral.500` | `#6B7280` | Texto secundário |
| `neutral.600` | `#4B5563` | Texto emphasis médio |
| `neutral.700` | `#374151` | Texto strong |
| `neutral.800` | `#1F2937` | Texto emphasis alto |
| `neutral.900` | `#111827` | Texto primary / heading |

### Gradientes

| Token | Valor | Uso |
|-------|-------|-----|
| `gradient.cta` | `linear-gradient(135deg, #21C25E, #1AA34E)` | Botões CTA premium |
| `gradient.hero` | `linear-gradient(180deg, #1A1A2E, #16213E)` | Hero sections premium |
| `gradient.shimmer` | `linear-gradient(90deg, transparent, rgba(33,194,94,0.08), transparent)` | Loading shimmer |

### Cartões (Segmentação por Cor)

O PicPay usa cores de fundo para diferenciar seus tiers de cartão:

| Tier | Background | Accent |
|------|-----------|--------|
| Gold | `#C9A96E` / dourado | Branco |
| Platinum | `#8C8C8C` / cinza médio | Branco |
| Black | `#1A1A1A` / preto | Verde `#21C25E` |
| Epic | Gradiente escuro premium | Verde + dourado |

---

## Typography

### Tipografia Proprietária

O PicPay utiliza uma **fonte sans-serif proprietária** (PicPay Sans) em seu app e site, com fallback para a system font stack nativa do dispositivo. A tipografia reflete o princípio de simplicidade: geométrica, limpa, com boa legibilidade em tamanhos pequenos de tela mobile.

#### Características

- **Sans-serif geométrica** com terminais suavemente arredondados
- **Alta legibilidade** em telas pequenas (otimizada para mobile)
- **Pesos variados** para criar hierarquia clara sem exagero
- **Numerais tabulares** para alinhamento em listas de transações e saldos
- Wordmark usa custom lettering com "P" característico e terminais geométricos

### Escala Tipográfica

| Token | Tamanho | Uso |
|-------|:---:|---|
| `caption` | 12px | Disclaimers, footnotes, timestamps |
| `body2` | 14px | Descrições secundárias, helper text |
| `body1` | 16px | Corpo principal, textos de produto |
| `subtitle` | 18px | Subtítulos de seção, labels grandes |
| `heading6` | 20px | Headings de card |
| `heading5` | 22px | Headings de seção |
| `heading4` | 24px | Títulos de feature |
| `heading3` | 28px | Títulos de tela |
| `heading2` | 32px | Títulos hero no app |
| `heading1` | 40px | Display principal mobile |
| `display2` | 48px | Display web |
| `display1` | 56px | Hero web desktop |

### Pesos e Hierarquia

| Role | Weight | Uso |
|------|:------:|-----|
| Display / Hero | 700 (Bold) | Headlines, hero copy |
| Heading | 600 (Semibold) | Títulos de seção, cards |
| Subtitle | 500 (Medium) | Subtítulos, labels enfáticos |
| Body | 400 (Regular) | Texto corrido, descrições |

### Estilo de Copy

O PicPay adota uma voz **descomplicada, direta e acolhedora**:
- Frases curtas e fragmentadas
- Tom conversacional, nunca burocrático
- Palavras-chave rotacionadas no hero: "descomplicada", "simples", "segura", "inovadora"
- Uso de "você" (informal) em vez de "o cliente" ou "o usuário"

---

## Layout

### Grid System

O PicPay é mobile-first. O grid prioriza a experiência no smartphone:

| Contexto | Colunas | Margem | Gutter |
|----------|:---:|:---:|:---:|
| Mobile (< 375px) | 4 | 16px | 12px |
| Mobile (≥ 375px) | 4 | 20px | 16px |
| Tablet | 8 | 32px | 20px |
| Desktop | 12 | Auto (max 1200px) | 24px |

### Spacing Scale

Baseada em múltiplos de 4px, com saltos generosos entre seções:

| Token | Valor | Uso |
|-------|:---:|---|
| `xxs` | 4px | Micro-gaps (ícone interno, badge offset) |
| `xs` | 8px | Gap ícone-texto, padding mínimo |
| `sm` | 12px | Padding compacto de tags, chips |
| `md` | 16px | Padding padrão de componentes, margin entre itens |
| `lg` | 24px | Separação entre blocos de conteúdo |
| `xl` | 32px | Espaçamento entre seções menores |
| `xxl` | 40px | Separação de seções |
| `xxxl` | 48px | Separação generosa entre áreas |
| `huge` | 64px | Margens verticais de seção hero |
| `giant` | 80px | Separação máxima entre super-seções |

### Estrutura de Tela (App)

O app segue uma anatomia consistente:

1. **Status Bar** — Nativa do sistema
2. **App Bar** — Logo/título + ações (saldo, notificações)
3. **Hero/Balance** — Saldo principal com show/hide
4. **Quick Actions** — Grid de ações rápidas (Pix, Pagar, Transferir)
5. **Content Sections** — Cards de produtos, ofertas, destaques
6. **Bottom Navigation** — Navegação principal por abas

### Estrutura de Página (Web)

O site institucional alterna seções com estilos distintos:

| Estilo | Background | Uso |
|--------|-----------|-----|
| `primary` (padrão) | Branco | Maioria das seções |
| `secondary` | `#F5F7FA` | Seções alternadas |
| `tertiary` | Verde claro sutil | Destaques de produto |
| `dark` | `#1A1A2E` | Seções premium, cartões |

---

## Elevation & Depth

### Filosofia

O PicPay segue a tendência mobile-first de UI **flat com elevação sutil**. Cards têm bordas suaves ou sombras mínimas para indicar interatividade. O foco é na cor e no espaçamento como diferenciadores visuais, não na profundidade.

### Níveis de Elevação

| Nível | Box-shadow | Uso |
|-------|-----------|-----|
| `elevation.none` | Nenhuma | Elementos inline, textos, ícones |
| `elevation.low` | `0 1px 3px 0 rgba(0,0,0,0.06)` | Cards em repouso, inputs |
| `elevation.medium` | `0 4px 12px 0 rgba(0,0,0,0.08)` | Cards em hover, dropdowns |
| `elevation.high` | `0 8px 24px 0 rgba(0,0,0,0.12)` | Bottom sheets, modais |
| `elevation.highest` | `0 16px 48px 0 rgba(0,0,0,0.16)` | Overlays full-screen |

### Técnicas de Profundidade

- **Separação por cor** — Alternância branco / cinza claro para criar camadas
- **Bordering sutil** — `1px solid #E5E7EB` em cards flat
- **Dark sections** — Fundos escuros criam contraste natural (não precisam sombra)
- **Blur/frosted** — Header com `backdrop-filter: blur(8px)` no scroll
- **Green glow** — CTAs premium com sutil `box-shadow: 0 4px 16px rgba(33,194,94,0.24)`

### Overlay / Scrim

| Token | Valor | Uso |
|-------|:---:|---|
| `scrim.light` | `rgba(0,0,0,0.32)` | Overlay de bottom sheets |
| `scrim.medium` | `rgba(0,0,0,0.56)` | Modais |
| `scrim.heavy` | `rgba(0,0,0,0.72)` | Full-screen overlays |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Imagens full-bleed, dividers horizontais |
| `small` | 4px | Tags compactas, badges de status |
| `medium` | 8px | Inputs, campos de formulário |
| `large` | 12px | Cards padrão, containers de conteúdo |
| `xLarge` | 16px | Cards de produto destaque, bottom sheets |
| `xxLarge` | 24px | Modais, feature cards hero |
| `pill` | 999px | Botões CTA, chips, search bar, quick actions |
| `circle` | 50% | Avatares, ícones de categoria, FABs |

### Linguagem Visual

O PicPay é **generoso no arredondamento** — a identidade visual usa formas suaves e arredondadas que transmitem acessibilidade e modernidade. Botões são predominantemente `pill` (fully rounded), cards são `large` a `xLarge`.

### Iconografia

- **Estilo:** Outlined com 2px stroke, terminais arredondados
- **Tamanho base:** 24×24px
- **Touch target:** Mínimo 44×44px
- **Grid:** Baseada em grid de 24px com 2px de padding interno
- **Cor:** Verde (`#21C25E`) para ícones ativos; `#6B7280` para inativos
- **Categorias:** Financeiros (Pix, boleto, cartão), navegação (home, busca), utilidades (QR code, notificação)

---

## Components

O design system do PicPay, construído em Figma com Atomic Design, oferece componentes focados na experiência financeira mobile:

### Navegação
- **AppBar** — Header com logo, saldo (show/hide), notificações, modo seguro
- **BottomNavigation** — 5 abas (Início, Carteira, Pix, Cartão, Perfil)
- **TabBar** — Abas horizontais para segmentação de conteúdo (PF/PJ, categorias)
- **QuickActions** — Grid circular de ações rápidas (Pix, Pagar, Transferir, QR Code)

### Cards e Containers
- **Card** — Container padrão com variantes (flat, elevated, outlined, dark)
- **ProductCard** — Card de produto financeiro com ícone, título, descrição e CTA
- **FeatureCard** — Card horizontal com ícone + texto para listagem de benefícios
- **CardCarousel** — Carousel horizontal de cards de cartão (Gold, Platinum, Black, Epic)
- **BottomSheet** — Sheet deslizante para confirmações, detalhes, seleções
- **Modal** — Dialog centrado para alertas e confirmações críticas

### Formulários
- **TextField** — Input com label flutuante, helper, error state
- **SearchBar** — Barra de busca pill-shaped com ícone
- **PINInput** — Input de PIN/senha numérica (6 dígitos)
- **Select** — Dropdown de seleção
- **Switch** — Toggle on/off (thumb verde quando ativo)
- **Checkbox** — Seleção com check verde
- **RadioButton** — Seleção exclusiva

### Ações
- **Button Primary** — Fundo verde `#21C25E`, texto branco, pill-shaped
- **Button Secondary** — Outlined verde, fundo transparente
- **Button Tertiary** — Ghost/text, apenas texto verde
- **Button Dark** — Fundo `#1A1A1A`, texto branco (contextos dark)
- **IconButton** — Ícone em círculo (48×48 touch target)
- **FloatingActionButton** — FAB verde para ação principal (QR scan, novo Pix)
- **Link** — Texto verde com underline on hover

### Feedback
- **Alert** — Banners contextuais (success verde, warning amarelo, error vermelho)
- **Toast/Snackbar** — Notificação temporária de ação concluída
- **ProgressBar** — Barra de progresso verde (limite de crédito, investimento)
- **Spinner** — Loading circular com arco verde
- **Skeleton** — Placeholder shimmer durante carregamento
- **EmptyState** — Ilustração + texto + CTA para telas vazias

### Dados Financeiros
- **BalanceDisplay** — Saldo principal com ícone olho (show/hide)
- **TransactionList** — Lista de transações com ícone categórico, valor, data
- **CreditCardWidget** — Representação visual do cartão PicPay Card
- **LimitBar** — Barra de limite utilizado/disponível
- **InvestmentCard** — Card de investimento com rendimento CDI
- **ChartWidget** — Gráfico de gastos por categoria (donut/bar)

### Conteúdo
- **Badge** — Indicador numérico (notificações)
- **Tag** — Label categórico (Gold, Platinum, Black, Epic, Novo)
- **Divider** — Separador horizontal fino
- **Avatar** — Foto de perfil circular (contatos Pix, perfil)
- **IllustrationSpot** — Ilustrações de estado (sucesso, erro, vazio)
- **BannerCard** — Banner promocional com fundo colorido e CTA

### Segurança
- **SecurityBadge** — Indicador de "Modo Seguro" (escudo)
- **BiometricPrompt** — Prompt de autenticação biométrica
- **MaskedField** — Campo com dado sensível mascarado (CPF, cartão)

---

## Do's and Don'ts

### ✅ Do's

- **Use verde para CTAs e ações primárias** — O verde `#21C25E` é a cor de ação do PicPay; todo botão primário deve ser verde
- **Mantenha o design mobile-first** — Projete para 375px primeiro e depois adapte para telas maiores
- **Priorize simplicidade radical** — Se um elemento não ajuda o usuário a completar a tarefa, remova-o
- **Use pill-shaped para botões** — Botões CTA são sempre fully rounded (`border-radius: 999px`)
- **Alterne seções com background** — Use branco → cinza → branco para criar ritmo visual sem sombras
- **Use dark backgrounds para premium** — Seções de cartões Black/Epic usam fundo escuro
- **Mantenha hierarquia tipográfica clara** — Bold para títulos, Regular para corpo; nunca mais de 3 pesos por tela
- **Aplique green glow em CTAs premium** — Sombra verde sutil aumenta destaque sem perder elegância
- **Preserve espaçamento generoso** — Mobile exige respiro visual; nunca comprima elementos
- **Use ícones outlined com terminais arredondados** — Consistência com a linguagem arredondada da marca

### ❌ Don'ts

- **Não use o verde para textos longos** — Verde em corpo de texto causa fadiga visual; use apenas em links e CTAs
- **Não use sombras pesadas** — O PicPay é flat-first; sombras são mínimas e reservadas para sheets/modais
- **Não misture estilos de ícones** — Não combine filled e outlined na mesma superfície
- **Não use cantos retos em botões** — Botões retangulares quebram a identidade; sempre pill ou large radius
- **Não crie layouts desktop-first** — O app é o canal primário; toda decisão parte do mobile
- **Não use mais de 2 cores de destaque por tela** — Verde + uma cor de feedback, nunca paletas coloridas
- **Não coloque texto sobre o verde sem contraste** — Texto sobre `#21C25E` deve ser sempre branco bold (ratio ≥ 4.5:1)
- **Não use fontes decorativas ou serifadas** — A marca é sans-serif geométrica; nada de serifa, script ou display elaborado
- **Não ignore o "Modo Seguro"** — Toda tela com dados sensíveis deve suportar mascaramento de informações
- **Não replique a identidade para fins fraudulentos** — A tipografia e ícones são proprietários do PicPay

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [picpay.com](https://picpay.com) |
| Investor Relations | [investor.picpay.com](https://investor.picpay.com/company-info/about-picpay/) |
| Design Principles | [jeffbessa.medium.com — From design principles to design system](https://jeffbessa.medium.com/from-design-principles-to-design-system-6ed99da9432a) |
| Logo & Brand Colors | [logotyp.us/logo/picpay](https://logotyp.us/logo/picpay/) |
| Brand Assets | [brandfetch.com/picpay.com](https://brandfetch.com/picpay.com) |
| Play Store | [play.google.com — PicPay](https://play.google.com/store/apps/details?id=com.picpay) |
| Method | Public site CSS extraction, brand asset analysis, design article research |
| Date | 2026-07-05 |

<!-- Source: https://designmd.app/brands/picpay · designmd.app -->
