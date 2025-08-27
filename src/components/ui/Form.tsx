import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import Wormhole from '@/assets/video/wormhole.webm'
import { CHARACTER_LIMITS, EMAILJS_DATA } from '@/lib/constants'
import { formSchema } from '@/lib/schemas/contact'
import Icon from './Icon'

function Form() {
  const [subjectCharacterCount, setSubjectCharacterCount] = useState(0)
  const [messageCharacterCount, setMessageCharacterCount] = useState(0)
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (form === null) return

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const result = formSchema.safeParse(data)
    if (!result.success) {
      const issue = result.error.issues[0]
      const message = issue ? issue.message : 'Error en el formulario.'
      toast.warning(message)
      return
    }

    setIsSending(true)

    emailjs
      .sendForm(`${EMAILJS_DATA.SERVICE}`, `${EMAILJS_DATA.TEMPLATE}`, form, {
        publicKey: `${EMAILJS_DATA.PUBLICKEY}`,
      })
      .then(
        () => {
          toast.success(
            'El mensaje ha sido enviado correctamente. ¡Muchas gracias por contactarme!',
            { duration: 2000 },
          )
          form.reset()
          setSubjectCharacterCount(0)
          setMessageCharacterCount(0)
        },
        (error) => {
          toast.error(`Mensaje no enviado: ${error.text}`, { duration: 2000 })
        },
      )
      .finally(() => {
        setIsSending(false)
      })
  }

  const handleCharacterCounter = <
    T extends HTMLInputElement | HTMLTextAreaElement,
  >(
    e: React.ChangeEvent<T>,
    charaterLimit: number,
    setCharacterCount: (count: number) => void,
  ) => {
    const words = e.target.value
    const characters = words.length

    if (characters > charaterLimit)
      e.target.value = words.slice(0, charaterLimit)

    setCharacterCount(characters > charaterLimit ? charaterLimit : characters)
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='relative p-6 space-y-6 card'
    >
      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            name='name'
            autoComplete='off'
            placeholder='Tu nombre'
          />
        </div>
        <div>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            name='email'
            autoComplete='off'
            placeholder='tu@correo.com'
          />
        </div>
      </div>
      <div className='relative'>
        <label htmlFor='subject'>Asunto</label>
        <input
          type='text'
          id='subject'
          name='subject'
          placeholder='Asunto del mensaje'
          className='pr-20'
          onChange={(e) =>
            handleCharacterCounter(
              e,
              CHARACTER_LIMITS.SUBJECT,
              setSubjectCharacterCount,
            )
          }
        />
        <div
          className='counter'
          aria-hidden='true'
        >
          {subjectCharacterCount}/{CHARACTER_LIMITS.SUBJECT}
        </div>
      </div>
      <div className='relative'>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          name='message'
          placeholder='¿Tienes un proyecto, idea o trabajo en mente? Cuéntamelo y te responderé lo antes posible.'
          className='pr-20 min-h-64 md:min-h-40 field-sizing-content'
          autoCapitalize='sentences'
          onChange={(e) =>
            handleCharacterCounter(
              e,
              CHARACTER_LIMITS.MESSAGE,
              setMessageCharacterCount,
            )
          }
        />
        <div
          className='counter'
          aria-hidden='true'
        >
          {messageCharacterCount}/{CHARACTER_LIMITS.MESSAGE}
        </div>
      </div>
      <div className='space-y-4 text-center'>
        <p className='text-xs font-medium text-indigo-200 md:text-sm text-pretty'>
          Toda la información del formulario se enviará a mi correo personal y
          se usará solo para responder. Al darle a enviar mensaje consiente que
          se manejen sus datos con este fin.
        </p>
        <button
          type='submit'
          className='mx-auto btn'
          disabled={isSending}
        >
          <Icon
            name='send'
            variant='icon'
          />
          <span>{isSending ? 'Enviando mensaje...' : 'Enviar mensaje'}</span>
        </button>
      </div>
      <video
        muted
        autoPlay
        loop
        className='video'
      >
        <source
          src={Wormhole}
          type='video/webm'
        />
      </video>
    </form>
  )
}

export default Form
