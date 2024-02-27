'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const signInAction = async (formData: FormData) => {
  const currentUser = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  };

  try {
    await signIn('credentials', {
      ...currentUser,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      // TODO: Kind user errors
      return 'incorrect data';
    }
  }
};
