import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string(),
  dni: z.string().refine((dni) => /^[0-9]{8}[A-Za-z]$/.test(dni), {
    message: 'El DNI debe tener 8 dígitos seguidos de una letra.',
  }),
  email: z.string().email({ message: 'Este email no es válido.' }),
  specialization: z.string(),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' }),
    confirmPassword: z.string().min(8, {message: 'La contraseña no coincide.'})
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword']
});
