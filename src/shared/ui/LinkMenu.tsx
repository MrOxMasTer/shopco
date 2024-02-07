import SvgMenu from '@svg/menu.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkMenuProps = ComponentProps<typeof Link>;

export const LinkMenu = ({ ...props }: LinkMenuProps) => {
  return (
    <Link {...props}>
      <SvgMenu />
    </Link>
  );
};
