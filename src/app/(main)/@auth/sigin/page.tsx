'use client';
import { FormSignIn } from '@/entities/User';
import { PopUp } from '@/shared';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  return (
    <PopUp
      modal={true}
      // className="!w-full [&:-internal-dialog-in-top-layer]:!max-w-[100%]"
      className="w-fit rounded-[1.25rem]"
      onCancel={() => router.back()}
      onSubmit={() => router.back()}>
      <div className="relative bg-white p-4">
        <button
          className="absolute right-3 top-4"
          onClick={() => router.back()}>
          <X />
        </button>
        <p className="stn_title text-xl">Sign In</p>
        <FormSignIn />
      </div>
    </PopUp>
  );
}
