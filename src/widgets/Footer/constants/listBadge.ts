import SvgApplePay from '@svg/ApplePay.svg?icon';
import SvgGooglePay from '@svg/GPay.svg?icon';
import SvgMasterCard from '@svg/Mastercard.svg?icon';
import SvgPayPal from '@svg/Paypal.svg?icon';
import SvgVisa from '@svg/Visa.svg?icon';

const list = [
  {
    Component: SvgVisa,
    name: 'Visa',
  },
  {
    Component: SvgMasterCard,
    name: 'MasterCard',
  },
  {
    Component: SvgPayPal,
    name: 'PayPal',
  },
  {
    Component: SvgGooglePay,
    name: 'GooglePay',
  },
  {
    Component: SvgApplePay,
    name: 'ApplePay',
  },
];

export const listBadge = list.map((item) => ({
  ...item,
  id: `list_badge_${item.name}`,
}));
