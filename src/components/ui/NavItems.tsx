import { scrollSection, slugify } from '@/lib/utils'
import { navLinks } from '@/site.config'

interface NavItemsProps {
  active: string
  isMobile?: boolean
}

const NavItems = ({ active, isMobile = false }: NavItemsProps) => {
  if (isMobile) {
    return (
      <ul className='flex flex-col gap-4 py-4'>
        {navLinks.map((item) => (
          <li key={item.id}>
            <a
              href={`#${slugify(item.label)}`}
              className={`flex items-center gap-2 hover:text-violet-300 transition-colors ${active === item.label ? 'text-violet-300' : ''}`}
              aria-label={`Ir a la sección ${item.label}`}
            >
              {slugify(item.label)}.tsx
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className='hidden gap-8 md:flex'>
      {navLinks.map((item) => (
        <li key={item.id}>
          <button
            type='button'
            className={`flex items-center gap-2 hover:text-violet-300 transition-colors ${active === item.label ? 'text-violet-300' : ''}`}
            aria-label={`Ir a la sección ${item.label}`}
            onClick={() => scrollSection(`#${slugify(item.label)}`)}
          >
            <span className='text-sm opacity-50'>&lt;</span>
            <span className='text-lg capitalize'>{item.label}</span>
            <span className='text-sm opacity-50'>/&gt;</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default NavItems
