'use server';

import { getUserByEmail } from '@/entities/User';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const checkUpUserAction = async (formData: FormData) => {
  const field = formData.get('auth')?.toString();

  const validEmail = z.string().email().safeParse(field);

  if (validEmail.success) {
    const user = await getUserByEmail(field);

    if (user) return redirect('/signin');
  }

  return redirect('/signup');
};
