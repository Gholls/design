import { useRef, useState } from 'react'
import type { NotificationItem } from '../../data/mock'
import { notificationPool, seedNotifications } from '../../data/mock'
import { buttonClass, cardClass } from '../ui/styles'
import EmptyState from './EmptyState'

const DOT: Record<NotificationItem['level'], string> = {
  success: 'bg-success',
  info: 'bg-primary',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

function nowHHMM() {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export default function NotificationsPanel() {
  const [items, setItems] = useState<NotificationItem[]>(seedNotifications)
  const nextId = useRef(100)

  const pushRandom = () => {
    const pick = notificationPool[Math.floor(Math.random() * notificationPool.length)]
    setItems((prev) => [{ ...pick, id: nextId.current++, time: nowHHMM() }, ...prev])
  }

  return (
    <section className={`${cardClass} flex flex-col overflow-hidden`}>
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5 md:px-5">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-base font-bold">通知日志</h2>
          <span className="rounded-badge bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary tabular-nums">
            {items.length}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={pushRandom} className={buttonClass('secondary', 'sm', 'stroke-control')}>
            新增
          </button>
          <button
            onClick={() => setItems([])}
            disabled={items.length === 0}
            className={buttonClass('ghost', 'sm')}
          >
            清空
          </button>
        </div>
      </header>

      <div className="max-h-80 overflow-auto px-4 py-3 md:px-5">
        {items.length === 0 ? (
          <EmptyState
            title="暂无通知"
            hint="演示空状态：所有系统事件处理完毕后停留在这里。点击右上角「新增」重新生成日志。"
            action={
              <button onClick={pushRandom} className={buttonClass('primary', 'sm')}>
                新增一条
              </button>
            }
          />
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="rise-in flex items-start gap-2.5 rounded-control border border-line bg-surface-alt px-3 py-2"
              >
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${DOT[item.level]}`} />
                <span className="mt-0.5 font-mono text-xs text-muted tabular-nums">{item.time}</span>
                <span className="text-sm leading-snug">{item.message}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
