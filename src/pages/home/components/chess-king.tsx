import type { IconProps } from '@phosphor-icons/react'

interface ChessKingIconProps extends IconProps {}

export function ChessKingIcon({ ...props }: ChessKingIconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      name="Chess King"
      fill="#09090b"
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 298 298"
      xmlSpace="preserve"
      stroke="#09090b"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <path d="M197.333,256h-1.641c1.878-3.337,7.061-14.536-0.605-25.6c-7.554-10.905-21.491-39.547-20.904-64.401 c4.409-0.01,7.816-3.587,7.816-7.999v-1c0-4.418-3.582-8-8-8c4.418,0,8-3.582,8-8v-1c0-4.418-3.249-8-7.667-8h-3.55 c-1.006-16.142,1.307-29.861,4.798-40.724c1.121-3.487,2.432-6.186,3.752-8.276h2c4.418,0,7.667-3.582,7.667-8v-1 c0-4.343-3.463-7.87-7.777-7.988C179.087,52.771,169,42.203,156,39.363V27h12V12h-12V0h-15v12h-12v15h12v12.595 c-12,3.15-21.803,13.512-23.888,26.405h-0.779c-4.418,0-8.333,3.582-8.333,8v1c0,4.418,3.915,8,8.333,8h3 c1.32,2.091,2.631,4.789,3.752,8.276c3.491,10.862,5.804,24.582,4.798,40.724h-4.55c-4.418,0-8.333,3.582-8.333,8v1 c0,4.418,3.582,8,8,8c-4.418,0-8,3.582-8,8v1c0,4.418,3.915,8,8.333,8h1.053c0.588,24.855-13.183,53.495-20.737,64.4 c-7.664,11.063-2.482,22.263-0.604,25.6h-1.711c-4.418,0-8.333,3.582-8.333,8v9c0,3.727,3,6.849,6,7.737V298h100v-17.263 c4-0.889,6-4.011,6-7.737v-9C205,259.582,201.751,256,197.333,256z" />{' '}
        </g>{' '}
      </g>
    </svg>
  )
}
