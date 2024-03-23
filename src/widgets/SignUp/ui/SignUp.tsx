import { FormSignUp } from '@/features/Auth/FormSignUp';
import { cookies } from 'next/headers';

export const SignUp = () => {
  const auth = cookies().get('auth')?.value;

  return (
    <section>
      <div className="container">
        <h1 className="stn_title">Sign Up</h1>
        <FormSignUp auth={auth} />
      </div>
    </section>
  );
};
