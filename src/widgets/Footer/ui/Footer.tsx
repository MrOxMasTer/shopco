import { Logo } from '@/shared';
import { company } from '../constants/listCompany';
import { faq } from '../constants/listFAQ';
import { help } from '../constants/listHelp';
import { resources } from '../constants/listResources';
import { ListBadge } from './ListBadge';
import { ListLayoutMenu } from './ListLayoutMenu';
import { ListSocial } from './ListSocial';

export const Footer = () => {
  return (
    <footer>
      <div className="container pb-[4.8125rem]">
        <Logo href="/" width={144} height={23} />
        <p className="mt-[0.875rem] text-sm text-black/60">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <ListSocial />
        <div className="mb-10 mt-6 grid grid-cols-2 gap-y-6">
          <ListLayoutMenu title={company.title} list={company.list} />
          <ListLayoutMenu title={help.title} list={help.list} />
          <ListLayoutMenu title={faq.title} list={faq.list} />
          <ListLayoutMenu title={resources.title} list={resources.list} />
        </div>
        <div className="border-t border-solid border-black/10">
          <p className="pt-4 text-center text-sm leading-[1.125rem] text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ListBadge />
        </div>
      </div>
    </footer>
  );
};
