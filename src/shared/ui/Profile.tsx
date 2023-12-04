import SvgProfile from '@svg/profile.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type ProfileProps = ComponentProps<typeof Link>;

export const Profile = ({ ...props }: ProfileProps) => {
  return (
    <Link {...props}>
      <SvgProfile />
    </Link>
  );
};
