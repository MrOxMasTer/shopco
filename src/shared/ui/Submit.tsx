'use client';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type SubmitProps = {} & ComponentProps<'button'>;

export const Submit = (props: SubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      aria-disabled={pending}
      className="btn mt-8"
      type="submit">
      send
    </button>
  );
};
