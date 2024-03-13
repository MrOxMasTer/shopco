'use client';

import { cn } from '@/shared/lib/utils';
import { Submit } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent, useRef } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { formSignInSchema } from '../../FormSignin';
import { signInAction } from '../../FormSignin/api';

export const FormSignUp = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [response, formAction] = useFormState(signInAction, null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
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
    <form>
      <label
        className={cn('field mt-4', {
          field_error: errors.email,
        })}>
        <div>
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
        className={cn('field mt-4', {
          field_error: errors.email,
        })}>
        <div>
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
      <Submit>send</Submit>
    </form>
  );
};
