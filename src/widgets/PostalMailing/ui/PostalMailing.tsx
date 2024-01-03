import SvgMail from '@svg/mail.svg?icon';

export const PostalMailing = () => {
  return (
    <section>
      <div className="container py-[1.625rem]">
        <div className="rounded-[20px] bg-black px-6 pb-7 pt-8">
          <h2 className="stn_title text-left text-white">
            Stay Upto Date About Our Latest Offers
          </h2>
          <form>
            <div className="mt-8 flex h-[42px] items-center gap-[14px] rounded-[62px] bg-white px-4 text-sm">
              <SvgMail className="flex-shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full outline-none"
              />
            </div>
            <button className="btn_lght mt-3 h-[42px] border-0 text-sm font-medium">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
