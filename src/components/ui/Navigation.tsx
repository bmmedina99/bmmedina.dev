import { useCallback, useEffect, useRef, useState } from 'react'
import { NAV_ITEMS, SCROLL_OFFSET } from '@/constants'
import { capitalLetter, scrollSection, slugify } from '@/utils'
import SvgIcon from './SvgIcon'

export default function Navigation() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)
  const [active, setActive] = useState('home')
  const initialOffsetTop = useRef<number | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleScroll = useCallback(() => {
    const navTop = navRef.current?.offsetTop ?? 0

    if (initialOffsetTop.current === null) initialOffsetTop.current = navTop
    if (inputRef.current?.checked) inputRef.current.checked = false

    setIsNavbarFixed(window.scrollY >= (initialOffsetTop.current || 0))

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
    <>
      <input
        ref={inputRef}
        id='mobile-menu'
        type='checkbox'
        className='hidden peer'
        aria-label='Abrir menú móvil'
      />
      <label
        htmlFor='mobile-menu'
        className='fixed inset-0 z-40 hidden backdrop-blur-sm peer-checked:block md:peer-checked:hidden'
        aria-controls='mobile-menu'
        aria-label='Cerrar menú móvil'
      />
      <nav
        ref={navRef}
        aria-label='Navegación principal'
        className={`flex items-center justify-center px-8 py-4 mx-auto border rounded-full shadow-lg max-w-7xl h-16 backdrop-blur-md bg-rich-black/60 shadow-rebecca-purple/40 border-rebecca-purple/40 ${isNavbarFixed ? 'fixed top-0 z-40' : 'relative'}`}
      >
        <ul className='hidden gap-8 md:flex'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type='button'
                className={`flex items-center gap-2 hover:text-sky-400 transition-colors ${active === item.label ? 'text-sky-400' : 'text-neutral-100'}`}
                aria-label={`Ir a la sección ${item.label}`}
                onClick={() => scrollSection(`#${slugify(`${item.label}`)}`)}
              >
                <span className='text-sm opacity-50'>&lt;</span>
                <span className='text-lg'>{capitalLetter(item.label)}</span>
                <span className='text-sm opacity-50'>/&gt;</span>
              </button>
            </li>
          ))}
        </ul>
        <label
          htmlFor='mobile-menu'
          className='relative mb-0 cursor-pointer md:hidden text-sky-400'
        >
          <SvgIcon
            name='menu'
            variant='icon'
          />
          <span className='sr-only'>Abrir menú</span>
        </label>
      </nav>
      <div className='fixed top-0 right-0 z-50 w-48 h-full p-4 transition-transform duration-300 transform translate-x-full md:hidden backdrop-blur-md bg-linear-to-r from-indigo-900/40 to-rich-black/20 peer-checked:translate-x-0'>
        <label
          htmlFor='mobile-menu'
          className='relative mb-0 cursor-pointer text-sky-400'
        >
          <span className='sr-only'>Cerrar menú</span>
          <SvgIcon
            name='menu-close'
            variant='icon'
          />
        </label>
        <ul className='flex flex-col gap-4 py-4'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${slugify(item.label)}`}
                className={`flex items-center gap-2 hover:text-sky-400 transition-colors ${active === item.label ? 'text-sky-400' : 'text-neutral-100'}`}
                aria-label={`Ir a la sección ${item.label}`}
              >
                {capitalLetter(slugify(item.label))}.tsx
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
