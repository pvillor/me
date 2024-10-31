interface TooltipProps {
  title: string
}

export function Tooltip({ title }: TooltipProps) {
  return (
    <div className="absolute -translate-y-8 top-0 p-1">
      <span className="text-xs font-medium">{title}</span>
    </div>
  )
}
