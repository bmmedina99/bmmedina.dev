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
  description: string
  technologies: string[]
  type: string
  githubURL?: string
  demoURL?: string
}

export interface Profile {
  image: ImageMetadata
  techSkills: string[]
  softSkills: string[]
  studies: {
    title: string
    institution: string
    date: string
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
