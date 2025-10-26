import emailjs from '@emailjs/browser'
import { useCallback, useEffect, useRef, useState } from 'react'
import Wormhole from '@/assets/video/wormhole.webm'
import { CHARACTER_LIMITS, EMAILJS_DATA } from '@/lib/constants'
import { formSchema } from '@/lib/schemas/contact'
import type { FormField } from '@/types'
import Icon from './Icon'

function Form() {
  const [subjectCharacterCount, setSubjectCharacterCount] = useState(0)
  const [messageCharacterCount, setMessageCharacterCount] = useState(0)
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormField, string>>
  >({})
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showDialog, setShowDialog] = useState({
    title: '',
    message: '',
    type: '',
  })

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showDialog.title !== '') {
      setIsVisible(true)
      timer = setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [showDialog])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (form === null) return

    const data = Object.fromEntries(new FormData(form).entries())
    const result = formSchema.safeParse(data)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormField, string>> = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormField
        if (!fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setIsSending(true)

    emailjs
      .sendForm(`${EMAILJS_DATA.SERVICE}`, `${EMAILJS_DATA.TEMPLATE}`, form, {
        publicKey: `${EMAILJS_DATA.PUBLICKEY}`,
      })
      .then(
        () => {
          setShowDialog({
            title: 'Mensaje enviado',
            message:
              'El mensaje ha sido enviado correctamente. ¡Muchas gracias por contactarme!',
            type: 'success',
          })
          form.reset()
          setSubjectCharacterCount(0)
          setMessageCharacterCount(0)
        },
        (error) => {
          setShowDialog({
            title: 'Mensaje no enviado',
            message: `${error.text}`,
            type: 'error',
          })
        },
      )
      .finally(() => {
        setIsSending(false)
      })
  }

  const onInput = useCallback(
    (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = e.currentTarget
      const id = field.id as keyof FormField

      if (id === 'subject') setSubjectCharacterCount(field.value.length)
      if (id === 'message') setMessageCharacterCount(field.value.length)

      setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev))
    },
    [],
  )

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
            onInput={onInput}
          />
          <p
            id='name-error'
            className='error-field'
          >
            {errors.name}
          </p>
        </div>
        <div>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            name='email'
            autoComplete='off'
            placeholder='tu@correo.com'
            onInput={onInput}
          />
          <p
            id='email-error'
            className='error-field'
          >
            {errors.email}
          </p>
        </div>
      </div>
      <div className='relative'>
        <label htmlFor='subject'>Asunto</label>
        <input
          type='text'
          id='subject'
          name='subject'
          placeholder='Asunto del mensaje'
          className='relative pr-20'
          maxLength={CHARACTER_LIMITS.SUBJECT}
          onInput={onInput}
        />
        <div
          className='counter'
          aria-hidden='true'
        >
          {subjectCharacterCount}/{CHARACTER_LIMITS.SUBJECT}
        </div>
        <p
          id='subject-error'
          className='error-field'
        >
          {errors.subject}
        </p>
      </div>
      <div className='relative'>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          name='message'
          placeholder='¿Tienes un proyecto, idea o trabajo en mente? Cuéntamelo y te responderé lo antes posible.'
          className='pr-20 min-h-64 md:min-h-40 field-sizing-content'
          autoCapitalize='sentences'
          maxLength={CHARACTER_LIMITS.MESSAGE}
          onInput={onInput}
        />
        <div
          className='counter'
          aria-hidden='true'
        >
          {messageCharacterCount}/{CHARACTER_LIMITS.MESSAGE}
        </div>
        <p
          id='message-error'
          className='error-field'
        >
          {errors.message}
        </p>
      </div>
      <input
        type='text'
        name='hunted'
        tabIndex={-1}
        autoComplete='off'
        className='opacity-100 absolute left-0 -z-10'
      />
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
          <Icon name='send' />
          <span>{isSending ? 'Enviando mensaje...' : 'Enviar mensaje'}</span>
        </button>
      </div>
      <video
        muted
        autoPlay
        loop
      >
        <source
          src={Wormhole}
          type='video/webm'
        />
      </video>
      <div
        className={`fixed inset-0 z-50 flex items-center text-center justify-center p-4 ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <div
          className={`relative bg-rich-black/60 backdrop-blur-md border rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 ${showDialog.type === 'success' ? 'border-green-400' : 'border-red-400'}`}
        >
          <h3
            className={`text-xl font-semibold text-white mb-4 pb-2 border-b-2 ${showDialog.type === 'success' ? 'border-green-400' : 'border-red-400'}`}
          >
            {showDialog.title}
          </h3>
          <p className='text-neutral-200 font-medium leading-relaxed text-pretty'>
            {showDialog.message}
          </p>
        </div>
      </div>
    </form>
  )
}

export default Form
