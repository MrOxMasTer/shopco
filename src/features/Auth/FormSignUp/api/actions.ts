'use server';

import * as argon2 from 'argon2';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { insertUser } from '@/entities/User';
import { env } from '@/shared/lib/utils';

import { formSignUpSchema } from '../model';

export const signUpAction = async (prevState: unknown, formData: FormData) => {
  const credentials = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    confirmPassword: formData.get('confirmPassword')?.toString(),
  };

  console.error('Server Action: ', credentials);

  const valid = formSignUpSchema.safeParse(credentials);

  if (valid.success) {
    // FIXME: Check if the user has changed the cookie independently
    // const user = await getUserByEmail(valid.data.email);
    // if (user) redirect('/auth/signin');

    const secret = env.NEXTAUTH_SECRET;
    const hashedPassword = await argon2.hash(valid.data.password, {
      secret: Buffer.from(secret),
    });

    const insertedUser = {
      email: valid.data.email,
      password: hashedPassword,
    };

    await insertUser(insertedUser);
    revalidateTag('users'); // FIXME: Do you need it?

    redirect('/auth/signin');
  }

  return {
    formErrors: valid.error.formErrors,
    fields: credentials,
  };
};
