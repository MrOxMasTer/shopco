import type { IconName } from '#/name';

const list: Array<{
  name: IconName;
}> = [
  {
    name: 'Visa',
  },
  {
    name: 'Mastercard',
  },
  {
    name: 'Paypal',
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
