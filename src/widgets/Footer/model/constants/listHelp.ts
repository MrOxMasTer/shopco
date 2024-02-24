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

export const listHelp = list.map((item, index) => ({
  ...item,
  id: `foot_list_help_${index}`,
}));

export const help = {
  title: 'Help',
  list: listHelp,
};
