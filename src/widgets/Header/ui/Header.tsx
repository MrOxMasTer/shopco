import { LinkIcon } from '@/shared/ui';

import { Search } from '@/shared/ui/Search';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-5">
          <div className="flex items-center justify-start gap-4">
            <LinkIcon
              iconClassName=""
              className="text-2xl leading-3
              "
              name="menu"
              prefetch={true}
              aria-label="menu button"
              href="/menu"
            />
            <LinkIcon
              iconClassName="w-[7.8125em] h-[1.25em]"
              name="logo"
              aria-label="Link-votip leading to the main page"
              href={'/'}
            />
          </div>
          <div className="flex gap-3 text-2xl leading-3">
            <Search />
            <LinkIcon
              name="cart"
              aria-label="Link to the site of the cart"
              href={'/'}
            />
            <LinkIcon
              name="profile"
              aria-label="Link leading to personal account"
              href={'/auth'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
