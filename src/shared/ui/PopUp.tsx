// 'use client';

import { ComponentProps } from 'react';
// import ReactFocusLock from 'react-focus-lock';
import { headers } from 'next/headers';
import Link from 'next/link';
import { URL } from 'url';
import { Icon } from '.';
import { cn } from '../lib/utils';

type PopUpProps = {
  modal?: boolean;
} & ComponentProps<'dialog'>;

export const PopUp = ({ className, children, modal, ...props }: PopUpProps) => {
  const header = headers();
  const nextUrl = header.get('next-url') ?? '/';
  const referer = header.get('referer');
  const pathname = referer ? new URL(referer).pathname : '/';

  const href = referer ?? '/';

  console.log('nextURL:', nextUrl);
  console.log('Pathname: ', pathname);
  console.log('href: ', href);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Link
        passHref
        shallow
        as={pathname}
        className="absolute right-4 top-4 z-10"
        href={nextUrl}>
        <Icon className="size-[30px] stroke-black" name="lucide/x" />
      </Link>
      {children}
    </div>
  );
};

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

/* <button
        type="button"
        aria-label="close popUp"
        // onClick={onDismiss}
        className="absolute right-4 top-4 z-10">
        <Icon className="size-[30px] stroke-black" name="lucide/x" />
      </button> */

// onClose={onDismiss}
// ref={ref}
