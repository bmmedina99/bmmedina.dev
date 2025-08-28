import type { RefObject } from 'react'
import Icon from './Icon'
import NavItems from './NavItems'

interface MobileMenuProps {
  active: string
  inputRef: RefObject<HTMLInputElement | null>
}

export const MobileMenuButton = () => {
  return (
    <label
      htmlFor='mobile-menu'
      className='relative mb-0 cursor-pointer md:hidden text-sky-400'
    >
      <Icon name='menu' />
      <span className='sr-only'>Abrir menú</span>
    </label>
  )
}

export const MobileMenu = ({ active, inputRef }: MobileMenuProps) => {
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
      <div className='fixed top-0 right-0 z-50 w-48 h-full p-4 transition-transform duration-300 transform translate-x-full md:hidden backdrop-blur-md bg-linear-to-r from-indigo-900/40 to-rich-black/20 peer-checked:translate-x-0'>
        <label
          htmlFor='mobile-menu'
          className='relative mb-0 cursor-pointer text-sky-400'
        >
          <Icon name='menu-close' />
          <span className='sr-only'>Cerrar menú</span>
        </label>
        <NavItems
          active={active}
          isMobile
        />
      </div>
    </>
  )
}
