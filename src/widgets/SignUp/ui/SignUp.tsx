import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getUserByEmail } from '@/entities/User';
import { FormSignUp } from '@/features/Auth/FormSignUp';

export const SignUp = async () => {
  const auth = cookies().get('auth')?.value;

  if (!auth) redirect('/auth');

  const user = await getUserByEmail(auth);
  if (user) redirect('/auth/signin');

  return (
    <section>
      <div className="container">
        <h1 className="stn_title">Sign Up</h1>
        <FormSignUp auth={auth} />
      </div>
    </section>
  );
};
