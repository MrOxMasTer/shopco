const list = [
  {
    content: 'Free eBook',
    href: '/',
  },
  {
    content: 'Development Tutorial',
    href: '/',
  },
  {
    content: 'How to - Blog',
    href: '/',
  },
  {
    content: 'Youtube Playlist',
    href: '/',
  },
];

const listResources = list.map((item, index) => ({
  ...item,
  id: `foot_list_resources_${index}`,
}));

export const resources = {
  title: 'Resources',
  list: listResources,
};
