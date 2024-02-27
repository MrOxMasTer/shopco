'use client';

import { insertUserSchema } from '@/db';
import { Icon } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signInAction } from '../api';

const formSignInSchema = insertUserSchema.pick({ email: true, password: true });
type TFormSignIn = z.infer<typeof formSignInSchema>;

export const FormSignIn = () => {
  const { register } = useForm<TFormSignIn>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form action={signInAction}>
      <label className="field mt-7">
        <div className="">
          <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/scan-face"
          />
          <input
            autoComplete="email"
            placeholder="email"
            type="text"
            {...register('email')}
          />
        </div>
      </label>
      <label className="field mt-4">
        <div>
          <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/key-round"
          />
          <input
            placeholder="password"
            autoComplete="current-password"
            type="password"
            {...register('password')}
          />
        </div>
      </label>
      <button className="btn mt-4" type="submit">
        send
      </button>
    </form>
  );
};
