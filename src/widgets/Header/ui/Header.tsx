import { Logo } from '@/shared/ui/Logo';

export const Header = () => {
  return (
    <header>
      <div className="container flex justify-between py-5">
        <Logo href={'/'} />
      </div>
    </header>
  );
};
