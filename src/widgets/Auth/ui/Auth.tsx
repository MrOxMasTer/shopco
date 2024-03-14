import { FormCheckUpUser } from '@/features/Auth/FormCheckUpUser/ui/FormCheckUpUser';

export const Auth = () => {
  return (
    <section>
      <div className="container pb-5 pt-3">
        <p className="stn_title">Auth</p>
        <FormCheckUpUser />
        <hr className="mx-32 mt-6 block overflow-visible text-center text-black/20 after:relative after:top-[-13px] after:bg-white after:px-1 after:content-['or']" />
      </div>
    </section>
  );
};
