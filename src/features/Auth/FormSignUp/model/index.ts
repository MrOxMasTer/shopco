import { z } from 'zod';

import { insertUserSchema } from '@/db/schema';

export const formSignUpSchema = insertUserSchema
  .pick({
    email: true,
    password: true,
  })
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords don't match",
    path: ['confirmPassword'],
  });

export type TFormSignUp = z.infer<typeof formSignUpSchema>;
