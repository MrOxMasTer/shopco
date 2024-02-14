import { LinkCart, LinkLogo, LinkMenu, LinkProfile } from '@/shared/ui';

import { Search } from '@/shared/ui/Search';

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
            <LinkCart aria-label="Link to the site of the cart" href={'/'} />
            <LinkProfile
              aria-label="Link leading to personal account"
              href={'/signin'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
