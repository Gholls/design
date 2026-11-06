---
version: alpha
name: Cyberpunk
description: 暗夜霓虹：近黑底、青/品红高对比强调、直角切边与发光描边，等宽字体主导的终端气质。
gallery:
  order: 3
  author: gholl
  tags: [dark, neon, monospace, 赛博]
colors:
  bg: "#0a0a12"
  surface: "#12121d"
  surface-alt: "#181826"
  primary: "#00f0ff"
  primary-strong: "#59faff"
  on-primary: "#04222b"
  accent: "#ff2bd6"
  text: "#e6f1ff"
  muted: "#7c88a8"
  border: "#2a2a3d"
  success: "#2dff9e"
  warning: "#ffd166"
  danger: "#ff3860"
typography:
  body-md:
    fontFamily: "'JetBrains Mono', 'SF Mono', ui-monospace, 'Cascadia Code', Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  h1:
    fontFamily: "'JetBrains Mono', 'SF Mono', ui-monospace, Menlo, monospace"
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.04em
rounded:
  sm: 0px
  md: 2px
  lg: 2px
  full: 4px
spacing:
  base: 15px
  xs: 4px
  sm: 6px
  md: 14px
  lg: 28px
  table-row: 40px
shadows:
  card: "0 0 0 1px #2a2a3d, 0 0 24px rgb(0 240 255 / 0.10)"
  control: "0 0 10px rgb(0 240 255 / 0.35)"
strokes:
  card: 1px
  control: 1px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 8px
  input-field:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  page-shell:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
  table-header:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
  divider:
    backgroundColor: "{colors.border}"
  meta-dot:
    backgroundColor: "{colors.muted}"
  accent-dot:
    backgroundColor: "{colors.accent}"
  status-dot-success:
    backgroundColor: "{colors.success}"
  status-dot-warning:
    backgroundColor: "{colors.warning}"
  status-dot-danger:
    backgroundColor: "{colors.danger}"
---

# Cyberpunk

> 夜之城控制台。光不是装饰，是信息的载体。

## Overview

反精致：拒绝圆角滑块与柔和投影，用直角、1px 描边和辉光阴影表达「机器界面」的
冷酷感。适合开发者工具、监控面板、Web3 场景。

- Density: 8/10 — Dense
- Variance: 5/10 — Expressive
- Motion: 7/10 — Energetic

## Colors

深色底 `#0a0a12`，青 `#00f0ff` 为唯一主操作色（其上必须用深色字保证对比度），
品红 `#ff2bd6` 只做稀缺强调。强调态用「辉光」而不是加深底色。

## Typography

全局等宽（JetBrains Mono 优先），基准 14px，字距 +0.04em。
数字天然对齐，适合终端式日志与指标。

## Layout

base 15px 的紧凑节奏，表格行高 40px——工程化的克制密度。

## Elevation & Depth

「描边即阴影」：卡片用 `0 0 0 1px` 冷描边 + 青色环境辉光；
控件的 control 阴影是可见的光晕，不是投影。

## Shapes

一切圆角 ≤ 2px，徽章也是方的。硬边是本主题的立场。

## Components

主按钮霓虹青底深色字，hover 时辉光增强（control 阴影）；
输入框比卡片更暗一档，focus 亮青边。

## Do's and Don'ts

- Do 让辉光只围绕可交互元素
- Don't 引入任何 > 4px 的圆角
- Don't 用彩色大面积铺底，霓虹只在黑上发光
