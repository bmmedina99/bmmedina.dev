import { EXPERIENCES } from '@/constants'
import { useCallback, useState } from 'react'
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
            className='w-full p-4 text-left transition-colors border rounded-md border-rebecca-purple bg-russian-violet/60 focus:right-2 focus:ring-indigo-900'
            onClick={() => handleExpand(experience.id)}
            aria-expanded={expanded === experience.id}
            aria-controls={`experience-detail-${experience.id}`}
            aria-label={`${expanded === experience.id ? 'Contraer' : 'Expandir'} detalles de ${experience.title} en ${experience.company}`}
          >
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-semibold tracking-wide'>
                  <span className='text-violet-300'>{experience.title}</span>{' '}
                  &bull; {experience.company}
                </h3>
                <time
                  dateTime={experience.dateTimeStart}
                  className='text-sm text-gray-300'
                >
                  {experience.startDate}
                </time>
                {' - '}
                <time
                  dateTime={experience.dateTimeEnd}
                  className='text-sm text-gray-300'
                >
                  {experience.endDate}
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
            aria-label={`Detalles de la experiencia en ${experience.company}`}
          >
            <ul className='pl-4 space-y-2 text-gray-300 list-disc text-pretty'>
              {experience.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
            <Badge items={experience.technologies} />
            <div className='flex flex-wrap justify-between gap-4 text-sm'>
              <div className='flex items-center gap-2 text-emerald-400'>
                <SvgIcon
                  name='location'
                  variant='icon'
                />
                <span>{experience.location}</span>
              </div>

              {experience.website && (
                <div className='flex items-center gap-2 text-sky-400'>
                  <SvgIcon
                    name='website'
                    variant='icon'
                  />
                  <a
                    href={experience.website.link}
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                    className='hover:underline focus:underline focus:outline-none'
                    aria-label={`Visitar sitio web de ${experience.company}`}
                  >
                    {experience.website.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
