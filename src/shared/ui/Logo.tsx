import SvgLogo from '@svg/shopco.svg?icon';
import Link from 'next/link';

interface LogoProps {
  href: string;
}

export const Logo = ({ href, ...props }: LogoProps) => {
  return (
    <Link href={href} {...props}>
      <SvgLogo />
    </Link>
  );
};
