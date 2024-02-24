import { IconName } from '#/name';

const list: {
  name: IconName;
}[] = [
  {
    name: 'Visa',
  },
  {
    name: 'MasterCard',
  },
  {
    name: 'PayPal',
  },
  {
    name: 'GPay',
  },
  {
    name: 'ApplePay',
  },
];

export const listBadge = list.map((item) => ({
  ...item,
  id: `foot_list_badge_${item.name}`,
}));
