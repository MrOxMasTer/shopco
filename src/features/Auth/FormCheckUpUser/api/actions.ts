'use server';

import { getUserByEmail } from '@/entities/User';
import { emailSchema } from '@/shared/lib/utils';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const checkUpUserAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  console.log('prevState:', prevState);

  const field = formData.get('email')?.toString();
  const valid = emailSchema.safeParse(field);

  if (valid.success) {
    cookies().set('auth', valid.data, { httpOnly: true });

    const user = await getUserByEmail(valid.data);
    if (user) redirect('/auth/signin');

    redirect(`/auth/signup`);
  }

  return {
    errors: valid.error.issues,
    field,
  };
};
