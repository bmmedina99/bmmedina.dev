import profile from './assets/images/profile.png'
import graygorillafitness from './assets/images/projects/app-graygorillafitness.jpg'
import kirakana from './assets/images/projects/app-kirakana.jpg'
import kointa from './assets/images/projects/app-kointa.jpg'
import type {
  Config,
  Experience,
  Navigation,
  Profile,
  Project,
  Social,
} from './types'

export const configSite: Config = {
  title: 'bmmedina',
  description:
    'Brandon Medina, desarrollador web Full Stack con más de 3 años de experiencia en Next.js, Astro, React y Node.js. Enfocado en crear y optimizar sitios web.',
  lang: 'es',
  author: 'bmmedina99',
  url: 'https://bmmedina.dev',
}

export const navLinks: Navigation[] = [
  { id: 1, label: 'experiencia' },
  { id: 2, label: 'proyectos' },
  { id: 3, label: 'sobre mí' },
  { id: 4, label: 'contactáme' },
]

export const experiences: Experience[] = [
  {
    id: 0,
    title: 'Soporte CAU',
    company: 'Empresarios Agrupados',
    startDate: 'Mar. 2019',
    endDate: 'Ago. 2019',
    description: [
      'Logré agilizar el trabajo y reducir el tiempo a la mitad de lo solicitado, optimizando los procesos y mejorando la productividad del equipo.',
      'Proveía asistencia técnica a los usuarios de la empresa, resolviendo problemas informáticos en sus equipos y actualizando programas.',
      'Realizaba seguimiento y análisis de los equipos de la empresa para garantizar su correcto funcionamiento y mantenimiento.',
      'Utilicé los programas Lansweeper y WSUS para gestionar eficientemente el inventario de hardware y software, así como para la aplicación de parches y actualizaciones en la red.',
    ],
    technologies: [
      'WSUS',
      'Lansweeper',
      'Soporte técnico',
      'Optimización de procesos',
      'Comunicación técnica efectiva',
    ],
    location: 'Madrid',
    website: {
      text: 'empresariosagrupados.es',
      link: 'https://www.empresariosagrupados.es',
    },
  },
  {
    id: 1,
    title: 'Programador Junior',
    company: 'Asociación de Mutuas y A.T. (AMAT)',
    startDate: 'Nov. 2021',
    endDate: 'Feb. 2022',
    description: [
      'Gestioné datos mediante las herramientas de Qlik Sense y Qlik View, además del desarrollo de funciones específicas para visualizar los datos de forma concreta.',
      'Desarrollé un programa en Python para extraer datos blob de una base de datos específica y convertirlos a formatos de archivo (PNG, JPG, PDF).',
      'Automaticé el proceso de transferencia de archivos al servidor a través de SFTP, mejorando la productividad y reduciendo 2 horas del proceso.',
    ],
    technologies: [
      'Python',
      'Base de datos',
      'Automatización',
      'Optimización con SFTP',
      'Resolución de problemas técnicos',
    ],
    location: 'Madrid',
    website: { text: 'amat.es', link: 'https://www.amat.es' },
  },
  {
    id: 2,
    title: 'Desarrollador Web Freelance',
    company: 'Gray Gorilla Fitness',
    startDate: 'Dec. 2021',
    endDate: 'Oct. 2022',
    description: [
      'Desarrollé una página web personalizada para una compañía de accesorios de gimnasio que trabajaba con Amazon FBA.',
      'Implementé una interfaz clara y funcional para mostrar los productos, con redirección directa a Amazon para la compra, mejorando la experiencia del usuario.',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Posicionamiento SEO',
      'Resolución autónoma',
      'Integración con Amazon FBA',
    ],
    location: 'Remoto',
  },
  {
    id: 3,
    title: 'Operador de Sala',
    company: 'Izertis (Cliente: RSI)',
    startDate: 'Jul. 2022',
    endDate: 'Presente',
    description: [
      'Toma de decisiones sobre escalado de incidencias, contactando con las respectivas guardias según la criticidad de los problemas detectados.',
      'Participé en la mejora y reestructuración de un programa existente, logrando disminuir el tiempo de ejecución de una tarea crítica de 1 hora a 15 minutos.',
      'Monitoreo de aplicaciones bajo monitores transaccionales Tuxedo y servidores de aplicaciones.',
      'Registro detallado de problemas y soluciones en herramientas de ticketing usando BMC Remedy, contribuyendo a la base de conocimiento del equipo.',
      'Colaboración efectiva en equipo y comunicación clara con diferentes departamentos.',
    ],
    technologies: [
      'Control-M',
      'BMC Remedy',
      'Monitoreo de sistemas',
      'Toma de decisiones críticas',
      'Liderazgo en turno rotativo',
    ],
    location: 'Madrid',
    website: { text: 'izertis.com', link: 'https://www.izertis.com/es/' },
  },
]

