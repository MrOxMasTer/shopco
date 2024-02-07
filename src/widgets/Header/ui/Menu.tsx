'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ListMenu } from './ListMenu';

export const Menu = ({ ...props }) => {
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen bg-white" {...props}>
      <div className="container">
        <button
          type="button"
          // role="link"
          className="close_button absolute right-[10px] top-[10px]"
          aria-label="close Menu"
          onClick={() => router.back()}>
          <X tabIndex={-1} width={30} height={30} />
        </button>
        <nav>
          <ListMenu />
        </nav>
      </div>
    </div>
  );
};
