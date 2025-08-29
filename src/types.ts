export interface Config {
  title: string
  description: string
  lang: string
  author: string
  url: string
}

export interface Navigation {
  id: number
  label: string
}

export interface Experience {
  id: number
  title: string
  company: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  location: string
  website?: { text: string; link: string }
}

export interface Project {
  id: number
  image: ImageMetadata
  title: string
  subtitle: string
  description: string
  technologies: string[]
  type: string
  gradient: string
  githubURL?: string
  demoURL?: string
}

export interface Profile {
  image: ImageMetadata
  techSkills: {
    text: string
    color: string
  }[]
  softSkills: string[]
  studies: {
    title: string
    institution: string
    startDate: string
    endDate: string
  }[]
}

export interface Social {
  id: number
  name: string
  icon: string
  link: string
}
