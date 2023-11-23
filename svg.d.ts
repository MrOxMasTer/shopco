declare module '*.svg?icon' {
  import { FC, SVGProps } from 'react';

  interface SVGRProps {
    title?: string;
    titleId?: string;
  }

  const svg: FC<SVGProps<SVGElement> & SVGRProps>;
  export default svg;
}
