import { PopUp } from '@/shared/ui';
import { SignIn } from '@/widgets/SignIn';

export default function SignInPage() {
  return (
    <PopUp modal={true} className="w-full rounded-[1.25rem]">
      <SignIn />
    </PopUp>
  );
}
