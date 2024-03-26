'use server';

import { CustomError, signIn } from '@/auth';

export const signInAction = async (prevState: unknown, formData: FormData) => {
  const currentUser = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    await signIn('credentials', {
      ...currentUser,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof CustomError) {
      console.log('AUTHERROR: ', error);
      return {
        message: error.message,
        fields: error.fields,
        fieldErrors: error.validError?.flatten().fieldErrors,
      };
    } else {
      return {
        message: 'Unknown error',
      };
    }
  }
};
