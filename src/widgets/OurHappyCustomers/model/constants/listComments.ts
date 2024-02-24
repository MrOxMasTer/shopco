import { TComment } from '@/entities/Comment';

export const list = [
  {
    rating: 5,
    content:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    name: 'Sarah M.',
    verified: true,
  },
  {
    rating: 5,
    content:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    name: 'Sarah M.',
    verified: true,
  },
  {
    rating: 5,
    content:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    name: 'Sarah M.',
    verified: true,
  },
];

export const listComments: TComment[] = list.map((item, index) => ({
  ...item,
  id: `ohc_list_decor_comment_${index}`,
}));
