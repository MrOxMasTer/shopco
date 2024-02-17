import SvgLinkCart from '@svg/linkCart.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkCartProps = ComponentProps<typeof Link>;

export const LinkCart = ({ ...props }: LinkCartProps) => {
  return (
    <Link {...props}>
      <SvgLinkCart />
    </Link>
  );
};
