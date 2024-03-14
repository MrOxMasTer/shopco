import { PopUp } from '@/shared/ui';
import { SignUp } from '@/widgets/SignUp';

export default function signInPage() {
  return (
    <PopUp modal={true}>
      <SignUp />
    </PopUp>
  );
}
