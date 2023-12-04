import SvgCart from '@svg/cart.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type CartProps = ComponentProps<typeof Link>;

export const Cart = ({ ...props }: CartProps) => {
  return (
    <Link {...props}>
      <SvgCart />
    </Link>
  );
};
