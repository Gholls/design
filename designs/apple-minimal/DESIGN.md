---
version: alpha
name: Apple Minimal
description: 苹果式极简：浅灰底、系统字体、大圆角与极柔和的环境阴影，留白即层级。
gallery:
  order: 2
  author: gholl
  tags: [minimal, apple, 留白, 大圆角]
colors:
  bg: "#f5f5f7"
  surface: "#ffffff"
  surface-alt: "#fafafa"
  primary: "#0071e3"
  primary-strong: "#0060c0"
  on-primary: "#ffffff"
  accent: "#5856d6"
  text: "#1d1d1f"
  muted: "#86868b"
  border: "#d2d2d7"
  success: "#34c759"
  warning: "#ff9f0a"
  danger: "#ff3b30"
typography:
  body-md:
    fontFamily: "-apple-system, 'SF Pro Text', 'PingFang SC', 'Helvetica Neue', ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  h1:
    fontFamily: "-apple-system, 'SF Pro Display', 'PingFang SC', ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.022em
rounded:
  sm: 8px
  md: 12px
  lg: 18px
  full: 9999px
spacing:
  base: 17px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 36px
  table-row: 48px
shadows:
  card: "0 4px 24px rgb(0 0 0 / 0.06)"
  control: "0 1px 3px rgb(0 0 0 / 0.08)"
strokes:
  card: 1px
  control: 1px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
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

# Apple Minimal

> 少即是多。颜色退居其后，材质（圆角、阴影、留白）成为主角。

## Overview

模仿 Apple HIG 的中性质感：几乎看不到「主题色」，但每个控件都在暗示层级。
适合以内容/图像为主、交易为辅的产品页面。

## Colors

黑白灰之外只有三个系统色（绿/橙/红），全部来自 Apple 系统调色板。
`primary` 是唯一的「动作蓝」，`text` 用近黑 `#1d1d1f` 而非纯黑。

## Typography

系统字体栈优先（-apple-system / SF Pro），中文回退苹方。基准 16px，
字距 -0.022em（苹果标志性紧排），标题 700。

## Layout

spacing base 17px——比默认松一档，呼吸感是本主题的一半。
分区依靠 `surface` 与 `bg` 的微妙色差，边框尽量隐退。

## Elevation & Depth

阴影大而柔（模糊 24px），像物体浮在桌面上，而不是描出来的。
描边只在确实需要界定时出现。

## Shapes

卡片 18px 大圆角、控件 12px、主按钮全圆角 pill——材质即识别。

## Components

主按钮是胶囊形动作蓝；输入框浅灰底无边框感；卡片以大面积留白组织内容。

## Do's and Don'ts

- Do 用留白表达层级，而不是分隔线
- Don't 同时使用彩色阴影与深色底
- Don't 把三个系统彩色当作调色板随意铺色
