'use server';

import { signIn } from '@/auth';

export const signInAction = async (prevState: unknown, formData: FormData) => {
  const currentUser = Object.fromEntries(formData);

  console.log('prevState: ', prevState);
  console.log('user: ', currentUser);

  // FIXME: Remove double validation when they correct the customization of errors
  // const valid = insertUserSchema.safeParse(currentUser);

  // if (valid.success) {
  // } else {
  //   return {
  //     message: 'incorrect data',
  //     fields: currentUser,
  //     issuesFields: valid.error.flatten().fieldErrors,
  //   };
  // }

  try {
    await signIn('credentials', {
      ...currentUser,
      redirect: false,
    });
  } catch (error) {
    console.log(error);

    // TODO: Kind user errors
    return {
      message: 'incorrect data',
      fields: currentUser,
    };
  }
};
