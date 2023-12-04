import SvgMenu from '@svg/menu.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type MenuProps = ComponentProps<typeof Link>;

export const Menu = ({ ...props }: MenuProps) => {
  return (
    <Link {...props}>
      <SvgMenu />
    </Link>
  );
};
