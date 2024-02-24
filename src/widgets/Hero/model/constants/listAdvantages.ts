export const list = [
  {
    title: '200+',
    subtitle: 'International Brands',
  },
  {
    title: '2,000+',
    subtitle: 'High-Quality Products',
  },
  {
    title: '30,000+',
    subtitle: 'Happy Customers',
  },
];

export const listAdvantages = list.map((item, index) => ({
  ...item,
  id: `hero_list_advantages_${index}`,
}));