export const projects: Project[] = [
  {
    id: 0,
    image: kirakana,
    title: 'KiraKana',
    subtitle: 'Aplicación para aprender con facilidad los silabarios japonés.',
    description:
      'Elige hiragana, katakana o ambos y evalúa tu conocimiento de japonés con pruebas visuales. ¿Te atreves?',
    technologies: ['Astro', 'React', 'TypeScript', 'TailwindCSS', 'Biome'],
    type: 'Frontend',
    gradient: 'bg-linear-to-r from-amber-600 to-pink-600',
    githubURL: 'https://github.com/bmmedina99/kirakana.app',
    demoURL: 'https://kirakana.app',
  },
  {
    id: 1,
    image: graygorillafitness,
    title: 'Gray Gorilla Fitness',
    subtitle: 'Ecommerce de accesorios de gimnasio utilizando Amazon FBA.',
    description:
      'Explora un catálogo de artículos de gimnasio y obtén información; compra fácilmente en Amazon con seguridad y rapidez.',
    technologies: ['En reconstrucción'],
    type: 'Frontend',
    gradient: 'bg-linear-to-r from-zinc-400 to-zinc-600',
  },
  {
    id: 2,
    image: kointa,
    title: 'Kointa Finance',
    subtitle:
      'Herramienta para el control y seguimiento de tus finanzas personales.',
    description:
      'Gestiona tus finanzas con esta herramienta. Simplifica la gestión de gastos y analiza los gráficos de manera fácil.',
    technologies: ['En desarrollo'],
    type: 'Full Stack',
    gradient: 'bg-linear-to-r from-emerald-600 to-sky-600',
    githubURL: 'https://github.com/bmmedina99/kointa-finance',
  },
]

export const aboutMe: Profile = {
  image: profile,
  techSkills: [
    {
      text: 'Next.js',
      color: 'text-zinc-100',
      hover: 'group-hover:text-white',
    },
    {
      text: 'Astro',
      color: 'text-orange-300',
      hover: 'group-hover:text-orange-200',
    },
    {
      text: 'React',
      color: 'text-cyan-300',
      hover: 'group-hover:text-cyan-200',
    },
    {
      text: 'TypeScript',
      color: 'text-blue-300',
      hover: 'group-hover:text-blue-200',
    },
    {
      text: 'Node.js',
      color: 'text-emerald-400',
      hover: 'group-hover:text-emerald-300',
    },
    {
      text: 'NestJS',
      color: 'text-rose-400',
      hover: 'group-hover:text-rose-300',
    },
    {
      text: 'Python',
      color: 'text-amber-300',
      hover: 'group-hover:text-amber-200',
    },
    {
      text: 'TailwindCSS',
      color: 'text-sky-300',
      hover: 'group-hover:text-sky-200',
    },
    {
      text: 'PostgreSQL',
      color: 'text-indigo-300',
      hover: 'group-hover:text-indigo-200',
    },
    {
      text: 'Git & Github',
      color: 'text-zinc-400',
      hover: 'group-hover:text-white',
    },
  ],
  softSkills: [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Adaptabilidad',
    'Pensamiento crítico',
    'Gestión del tiempo',
    'Resolución de problemas',
  ],
  studies: [
    {
      title:
        'Formación Profesional de Grado Superior Desarrollo de Aplicaciones Multiplataforma',
      institution: 'CES Fuencarral',
      startDate: 'sep. 2019',
      endDate: 'mar. 2021',
    },
    {
      title:
        'Formación Profesional de Grado Medio Sistemas Microinformáticos y Redes',
      institution: 'CES Fuencarral',
      startDate: 'sep. 2017',
      endDate: 'mar. 2019',
    },
  ],
}

export const socialLinks: Social[] = [
  {
    id: 0,
    name: 'GitHub',
    color: 'group-hover:text-zinc-400',
    icon: 'git-github',
    link: 'https://github.com/bmmedina99',
  },
  {
    id: 1,
    name: 'LinkedIn',
    color: 'group-hover:text-sky-400',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/bmmedina99',
  },
  {
    id: 2,
    name: 'Instagram',
    color: 'group-hover:text-fuchsia-400',
    icon: 'instagram',
    link: 'https://www.instagram.com/bmmedina99',
  },
  {
    id: 3,
    name: 'Youtube',
    color: 'group-hover:text-rose-400',
    icon: 'youtube',
    link: 'https://www.youtube.com/@bmmedina99',
  },
  {
    id: 4,
    name: 'X (Twitter)',
    color: 'group-hover:text-slate-400',
    icon: 'twitter',
    link: 'https://x.com/bmmedina99',
  },
  {
    id: 5,
    name: 'Facebook',
    color: 'group-hover:text-blue-400',
    icon: 'facebook',
    link: 'https://www.facebook.com/bmmedina.dev/',
  },
]
