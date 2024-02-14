import Link from 'next/link';
import { ComponentProps } from 'react';
import { Icon } from '.';

type LinkCartProps = ComponentProps<typeof Link>;

export const LinkCart = ({ ...props }: LinkCartProps) => {
  return (
    <Link className="text-2xl" {...props}>
      <Icon name="cart" />
    </Link>
  );
};
