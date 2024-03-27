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

// FIXME: Fix the reaction when a 1 password is changed by 2
// TODO: Add errors from the server to the site

export const FormSignUp = ({ auth }: TypeFormSignUp) => {
  const [response, formAction] = useFormState(signUpAction, null);
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm<TFormSignUp>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      email: '',
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

    // formSubmit(() => formAction(formData))(e);
  };

  const errorEmail = response?.formErrors?.fieldErrors.email
    ? response.formErrors.fieldErrors.email[0]
    : errors.email?.message;

  const errorPassword = response?.formErrors?.fieldErrors.password
    ? response.formErrors.fieldErrors.password[0]
    : errors.password?.message;

  const errorConfirmPassword = response?.formErrors?.fieldErrors.confirmPassword
    ? response.formErrors.fieldErrors.confirmPassword[0]
    : errors.confirmPassword?.message;

  return (
    <form action={formAction} className="pb-5" onSubmit={handleSubmit}>
      <Field
        iconName="mail"
        readOnly
        className="mt-5"
        aria-invalid={!!errorEmail}
        defaultValue={auth}
        aria-required="true"
        aria-describedby="error_email"
        autoComplete="email"
        type="email"
        placeholder="example@mail.com"
        pattern={emailPattern}
        required
        subTitle="This is your email"
        errorMessage={errorEmail}
        register={{ ...register('email', { required: true }) }}
      />

      <Field
        iconName="lucide/lock"
        type="password"
        aria-invalid={!!errorPassword}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="new-password"
        defaultValue={response?.fields.password}
        required
        className="mt-7"
        subTitle="This is your password"
        errorMessage={errorPassword}
        register={{ ...register('password', { required: true }) }}
      />

      <Field
        iconName="lucide/shield"
        type="password"
        aria-invalid={!!errorConfirmPassword}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="current-password" // of
        defaultValue={response?.fields.confirmPassword}
        // required
        className="mt-7"
        subTitle="Password confirmation"
        errorMessage={errorConfirmPassword}
        register={{ ...register('confirmPassword', { required: true }) }}
      />

      <Submit className="mt-10">send</Submit>
    </form>
  );
};
