import type { IconProps } from '@phosphor-icons/react'

interface ChessRookIconProps extends IconProps {}

export function ChessRookIcon({ ...props }: ChessRookIconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      fill="#09090b"
      height="200px"
      width="200px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 298 298"
      xmlSpace="preserve"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <path d="M216.923,246.538c3.457-6.556,9.963-22.777-1.666-39.137C200.508,186.65,179.942,125,193.61,83H207V0h-16v17h-16V0h-18v17 h-16V0h-17v17h-16V0H91v83h14.057c13.668,42-6.98,103.65-21.73,124.401c-11.629,16.359-5.373,32.706-1.916,39.262 C77.347,247.044,74,250.337,74,254.5v18c0,4.418,3.915,8.5,8.333,8.5H83v17h132v-17h1.333c4.418,0,7.667-4.082,7.667-8.5v-18 C224,250.338,220.986,246.92,216.923,246.538z" />{' '}
        </g>{' '}
      </g>
    </svg>
  )
}
