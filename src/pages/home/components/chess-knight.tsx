import type { IconProps } from '@phosphor-icons/react'

interface ChessKnightIconProps extends IconProps {}

export function ChessKnightIcon({ ...props }: ChessKnightIconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      fill="#09090b"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 29.426 29.426"
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
          <g id="dC7QOv.tif">
            {' '}
            <path d="M21.595,24.502c-0.562-0.617-0.354-2.674-0.354-2.674s1.107-4.826,1.711-5.932c0.604-1.105,0.62-4.278,0.62-4.278 s-0.118-1.963-0.974-4.384c-0.856-2.42-3.852-4.44-5.872-4.766C16.519,1.333,14.734,0,14.734,0s0.295,2.439-0.03,2.483 c-0.325,0.044-1.682,0.443-1.682,0.443l0.31,1.003c-1.756,0.518-2.458,1.019-2.458,1.019s-0.05,0.089-0.375,0.753 S6.294,9.463,6.111,9.67c-0.183,0.207-0.078,0.604-0.078,0.604s-0.062,0.812-0.106,0.856c-0.044,0.045-0.163,0.664,0.051,0.93 c0.214,0.267,0.376,0.59,0.803,0.944c0.428,0.354,0.546,0.118,0.546,0.118s0.036,0.135,1.225,0.321 c1.461,0.013,1.962-1.059,1.962-1.059s0.428-0.752,1.564-0.531c2.272,1.181,3.815,0.292,3.815,0.292s-1.849,1.532-4.603,5.564 c-2.754,4.031-0.787,6.791-0.787,6.791H21.595z" />{' '}
            <path d="M22.653,28.955c0,0.26-0.211,0.471-0.472,0.471H9.71c-0.261,0-0.472-0.211-0.472-0.471v-3.533 c0-0.26,0.211-0.471,0.472-0.471h12.472c0.261,0,0.472,0.211,0.472,0.471V28.955z" />{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  )
}
