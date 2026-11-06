import { useState } from 'react'
import { buttonClass, cardClass, fieldClass } from '../../ui/styles'
import Checkbox from '../Checkbox'

function FormSection({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <section className={`${cardClass} p-4 md:p-5`}>
      <h3 className="font-display text-sm font-bold">{title}</h3>
      <p className="mt-0.5 text-xs text-muted">{desc}</p>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function FormsPage() {
  const [plan, setPlan] = useState('team')
  const [seats, setSeats] = useState(24)
  const [perms, setPerms] = useState({ design: true, deploy: true, billing: false, audit: false })
  const [channel, setChannel] = useState('email')
  const [note, setNote] = useState('样板间 v2 上线前，请把 changelog 与规范 diff 一并同步到设计群。')
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')
  const [agreed, setAgreed] = useState(true)

  const pwdMismatch = pwd2.length > 0 && pwd !== pwd2

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-bold">表单流程</h2>
        <p className="mt-0.5 text-sm text-muted">长表单、分组节奏、校验状态与危险操作区——表单 Token 的完整压力测试</p>
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <FormSection title="基本信息" desc="两列栅格 + 帮助文案">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium">工作区名称 *</span>
                <input defaultValue="Gholl Design 工作室" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium">负责人邮箱 *</span>
                <input type="email" defaultValue="hi@gholl.com" className={fieldClass} />
                <span className="mt-1 block text-[11px] text-muted">用于接收月度账单与用量周报</span>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium">公司名称</span>
                <input placeholder="选填" className={`${fieldClass} placeholder:italic`} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium">官网</span>
                <input defaultValue="design.gholl.com" className={fieldClass} />
              </label>
            </div>
          </FormSection>

          <FormSection title="订阅方案" desc="分段选择 + 滑块数值联动">
            <div className="grid gap-2 sm:grid-cols-3">
              {(
                [
                  ['starter', 'Starter', '3 套规范'],
                  ['team', 'Team', '无限规范 · PR 门禁'],
                  ['enterprise', 'Enterprise', '私有化部署'],
                ] as const
              ).map(([value, name, hint]) => (
                <button
                  key={value}
                  onClick={() => setPlan(value)}
                  className={`cursor-pointer rounded-control border p-3 text-left ${
                    plan === value
                      ? 'border-primary bg-primary/8 ring-2 ring-primary/25'
                      : 'border-line hover:border-muted'
                  }`}
                >
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{hint}</p>
                </button>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4">
              <span className="shrink-0 text-xs font-medium text-muted">席位数</span>
              <input
                type="range"
                min={1}
                max={200}
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                style={{ accentColor: 'var(--d-colors-primary, #2563eb)' }}
                className="h-1.5 flex-1 cursor-pointer"
              />
              <output className="w-16 rounded-control border border-line bg-surface-alt px-2 py-1 text-center font-mono text-xs tabular-nums">
                {seats} 席
              </output>
            </div>
          </FormSection>

          <FormSection title="权限与通知" desc="复选组 + 单选组">
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  ['design', '编辑设计规范'],
                  ['deploy', '发布到 production'],
                  ['billing', '查看账单'],
                  ['audit', '下载审计日志'],
                ] as const
              ).map(([key, label]) => (
                <Checkbox
                  key={key}
                  checked={perms[key]}
                  onChange={(v) => setPerms((prev) => ({ ...prev, [key]: v }))}
                  label={label}
                />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-5 border-t border-line pt-4">
              {(
                [
                  ['email', '邮件通知'],
                  ['slack', 'Slack'],
                  ['webhook', 'Webhook'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setChannel(value)}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-full border stroke-control ${
                      channel === value ? 'border-primary' : 'border-line'
                    }`}
                  >
                    {channel === value ? <span className="h-2 w-2 rounded-full bg-primary" /> : null}
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </FormSection>

          <FormSection title="安全设置" desc="实时校验：两次密码不一致即报错">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium">新密码</span>
                <input
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="至少 12 位"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium">确认密码</span>
                <input
                  type="password"
                  value={pwd2}
                  onChange={(e) => setPwd2(e.target.value)}
                  className={`${fieldClass} ${pwdMismatch ? '!border-danger !ring-2 !ring-danger/25' : ''}`}
                />
                {pwdMismatch ? (
                  <span className="mt-1 block text-[11px] font-medium text-danger">✕ 两次输入不一致</span>
                ) : pwd2 ? (
                  <span className="mt-1 block text-[11px] font-medium text-success">✓ 密码匹配</span>
                ) : null}
              </label>
            </div>
          </FormSection>

          <FormSection title="备注与附件" desc="计数器 textarea + 拖拽上传区">
            <textarea
              value={note}
              maxLength={200}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              className={`${fieldClass} resize-none`}
            />
            <p className="mt-1 text-right font-mono text-[11px] text-muted tabular-nums">{note.length}/200</p>
            <div className="mt-2 grid place-items-center gap-1 rounded-control border-2 border-dashed border-line bg-surface-alt py-8 text-center hover:border-primary">
              <span className="text-xl text-muted" aria-hidden="true">
                ⇪
              </span>
              <p className="text-sm font-medium">拖拽文件到此处，或点击上传</p>
              <p className="text-[11px] text-muted">支持 tokens.json / Figma 导出 / 截图，单个 ≤ 20MB</p>
            </div>
          </FormSection>
        </div>

        <div className="space-y-5">
          <section className={`${cardClass} sticky top-20 p-4 md:p-5`}>
            <h3 className="font-display text-sm font-bold">操作</h3>
            <div className="mt-4 flex flex-col gap-2">
              <button className={buttonClass('primary', 'md', 'w-full')}>保存变更</button>
              <button className={buttonClass('secondary', 'md', 'w-full stroke-control')}>存为草稿</button>
              <button className={buttonClass('ghost', 'md', 'w-full')}>取消</button>
            </div>
            <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-4 text-muted">
              <Checkbox checked={agreed} onChange={setAgreed} />
              <span>
                已阅读并同意
                <a href="#/" className="mx-0.5 text-primary hover:underline">
                  设计规范贡献协议
                </a>
                （MIT）
              </span>
            </p>
          </section>

          <section className={`${cardClass} border-danger/35 p-4 md:p-5`}>
            <h3 className="font-display text-sm font-bold text-danger">危险区</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              删除工作区将同时移除全部 DESIGN.md 规范与样板间预览记录，此操作不可撤销。
            </p>
            <button className={`${buttonClass('danger', 'sm')} mt-3 w-full`}>永久删除工作区</button>
          </section>
        </div>
      </div>
    </div>
  )
}
