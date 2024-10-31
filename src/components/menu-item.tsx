import type { Icon, IconProps } from '@phosphor-icons/react'
import { Tooltip } from './tooltip'
import { useState } from 'react'

export interface MenuItemProps extends IconProps {
  icon: Icon
  title: string
}

export function MenuItem({ icon: Icon, title, ...props }: MenuItemProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="bg-zinc-800/35 p-3 rounded-full transition-transform duration-300 shadow-sm shadow-zinc-700 hover:scale-150 hover:mx-2 hover:mb-2"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <Icon {...props} size={24} weight="fill" className="text-zinc-100" />
      </button>
      {isTooltipVisible && <Tooltip title={title} />}
    </div>
  )
}
