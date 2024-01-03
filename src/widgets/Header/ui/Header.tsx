import { Cart } from '@/shared/ui/Cart';
import { Logo } from '@/shared/ui/Logo';
import { Menu } from '@/shared/ui/Menu';
import { Profile } from '@/shared/ui/Profile';
import { Search } from '@/shared/ui/Search';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-5">
          <div className="flex items-center justify-start gap-4">
            <Menu aria-label="menu button" href={'/'} />
            <Logo aria-label="Link-votip leading to the main page" href={'/'} />
          </div>
          <div className="flex gap-3">
            <Search />
            <Cart aria-label="Link to the site of the cart" href={'/'} />
            <Profile aria-label="Link leading to personal account" href={'/'} />
          </div>
        </div>
      </div>
    </header>
  );
};
