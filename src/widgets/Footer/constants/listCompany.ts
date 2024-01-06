const list = [
  {
    content: 'About',
    href: '/',
  },
  {
    content: 'Features',
    href: '/',
  },
  {
    content: 'Works',
    href: '/',
  },
  {
    content: 'Career',
    href: '/',
  },
];

const listCompany = list.map((item) => ({
  ...item,
  id: 'foot_list_company',
}));

export const company = {
  title: 'Company',
  list: listCompany,
};
