import { string, z } from 'zod';

export const LoginSchema = z.object({
  EmployeeId: z
    .string()
    .min(1, 'El número de identificación es requerido')
    .refine((val) => !isNaN(Number(val)), {
      message:
        'El número de identificación no debe incluir caracteres especiales.',
    }),
  Password: string({ required_error: 'La contraseña es requerida' })
    .min(1, 'La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(32, 'La contraseña no puede tener más de 32 caracteres'),
});

export const RegisterSchema = z.object({
  id: z
    .string()
    .min(1, 'El número de identificación es requerido')
    .refine((val) => !isNaN(Number(val)), {
      message:
        'El número de identificación no debe incluir caracteres especiales.',
    }),
  Name: z.string().min(1, 'El nombre es requerido'),
  Surname1: z.string().min(1, 'El primer apellido es requerido'),
  Surname2: z.string().min(1, 'El segundo apellido es requerido'),
  Birthdate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'La fecha de nacimiento no es válida.',
  }),
  HiringDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'La fecha de contratación no es válida.',
  }),
  Email: z.string().email('El correo electrónico no es válido'),
  CellPhone: z.string().min(1, 'El número de teléfono es requerido'),
  NumberChlidren: z
    .string()
    .min(1, 'El número de hijos es requerido')
    .refine((val) => !isNaN(Number(val)), {
      message: 'El número de hijos debe ser un número.',
    }),
  AvailableVacationDays: z
    .string()
    .min(1, 'Los días de vacaciones disponibles son requeridos')
    .refine((val) => !isNaN(Number(val)), {
      message: 'Los días de vacaciones disponibles deben ser un número.',
    }),
  MaritalStatusId: z.string().refine((val) => !isNaN(Number(val)), {
    message: 'El estado civil debe ser un número.',
  }),
  GenderId: z.string().refine((val) => !isNaN(Number(val)), {
    message: 'El género debe ser un número.',
  }),
});

export const EmailSendSchema = z.object({
  Email: string({ required_error: 'El correo electrónico es requerido' })
    .email('El correo electrónico no es válido')
    .max(255, 'El correo electrónico no puede tener más de 255 caracteres')
    .min(1, 'El correo electrónico es requerido'),
});

export const ChangePasswordSchema = z
  .object({
    OldPassword: z
      .string({ required_error: 'La contraseña actual es requerida' })
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(32, 'La contraseña no puede tener más de 32 caracteres'),
    Password: z
      .string({ required_error: 'La nueva contraseña es requerida' })
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(32, 'La contraseña no puede tener más de 32 caracteres')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'La nueva contraseña debe contener al menos un carácter especial',
      )
      .regex(/[0-9]/, 'La nueva contraseña debe contener al menos un número')
      .regex(
        /[A-Z]/,
        'La nueva contraseña debe contener al menos una mayúscula',
      )
      .regex(
        /[a-z]/,
        'La nueva contraseña debe contener al menos una minúscula',
      ),
    ConfirmPassword: z
      .string({
        required_error: 'La confirmación de la nueva contraseña es requerida',
      })
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(32, 'La contraseña no puede tener más de 32 caracteres'),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['ConfirmPassword'],
  });

export const ResetPasswordSchema = z
  .object({
    Password: z
      .string({ required_error: 'La contraseña es requerida' })
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(32, 'La contraseña no puede tener más de 32 caracteres')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'La contraseña debe contener al menos un carácter especial',
      )
      .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
      .regex(/[A-Z]/, 'La contraseña debe contener al menos una mayúscula')
      .regex(/[a-z]/, 'La contraseña debe contener al menos una minúscula'),
    ConfirmPassword: z
      .string({
        required_error: 'La confirmación de la contraseña es requerida',
      })
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(32, 'La contraseña no puede tener más de 32 caracteres'),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['ConfirmPassword'],
  });

export const UpdateEmployeeSchema = z.object({
  Name: z.string().min(1, 'El nombre es requerido').optional(),
  Surname1: z.string().min(1, 'El primer apellido es requerido').optional(),
  Surname2: z.string().min(1, 'El segundo apellido es requerido').optional(),
  Birthdate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'La fecha de nacimiento no es válida.',
    })
    .optional(),
  Email: z.string().email('El correo electrónico no es válido').optional(),
  CellPhone: z.string().min(1, 'El número de teléfono es requerido').optional(),
});
