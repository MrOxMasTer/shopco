'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { getUserByEmail, insertUser } from '@/entities/User';

import { formSignUpSchema } from '../model';

export const signUpAction = async (prevState: unknown, formData: FormData) => {
  const payload = {
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const valid = formSignUpSchema.safeParse(payload);

  if (valid.success) {
    const user = await getUserByEmail(valid.data.email);

    if (user) {
      // TODO: console.error('The user already exists');

      return {
        message: 'The user already exists',
        fields: valid.data,
      };
    }

    await insertUser(valid.data);
    revalidateTag('users'); // FIXME: Do you need it?

    redirect('/auth/signin');
  }

  return {
    formErrors: valid.error.formErrors,
    fields: payload,
  };
};
