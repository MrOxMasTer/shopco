import { cn } from '@/shared/lib/utils';
import { PopUp } from '@/shared/ui';
import { Menu } from '@/widgets/Header';

export default function MenuPage() {
  return (
    // FIXME: make a separate page for navigation to work when you turn off JS
    <PopUp className={cn('absolute left-0 top-0 z-30')}>
      <Menu />
    </PopUp>
  );
}
