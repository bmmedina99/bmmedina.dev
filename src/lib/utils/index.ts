export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')

export const scrollSection = (section: string) => {
  const element = document.querySelector(section)
  element?.scrollIntoView({ behavior: 'smooth' })
}
