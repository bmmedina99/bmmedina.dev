interface Props {
  name: string
  width?: number
  height?: number
  variant: 'icon' | 'skill'
}

const SvgIcon = ({ name, width = 24, height = 24, variant }: Props) => {
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
    >
      <use href={`${basePath}#${name}`} />
    </svg>
  )
}

export default SvgIcon
