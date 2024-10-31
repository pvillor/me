import { Code, GithubLogo, House } from '@phosphor-icons/react'
import { MenuItem } from './menu-item'

export function Menu() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
      <div className="flex items-end gap-3 p-2 rounded-full shadow-sm shadow-zinc-700">
        <MenuItem icon={House} title="Home" />
        <MenuItem icon={Code} title="Projects" />
        <MenuItem icon={GithubLogo} title="GitHub" />
      </div>
    </div>
  )
}
