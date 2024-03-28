'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CustomError, signIn } from '@/auth';

export const signInAction = async (prevState: unknown, formData: FormData) => {
  const currentUser = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // TODO: Fix the conclusion of field errors

  try {
    await signIn('credentials', {
      ...currentUser,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof CustomError) {
      return {
        message: error.message,
        fields: error.fields,
        formErrors: error.formErrors,
      };
    } else {
      return {
        message: 'Unknown error',
      };
    }
  }

  cookies().delete('auth');
  redirect('/');
};
