import { useCallback, useState } from 'react'
import { EXPERIENCES } from '@/constants'
import Badge from './Badge'
import SvgIcon from './SvgIcon'

export default function ExperienceDetails() {
  const [expanded, setExpanded] = useState(EXPERIENCES.length - 1)

  const handleExpand = useCallback((id: number) => {
    setExpanded((prev) => (prev === id ? -1 : id))
  }, [])

  return (
    <>
      {[...EXPERIENCES].reverse().map((experience) => (
        <article
          key={experience.id}
          className='mb-4'
        >
          <button
            type='button'
            className='w-full p-4 text-left card'
            onClick={() => handleExpand(experience.id)}
            aria-expanded={expanded === experience.id}
            aria-controls={`experience-detail-${experience.id}`}
            aria-label={`${expanded === experience.id ? 'Contraer' : 'Expandir'} detalles de ${experience.title} en ${experience.company}`}
          >
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='text-xl font-semibold text-purple-300'>
                  {experience.title}
                </h3>
                <p className='text-gray-300'>{experience.company}</p>
                <time className='text-sm text-gray-400'>
                  {experience.startDate} - {experience.endDate}
                </time>
              </div>
              <span
                className='text-violet-300'
                aria-hidden='true'
              >
                {expanded === experience.id ? (
                  <SvgIcon
                    name='menu-collapse'
                    variant='icon'
                  />
                ) : (
                  <SvgIcon
                    name='menu-expand'
                    variant='icon'
                  />
                )}
              </span>
            </div>
          </button>
          <div
            id={`experience-detail-${experience.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out border rounded-md bg-rebecca-purple/40 border-russian-violet ${expanded === experience.id ? 'max-h-screen mt-4 p-4' : 'max-h-0 opacity-0'}`}
          >
            <ul className='pl-4 space-y-2 text-gray-300 list-disc text-pretty'>
              {experience.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
            <Badge items={experience.technologies} />
            <div className='flex flex-wrap justify-between gap-4 text-sm'>
              <p className='flex items-center gap-2 text-emerald-200'>
                <SvgIcon
                  name='location'
                  variant='icon'
                />
                <span>{experience.location}</span>
              </p>
              {experience.website && (
                <p className='flex items-center gap-2 text-cyan-200'>
                  <SvgIcon
                    name='website'
                    variant='icon'
                  />
                  <a
                    href={experience.website.link}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    className='hover:underline'
                    aria-label={`Visitar sitio web de ${experience.company}`}
                  >
                    {experience.website.text}
                  </a>
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
