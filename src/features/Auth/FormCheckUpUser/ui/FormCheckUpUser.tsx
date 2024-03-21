'use client';

import { cn, emailSchema } from '@/shared/lib/utils';
import { Icon, Submit } from '@/shared/ui';
import { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { ZodIssue } from 'zod';
import { checkUpUserAction } from '../api';

export const FormCheckUpUser = () => {
  const [response, formAction] = useFormState(checkUpUserAction, null);
  const [fieldEmail, setFieldEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState<ZodIssue[] | null>(
    response ?? null,
  );
  const refDirt = useRef(false);

  const validField = (value: string) => {
    if (refDirt.current) {
      const valid = emailSchema.safeParse(value);

      if (!valid.success) {
        setErrorEmail(valid.error.issues);
      } else {
        setErrorEmail(null);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldEmail(e.target.value);
    validField(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    refDirt.current = true;
    validField(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!!errorEmail) {
      const formData = new FormData(e.currentTarget);

      formAction(formData);
    }
  };

  const handleInvalid = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.currentTarget.focus();
  };

  // FIXME: Change fields for proper Autofill backlight
  // FIXME: Add basic validation html
  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <label
        className={cn('field', {
          field_error: !!errorEmail,
        })}>
        <div className="">
          <Icon name="mail" />
          <input
            autoFocus
            name="email"
            aria-invalid={!!errorEmail}
            aria-required="true"
            aria-describedby="error_email"
            value={fieldEmail}
            type="email"
            autoComplete="email"
            placeholder="email"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            onInvalid={handleInvalid}
          />
        </div>
        {/* FIXME: Fix the inscription */}
        <p id="error_email" aria-live="assertive">
          {errorEmail
            ? errorEmail[0].message
            : response
              ? response[0].message
              : null}
        </p>
      </label>
      <Submit className="mt-8">
        {/* <Icon className="text-white" name="lucide/move-right" /> */}
        Send
      </Submit>
    </form>
  );
};
