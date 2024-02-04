import SvgProfile from '@svg/profile.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkProfileProps = ComponentProps<typeof Link>;

export const LinkProfile = ({ ...props }: LinkProfileProps) => {
  return (
    <Link {...props}>
      <SvgProfile />
    </Link>
  );
};
