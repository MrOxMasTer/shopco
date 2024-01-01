import { cn } from '@/shared/lib/utils/cn';
import Image from 'next/image';
import { ComponentProps } from 'react';

export interface StyleBlockProps extends ComponentProps<'div'> {
  name: string;
  alt: string;
  img: string;
}

export const StyleBlock = ({
  name,
  img,
  className,
  alt,
  ...props
}: StyleBlockProps) => {
  return (
    <div className={cn('bg-white', className)} {...props}>
      <Image src={img} alt={alt} />
      <h3 className="">{name}</h3>
    </div>
  );
};
