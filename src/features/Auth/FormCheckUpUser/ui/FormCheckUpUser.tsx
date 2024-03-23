'use client';

import { emailSchema } from '@/shared/lib/utils';
import { Field, Submit } from '@/shared/ui';
import { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { checkUpUserAction } from '../api';

// TODO: Add auto-filling?

type TypeFormCheckUpUser = {
  auth?: string;
};

export const FormCheckUpUser = ({ auth }: TypeFormCheckUpUser) => {
  const [response, formAction] = useFormState(checkUpUserAction, null);
  const [error, setError] = useState(response?.errors ?? null);
  const refDirty = useRef(false);

  const validField = async (value: string) => {
    if (refDirty.current) {
      const valid = emailSchema.safeParse(value);

      if (!valid.success) {
        setError(valid.error.issues);
      } else {
        setError(null);
      }
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    await validField(e.target.value);
  };

  const handleBlur = async (e: FocusEvent<HTMLInputElement, Element>) => {
    refDirty.current = true;
    await validField(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!!error) {
      const formData = new FormData(e.currentTarget);

      formAction(formData);
    }
  };

  const handleInvalid = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.currentTarget.focus();
  };

  return (
    <form action={formAction} onSubmit={handleSubmit} className="mt-4">
      <Field
        iconName="mail"
        autoFocus
        inputMode="email"
        name="email"
        aria-invalid={!!error}
        aria-required="true"
        aria-describedby="error_email"
        defaultValue={auth ?? response?.field}
        type="email"
        autoComplete="email"
        placeholder="example@mail.com"
        pattern="(?!\.)(?!.*\.\.)[a-zA-Z0-9_\-\+\.]*[a-zA-Z0-9_\-\+]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}"
        required
        onChange={handleChange}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        subTitle="This is your email"
        errorMessage={error ? error[0].message : undefined}
      />
      <Submit className="mt-8">Send</Submit>
    </form>
  );
};
