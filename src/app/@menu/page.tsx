'use client';

import { PopUp, cn } from '@/shared/index';
import { Menu } from '@/widgets/Header';
import { useSearchParams } from 'next/navigation';

export default function MenuPage() {
  const searchParams = useSearchParams();

  const isOpenedMenu = searchParams.get('isOpenedMenu') || 'false';

  return isOpenedMenu ? (
    <PopUp className={cn('absolute left-0 top-0 z-30')} isOpened={isOpenedMenu}>
      <Menu />
    </PopUp>
  ) : null;
}
