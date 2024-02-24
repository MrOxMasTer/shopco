export const list = [
  {
    name: 'Casual',
    img: '/casual.png',
    href: '/',
  },
  {
    name: 'Formal',
    img: '/formal.png',
    href: '/',
  },
  {
    name: 'Party',
    img: '/party.png',
    href: '/',
  },
  {
    name: 'Gym',
    img: '/gym2.png',
    href: '/',
  },
];

export const listDressStyles = list.map((item) => ({
  ...item,
  id: item.name,
}));
