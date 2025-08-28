interface IconProps {
  name: string
  width?: number
  height?: number
  className: string
}

const Icon = ({ name, width = 24, height = 24, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      aria-hidden='true'
      className={className}
    >
      <use href={`svg/sprite.svg#${name}`} />
    </svg>
  )
}

export default Icon
