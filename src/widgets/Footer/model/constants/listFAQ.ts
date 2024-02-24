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

const listFAQ = list.map((item, index) => ({
  ...item,
  id: `foot_list_faq_${index}`,
}));

export const faq = {
  title: 'FAQ',
  list: listFAQ,
};

const newRegex = /.*:[a-zA-Z0-9а-яА-ЯЁё\s{}]*[\s,]?\n/;
