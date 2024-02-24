import { Icon } from '@/shared/ui';
import { listBadge } from '../model/constants/listBadge';

export const ListBadge = () => {
  return (
    <ul className="mt-4 flex justify-center gap-[10px]">
      {listBadge.map(({ name, id }) => (
        <li key={id} className="badge">
          <Icon className="max-h-[14px] w-auto max-w-[30px]" name={name} />
        </li>
      ))}
    </ul>
  );
};
