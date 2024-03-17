'use server';

import { getUserByEmail } from '@/entities/User';
import { emailSchema } from '@/shared/lib/utils';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const checkUpUserAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const field = formData.get('email')?.toString();

  const valid = emailSchema.safeParse(field);

  if (valid.success) {
    cookies().set('auth', valid.data, { httpOnly: true });

    const user = await getUserByEmail(valid.data);

    if (user) return redirect('/auth/signin');

    return redirect(`/auth/signup`);
  }

  return valid.error.issues;
};
