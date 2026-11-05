import { useEffect, useState } from 'react'
import type { Design } from '../../types'
import { buttonClass, cardClass, fieldClass } from '../ui/styles'
import Toggle from './Toggle'

const DENSITY_OPTIONS = [
  ['0.85', '紧凑'],
  ['1', '标准'],
  ['1.15', '宽松'],
] as const

/**
 * 高频表单与交互区。密度分段器直接覆写 --d-spacing-scale，
 * 演示「Token 实时覆写」；切换主题时重置回该规范声明的 scale。
 */
export default function FormLab({ design }: { design: Design }) {
  const [name, setName] = useState('林晚舟')
  const [role, setRole] = useState('editor')
  const [tfa, setTfa] = useState(true)
  const [digest, setDigest] = useState(false)
  const [density, setDensity] = useState(design.tokens.spacing.scale)

  useEffect(() => {
    setDensity(design.tokens.spacing.scale)
  }, [design])

  const pickDensity = (value: string) => {
    setDensity(value)
    document.documentElement.style.setProperty('--d-spacing-scale', value)
  }

  return (
    <section className={`${cardClass} p-4 md:p-5`}>
      <h2 className="font-display text-base font-bold">表单与交互区</h2>
      <p className="mt-0.5 text-xs text-muted">输入框 / 下拉 / 开关 / 按钮组，全部走 Token 变量</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">成员姓名</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">角色权限</span>
          <select value={role} onChange={(e) => setRole(e.target.value)} className={fieldClass}>
            <option value="admin">管理员</option>
            <option value="editor">编辑</option>
            <option value="viewer">只读访客</option>
          </select>
        </label>
      </div>

      <div className="mt-4 space-y-1 rounded-control border border-line bg-surface-alt px-3 py-2">
        <Toggle checked={tfa} onChange={setTfa} label="双因素认证（2FA）" />
        <Toggle checked={digest} onChange={setDigest} label="每周一发送账单摘要邮件" />
      </div>

      <div className="mt-4">
        <span className="mb-1.5 block text-xs font-medium text-muted">
          全局密度 · 实时覆写 spacing.scale（当前 ×{density}）
        </span>
        <div className="flex rounded-control border border-line p-0.5">
          {DENSITY_OPTIONS.map(([value, label]) => (
            <button
              key={value}
              onClick={() => pickDensity(value)}
              className={`flex-1 cursor-pointer rounded-[calc(var(--d-rounded-control,8px)-3px)] px-2 py-1.5 text-xs font-medium ${
                density === value ? 'bg-primary text-on-primary shadow-control' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className={buttonClass('primary', 'sm')}>保存变更</button>
        <button className={buttonClass('secondary', 'sm', 'stroke-control')}>取消</button>
        <button className={buttonClass('accent', 'sm')}>邀请成员</button>
        <button className={buttonClass('danger', 'sm')}>撤销订阅</button>
        <button className={buttonClass('ghost', 'sm')}>仅文本</button>
        <button disabled className={buttonClass('primary', 'sm')}>
          不可用
        </button>
      </div>
    </section>
  )
}
