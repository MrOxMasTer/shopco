'use server';

import { signIn } from '@/auth';
import { insertUserSchema } from '@/db';
import { AuthError } from 'next-auth';

export const signInAction = async (prevState: unknown, formData: FormData) => {
  const currentUser = Object.fromEntries(formData);

  console.log('prevState: ', prevState);
  console.log('user: ', currentUser);

  const valid = insertUserSchema.safeParse(currentUser);

  if (valid.success) {
    try {
      await signIn('credentials', {
        ...valid.data,
        redirect: false,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        console.log(error);

        // TODO: Kind user errors
        return {
          message: error.message,
          fields: valid.data,
        };
      }
    }
  } else if (valid.error) {
    return {
      message: 'incorrect data',
      fields: currentUser,
      issuesFields: valid.error.flatten().fieldErrors,
    };
  }

  return {
    message: 'incorrect data',
    fields: currentUser,
  };
};
