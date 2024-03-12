'use client';

import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent, useRef } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { signInAction } from '../api';
import { TFormSignIn, formSignInSchema } from '../model';
import { Submit } from './Submit';

// TODO: Make a more smooth loss of errors
// TODO!: Response Action error processing
export const FormSignIn = () => {
  const formRef = useRef<HTMLFormElement>(null);
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

  // FIXME: problem with form.submit() and parallel routes
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    handleSubmit(() => formAction(formData))(e);
  };

  return (
    <form ref={formRef} action={formAction} onSubmit={onSubmit}>
      <label
        className={cn('field mt-4', {
          field_error: errors.email,
        })}>
        <div>
          <Icon
            className={cn('fill-white stroke-current text-2xl leading-3')}
            name="lucide/scan-face"
          />
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
        })}>
        <div>
          <Icon
            className="fill-white stroke-current text-2xl leading-3"
            name="lucide/key-round"
          />
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
      <Submit />
    </form>
  );
};
