'use client';

import { ReactNode, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

type PopUpProps = {
  children?: ReactNode;
  isOpened: string;
  className: string;
};

export const PopUp = ({
  className,
  children,
  isOpened = 'false',
  ...props
}: PopUpProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref?.current;

    if (isOpened === 'true') {
      dialog?.show();
      document.body.style.overflow = 'hidden';
    } else {
      dialog?.close();
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return (
    <FocusLock>
      <dialog className={className} ref={ref} {...props}>
        {children}
      </dialog>
    </FocusLock>
  );
};
