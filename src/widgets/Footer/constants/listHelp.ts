const list = [
  {
    content: 'Custom Support',
    href: '/',
  },
  {
    content: 'Delivery Details',
    href: '/',
  },
  {
    content: 'Terms & Conditions',
    href: '/',
  },
  {
    content: 'Privacy Policy',
    href: '/',
  },
];

export const listHelp = list.map((item) => ({ ...item, id: 'foot_list_help' }));

export const help = {
  title: 'Help',
  list: listHelp,
};
