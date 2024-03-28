import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getUserByEmail } from '@/entities/User';
import { FormSignIn } from '@/features/Auth/FormSignin';

export const SignIn = async () => {
  const auth = cookies().get('auth')?.value;

  if (!auth) {
    redirect('/auth');
  }

  const user = await getUserByEmail(auth);
  if (!user) {
    redirect('/auth/signup');
  }

  return (
    <section>
      <div className="container relative bg-white pb-6 pt-4">
        <h1 className="stn_title">Sign in</h1>
        <FormSignIn auth={auth} />
      </div>
    </section>
  );
};
