import { relations } from 'drizzle-orm';
import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { colors, products } from '.';

export const productsToColors = pgTable(
  'productsToColors',
  {
    productId: integer('productId')
      .notNull()
      .references(() => products.id),
    colorId: integer('colorId')
      .notNull()
      .references(() => colors.id),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.productId, t.colorId] }),
    };
  },
);

export const productsToColorsRelations = relations(
  productsToColors,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToColors.productId],
      references: [products.id],
    }),
    color: one(colors, {
      fields: [productsToColors.colorId],
      references: [colors.id],
    }),
  }),
);
