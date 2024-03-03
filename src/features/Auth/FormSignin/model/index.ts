// Mandatory type of import
import { insertUserSchema } from '@/db/schema';
import { z } from 'zod';

export const formSignInSchema = insertUserSchema.pick({
  email: true,
  password: true,
});

export type TFormSignIn = z.infer<typeof formSignInSchema>;

// export type TActionResponse = {
//   message?: string;
//   fields?: TFormSignIn;
//   issues?: string[];
// };
