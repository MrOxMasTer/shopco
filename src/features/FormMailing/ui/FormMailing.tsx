import { Icon } from '@/shared/ui';

const mailDelivery = async (formData: FormData) => {
  'use server';

  const email = formData.get('email');

  console.log(email);
};

export const FormMailing = () => {
  return (
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
  );
};
