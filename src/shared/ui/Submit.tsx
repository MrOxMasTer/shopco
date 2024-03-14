'use client';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from '../lib/utils';

type SubmitProps = {} & ComponentProps<'button'>;

export const Submit = ({ children, className, ...props }: SubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      aria-disabled={pending}
      className={cn('btn', className)}
      type="submit">
      {children}
    </button>
  );
};
