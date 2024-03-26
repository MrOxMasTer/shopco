import { cookies } from 'next/headers';

import { FormCheckUpUser } from '@/features/Auth/FormCheckUpUser/ui/FormCheckUpUser';

export const Auth = () => {
  const auth = cookies().get('auth')?.value;

  return (
    <section>
      <div className="container pb-5 pt-3">
        <h1 className="stn_title">Auth</h1>
        <FormCheckUpUser auth={auth} />
        <hr className="mx-32 mt-6 block overflow-visible text-center text-black/20 after:relative after:top-[-13px] after:bg-white after:px-1 after:content-['or']" />
      </div>
    </section>
  );
};
