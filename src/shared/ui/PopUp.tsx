import { headers } from 'next/headers';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { Icon } from '.';
import { cn } from '../lib/utils';
import { FocusLock } from './FocusLock';

type PopUpProps = {
  modal?: boolean;
} & ComponentProps<'dialog'>;

export const PopUp = ({ className, children, modal, ...props }: PopUpProps) => {
  const header = headers();
  const nextUrl = header.get('next-url') ?? '/';
  const referer = header.get('referer');
  const pathname = referer ? new URL(referer).pathname : '/';

  const href = referer ?? '/';

  console.log('nextURL:', `'${nextUrl}'`);
  console.log('Pathname: ', `'${pathname}'`);
  console.log('href: ', `'${href}'`);

  // FIXME: Waiting for an Issue solution for Github
  // If not:
  // 1) Restore the client part:
  // 1.1) overflow (document)
  // 1.2) router.back()
  // 1.3) React-lock
  // 1.4) dialog

  // If yes:
  // 1) Solve something with ShowModal
  // 2) Transfer the client part to a separate component (document, ...)

  return (
    <FocusLock>
      <dialog open className={cn('relative overflow-hidden', className)}>
        <Link className="absolute right-4 top-4 z-10" href={nextUrl}>
          <Icon className="size-[30px] stroke-black" name="lucide/x" />
        </Link>
        {children}
      </dialog>
    </FocusLock>
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
