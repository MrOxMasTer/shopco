import { PopUp } from '@/shared/ui';
import { Auth } from '@/widgets/Auth';

export default function AuthParralelRoute() {
  return (
    <PopUp modal={true} className="w-full rounded-[1.25rem]">
      <Auth />
    </PopUp>
  );
}
