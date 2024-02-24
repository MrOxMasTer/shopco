import { StyleBlock } from '.';
import { listDressStyles } from '../model';

export const ListStyleBlocks = () => {
  return (
    <ul className="mt-7 grid gap-4">
      {listDressStyles.map(({ id, img, name, href = '/' }) => (
        <li key={id}>
          <StyleBlock name={name} img={img} href={href} />
        </li>
      ))}
    </ul>
  );
};
