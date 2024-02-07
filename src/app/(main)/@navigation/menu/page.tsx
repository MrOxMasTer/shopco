import { PopUp, cn } from '@/shared/index';
import { Menu } from '@/widgets/Header';

export default function MenuPage() {
  return (
    <PopUp className={cn('absolute left-0 top-0 z-30')}>
      <Menu />
    </PopUp>
  );
}
