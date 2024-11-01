import type { IconProps } from '@phosphor-icons/react'

interface ChessBishopIconProps extends IconProps {}

export function ChessBishopIcon({ ...props }: ChessBishopIconProps) {
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
      viewBox="0 0 297.08 297.08"
      xmlSpace="preserve"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <path d="M206.873,255.08h-3.41c2.214-3.337,8.32-14.536-0.712-25.6c-8.9-10.905-25.137-39.546-24.448-64.4h3.57 c4.418,0,7.667-3.582,7.667-8v-1c0-4.418-3.249-8-7.667-8h-4.333v-4.285c13-8.971,20.511-23.502,20.511-39.914 c0-10.332-7.011-26.11-15.819-41.721l-18.553,18.595c-3.111,3.111-8.182,3.111-11.294,0.001l-0.921-0.933 c-3.111-3.11-3.106-8.202,0.005-11.313l21.676-21.674c-4.444-7.069-8.869-13.678-12.703-19.224 c2.881-2.93,4.663-6.944,4.663-11.379C165.106,7.268,157.841,0,148.874,0c-8.967,0-16.234,7.268-16.234,16.233 c0,4.434,1.781,8.448,4.662,11.379c-14.585,21.101-37.94,57.587-37.94,76.269c0,16.853,8.178,31.724,21.178,40.625v3.574h-4.667 c-4.418,0-8.333,3.582-8.333,8v1c0,4.418,3.915,8,8.333,8h3.571c0.689,24.855-15.547,53.495-24.448,64.4 c-9.031,11.064-2.926,22.263-0.712,25.6h-3.411c-4.418,0-8.333,3.582-8.333,8v9c0,4.078,3,7.438,7,7.931v17.069h118v-17.069 c4-0.493,7-3.853,7-7.931v-9C214.54,258.662,211.291,255.08,206.873,255.08z" />{' '}
        </g>{' '}
      </g>
    </svg>
  )
}
