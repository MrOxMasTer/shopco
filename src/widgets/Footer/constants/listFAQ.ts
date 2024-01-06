const list = [
  {
    content: 'Account',
    href: '/',
  },
  {
    content: 'Manage Deliveries',
    href: '/',
  },
  {
    content: 'Orders',
    href: '/',
  },
  {
    content: 'Payment',
    href: '/',
  },
];

const listFAQ = list.map((item) => ({ ...item, id: 'foot_list_faq' }));

export const faq = {
  title: 'FAQ',
  list: listFAQ,
};

const newRegex = /.*:[a-zA-Z0-9а-яА-ЯЁё\s{}]*[\s,]?\n/;
