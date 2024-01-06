import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { cn } from '..';

type IconProps = {
  href: string;
  children: React.ReactNode;
  theme: string;
} & ComponentProps<typeof Link>;

export const Icon = ({ theme, children, href, ...props }: IconProps) => {
  return (
    <Link
      href={href}
      className={cn('', {
        icon_lght: theme === 'lght',
        icon: theme === 'dark',
      })}
      {...props}>
      {children}
    </Link>
  );
};
