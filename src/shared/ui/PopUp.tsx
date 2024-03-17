// 'use client';

import { ComponentProps } from 'react';
// import ReactFocusLock from 'react-focus-lock';
import { headers } from 'next/headers';
import Link from 'next/link';
import { Icon } from '.';
import { cn } from '../lib/utils';

type PopUpProps = {
  modal?: boolean;
} & ComponentProps<'dialog'>;

export const PopUp = ({ className, children, modal, ...props }: PopUpProps) => {
  const pathname = headers().get('x-pathname');

  const isHref = pathname ? pathname : '/';

  // const ref = useRef<HTMLDialogElement>(null);
  // const router = useRouter();

  // if (modal) {
  //   ref.current?.showModal();
  // } else {
  //   ref.current?.show();
  // }

  // useEffect(() => {
  //   const dialog = ref.current;

  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [modal]);

  // function onDismiss() {
  //   router.back();
  // }

  return (
    // <ReactFocusLock>
    <div
      className={cn('relative overflow-hidden', className)}
      // onClose={onDismiss}
      // ref={ref}
    >
      {/* <button
        type="button"
        aria-label="close popUp"
        // onClick={onDismiss}
        className="absolute right-4 top-4 z-10">
        <Icon className="size-[30px] stroke-black" name="lucide/x" />
      </button> */}
      <Link className="absolute right-4 top-4 z-10" href={isHref}>
        <Icon className="size-[30px] stroke-black" name="lucide/x" />
      </Link>
      {children}
    </div>
    // </ReactFocusLock>
  );
};
