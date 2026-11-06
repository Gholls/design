import { useState } from 'react'
import { buttonClass, cardClass, fieldClass } from '../../ui/styles'
import Checkbox from '../Checkbox'

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [remember, setRemember] = useState(true)

  return (
    <div className="mx-auto max-w-md py-6">
      <div className="mb-6 text-center">
        <span className="mx-auto grid h-10 w-10 grid-cols-2 grid-rows-2 gap-1 rounded-card bg-ink p-1.5" aria-hidden="true">
          <span className="rounded-[3px] bg-primary" />
          <span className="rounded-[3px] bg-accent" />
          <span className="rounded-[3px] bg-success" />
          <span className="rounded-[3px] bg-warning" />
        </span>
        <h2 className="mt-4 font-display text-xl font-bold">
          {mode === 'login' ? '欢迎回来' : '创建你的设计工作区'}
        </h2>
        <p className="mt-1 text-sm text-muted">样板间同时演示认证流程在两套表单状态下的样子</p>
      </div>

      <section className={`${cardClass} p-5 md:p-6`}>
        <div className="mb-5 grid grid-cols-2 rounded-control border border-line p-0.5">
          {(
            [
              ['login', '登录'],
              ['signup', '注册'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setMode(value)}
              className={`cursor-pointer rounded-[calc(var(--d-rounded-control,8px)-3px)] py-1.5 text-sm font-medium ${
                mode === value ? 'bg-primary text-on-primary shadow-control' : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {mode === 'signup' ? (
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium">姓名</span>
              <input placeholder="你的名字" className={fieldClass} />
            </label>
          ) : null}
          <label className="block">
            <span className="mb-1.5 block text-xs font-medium">工作邮箱</span>
            <input type="email" defaultValue="hi@gholl.com" className={fieldClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 flex items-center justify-between text-xs font-medium">
              密码
              {mode === 'login' ? (
                <a href="#/preview?page=auth" className="text-primary hover:underline">
                  忘记密码？
                </a>
              ) : null}
            </span>
            <input type="password" defaultValue="design-systems" className={fieldClass} />
          </label>
          {mode === 'signup' ? (
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium">工作区名称</span>
              <input placeholder="my-studio" className={fieldClass} />
            </label>
          ) : null}

          <div className="flex items-center justify-between pt-1">
            <Checkbox checked={remember} onChange={setRemember} label={mode === 'login' ? '30 天内记住我' : '同意订阅用量邮件'} />
            <span className="font-mono text-[10px] text-muted">SSO 可用</span>
          </div>

          <button className={buttonClass('primary', 'md', 'w-full')} type="submit">
            {mode === 'login' ? '登录' : '创建工作区'}
          </button>

          <div className="flex items-center gap-3 text-[11px] text-muted">
            <span className="h-px flex-1 bg-line" />
            或使用第三方账号
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button type="button" className={buttonClass('secondary', 'md', 'stroke-control')}>
              ⌥ GitHub
            </button>
            <button type="button" className={buttonClass('secondary', 'md', 'stroke-control')}>
              ◉ Google
            </button>
          </div>
        </form>
      </section>

      <p className="mt-6 text-center text-xs text-muted">
        认证页同样由当前规范的 Token 渲染 —— 试试顶栏切换主题。
      </p>
    </div>
  )
}
