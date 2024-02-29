'use client';

import { insertUserSchema } from '@/db';
import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signInAction } from '../api';

const formSignInSchema = insertUserSchema.pick({ email: true, password: true });
type TFormSignIn = z.infer<typeof formSignInSchema>;

export const FormSignIn = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSignIn>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  return (
    <form
      action={signInAction}
      ref={formRef}
      onSubmit={handleSubmit(() => formRef.current?.submit())}>
      <label
        aria-invalid={errors.email ? 'true' : 'false'}
        className={cn('field relative mt-4', {
          'outline outline-redOrange': errors.email,
        })}>
        <div className="">
          <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/scan-face"
          />
          <input
            autoComplete="email"
            placeholder="email"
            type="text"
            {...register('email', { required: true })}
          />
        </div>
        {errors.email?.type === 'required' ?? (
          <p className="absolute bottom-[-16px] left-0 text-xs text-redOrange">
            {errors.email?.message}
          </p>
        )}
      </label>
      <label
        aria-invalid={errors.password ? 'true' : 'false'}
        className={cn('field relative mt-4', {
          'outline outline-redOrange': errors.password,
        })}>
        <div>
          <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/key-round"
          />
          <input
            placeholder="password"
            autoComplete="current-password"
            type="password"
            {...register('password', { required: true })}
          />
        </div>
        {errors.email?.type === 'required' ?? (
          <p className="absolute bottom-[-16px] left-0 text-xs text-redOrange">
            {errors.password?.message}
          </p>
        )}
      </label>
    </form>
  );
};
