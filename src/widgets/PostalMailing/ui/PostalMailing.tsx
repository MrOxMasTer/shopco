import { Icon } from '@/shared';

export const PostalMailing = () => {
  const mailDelivery = async (formData: FormData) => {
    'use server';

    const email = formData.get('email');

    console.log(email);
  };

  return (
    <section>
      <div className="container py-[1.625rem]">
        <div className="rounded-[20px] bg-black px-6 pb-7 pt-8">
          <h2 className="stn_title text-left text-white">
            Stay Upto Date About Our Latest Offers
          </h2>
          <form action={mailDelivery}>
            <label className="field mt-8 text-sm [&>div]:h-[42px]">
              <div>
                <Icon className="text-xl leading-3" name="mail" />
                <input
                  // name="email"
                  autoComplete="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </label>
            <button
              type="submit"
              className="btn_lght mt-3 h-[42px] border-0 text-sm font-medium">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
