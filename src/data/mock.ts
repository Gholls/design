import type { StatusKind } from '../types'

export interface OrderRow {
  id: string
  customer: string
  plan: string
  seats: number
  amount: number
  status: StatusKind
  statusLabel: string
  updatedAt: string
}

export const orders: OrderRow[] = [
  { id: 'DH-2101', customer: '星野传媒', plan: 'Enterprise · 年付', seats: 120, amount: 178990, status: 'success', statusLabel: '已支付', updatedAt: '11-05 09:42' },
  { id: 'DH-2100', customer: '蓝湖科技', plan: 'Team · 月付', seats: 36, amount: 6480, status: 'info', statusLabel: '处理中', updatedAt: '11-05 09:18' },
  { id: 'DH-2099', customer: '远山设计', plan: 'Pro · 年付', seats: 12, amount: 23880, status: 'success', statusLabel: '已支付', updatedAt: '11-05 08:55' },
  { id: 'DH-2098', customer: 'Momo Studio', plan: 'Starter · 月付', seats: 3, amount: 297, status: 'warning', statusLabel: '待支付', updatedAt: '11-05 08:31' },
  { id: 'DH-2097', customer: '极光生物', plan: 'Enterprise · 年付', seats: 240, amount: 357600, status: 'success', statusLabel: '已支付', updatedAt: '11-04 22:07' },
  { id: 'DH-2096', customer: '拾光文化', plan: 'Pro · 月付', seats: 8, amount: 2160, status: 'danger', statusLabel: '已退款', updatedAt: '11-04 21:44' },
  { id: 'DH-2095', customer: '云栖网络', plan: 'Team · 年付', seats: 48, amount: 69120, status: 'success', statusLabel: '已支付', updatedAt: '11-04 20:12' },
  { id: 'DH-2094', customer: 'Fold Labs', plan: 'Pro · 年付', seats: 15, amount: 29850, status: 'info', statusLabel: '处理中', updatedAt: '11-04 19:58' },
  { id: 'DH-2093', customer: '海盐咖啡', plan: 'Starter · 月付', seats: 2, amount: 198, status: 'warning', statusLabel: '待支付', updatedAt: '11-04 18:20' },
  { id: 'DH-2092', customer: '拓扑智能', plan: 'Enterprise · 月付', seats: 90, amount: 40500, status: 'success', statusLabel: '已支付', updatedAt: '11-04 17:02' },
  { id: 'DH-2091', customer: '南山云创', plan: 'Team · 月付', seats: 24, amount: 4320, status: 'success', statusLabel: '已支付', updatedAt: '11-04 16:45' },
  { id: 'DH-2090', customer: '像素方舟', plan: 'Pro · 年付', seats: 10, amount: 19900, status: 'danger', statusLabel: '已退款', updatedAt: '11-04 15:33' },
  { id: 'DH-2089', customer: '栖梧投资', plan: 'Enterprise · 年付', seats: 160, amount: 238400, status: 'success', statusLabel: '已支付', updatedAt: '11-04 14:10' },
  { id: 'DH-2088', customer: 'Lumen 摄影', plan: 'Starter · 年付', seats: 4, amount: 2136, status: 'info', statusLabel: '处理中', updatedAt: '11-04 13:27' },
  { id: 'DH-2087', customer: '长风物流', plan: 'Team · 年付', seats: 66, amount: 95040, status: 'success', statusLabel: '已支付', updatedAt: '11-04 12:03' },
  { id: 'DH-2086', customer: '白鹭文创', plan: 'Pro · 月付', seats: 6, amount: 1620, status: 'warning', statusLabel: '待支付', updatedAt: '11-04 11:49' },
  { id: 'DH-2085', customer: '硅基时代', plan: 'Enterprise · 月付', seats: 75, amount: 33750, status: 'success', statusLabel: '已支付', updatedAt: '11-04 10:31' },
  { id: 'DH-2084', customer: '青柠出行', plan: 'Team · 月付', seats: 30, amount: 5400, status: 'info', statusLabel: '处理中', updatedAt: '11-04 09:56' },
  { id: 'DH-2083', customer: '曜石游戏', plan: 'Pro · 年付', seats: 20, amount: 39800, status: 'success', statusLabel: '已支付', updatedAt: '11-03 23:18' },
  { id: 'DH-2082', customer: '木与森', plan: 'Starter · 月付', seats: 1, amount: 99, status: 'danger', statusLabel: '已退款', updatedAt: '11-03 21:40' },
  { id: 'DH-2081', customer: '沧海数据', plan: 'Enterprise · 年付', seats: 200, amount: 298000, status: 'success', statusLabel: '已支付', updatedAt: '11-03 20:05' },
  { id: 'DH-2080', customer: 'Neon 音乐', plan: 'Pro · 月付', seats: 9, amount: 2430, status: 'warning', statusLabel: '待支付', updatedAt: '11-03 18:22' },
  { id: 'DH-2079', customer: '谷雨茶室', plan: 'Starter · 年付', seats: 5, amount: 2670, status: 'success', statusLabel: '已支付', updatedAt: '11-03 17:08' },
  { id: 'DH-2078', customer: '几何建筑', plan: 'Team · 年付', seats: 42, amount: 60480, status: 'info', statusLabel: '处理中', updatedAt: '11-03 16:51' },
  { id: 'DH-2077', customer: '浮生民宿', plan: 'Pro · 月付', seats: 7, amount: 1890, status: 'success', statusLabel: '已支付', updatedAt: '11-03 15:12' },
  { id: 'DH-2076', customer: '量子跃迁', plan: 'Enterprise · 年付', seats: 310, amount: 461550, status: 'danger', statusLabel: '已退款', updatedAt: '11-03 14:30' },
]

