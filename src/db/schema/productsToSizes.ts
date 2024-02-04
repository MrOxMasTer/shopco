import { relations } from 'drizzle-orm';
import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { products, sizes } from '.';

export const productsToSizes = pgTable(
  'productsToSizes',
  {
    productId: integer('productId')
      .notNull()
      .references(() => products.id),
    sizeId: integer('sizeId')
      .notNull()
      .references(() => sizes.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.sizeId] }),
  }),
);

export const productsToSizesRelations = relations(
  productsToSizes,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToSizes.productId],
      references: [products.id],
    }),
    size: one(sizes, {
      fields: [productsToSizes.sizeId],
      references: [sizes.id],
    }),
  }),
);
