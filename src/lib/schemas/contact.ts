import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'El nombre es obligatorio. Por favor, ingrese su nombre.',
    })
    .max(25, { message: 'El nombre no puede exceder los 50 caracteres.' }),
  email: z.email({
    message:
      'El correo electrónico ingresado no es válido. Asegúrese de utilizar el formato ejemplo@correo.com',
  }),
  subject: z
    .string()
    .min(1, {
      message:
        'El asunto es obligatorio. Por favor, indique el tema de su mensaje.',
    })
    .max(100, { message: 'El asunto no puede exceder los 100 caracteres.' }),
  example: z.string().max(0, { message: 'No complete este campo.' }),
  message: z
    .string()
    .min(1, {
      message: 'El mensaje es obligatorio. Por favor, redacte su mensaje.',
    })
    .max(1000, { message: 'El mensaje no puede exceder los 1000 caracteres.' }),
})
