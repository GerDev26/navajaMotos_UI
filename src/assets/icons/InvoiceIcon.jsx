import { iconPropTypes } from './iconProptypes'

export function InvoiceIcon ({ color = 'white', size = '64px', fill }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={fill ? color : 'transparent'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_429_11099)'>
        <path
          d='M5 3H19V21L17.9682 20.1156C17.2193 19.4737 16.1141 19.4737 15.3651 20.1156L14.3333 21L13.3016 20.1156C12.5526 19.4737 11.4474 19.4737 10.6984 20.1156L9.66667 21L8.63492 20.1156C7.88594 19.4737 6.78073 19.4737 6.03175 20.1156L5 21V3Z'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 7L9 7'
          stroke={fill ? 'black' : color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 11L9 11'
          stroke={fill ? 'black' : color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 15L11 15'
          stroke={fill ? 'black' : color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_429_11099'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

InvoiceIcon.propTypes = iconPropTypes
