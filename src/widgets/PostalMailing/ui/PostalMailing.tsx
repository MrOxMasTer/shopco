import { FormMailing } from '@/features/FormMailing';

export const PostalMailing = () => {
  return (
    <section>
      <div className="container py-[1.625rem]">
        <div className="rounded-[20px] bg-black px-6 pb-7 pt-8">
          <h2 className="stn_title text-left text-white">
            Stay Upto Date About Our Latest Offers
          </h2>
          <FormMailing />
        </div>
      </div>
    </section>
  );
};
