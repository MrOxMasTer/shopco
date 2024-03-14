import { FormSignIn } from '@/features/Auth/FormSignin';

export const SignIn = () => {
  return (
    <div className="container relative bg-white pb-6 pt-4">
      <FormSignIn />
      {/* <p className="mt-6 text-center text-sm text-black/60">
        You have not yet registered?{' '}
        <Link className="underline" href="/signup">
          sign Up
        </Link>
      </p> */}
    </div>
  );
};
