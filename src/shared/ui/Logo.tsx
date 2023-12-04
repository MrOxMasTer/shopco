import SvgLogo from '@svg/logo.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LogoProps = ComponentProps<typeof Link>;

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <Link {...props}>
      <SvgLogo />
    </Link>
  );
};
