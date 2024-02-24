'use client';

import { Icon } from '@/shared/ui';
import { signIn } from '../api';

export const FormSignIn = () => {
  return (
    <form action={signIn}>
      <label className="field mt-7">
        <div className="">
          <Icon
            className="stroke-current fill-white text-2xl leading-3"
            name="lucide/scan-face"
          />
          <input
            name="identifier"
            autoComplete="email tel name"
            placeholder="email"
            type="text"
          />
        </div>
      </label>
      <label className="field mt-4">
        <div>
          <Icon
            className="stroke-current fill-white text-2xl leading-3"
            name="lucide/key-round"
          />
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