export interface Kpi {
  label: string
  value: string
  delta: number
  goodWhenDown: boolean
  series: number[]
}

export const kpis: Kpi[] = [
  { label: 'MRR 月度经常性收入', value: '¥1,284,300', delta: 12.4, goodWhenDown: false, series: [35, 42, 38, 51, 47, 58, 66] },
  { label: '活跃订阅席位', value: '12,846', delta: 3.2, goodWhenDown: false, series: [40, 44, 42, 48, 52, 55, 60] },
  { label: '付费转化率', value: '4.68%', delta: -0.9, goodWhenDown: false, series: [58, 55, 60, 52, 50, 48, 45] },
  { label: 'API 平均响应', value: '236 ms', delta: -8.3, goodWhenDown: true, series: [70, 66, 64, 58, 54, 49, 44] },
]

export interface NotificationItem {
  id: number
  time: string
  level: StatusKind
  message: string
}

export const seedNotifications: NotificationItem[] = [
  { id: 1, time: '09:42', level: 'success', message: '订单 DH-2101 支付成功，¥178,990 已入账' },
  { id: 2, time: '09:18', level: 'info', message: '蓝湖科技发起席位扩容申请（36 → 52）' },
  { id: 3, time: '08:47', level: 'warning', message: 'Momo Studio 的信用卡扣款将在 48 小时后重试' },
  { id: 4, time: '08:12', level: 'danger', message: 'Webhook delivery 失败：partner.example.com/notify (504)' },
  { id: 5, time: '07:56', level: 'success', message: '设计规范 cyberpunk 预览页今日访问 1,204 次' },
]

export const notificationPool: Omit<NotificationItem, 'id' | 'time'>[] = [
  { level: 'success', message: '新团队「白鲸科技」完成企业实名认证' },
  { level: 'info', message: '设计规范 apple-minimal 被 32 人加入对比' },
  { level: 'warning', message: '对象存储出口流量达到本月配额的 82%' },
  { level: 'danger', message: '支付网关回调验签失败，已自动降级为重试队列' },
  { level: 'success', message: 'Cloudflare Pages 部署 #218 全量生效' },
  { level: 'info', message: '社区 PR #47 提交了新规范 ocean-breeze' },
]

/* ---------- 分析页 ---------- */

export const revenueSeries: Array<{ label: string; value: number }> = [
  { label: '1月', value: 86 }, { label: '2月', value: 74 }, { label: '3月', value: 98 },
  { label: '4月', value: 112 }, { label: '5月', value: 104 }, { label: '6月', value: 121 },
  { label: '7月', value: 138 }, { label: '8月', value: 129 }, { label: '9月', value: 156 },
  { label: '10月', value: 171 }, { label: '11月', value: 164 }, { label: '12月', value: 188 },
]

export const trafficSources: Array<{ name: string; share: number; tone: 'primary' | 'accent' | 'success' | 'warning' }> = [
  { name: '自然搜索', share: 38, tone: 'primary' },
  { name: '直接访问', share: 27, tone: 'accent' },
  { name: '社区画廊', share: 21, tone: 'success' },
  { name: '付费投放', share: 14, tone: 'warning' },
]

export const funnel: Array<{ stage: string; value: number }> = [
  { stage: '访问', value: 100 }, { stage: '注册', value: 42 }, { stage: '激活', value: 28 },
  { stage: '订阅', value: 16 }, { stage: '续费', value: 11 },
]

