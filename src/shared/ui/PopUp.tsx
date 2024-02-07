'use client';

import { ComponentProps, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

type PopUpProps = {
  modal?: boolean;
} & ComponentProps<'dialog'>;

export const PopUp = ({ className, children, modal, ...props }: PopUpProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref?.current;

    if (modal) {
      dialog?.showModal();
    } else {
      dialog?.show();
    }

    document.body.style.overflow = 'hidden';

    return () => {
      dialog?.close();
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  useEffect(() => {
    console.log('RETURN VALUE:', ref?.current?.returnValue);
  }, [ref?.current?.returnValue]);

  return (
    <FocusLock>
      <dialog className={className} ref={ref} {...props}>
        {children}
      </dialog>
    </FocusLock>
  );
};
