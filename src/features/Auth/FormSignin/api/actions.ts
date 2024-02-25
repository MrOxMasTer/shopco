'use server';

import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

export const signInAction = async (formData: FormData) => {
  console.log('email: ', formData.get('email'));

  const currentUser = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  };

  const response = await signIn('credentials', {
    ...currentUser,
    redirect: false,
  });

  if (response?.ok) {
    redirect('/');
  } else {
    console.log(response?.error);
  }
};
