import { listBadge } from '../constants/listBadge';

export const ListBadge = () => {
  return (
    <ul className="mt-4 flex justify-center gap-[10px]">
      {listBadge.map(({ Component, id }) => (
        <li key={id} className="badge">
          <Component />
        </li>
      ))}
    </ul>
  );
};
