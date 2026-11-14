window.GS_DATA = {
  studio: { name: 'GhollStudio', tagline: '把你的产品，交给我们收尾。', seats: 3, rating: 4.9 },
  me: { name: '林晚舟', role: '设计负责人', studio: 'GhollStudio · 杭州', initials: '林', hue: '#f06a6a' },
  team: [
    { id: 'lin', name: '林晚舟', role: '设计负责人', initials: '林', hue: '#f06a6a' },
    { id: 'zhou', name: '周墨白', role: '交付负责人', initials: '周', hue: '#4573d2' },
    { id: 'su', name: '苏见月', role: 'AI 工程', initials: '苏', hue: '#4ecbc4' },
    { id: 'chen', name: '陈屿', role: '前端工程', initials: '陈', hue: '#f1bd6c' },
  ],
  tasks: [
    { id: 't1', title: '确认 Atlas 对账原型', project: 'Atlas 对账模块', due: '11:00', done: false },
    { id: 't2', title: '复核 ProVision 小程序走查', project: 'ProVision 小程序', due: '14:30', done: false },
    { id: 't3', title: '更新 Slot 排期灰度清单', project: 'Slot 排期引擎', due: '16:00', done: true },
  ],
  projects: [
    { id: 'atlas', name: 'Atlas 对账模块', client: '云栖支付', type: '设计系统', owner: '周墨白', progress: 86, status: '进行中', due: '11-18', hue: '#4573d2', milestones: [['对账字段梳理', true], ['差异视图', true], ['UAT 反馈修复', false], ['上线复核', false]] },
    { id: 'slot', name: 'Slot 排期引擎', client: '青柠出行', type: 'Web 交付', owner: '林晚舟', progress: 62, status: '进行中', due: '11-26', hue: '#4ecbc4', milestones: [['排期模型', true], ['灰度开关', true], ['司机端联调', false]] },
    { id: 'provision', name: 'ProVision 小程序', client: 'ProVision', type: 'AI 流水线', owner: '苏见月', progress: 24, status: '待启动', due: '12-05', hue: '#f1bd6c', milestones: [['品牌资产接入', true], ['导购对话', false], ['验收基线', false]] },
    { id: 'nimbus', name: 'Nimbus 数据看板', client: '沧海数据', type: 'Web 交付', owner: '陈屿', progress: 48, status: '进行中', due: '11-30', hue: '#5a3fff', milestones: [['指标口径', true], ['图表组件', false], ['权限模型', false]] },
    { id: 'haiwu', name: '海雾品牌官网', client: '海雾传媒', type: '设计系统', owner: '林晚舟', progress: 92, status: '复核通过', due: '11-15', hue: '#62d26f', milestones: [['视觉方向', true], ['Token 体系', true], ['内容迁移', true], ['验收', false]] },
    { id: 'lumen', name: '灯塔运维接入', client: 'Lumen', type: '运维审计', owner: '周墨白', progress: 15, status: '待启动', due: '12-12', hue: '#f26fd3', milestones: [['资产盘点', true], ['监控接入', false], ['季度审计', false]] },
    { id: 'settle', name: '结算中心重构', client: '云栖支付', type: 'Web 交付', owner: '陈屿', progress: 74, status: '进行中', due: '11-22', hue: '#8da3b0', milestones: [['账务模型', true], ['灰度方案', true], ['对账回归', false]] },
    { id: 'growth', name: '会员增长实验', client: '青柠出行', type: 'AI 流水线', owner: '苏见月', progress: 58, status: '进行中', due: '12-02', hue: '#f8df72', milestones: [['实验设计', true], ['模型基线', false], ['AB 上线', false]] },
  ],
  tickets: [
    { id: 'GS-118', project: 'Atlas 对账', client: '云栖支付', stage: 'UAT', status: '待审核', amount: 128000, updated: '11-05 09:42' },
    { id: 'GS-117', project: 'ProVision 商城', client: 'ProVision', stage: '已上架', status: '已上架', amount: 246000, updated: '11-05 08:31' },
    { id: 'GS-116', project: 'Nimbus 看板', client: '沧海数据', stage: '联调', status: '待审核', amount: 86000, updated: '11-04 22:10' },
    { id: 'GS-115', project: 'Slot 排期', client: '青柠出行', stage: '开发', status: '复核通过', amount: 52000, updated: '11-04 18:02' },
    { id: 'GS-114', project: '品牌官网改版', client: '海雾传媒', stage: '设计', status: '驳回重做', amount: 36000, updated: '11-04 15:47' },
    { id: 'GS-113', project: '灯塔运维', client: 'Lumen', stage: '接入', status: '已上架', amount: 98000, updated: '11-03 20:15' },
    { id: 'GS-112', project: 'Token 工程咨询', client: '几何建筑', stage: '顾问', status: '待审核', amount: 44000, updated: '11-03 11:20' },
    { id: 'GS-111', project: '支付灰度', client: '云栖支付', stage: '发布', status: '复核通过', amount: 156000, updated: '11-02 17:35' },
    { id: 'GS-110', project: '会员增长实验', client: '青柠出行', stage: '开发', status: '复核通过', amount: 72000, updated: '11-01 14:08' },
    { id: 'GS-109', project: '结算中心重构', client: '云栖支付', stage: '设计', status: '待审核', amount: 188000, updated: '10-31 16:22' },
  ],
  conversations: [
    {
      id: 'c1', name: '云栖支付 · 项目群', hue: '#4573d2', unread: 2, time: '09:42',
      messages: [
        { from: 'them', text: 'Atlas 的 UAT 反馈已整理成 6 条，发你邮箱了。', time: '09:31' },
        { from: 'them', text: '优先处理金额对不上的两条。', time: '09:36' },
        { from: 'me', text: '收到，今天下午给修复版本。', time: '09:40' },
        { from: 'them', text: '周五前能同步原型吗？', time: '09:42' },
      ],
    },
    {
      id: 'c2', name: '设计系统小组', hue: '#4ecbc4', unread: 0, time: '昨天',
      messages: [
        { from: 'them', text: '新增了 12 个语义 token，命名按「场景/角色」重排。', time: '17:20' },
        { from: 'me', text: '收到，我在海雾官网上先跑一遍。', time: '17:26' },
      ],
    },
    {
      id: 'c3', name: '青柠出行 · Slot', hue: '#f1bd6c', unread: 1, time: '昨天',
      messages: [
        { from: 'them', text: '排期引擎的灰度清单已确认，周四可以放 10%。', time: '15:02' },
        { from: 'me', text: '好，监控和回滚脚本我今天补齐。', time: '15:08' },
      ],
    },
    {
      id: 'c4', name: 'Lumen 运维', hue: '#62d26f', unread: 0, time: '10-30',
      messages: [
        { from: 'them', text: '季度审计报告已上传，SLA 全绿。', time: '10:12' },
        { from: 'me', text: '谢谢，下周复盘会带上成本拆解。', time: '10:20' },
      ],
    },
  ],
  notifications: [
    { id: 'n1', title: 'GS-118 已进入 UAT', detail: 'Atlas 对账 · 等待复核', time: '2 小时前', unread: true, hue: '#4573d2' },
    { id: 'n2', title: '海雾品牌官网复核通过', detail: '可以安排上线', time: '4 小时前', unread: true, hue: '#62d26f' },
    { id: 'n3', title: '新成员加入设计系统小组', detail: '苏见月 · AI 工程', time: '昨天', unread: true, hue: '#4ecbc4' },
    { id: 'n4', title: 'Lumen 季度审计报告已生成', detail: 'SLA 99.97%', time: '昨天', unread: true, hue: '#f1bd6c' },
    { id: 'n5', title: '会员增长实验里程碑延期 2 天', detail: '模型基线 · 苏见月', time: '10-30', unread: false, hue: '#f26fd3' },
  ],
  activity: [
    { who: '周墨白', initials: '周', hue: '#4573d2', text: '提交了 Atlas 对账 v1.4', time: '09:12' },
    { who: '苏见月', initials: '苏', hue: '#4ecbc4', text: '完成 Nimbus 看板走查', time: '08:48' },
    { who: '林晚舟', initials: '林', hue: '#f06a6a', text: '更新了品牌 Token', time: '昨天' },
    { who: '陈屿', initials: '陈', hue: '#f1bd6c', text: '部署 Slot 灰度', time: '昨天' },
  ],
};
