'use client';

import { Icon, Submit } from '@/shared/ui';
import { HTMLInputTypeAttribute, useRef, useState } from 'react';

export const FormCheckUpUser = () => {
  const formRef = useRef(null);
  const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>('text');

  return (
    <form ref={formRef}>
      <label className="field">
        <input type={typeInput} autoComplete="" />
      </label>
      <Submit>
        <Icon name="lucide/move-right" />
      </Submit>
    </form>
  );
};
