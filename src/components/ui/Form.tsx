import Wormhole from '@/assets/video/wormhole.webm'
import { CHARACTER_LIMITS, EMAILJS_DATA } from '@/constants'
import { formSchema } from '@/schemas'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import SvgIcon from './SvgIcon'

function Form() {
  const [sujectCharacterCount, setSubjectCharacterCount] = useState(0)
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
      const { message } = result.error.errors[0]
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
          )
          form.reset()
        },
        (error) => {
          toast.error(`Mensaje no enviado: ${error.text}`)
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
      className='relative space-y-4'
    >
      <video
        muted
        autoPlay
        loop
        className='absolute inset-0 object-cover rounded-md pointer-events-none size-full -z-10 opacity-40 bg-rich-black'
      >
        <source
          src={Wormhole}
          type='video/webm'
        />
      </video>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='space-y-2'>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            name='name'
            autoComplete='off'
            placeholder='Tu nombre'
          />
        </div>
        <div className='space-y-2'>
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
      <div className='relative space-y-2'>
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
        <div className='absolute text-xs bottom-5 right-5 text-periwinkle'>
          {sujectCharacterCount}/{CHARACTER_LIMITS.SUBJECT}
        </div>
      </div>
      <div className='relative space-y-2'>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          name='message'
          placeholder='¿Tienes un proyecto, idea o trabajo en mente? Cuéntamelo y te responderé lo antes posible.'
          className='pr-20 min-h-32 max-h-60 md:min-h-40 field-sizing-content'
          autoCapitalize='sentences'
          onChange={(e) =>
            handleCharacterCounter(
              e,
              CHARACTER_LIMITS.MESSAGE,
              setMessageCharacterCount,
            )
          }
        />
        <div className='absolute text-xs bottom-6 right-4 text-periwinkle'>
          {messageCharacterCount}/{CHARACTER_LIMITS.MESSAGE}
        </div>
      </div>
      <div className='max-w-2xl mx-auto space-y-4 text-center'>
        <p className='text-xs font-semibold md:text-sm text-periwinkle text-pretty'>
          Toda la información del formulario se enviará a mi correo personal y
          se utilizará únicamente para responder. Al rellenar el formulario es
          consiente que se manejen sus datos con este fin.
        </p>
        <button
          type='submit'
          className='mx-auto btn'
          disabled={isSending}
        >
          <SvgIcon
            name='send'
            variant='icon'
          />
          <span>{isSending ? 'Enviando mensaje...' : 'Enviar mensaje'}</span>
        </button>
      </div>
    </form>
  )
}

export default Form
