'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import { Field, Submit } from '@/shared/ui';

import { formSignUpSchema, type TFormSignUp } from '../model';

type TypeFormSignUp = {
  auth: string;
};

// TODO: Creating a new Server Action
// TODO: Creation of the functionality of checking the second password on the side of the client and server

export const FormSignUp = ({ auth }: TypeFormSignUp) => {
  // const [response, formAction] = useFormState(null, null);
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

    // formSubmit(() => formAction(formData))(e);
  };

  return (
    <form className="pb-5" onSubmit={handleSubmit}>
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
        pattern="(?!\.)(?!.*\.\.)[a-zA-Z0-9_\-\+\.]*[a-zA-Z0-9_\-\+]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}"
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

      <Field
        iconName="lucide/shield"
        type="password"
        aria-invalid={!!errors.confirmPassword}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="current-password" // of
        required
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
