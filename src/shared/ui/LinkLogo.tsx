'use client';
import SvgLogo from '@svg/logo.svg?icon';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { cn } from '..';

type LinkLogoProps = ComponentProps<typeof Link> & {
  width?: string | number;
  height?: string | number;
};

export const LinkLogo = ({
  width,
  height,
  className,
  ...props
}: LinkLogoProps) => {
  return (
    <Link className={cn('block w-fit', className)} {...props}>
      <SvgLogo {...(width && { width })} {...(height && { height })} />
    </Link>
  );
};
