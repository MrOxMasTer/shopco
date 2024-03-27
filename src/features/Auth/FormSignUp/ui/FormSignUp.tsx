'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FormEvent } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import { emailPattern } from '@/shared/lib/utils';
import { Field, Submit } from '@/shared/ui';

import { signUpAction } from '../api/actions';
import { formSignUpSchema, type TFormSignUp } from '../model';

type TypeFormSignUp = {
  auth: string;
};

// TODO: Creating a new Server Action
// TODO: Checking the second password on the client side
// TODO: On the side of the server

export const FormSignUp = ({ auth }: TypeFormSignUp) => {
  const [response, formAction] = useFormState(signUpAction, null);
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm<TFormSignUp>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      email: auth,
      password: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  // FIXME: problem with form.submit() and parallel routes
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    formSubmit(() => formAction(formData))(e);
  };

  return (
    <form action={formAction} className="pb-5" onSubmit={handleSubmit}>
      <Field
        iconName="mail"
        readOnly
        className="mt-5"
        aria-invalid={!!errors.email}
        defaultValue={auth}
        aria-required="true"
        aria-describedby="error_email"
        autoComplete="email"
        type="email"
        placeholder="example@mail.com"
        pattern={emailPattern}
        required
        subTitle="This is your email"
        errorMessage={errors.email ? errors.email?.message : undefined}
        register={{ ...register('email', { required: true }) }}
      />

      <Field
        iconName="lucide/lock"
        type="password"
        aria-invalid={!!errors.password}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="new-password"
        required
        className="mt-7"
        subTitle="This is your password"
        errorMessage={errors.password ? errors.password?.message : undefined}
        register={{ ...register('password', { required: true }) }}
      />

      {/* FIXME: Fix the reaction when a 1 password is changed by 2 */}
      <Field
        iconName="lucide/shield"
        type="password"
        aria-invalid={!!errors.confirmPassword}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="current-password" // of
        // required
        className="mt-7"
        subTitle="Password confirmation"
        errorMessage={
          errors.confirmPassword ? errors.confirmPassword?.message : undefined
        }
        register={{ ...register('confirmPassword', { required: true }) }}
      />

      <Submit className="mt-10">send</Submit>
    </form>
  );
};
