import { useState } from 'react'

interface CheckboxProps {
  checked: boolean
  onChange: (value: boolean) => void
  label?: string
  indeterminate?: boolean
}

export default function Checkbox({ checked, onChange, label, indeterminate }: CheckboxProps) {
  const id = useState(() => `cb-${Math.random().toString(36).slice(2, 9)}`)[0]
  const on = checked || indeterminate
  return (
    <label htmlFor={id} className="flex cursor-pointer select-none items-center gap-2">
      <button
        id={id}
        type="button"
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : checked}
        onClick={() => onChange(!checked)}
        className={`flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-[4px] border stroke-control ${
          on ? 'border-transparent bg-primary text-on-primary' : 'border-line bg-surface text-transparent'
        }`}
      >
        {indeterminate ? (
          <span className="h-0.5 w-2 rounded-full bg-current" />
        ) : checked ? (
          <svg viewBox="0 0 10 8" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 4l2.5 2.5L9 1" />
          </svg>
        ) : null}
      </button>
      {label ? <span className="text-sm">{label}</span> : null}
    </label>
  )
}
