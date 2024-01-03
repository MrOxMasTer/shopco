import { cn } from '@/shared/lib/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

export interface StyleBlockProps extends ComponentProps<'div'> {
  name: string;
  img: string;
  href: string;
}

export const StyleBlock = ({
  name,
  img,
  href,
  className,
  ...props
}: StyleBlockProps) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          'relative flex h-[190px] overflow-hidden rounded-[20px] bg-white',
          className,
        )}
        {...props}>
        <Image
          className=" scale-[1.75] object-scale-down object-[right_30px_top_50%]"
          src={img}
          alt={''}
          // width={310}
          // height={190}
          fill
        />
        <h3 className="relative z-10 ml-6 mt-4 text-left text-2xl font-bold">
          {name}
        </h3>
      </div>
    </Link>
  );
};
