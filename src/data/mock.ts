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
