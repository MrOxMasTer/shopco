import Link from 'next/link';
import { ComponentProps } from 'react';
import { Icon, cn } from '..';

type LinkIconProps = {
  theme?: 'lght' | 'dark';
  iconClassName?: string;
} & ComponentProps<typeof Link> &
  ComponentProps<typeof Icon>;

export const LinkIcon = ({
  className,
  iconClassName,
  childClassName,
  icon,
  name,
  theme,
  children,
  href,
  ...props
}: LinkIconProps) => {
  return (
    <Link
      href={href}
      className={cn('', className, {
        // icon_base: !theme,
        icon_lght: theme === 'lght',
        icon_dark: theme === 'dark',
      })}
      {...props}>
      <Icon
        className={iconClassName}
        childClassName={childClassName}
        icon={icon}
        name={name}>
        {children}
      </Icon>
    </Link>
  );
};
