import ProfileImg from '@/assets/profile.png'
import Temporal from '@/assets/projects/temporal.png'
import type { Experience, Profile, Project, Social } from '@/types'

export const SCROLL_OFFSET = 96

export const NAV_ITEMS = [
  { id: '01', label: 'experiencia' },
  { id: '02', label: 'proyectos' },
  { id: '03', label: 'sobre mí' },
  { id: '04', label: 'contactáme' },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 0,
    title: 'Soporte CAU',
    company: 'Empresarios Agrupados',
    startDate: 'Mar. 2019',
    endDate: 'Ago. 2019',
    description: [
      'Logré agilizar el trabajo y reducir el tiempo a la mitad de lo solicitado, optimizando los procesos y mejorando la productividad del equipo.',
      'Proveía asistencia técnica a los usuarios de la empresa, resolviendo problemas informáticos en sus equipos y actualizando programas.',
      'Relizaba seguimiento y análisis de los equipos de la empresa para garantizar su correcto funcionamiento y mantenimiento.',
      'Hacía uso de los programas Lansweeper y WSUS para gestionar eficientemente el inventario de hardware y software, así como para la aplicación de parches y actualizaciones en la red.',
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
      'Automaticé el proceso de transferencia de archivos al servidor a través de SFTP, mejorando la productividad reduciendo 2 horas.',
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
      'Monitoreo aplicaciones bajo monitores transaccionales Tuxedo y servidores de aplicaciones.',
      'Registro detallado de problemas y soluciones en herramientas de ticketing usando BMC Remedy, contribuyendo a la base de conocimiento del equipo.',
      'Capacidad para trabajar en equipo, comunicando de manera clara y efectiva con diferentes departamentos.',
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

export const PROJECTS: Project[] = [
  {
    id: 0,
    image: Temporal,
    title: 'Projecto de ejemplo',
    description:
      'Descripción temporal para la muestra de un proyecto en el porfolio, esto será una descripción breve y explicativa.',
    technologies: ['Astro', 'React', 'TypeScript', 'TailwindCSS'],
    type: 'Full Stack',
    githubURL: 'https://github.com/bmmedina99/bmmedina.dev',
    demoURL: 'https://bmmedina.dev',
  },
]

export const PROFILE: Profile = {
  image: ProfileImg,
  techSkills: [
    'Next.js',
    'Astro',
    'React',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Python',
    'TailwindCSS',
    'PostgreSQL',
    'Git & Github',
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
        'Formación Profesional de Grado Superior, Desarrollo de Aplicaciones Multiplataforma',
      institution: 'CES Fuencarral',
      date: '2019-09',
      startDate: 'sep. 2019',
      endDate: 'mar. 2021',
    },
    {
      title:
        'Formación Profesional de Grado Medio, Sistemas Microinformáticos y Redes',
      institution: 'CES Fuencarral',
      date: '2017-09',
      startDate: 'sep. 2017',
      endDate: 'mar. 2019',
    },
  ],
}

export const CHARACTER_LIMITS ={
  SUBJECT: 100,
  MESSAGE: 1000,
}

export const EMAILJS_DATA = {
  SERVICE: 'service_utjo0pk',
  TEMPLATE: 'template_oneg9l4',
  PUBLICKEY: 'GbhPtGaxs-b16fbSK',
}

export const SOCIAL_LINK: Social[] = [
  {
    id: 0,
    name: 'GitHub',
    icon: 'git-github',
    link: 'https://github.com/bmmedina99',
  },
  {
    id: 1,
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/bmmedina99/',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/bmmedina99/',
  },
]
