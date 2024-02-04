import { relations } from 'drizzle-orm';
import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { products, styles } from '.';

export const productsToStyles = pgTable(
  'productsToStyles',
  {
    productId: integer('productId')
      .notNull()
      .references(() => products.id),
    styleId: integer('styleId')
      .notNull()
      .references(() => styles.id),
  },
  (t) => {
    return {
      pk: primaryKey({ columns: [t.productId, t.styleId] }),
    };
  },
);

export const productsToStylesRelations = relations(
  productsToStyles,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToStyles.productId],
      references: [products.id],
    }),
    style: one(styles, {
      fields: [productsToStyles.styleId],
      references: [styles.id],
    }),
  }),
);
