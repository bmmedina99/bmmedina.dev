import { useNavigation } from '@/hooks/useNavigation'
import { MobileMenu, MobileMenuButton } from './MobileMenu'
import NavItems from './NavItems'

export default function Navigation() {
  const { isNavigationFixed, activeSection, navRef, inputRef } = useNavigation()

  return (
    <>
      <MobileMenu
        active={activeSection}
        inputRef={inputRef}
      />
      <nav
        ref={navRef}
        aria-label='Navegación principal'
        className={`flex items-center justify-center px-8 py-4 mx-auto border rounded-full shadow-lg max-w-7xl h-16 backdrop-blur-md bg-rich-black/60 shadow-rebecca-purple/40 border-rebecca-purple/40 ${isNavigationFixed ? 'fixed top-0 z-40 peer-checked:opacity-0 transition-all' : 'relative'}`}
      >
        <NavItems active={activeSection} />
        <MobileMenuButton />
      </nav>
    </>
  )
}
