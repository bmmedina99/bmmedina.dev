import { scrollSection } from '@/utils'

interface ButtonProps {
  children: React.ReactNode
  className: string
  ariaLabel: string
  section: string
}

const Button = ({ children, className, ariaLabel, section }: ButtonProps) => {
  return (
    <button
      type='button'
      className={className}
      aria-label={ariaLabel}
      onClick={() => scrollSection(`#${section}`)}
    >
      {children}
    </button>
  )
}

export default Button
