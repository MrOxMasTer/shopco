import { InferInsertModel, relations } from 'drizzle-orm';
import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { productsToColors, productsToSizes, productsToStyles, types } from '.';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  type: varchar('type', { length: 128 }).references(() => types.value),
  rating: numeric('rating', {
    precision: 2,
    scale: 1,
  }).default('0'),
  price: integer('price').notNull(),
  discount: integer('discount'),
  discointPrice: integer('discountPrice'),
  description: text('description').notNull(),
});

export const insertProductSchema = createInsertSchema(products);
export const selectProductSchema = createSelectSchema(products);

export type Product = InferInsertModel<typeof products>;

export const productsRelations = relations(products, ({ many, one }) => ({
  type: one(types, {
    fields: [products.type],
    references: [types.value],
  }),
  productsToColors: many(productsToColors),
  productsToSizes: many(productsToSizes),
  productsToStyles: many(productsToStyles),
}));
