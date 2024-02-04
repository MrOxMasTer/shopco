import Link from 'next/link';
import { listMenu } from '../constants';

export const ListMenu = () => {
  return (
    <ul className="grid gap-3 pt-12 text-2xl font-bold">
      {listMenu.map(({ href, id, title }) => (
        <li key={id}>
          <Link className="block" href={href} aria-label={title}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
