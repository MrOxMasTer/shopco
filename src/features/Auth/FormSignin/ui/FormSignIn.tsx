'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FormEvent } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';
import { Submit } from '@/shared/ui';

import type { TFormSignIn } from '..';
import { formSignInSchema, signInAction } from '..';

// TODO: Make a more smooth loss of errors
// TODO!: Response Action error processing
export const FormSignIn = () => {
  const [response, formAction] = useFormState(signInAction, null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSignIn>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: '',
      password: '',
      ...response?.fields,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    handleSubmit(() => {
      formAction(formData);
    })(e);
  };

  // FIXME: Fix the fields in the form
  return (
    <form action={formAction} onSubmit={onSubmit}>
      <label
        className={cn('field mt-4', {
          field_error: errors.email,
        })}
      >
        <div>
          {/* <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/scan-face"
          /> */}
          <input
            aria-invalid={!!errors.email}
            aria-required="true"
            aria-describedby="error_email"
            autoComplete="email"
            placeholder="email"
            type="text"
            {...register('email', { required: true })}
          />
        </div>
        <p id="error_email" aria-live="assertive">
          {errors.email ? errors.email?.message : null}
        </p>
      </label>
      <label
        className={cn('field mt-6', {
          field_error: errors.password,
        })}
      >
        <div>
          {/* <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/key-round"
          /> */}
          <input
            aria-invalid={!!errors.password}
            aria-required="true"
            aria-describedby="error_password"
            placeholder="password"
            autoComplete="current-password"
            type="password"
            {...register('password', { required: true })}
          />
        </div>
        <p id="error_password" aria-live="assertive">
          {errors.password ? errors.password?.message : null}
        </p>
      </label>
      <Submit className="mt-6">send</Submit>
    </form>
  );
};
