import { useRef, useState } from 'react'
import Icon from '../ui/Icon'
import { CHARACTER_LIMIT } from '@/constants'

function Form() {
  const [characterCount, setCharacterCount] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const characterCounter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value
    const characters = words.length
    setCharacterCount(characters)

    if (characters > CHARACTER_LIMIT) {
      e.target.value = words.slice(0, CHARACTER_LIMIT)
      setCharacterCount(CHARACTER_LIMIT)
    }
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
      <div className='space-y-2'>
        <label htmlFor='subject'>Asunto</label>
        <input
          type='text'
          id='subject'
          name='subject'
          placeholder='Asunto del mensaje'
          required
        />
      </div>
      <div className='space-y-2 relative'>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          id='message'
          name='message'
          placeholder='¿Tienes un proyecto, idea o trabajo en mente? Cuéntamelo y te responderé lo antes posible.'
          className='min-h-[120px] md:min-h-[160px] pr-10'
          autoCapitalize='sentences'
          onChange={characterCounter}
          required
        />
        <div className='absolute bottom-4 right-4 text-[#b2b2ff] text-xs'>
          {characterCount}/{CHARACTER_LIMIT}
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
        >
          <Icon name='send' />
          <span>Contáctame</span>
        </button>
      </div>
    </form>
  )
}

export default Form
