import { Icon, LinkLogo, LinkMenu } from '@/shared/ui';

import { Search } from '@/shared/ui/Search';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-5">
          <div className="flex items-center justify-start gap-4">
            <LinkMenu prefetch={true} aria-label="menu button" href="/menu" />
            <LinkLogo
              aria-label="Link-votip leading to the main page"
              href={'/'}
            />
          </div>
          <div className="flex gap-3">
            <Search />
            <Link
              className="text-2xl leading-[1px]"
              aria-label="Link to the site of the cart"
              href={'/'}>
              <Icon name="cart" />
            </Link>
            <Link
              aria-label="Link leading to personal account"
              href={'/signin'}>
              <Icon name="profile" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
