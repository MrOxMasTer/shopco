import { type IconName } from '#/name';
import { type SVGProps } from 'react';
import { cn } from '../lib/utils';

export { IconName };

type IconProps = {
  name: IconName;
  childClassName?: string;
} & SVGProps<SVGSVGElement>;

export const Icon = ({
  name,
  childClassName,
  className,
  children,
  ...props
}: IconProps) => {
  if (children) {
    return (
      <span
        className={cn(`font inline-flex items-center gap-1.5`, childClassName)}>
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg {...props} className={cn('inline size-[1em] align-sub', className)}>
      <use href={`./icons/sprite.svg#${name}`} />
    </svg>
  );
};
