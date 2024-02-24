import { IconName } from '#/name';

const list: {
  name: IconName;
  href: string;
  theme: 'lght' | 'dark';
}[] = [
  {
    name: 'twitter',
    href: '/',
    theme: 'lght',
  },
  {
    name: 'facebook',
    href: '/',
    theme: 'dark',
  },
  {
    name: 'instagram',
    href: '/',
    theme: 'lght',
  },
  {
    name: 'github',
    href: '/',
    theme: 'lght',
  },
];

export const listSocial = list.map((item) => ({
  ...item,
  id: `soc_${item.name}`,
}));
