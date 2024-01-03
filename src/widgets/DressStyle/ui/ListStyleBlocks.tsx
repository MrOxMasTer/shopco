import { StyleBlock } from '.';
import { listDressStyles } from '../constants/listDressStyles';

export const ListStyleBlocks = () => {
  return (
    <ul className="mt-7 grid gap-4">
      {listDressStyles.map(({ img, name, href = '/' }) => (
        <li key={name}>
          <StyleBlock name={name} img={img} href={href} />
        </li>
      ))}
    </ul>
  );
};
