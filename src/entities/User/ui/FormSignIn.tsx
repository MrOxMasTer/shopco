'use client';

import { signIn } from '@/shared/lib/actions';
import { KeyRound, ScanFace } from 'lucide-react';

export const FormSignIn = () => {
  return (
    <form action={signIn}>
      <label className="field_gr mt-7">
        <div>
          <ScanFace />
          <input
            name="identifier"
            autoComplete="email tel name"
            placeholder="email"
            type="text"
          />
        </div>
      </label>
      <label className="field_gr mt-4">
        <div>
          <KeyRound />
          <input
            name="password"
            placeholder="password"
            autoComplete="current-password"
            type="password"
          />
        </div>
      </label>
      <button className="btn mt-4" type="button">
        send
      </button>
    </form>
  );
};
