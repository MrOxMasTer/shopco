import SvgCart from '@svg/cart.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkCartProps = ComponentProps<typeof Link>;

export const LinkCart = ({ ...props }: LinkCartProps) => {
  return (
    <Link {...props}>
      <SvgCart />
    </Link>
  );
};
