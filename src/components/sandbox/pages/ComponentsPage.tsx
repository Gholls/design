import { useState } from 'react'
import type { Design } from '../../../types'
import { buttonClass, cardClass } from '../../ui/styles'
import StatusBadge from '../StatusBadge'
import Pagination from '../Pagination'
import FormLab from '../FormLab'
import Checkbox from '../Checkbox'

const AVATARS = [
  { name: '林晚舟', initials: '林' },
  { name: '周墨白', initials: '周' },
  { name: '苏见月', initials: '苏' },
  { name: '陈屿', initials: '陈' },
]

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className={`${cardClass} p-4 md:p-5`}>
      <h3 className="font-display text-sm font-bold">{title}</h3>
      {note ? <p className="mt-0.5 text-xs text-muted">{note}</p> : null}
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function ComponentsPage({ design }: { design: Design }) {
  const [tab, setTab] = useState('最近')
  const [checked, setChecked] = useState(true)
  const [radio, setRadio] = useState('md')
  const [page, setPage] = useState(2)
  const [modal, setModal] = useState(false)

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-bold">组件库</h2>
        <p className="mt-0.5 text-sm text-muted">
          原子组件全景——每个变体都由同一组 {design.design.name} 的 Token 驱动
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <Section title="按钮 Button" note="5 变体 × 2 尺寸 × 禁用态">
          <div className="flex flex-wrap items-center gap-2">
            <button className={buttonClass('primary')}>主要</button>
            <button className={buttonClass('secondary', 'md', 'stroke-control')}>次要</button>
            <button className={buttonClass('accent')}>强调</button>
            <button className={buttonClass('danger')}>危险</button>
            <button className={buttonClass('ghost')}>幽灵</button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button className={buttonClass('primary', 'sm')}>小号</button>
            <button className={buttonClass('secondary', 'sm', 'stroke-control')}>小号</button>
            <button disabled className={buttonClass('primary')}>
              禁用
            </button>
            <button disabled className={buttonClass('secondary', 'md', 'stroke-control')}>
              禁用
            </button>
          </div>
        </Section>

        <Section title="徽章与标签 Badge">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge kind="success" label="已支付" />
            <StatusBadge kind="info" label="处理中" />
            <StatusBadge kind="warning" label="待支付" />
            <StatusBadge kind="danger" label="已退款" />
            <span className="rounded-badge border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              强调标签
            </span>
            <span className="rounded-badge border border-line px-2 py-0.5 text-xs text-muted">中性</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {['saas', '暗色', '无障碍', '真实品牌', '极简'].map((t) => (
              <span key={t} className="rounded-control border border-line bg-surface-alt px-2 py-0.5 text-[11px] text-muted">
                #{t}
              </span>
            ))}
          </div>
        </Section>

        <Section title="头像 Avatar">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <span
                  key={a.name}
                  title={a.name}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-surface bg-primary/15 text-xs font-bold text-primary"
                >
                  {a.initials}
                </span>
              ))}
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-surface bg-surface-alt text-[10px] font-semibold text-muted">
                +9
              </span>
            </div>
            <span className="text-xs text-muted tabular-nums">13 位成员</span>
          </div>
        </Section>

        <Section title="选项卡 Tabs">
          <div className="flex border-b border-line">
            {['最近', '收藏', '归档'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`cursor-pointer border-b-2 px-3.5 py-2 text-sm font-medium ${
                  tab === t ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            当前面板：<span className="font-medium text-ink">{tab}</span> 内容占位——选中态使用 primary 指示线。
          </p>
        </Section>

        <Section title="开关 / 复选 / 单选">
          <div className="space-y-3">
            <Checkbox checked={checked} onChange={setChecked} label="启用 Webhook 自动重试" />
            <Checkbox checked={!checked} onChange={(v) => setChecked(!v)} label="同步到设计规范仓库" />
            <Checkbox checked indeterminate onChange={() => undefined} label="半选状态（父节点示例）" />
            <div className="flex gap-4 pt-1">
              {[
                ['sm', '紧凑'],
                ['md', '标准'],
                ['lg', '宽松'],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setRadio(value)}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-full border stroke-control ${
                      radio === value ? 'border-primary' : 'border-line'
                    }`}
                  >
                    {radio === value ? <span className="h-2 w-2 rounded-full bg-primary" /> : null}
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Section>

        <Section title="进度 Progress">
          <div className="space-y-3.5">
            {[
              ['构建产物', 82, 'text-primary'],
              ['Lint 通过', 100, 'text-success'],
              ['CDN 预热', 36, 'text-warning'],
            ].map(([label, pct]) => (
              <div key={label as string}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium">{label}</span>
                  <span className="tabular-nums text-muted">{pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-line">
                  <div
                    className={`h-full rounded-full ${
                      pct === 100 ? 'bg-success' : pct === 36 ? 'bg-warning' : 'bg-primary'
                    } transition-all`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="提示条 Alert">
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 rounded-control border border-success/30 bg-success/10 px-3 py-2.5 text-success">
              <span aria-hidden="true">✓</span>
              <p>dsgov 通过官方 lint：0 error。</p>
            </div>
            <div className="flex items-start gap-2 rounded-control border border-warning/30 bg-warning/10 px-3 py-2.5 text-warning">
              <span aria-hidden="true">▲</span>
              <p>candy-glass 按钮对比度 3.53:1，低于 WCAG AA。</p>
            </div>
            <div className="flex items-start gap-2 rounded-control border border-danger/30 bg-danger/10 px-3 py-2.5 text-danger">
              <span aria-hidden="true">✕</span>
              <p>PR #49 构建失败：重复顶层键 colors。</p>
            </div>
          </div>
        </Section>

        <Section title="提示气泡 Tooltip / 骨架屏 Skeleton">
          <button className={`${buttonClass('secondary', 'sm', 'stroke-control')} relative group`}>
            悬停我
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-control border border-line bg-ink px-2 py-1 text-[11px] whitespace-nowrap text-bg opacity-0 shadow-card transition-opacity group-hover:opacity-100">
              Tooltip 使用反色 surface
            </span>
          </button>
          <div className="mt-4 space-y-2.5" aria-hidden="true">
            <div className="h-3.5 w-3/4 animate-pulse rounded-full bg-line" />
            <div className="h-3.5 w-full animate-pulse rounded-full bg-line/70" />
            <div className="h-3.5 w-1/2 animate-pulse rounded-full bg-line/50" />
          </div>
        </Section>

        <Section title="面包屑 / 分页 / 模态框">
          <p className="text-xs text-muted">
            <a href="#/preview" className="text-primary hover:underline">
              样板间
            </a>
            {' / '}
            <a href="#/preview" className="text-primary hover:underline">
              素材
            </a>
            {' / '}
            <span className="text-ink">组件库</span>
          </p>
          <div className="mt-4">
            <Pagination page={page} pageCount={4} onChange={setPage} />
          </div>
          <div className="mt-4">
            <button onClick={() => setModal(true)} className={buttonClass('primary', 'sm')}>
              打开模态框
            </button>
          </div>
        </Section>

        <div className="lg:col-span-2 xl:col-span-3">
          <FormLab design={design} />
        </div>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="fade-in absolute inset-0 bg-black/45 backdrop-blur-[2px]" onClick={() => setModal(false)} />
          <div className="rise-in relative w-full max-w-md rounded-card border border-line stroke-card bg-surface p-5 shadow-card">
            <h4 className="font-display text-base font-bold">发布新版本？</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              将把当前 {design.design.name} 规范推送至 production。样板间预览链接保持不变，用户无需刷新即可看到新样式。
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setModal(false)} className={buttonClass('ghost', 'sm')}>
                取消
              </button>
              <button onClick={() => setModal(false)} className={buttonClass('primary', 'sm')}>
                确认发布
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
