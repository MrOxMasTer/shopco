'use server';

import { getUserByEmail } from '@/entities/User';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const checkUpUserAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const field = formData.get('email')?.toString();

  const validEmail = z.string().email().safeParse(field);

  if (validEmail.success) {
    console.log(validEmail.data);

    const user = await getUserByEmail(validEmail.data);

    if (user) return redirect('/auth/signin');
  }

  return redirect(`/auth/signup`);
};
