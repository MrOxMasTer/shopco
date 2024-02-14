import { PopUp, SignIn } from '@/shared';

export default function SignInPage() {
  return (
    <PopUp modal={true} className="w-full rounded-[1.25rem]">
      <SignIn />
    </PopUp>
  );
}
