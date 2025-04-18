import { NAV_ITEMS, SCROLL_OFFSET } from '@/constants'
import { capitalLetter, scrollToTop, slugify } from '@/utils'
import { useCallback, useEffect, useRef, useState } from 'react'
import Button from './Button'
import SvgIcon from './SvgIcon'

export default function Navbar() {
  const [isShowScrollTop, setIsShowScrollTop] = useState(false)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const initialOffsetTop = useRef<number | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const handleScroll = useCallback(() => {
    const navTop = navRef.current?.offsetTop ?? 0

    if (initialOffsetTop.current === null) initialOffsetTop.current = navTop

    setIsMenuOpen(false)
    setIsNavbarFixed(window.scrollY >= (initialOffsetTop.current || 0))
    setIsShowScrollTop(window.scrollY > window.innerHeight - SCROLL_OFFSET)

    let currentActiveSection = 'home'
    for (const item of NAV_ITEMS) {
      const section = document.getElementById(slugify(item.label))
      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
        if (window.scrollY >= sectionTop) {
          currentActiveSection = item.label
        }
      }
    }
    setActive(currentActiveSection)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <nav
      ref={navRef}
      aria-label='Navegación principal'
      className={`flex items-center w-full h-[65px] select-none z-50 ${isNavbarFixed ? 'fixed top-0 right-0' : 'relative'}`}
    >
      <div className='max-w-7xl mx-auto flex justify-center items-center backdrop-blur-md rounded-full px-8 py-4 bg-[#030014]/60 shadow-lg shadow-[#2a0e61]/60 border border-[#7042f8]/40'>
        <ul className='hidden gap-8 md:flex'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${slugify(item.label)}`}
                className={`flex items-center gap-2 hover:text-[#22d2f0] transition-colors ${active === item.label ? 'text-[#22d2f0]' : 'text-[#f6f6f6]'}`}
                aria-label={`Ir a la sección ${item.label}`}
              >
                <span className='text-sm opacity-50'>&lt;</span>
                <span className='text-lg'>{capitalLetter(item.label)}</span>
                <span className='text-sm opacity-50'>/&gt;</span>
              </a>
            </li>
          ))}
        </ul>
        <button
          type='button'
          className='md:hidden text-[#22d2f0]'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Abrir menu'
          aria-expanded={isMenuOpen}
        >
          <SvgIcon
            name='menu'
            variant='icon'
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full p-4 transform transition-transform duration-300 backdrop-blur-md bg-gradient-to-r from-[#7042f8]/20 to-[#030014]/70 border-l border-[#7042f8]/40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label='Menú de navegación'
      >
        <button
          type='button'
          className='text-[#22d2f0] p-2'
          onClick={() => setIsMenuOpen(false)}
          aria-label='Cerrar menu'
        >
          <SvgIcon
            name='menu-close'
            variant='icon'
          />
        </button>
        <ul className='flex flex-col gap-4 p-4'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Button
                className={`flex items-center gap-2 hover:text-[#22d2f0] transition-colors ${active === item.label ? 'text-[#22d2f0]' : 'text-[#f6f6f6]'}`}
                ariaLabel={`Ir a la sección ${item.label}`}
                section={item.label}
              >
                <span className='text-lg'>
                  {capitalLetter(slugify(item.label))}.tsx
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type='button'
        aria-label='Volver al principio'
        className={`fixed bottom-6 right-6 text-[#22d2f0] border border-[#22d2f0] shadow-lg shadow-[#22d2f0]/50 rounded-full backdrop-blur-md p-3 transition-opacity duration-300 z-20 ${isShowScrollTop ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={scrollToTop}
      >
        <SvgIcon
          name='scroll-up'
          variant='icon'
        />
      </button>
    </nav>
  )
}
