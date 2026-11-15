# GhollStudio 跨端样板间

同一套 GhollStudio 交付系统，在三种表面上的实现实验：

| 表面 | 路由 | 状态 |
| --- | --- | --- |
| 网站 | `/studio/web/` | v1 已实现 |
| 移动端 | `/studio/mobile/` | v1 已实现 |
| 桌面端 | `/studio/desktop/` | v1 已实现 |

移动端设计语言取自 [awesome-ios-design-md](https://github.com/Meliwat/awesome-ios-design-md) 的 **Asana iOS** 规范：白色 / 炭黑画布、单一 Asana Coral、20pt 完成圆环、底部标签栏与 bottom sheet。创建入口放在顶栏的珊瑚色「+」，避免浮动按钮遮挡列表末行。

## 目录

```
public/studio/
├── index.html          跨端主页：Hero + 平台切换 + 三个模块
├── home.css            主页布局与三种设备预览
├── home.js             平台切换、主题同步
├── shared/
│   ├── tokens.css      Asana iOS token 映射 + 深色变量
│   └── data.js         项目 / 工单 / 会话 / 通知 / 团队
├── mobile/
│   ├── index.html      App 外壳、SVG 图标、标签栏
│   ├── app.css         App 组件与五个视图
│   └── app.js          状态机、sheet、搜索、聊天、表单
├── web/
│   ├── index.html      长滚动官网（服务 / 案例 / 定价）
│   ├── web.css         版式与响应式
│   └── web.js          数据渲染、滚动高亮、主题
└── desktop/
    ├── index.html      控制台外壳（侧栏 + 顶栏 + 弹窗）
    ├── app.css         表格、卡片、弹窗样式
    └── app.js          视图切换、排序筛选、行内状态、快捷键
```

## 分层规则

1. **数据层只有一个来源**：`shared/data.js` 暴露 `window.GS_DATA`。三端只读同一份项目、工单、会话与通知结构；演示态修改只作用于当前页面内存。
2. **Token 层只有一个来源**：`shared/tokens.css` 定义颜色、字阶、间距、圆角与阴影；深色模式只切换变量，不在组件里写死颜色。
3. **外壳各自独立**：移动端是标签栏 + sheet；桌面端将是侧栏 + 表格 + 弹窗；网站是长滚动叙事。共享内容，不共享布局。
4. **交互按端落地**：移动端用顶栏创建入口、bottom sheet、推送式聊天；桌面端用行内下拉、可排序表格与快捷键。

## 移动端状态模型

```js
state = {
  tab,                // home | projects | tickets | messages | me
  theme,              // light | dark（localStorage: gs-theme）
  projectFilter,      // 全部 | 进行中 | 待启动 | 复核通过
  projectQuery,
  ticketFilter,       // 全部 | 待审核 | 复核通过 | 驳回重做 | 已上架
  activeThread,
  projects, tickets, conversations, notifications, tasks,
}
```

视图由 `renderHome / renderProjects / renderTickets / renderConversations / renderThread` 重绘；事件走一个 `[data-act]` 委托，表单在 sheet 内就地校验。

## 已实现的 App 能力

- 五个标签页与 iOS 风格推送式会话
- 项目筛选、搜索、进度、里程碑详情
- 工单状态更新（写入复核记录语义）与金额展示
- 全局搜索（项目 / 工单 / 消息）
- 通知中心与全部已读
- 新建项目 / 新建工单 / 新建会话（必填校验、字数计数）
- 深色模式（与主页、iframe 预览同步）
- 完成圆环、bottom sheet、toast、空状态

## 网站能力

- 吸顶导航与滚动高亮（服务 / 案例 / 定价）
- 服务卡、案例墙、定价三档全部由 `GS_DATA` 渲染
- 案例卡片的进度条取 `projects[].progress`，里程碑计数取 `milestones`
- 深浅外观与主页、移动端、桌面端同步

## 桌面端能力

- 侧栏四个视图：工作台 / 项目 / 工单 / 会话
- 工单表格：按金额排序、关键字筛选、**行内审核下拉**（待审核 → 复核通过 / 驳回重做 / 已上架）
- KPI 随状态变化：进行中项目、待审核工单、合同总额、平均进度
- 新建项目弹窗：必填校验、类型与负责人下拉、进度滑块、创建后写入项目列表
- 会话：列表切换 + 发送消息（演示态写入内存）
- 快捷键：`⌘K` 聚焦搜索、`Esc` 关闭弹窗

## 验证

```bash
npm run build
python3 -m http.server 4173 --directory dist
```

人工检查：

- `/studio/mobile/`：五个标签切换、项目筛选、工单改状态、新建表单校验、搜索、聊天发送、深色模式、390px / 1280px
- `/studio/web/`：导航滚动高亮、案例与定价渲染、深色模式、390px / 1280px
- `/studio/desktop/`：四个视图切换、工单排序与筛选、行内改状态、新建项目校验、会话发送、`⌘K` / `Esc`

## 来源与许可

- 设计语言：`awesome-ios-design-md`（MIT），Asana iOS 分析；品牌视觉归 Asana 所有，此处仅作设计研究。
- 产品内容：本仓库 GOLDEN PROMPT 中的 GhollStudio 虚构工作室。
