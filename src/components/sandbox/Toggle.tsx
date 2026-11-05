interface ToggleProps {
  checked: boolean
  onChange: (value: boolean) => void
  label: string
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 py-1">
      <span className="text-sm">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full border stroke-control ${
          checked ? 'border-transparent bg-primary' : 'border-line bg-surface-alt'
        }`}
      >
        <span
          className={`absolute top-1/2 h-4.5 w-4.5 -translate-y-1/2 rounded-full shadow-control ${
            checked
              ? 'left-[calc(100%-1.25rem)] bg-on-primary'
              : 'left-[3px] bg-muted'
          }`}
        />
      </button>
    </label>
  )
}
