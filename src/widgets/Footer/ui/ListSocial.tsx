import { LinkIcon } from '@/shared/ui';
import { listSocial } from '../model';

export const ListSocial = () => {
  return (
    <ul className="mt-5 flex gap-3 text-sm leading-3">
      {listSocial.map(({ id, href, name, theme }, index) => (
        <li key={id}>
          <LinkIcon
            className="size-[28px]"
            name={name}
            theme={theme}
            href={href}
            aria-label={name}
          />
        </li>
      ))}
    </ul>
  );
};
