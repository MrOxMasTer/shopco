'use client';

import { signIn } from '@/shared/lib/actions';

export const FormSignIn = () => {
  return (
    <form action={signIn}>
      <label>
        <input
          name="identifier"
          autoComplete="email tel name"
          placeholder="Enter email or phone number or unique nickname"
          type="text"
        />
      </label>
      <label>
        <input
          name="password"
          placeholder="password"
          autoComplete="current-password"
          type="password"
        />
      </label>
    </form>
  );
};
