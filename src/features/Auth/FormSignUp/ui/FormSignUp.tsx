'use client';

import { Field, Submit } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { formSignInSchema } from '../../FormSignin';
import { signInAction } from '../../FormSignin/api';

type TypeFormSignUp = {
  auth?: string;
};

export const FormSignUp = ({ auth }: TypeFormSignUp) => {
  const [response, formAction] = useFormState(signInAction, null);
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: auth,
      password: '123',
      ...response?.fields,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  console.log('register: ', { ...register('birthday', { required: true }) });

  // FIXME: problem with form.submit() and parallel routes
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    formSubmit(() => formAction(formData))(e);
  };

  return (
    <form className="pb-5">
      <Field
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
        type="password"
        aria-invalid={!!errors.password}
        aria-required="true"
        aria-describedby="error_password"
        placeholder="password"
        autoComplete="passwo"
        required
        className="mt-7"
        subTitle="This is your password"
        errorMessage={errors.password ? errors.password?.message : undefined}
        register={{ ...register('password', { required: true }) }}
      />

      <Submit className="mt-10">send</Submit>
    </form>
  );
};
