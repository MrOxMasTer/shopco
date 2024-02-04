import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { cn } from '..';

type LinkIconProps = {
  href: string;
  children: React.ReactNode;
  theme: string;
} & ComponentProps<typeof Link>;

export const LinkIcon = ({
  theme,
  children,
  href,
  ...props
}: LinkIconProps) => {
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
