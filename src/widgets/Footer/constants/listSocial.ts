import SvgFacebook from '@svg/logo-fb-simple.svg?icon';
import SvgGitHub from '@svg/logo-github.svg?icon';
import SvgInstagram from '@svg/logo-instagram.svg?icon';
import SvgTwitter from '@svg/logo-twitter.svg?icon';

const list = [
  {
    name: 'twitter',
    href: '/',
    Component: SvgTwitter,
    theme: 'lght',
  },
  {
    name: 'facebook',
    href: '/',
    Component: SvgFacebook,
    theme: 'dark',
  },
  {
    name: 'instagram',
    href: '/',
    Component: SvgInstagram,
    theme: 'lght',
  },
  {
    name: 'github',
    href: '/',
    Component: SvgGitHub,
    theme: 'lght',
  },
];

export const listSocial = list.map((item) => ({ ...item, id: 'soc' }));
