import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

import { auth } from '@/auth';

type AuthLayoutProps = {
  children: ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const authorize = await auth();

  if (authorize) {
    redirect('/profile');
  }

  return <>{children}</>;
}
