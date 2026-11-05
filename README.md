# design.gholl.com — Design.md 互动式规范画廊与黄金样板间

一套标准「黄金样板间」UI × 多份社区共建的 DESIGN.md 规范。纯静态托管、零后端：
前端把结构化设计 Token 动态注入 `<html>` 的 CSS 自定义属性，实现同一套 React
界面上的实时换肤（颜色 / 字体 / 圆角 / 阴影 / 密度），无需刷新页面。

- 技术栈：**Vite 7 + React 19 + Tailwind CSS v4 + Cloudflare Pages**
- 路由：轻量 hash 路由，支持 URL 直达 —— `/#/preview?theme=cyberpunk`
- 协议：**MIT**（见 [LICENSE](LICENSE)）

## 快速开始

```bash
npm install
npm run dev        # 本地开发 http://localhost:5173
npm run build      # tsc 检查 + 产物输出到 dist/
npm run preview    # 预览构建产物
```

## 工作原理：动态 Token 注入引擎

```
designs/<slug>/tokens.json ──┐
                             ├─ registry.ts (import.meta.glob 自动发现)
designs/<slug>/DESIGN.md ────┘        │
                                      ▼
                        tokenEngine.applyDesign()
                     扁平化为 --d-<group>-<key> 写入 :root
                                      │
                                      ▼
        globals.css: @theme inline { --color-primary: var(--d-colors-primary, …) }
                                      │
                                      ▼
              Tailwind 工具类(bg-primary / rounded-card / p-4)实时穿透生效
```

1. **单一数据源** —— 每套规范 = `tokens.json`（机器可读）+ `DESIGN.md`（人类可读）。
2. **@theme inline 映射** —— [src/styles/globals.css](src/styles/globals.css) 把全部
   Tailwind 主题命名指向 `--d-*` 运行时变量，fallback 即默认主题，首帧无闪烁。
3. **运行时注入** —— [src/lib/tokenEngine.ts](src/lib/tokenEngine.ts) 将 Token 分组
   扁平化为 CSS 变量 `setProperty` 到根节点；配合全局 260ms 过渡实现丝滑换肤。
4. **画廊局部预览** —— 卡片把同一批变量注入自身节点，因此画廊背景不受影响、
   每张卡片却以各自的规范呈现微缩样板间。

## 目录结构

```
design/
├── designs/                  # ★ 社区共建区（提 PR 只动这里）
│   ├── README.md             #   贡献指南 + Token Schema + 验收清单
│   ├── enterprise/           #   黄金基准（Enterprise Admin）
│   ├── apple-minimal/        #   苹果式极简
│   ├── cyberpunk/            #   暗夜霓虹
│   ├── candy-glass/          #   糖果玻璃
│   └── brutal-neo/           #   新粗野主义
├── src/
│   ├── lib/                  # registry / tokenEngine / router / cssVars
│   ├── pages/                # GalleryPage · SandboxPage
│   ├── components/
│   │   ├── gallery/          # DesignCard
│   │   ├── sandbox/          # TopBar · KpiCard · OrdersTable · StatusBadge ·
│   │   │                     # Pagination · FormLab · Toggle · NotificationsPanel ·
│   │   │                     # EmptyState
│   │   ├── shared/           # SourcePanel（源码对照抽屉）
│   │   └── ui/               # buttonClass / fieldClass / cardClass
│   ├── data/mock.ts          # 样板间静态数据
│   └── styles/globals.css    # Tailwind v4 @theme inline 映射层
└── public/                   # favicon · _headers（Cloudflare 缓存/安全头）
```

## 样板间覆盖的验证点

- KPI 卡群（大数字、环比趋势、迷你柱线）
- 多维数据表格（状态徽章 4 语义色、右对齐数值、分页器、行高 Token）
- 表单与交互区（输入框、下拉、Toggle 开关、5 种按钮变体、全局密度覆写）
- 空状态与通知日志（可清空/追加，演示 empty state）
- 源码对照抽屉（`DESIGN.md` / `tokens.json` 原文，`Esc` 关闭）

## 部署（Cloudflare Pages）

**方式 A · Dashboard 连接 Git**

| 设置项 | 值 |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

**方式 B · Wrangler CLI**

```bash
npm run build
npx wrangler pages deploy dist --project-name design-gholl-com
```

hash 路由无需 SPA fallback 重写规则；`public/_headers` 会随产物自动生效。
生产域名建议绑定 `design.gholl.com`（Pages → Custom domains）。

## 贡献一套新规范

1. 新建 `designs/<你的slug>/tokens.json` + `DESIGN.md`（结构见
   [designs/README.md](designs/README.md)）；
2. `npm run build` 验证 —— 无需改动任何前端代码即自动出现在画廊；
3. 提 PR，附上样板间预览截图。

## License

MIT © 2026 gholl
