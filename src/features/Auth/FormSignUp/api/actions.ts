'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { getUserByEmail, insertUser } from '@/entities/User';

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
    const user = await getUserByEmail(valid.data.email);

    if (user) {
      // TODO: console.error('The user already exists');

      // TODO: To come up with a user to come up with something
      return {
        message: 'The user already exists',
        fields: valid.data,
      };
    }

    //TODO: Password hashching

    await insertUser(valid.data);
    revalidateTag('users'); // FIXME: Do you need it?

    redirect('/auth/signin');
  }

  return {
    formErrors: valid.error.formErrors,
    fields: credentials,
  };
};
