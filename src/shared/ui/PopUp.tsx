'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ComponentProps, useEffect, useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { cn } from '..';

type PopUpProps = {
  modal?: boolean;
} & ComponentProps<'dialog'>;

export const PopUp = ({ className, children, modal, ...props }: PopUpProps) => {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = ref.current;

    if (modal) {
      dialog?.showModal();
    } else {
      dialog?.show();
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  function onDismiss() {
    router.back();
  }

  return (
    <ReactFocusLock>
      <dialog
        className={cn('relative', className)}
        onClose={onDismiss}
        ref={ref}
        {...props}>
        <button
          type="button"
          aria-label="close popUp"
          onClick={onDismiss}
          className="absolute right-4 top-4 z-10">
          <X width={30} height={30} />
        </button>
        {children}
      </dialog>
    </ReactFocusLock>
  );
};
