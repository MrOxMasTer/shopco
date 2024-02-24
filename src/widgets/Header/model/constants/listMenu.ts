const list = [
  {
    title: 'Shop',
    href: '/',
  },
  {
    title: 'On Sale',
    href: '/',
  },
  {
    title: 'New Arrivals',
    href: '/',
  },
  {
    title: 'Brands',
    href: '/',
  },
];

export const listMenu = list.map((item, index) => ({
  ...item,
  id: `list_menu_${index}`,
}));
