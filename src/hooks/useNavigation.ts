import { useCallback, useEffect, useRef, useState } from 'react'
import { HOME_SECTION, SCROLL_OFFSET } from '@/constants'
import { navLinks } from '@/site.config'
import { slugify } from '@/utils'

export function useNavigation() {
  const [isNavigationFixed, setIsNavigationFixed] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(HOME_SECTION)
  const initialOffsetTop = useRef<number | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const navigationTop = navRef.current?.offsetTop ?? 0

      if (initialOffsetTop.current === null)
        initialOffsetTop.current = navigationTop

      if (inputRef.current?.checked) inputRef.current.checked = false

      const isFixed = window.scrollY >= (initialOffsetTop.current || 0)
      if (isFixed !== isNavigationFixed) setIsNavigationFixed(isFixed)

      const scrollY = window.scrollY
      let currentActiveSection = HOME_SECTION
      for (const item of navLinks) {
        const section = document.querySelector(
          `#${slugify(item.label)}`,
        ) as HTMLElement
        const sectionTop =
          section?.getBoundingClientRect().top + scrollY - SCROLL_OFFSET

        if (scrollY >= sectionTop) currentActiveSection = item.label
      }
      setActiveSection(currentActiveSection)
    })
  }, [isNavigationFixed])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return {
    isNavigationFixed,
    activeSection,
    navRef,
    inputRef,
  }
}
