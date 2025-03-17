import { CHARACTER_LIMITS, EMAILJS_DATA } from '@/constants'
import emailjs from '@emailjs/browser'
import type React from 'react'
import { useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'
import Icon from '../ui/Icon'

function Form() {
  const [sujectCharacterCount, setSubjectCharacterCount] = useState(0)
  const [messageCharacterCount, setMessageCharacterCount] = useState(0)
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (form === null) return

    setIsSending(true)

    emailjs
      .sendForm(`${EMAILJS_DATA.SERVICE}`, `${EMAILJS_DATA.TEMPLATE}`, form, {
        publicKey: `${EMAILJS_DATA.PUBLICKEY}`,
      })
      .then(
        () => {
          toast.success('Mensaje enviado correctamente')
          form.reset()
        },
        (error) => {
          toast.error(`Error al enviar el mensaje: ${error.text}`)
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
      className='space-y-4'
    >
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='space-y-2'>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Tu nombre'
            required
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='tu@correo.com'
            required
          />
        </div>
      </div>
      <div className='space-y-2 relative'>
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
          required
        />
        <div className='absolute bottom-4 right-4 text-[#b2b2ff] text-xs'>
          {sujectCharacterCount}/{CHARACTER_LIMITS.SUBJECT}
        </div>
      </div>
      <div className='space-y-2 relative'>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          name='message'
          placeholder='¿Tienes un proyecto, idea o trabajo en mente? Cuéntamelo y te responderé lo antes posible.'
          className='min-h-[120px] md:min-h-[160px] pr-20'
          autoCapitalize='sentences'
          onChange={(e) =>
            handleCharacterCounter(
              e,
              CHARACTER_LIMITS.MESSAGE,
              setMessageCharacterCount,
            )
          }
          required
        />
        <div className='absolute bottom-4 right-4 text-[#b2b2ff] text-xs'>
          {messageCharacterCount}/{CHARACTER_LIMITS.MESSAGE}
        </div>
      </div>
      <div className='max-w-2xl mx-auto space-y-4 text-center'>
        <p className='text-xs md:text-sm text-[#b2b2ff] text-pretty font-semibold'>
          Toda la información del formulario se enviará a mi correo personal y
          se utilizará únicamente para responder. Al rellenar el formulario es
          consiente que se manejen sus datos con este fin.
        </p>
        <button
          type='submit'
          className='btn mx-auto'
          disabled={isSending}
        >
          <Icon name='send' />
          <span>{isSending ? 'Enviando mensaje...' : 'Contáctame'}</span>
        </button>
      </div>
    </form>
  )
}

export default Form
