export const SCROLL_OFFSET = 96

export const STARTS_COUNT = 1000

export const HOME_SECTION = 'home'

export const EXPERIENCES_SECTION = 'experiencia'

export const CHARACTER_LIMITS = {
  SUBJECT: 100,
  MESSAGE: 1000,
} as const

export const EMAILJS_DATA = {
  SERVICE: import.meta.env.PUBLIC_EMAILJS_SERVICE,
  TEMPLATE: import.meta.env.PUBLIC_EMAILJS_TEMPLATE,
  PUBLICKEY: import.meta.env.PUBLIC_EMAILJS_PUBLICKEY,
} as const