export const heatmap: number[][] = [
  [0.1, 0.2, 0.35, 0.55, 0.7, 0.85, 0.6, 0.4, 0.3, 0.5, 0.75, 0.9],
  [0.15, 0.3, 0.4, 0.6, 0.8, 0.95, 0.7, 0.45, 0.25, 0.4, 0.65, 0.8],
  [0.2, 0.35, 0.5, 0.7, 0.9, 1.0, 0.8, 0.5, 0.3, 0.45, 0.7, 0.85],
  [0.12, 0.25, 0.45, 0.62, 0.78, 0.9, 0.68, 0.42, 0.28, 0.38, 0.6, 0.72],
  [0.08, 0.18, 0.3, 0.5, 0.66, 0.8, 0.9, 0.7, 0.5, 0.3, 0.45, 0.55],
  [0.05, 0.1, 0.18, 0.28, 0.4, 0.55, 0.65, 0.6, 0.48, 0.3, 0.25, 0.3],
  [0.04, 0.08, 0.14, 0.22, 0.32, 0.42, 0.5, 0.46, 0.38, 0.26, 0.2, 0.24],
]
export const heatmapDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

export const topProducts: Array<{ name: string; revenue: string; share: number; trend: string }> = [
  { name: 'Token 注入引擎', revenue: '¥482,000', share: 38, trend: '+14%' },
  { name: '黄金样板间 Pro', revenue: '¥318,000', share: 25, trend: '+8%' },
  { name: '规范校验门禁', revenue: '¥241,000', share: 19, trend: '+21%' },
  { name: '画廊托管', revenue: '¥153,000', share: 12, trend: '-3%' },
  { name: 'CLI 企业版', revenue: '¥76,000', share: 6, trend: '+2%' },
]

/* ---------- 概览页 ---------- */

export const activity: Array<{ time: string; actor: string; action: string; target: string; kind: 'success' | 'info' | 'warning' | 'danger' }> = [
  { time: '10:24', actor: '林晚舟', action: '发布了规范', target: 'Aurora Borealis', kind: 'success' },
  { time: '09:42', actor: 'CI', action: '通过 lint 门禁', target: 'PR #52 · stone', kind: 'info' },
  { time: '09:15', actor: '周墨白', action: '提交了角色色修正', target: 'cyber-tribal', kind: 'info' },
  { time: '08:50', actor: '监控', action: '预览页 P95 延迟升高', target: 'sandbox · 412ms', kind: 'warning' },
  { time: '昨天', actor: '苏见月', action: '合并了贡献', target: 'dsgov v1.2', kind: 'success' },
  { time: '昨天', actor: 'CI', action: '构建失败（重复顶层键）', target: 'PR #49', kind: 'danger' },
]

/* ---------- 内容页 ---------- */

export const pricingPlans: Array<{ name: string; price: string; period: string; pitch: string; features: string[]; highlight: boolean; cta: string }> = [
  { name: 'Starter', price: '¥0', period: '/ 永久', pitch: '个人与试验', features: ['3 套规范', '社区画廊浏览', '官方 lint 校验'], highlight: false, cta: '免费开始' },
  { name: 'Team', price: '¥299', period: '/ 月', pitch: '设计团队协作', features: ['无限规范', 'PR 门禁流水线', '样板间品牌定制', '版本 diff 对比'], highlight: true, cta: '开始 14 天试用' },
  { name: 'Enterprise', price: '定制', period: '', pitch: '合规与私有部署', features: ['私有化托管', 'SSO / 审计日志', '专属 Figma 变量同步'], highlight: false, cta: '联系销售' },
]

export const blogPosts: Array<{ title: string; excerpt: string; tag: string; author: string; date: string; minutes: number }> = [
  { title: '用 DESIGN.md 统一多智能体的界面语言', excerpt: '当五个 agent 同时在同一个仓库改 UI，没有单一事实源就是一场灾难。规范文件如何让它们写出的每个按钮都像同一个人设计…', tag: '方法论', author: 'gholl', date: '11-02', minutes: 8 },
  { title: '角色色解析：当真实规范遇上样板间', excerpt: '社区规范里，荧光绿可能被命名为 secondary。我们如何用亮度分布与 WCAG 对比度把它纠正回辅助文字，而不改写原文…', tag: '工程', author: '林晚舟', date: '10-27', minutes: 12 },
  { title: '一份 gov.br 规范教我们的无障碍课', excerpt: 'DSGov 用单一字体族 9 个字重和强制的对比度约束覆盖了全部联邦服务。收录它之后，我们的 lint 门禁升级了…', tag: '收录笔记', author: '周墨白', date: '10-19', minutes: 6 },
]
