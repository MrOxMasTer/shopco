'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FormEvent } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';

import { emailPattern } from '@/shared/lib/utils';
import { Field, Submit } from '@/shared/ui';

import type { TFormSignIn } from '..';
import { formSignInSchema, signInAction } from '..';

type FormSignInProps = {
  auth: string;
};

// TODO: Make a more smooth loss of errors
// TODO!: Response Action error processing
export const FormSignIn = ({ auth }: FormSignInProps) => {
  const [response, formAction] = useFormState(signInAction, null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSignIn>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: auth,
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

  const errorEmail = response?.formErrors?.fieldErrors.email
    ? response.formErrors.fieldErrors.email[0]
    : errors.email?.message;

  const errorPassword = response?.formErrors?.fieldErrors.password
    ? response.formErrors.fieldErrors.password[0]
    : errors.password?.message;

  return (
    <form action={formAction} onSubmit={onSubmit}>
      <Field
        readOnly
        iconName="lucide/scan-face"
        className="mt-4"
        defaultValue={auth}
        aria-invalid={!!errorEmail}
        aria-required="true"
        aria-describedby="error_email"
        autoComplete="email"
        placeholder="example@mail.com"
        pattern={emailPattern}
        type="email"
        register={{ ...register('email', { required: true }) }}
        errorMessage={errorEmail}
      />

      <Field
        iconName="lucide/key-round"
        className="mt-4"
        aria-invalid={!!errorPassword}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="current-password"
        type="password"
        register={{ ...register('password', { required: true }) }}
        errorMessage={errorPassword}
      />

      <Submit className="mt-10">send</Submit>
    </form>
  );
};
