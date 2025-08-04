interface IconProps {
  name: string
  width?: number
  height?: number
  variant: 'icon' | 'skill'
}

const Icon = ({ name, width = 24, height = 24, variant }: IconProps) => {
  const basePath = variant === 'icon' ? 'svg/icons.svg' : 'svg/skills.svg'

  const attributes =
    variant === 'icon'
      ? {
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
        }
      : {
          fill: 'currentColor',
        }

  return (
    <svg
      width={width}
      height={height}
      {...attributes}
      aria-hidden='true'
    >
      <use href={`${basePath}#${name}`} />
    </svg>
  )
}

export default Icon
