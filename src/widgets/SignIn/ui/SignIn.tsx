import { FormSignIn } from '@/features/Auth/FormSignin';
import Link from 'next/link';

export const SignIn = () => {
  return (
    <div className="container relative bg-white pb-6 pt-4">
      <p className="stn_title">Sign In</p>
      <FormSignIn />
      <p className="mt-6 text-center text-sm text-black/60">
        You have not yet registered?{' '}
        <Link className="underline" href="/signup">
          sign Up
        </Link>
      </p>
      <hr className="mx-32 mt-6 overflow-visible text-center text-black/20 after:relative after:top-[-13px] after:bg-white after:px-1 after:content-['or']" />
    </div>
  );
};
