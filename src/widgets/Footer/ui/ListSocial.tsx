import { Icon } from '@/shared';

import { listSocial } from '../constants/listSocial';

export const ListSocial = () => {
  return (
    <ul className="mt-5 flex gap-3">
      {listSocial.map(({ id, Component, href, name, theme }, index) => (
        <li key={id + index}>
          <Icon theme={theme} href={href} aria-label={name}>
            <Component />
          </Icon>
        </li>
      ))}
    </ul>
  );
};
