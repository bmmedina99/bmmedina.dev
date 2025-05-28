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
          <h3 className='sr-only'>
            {experience.title} &bull; {experience.company}
          </h3>
          <button
            type='button'
            id={`experience-header-${experience.id}`}
            className='w-full p-4 text-left transition-colors border rounded-md border-rebecca-purple bg-russian-violet/60 focus:outline-hidden focus:right-2 focus:ring-indigo-900'
            onClick={() => handleExpand(experience.id)}
            aria-expanded={expanded === experience.id}
            aria-controls={`experience-detail-${experience.id}`}
          >
            <div className='flex items-center justify-between'>
              <div className='[&>time]:text-sm [&>time]:text-gray-300'>
                <p className='text-lg font-semibold tracking-wide'>
                  <span className='text-violet-300'>{experience.title}</span>{' '}
                  &bull; {experience.company}
                </p>
                <time dateTime={experience.dateTimeStart}>
                  {experience.startDate}
                </time>{' '}
                -{' '}
                <time dateTime={experience.dateTimeEnd}>
                  {experience.endDate}
                </time>
              </div>
              <span className='text-violet-300'>
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
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded === experience.id ? 'max-h-screen' : 'max-h-0'}`}
            aria-labelledby={`experience-header-${experience.id}`}
          >
            <div className='pt-4'>
              <div className='p-4 border rounded-md bg-rebecca-purple/40 border-russian-violet'>
                <ul className='pl-4 space-y-2 text-gray-300 list-disc text-pretty'>
                  {experience.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
                <Badge items={experience.technologies} />
                <ul className='flex flex-wrap gap-4'>
                  <li>
                    <p className='flex items-center gap-2 text-emerald-400'>
                      <SvgIcon
                        name='location'
                        variant='icon'
                      />
                      <span>{experience.location}</span>
                    </p>
                  </li>
                  {experience.website && (
                    <li>
                      <p className='flex items-center gap-2 text-sky-400'>
                        <SvgIcon
                          name='website'
                          variant='icon'
                        />
                        <a
                          href={experience.website.link}
                          target='_blank'
                          rel='noopener noreferrer nofollow'
                          className='hover:underline'
                        >
                          {experience.website.text}
                        </a>
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
