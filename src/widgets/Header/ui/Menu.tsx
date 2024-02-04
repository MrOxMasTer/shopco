'use client';

import { X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { ListMenu } from './ListMenu';

export const Menu = ({ ...props }) => {
  const searchParams = useSearchParams();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateIsOpenedMenu = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('isOpenedMenu', 'false');
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  // useEffect(() => {
  //   const isOpenedMenu = searchParams.get('isOpenedMenu');

  //   if (isOpenedMenu === 'true') {
  //     buttonRef?.current?.blur();
  //   }
  // }, [searchParams]);

  return (
    <div className="relative h-screen w-screen bg-white" {...props}>
      <div className="container">
        <button
          // ref={buttonRef}
          type="button"
          // role="link"
          className="close_button absolute right-[10px] top-[10px]"
          aria-label="close Menu"
          onClick={() => updateIsOpenedMenu()}>
          <X tabIndex={-1} width={30} height={30} />
        </button>
        <nav>
          <ListMenu />
        </nav>
      </div>
    </div>
  );
};
