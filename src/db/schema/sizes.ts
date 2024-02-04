import { InferInsertModel, relations } from 'drizzle-orm';
import { pgTable, smallserial, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { productsToSizes } from '.';

export const sizes = pgTable('sizes', {
  id: smallserial('id').primaryKey(),
  value: varchar('value', { length: 128 }).notNull().unique(),
});

export const insertSizeSchema = createInsertSchema(sizes);
export const selectSizeSchema = createSelectSchema(sizes);

export type Sizes = InferInsertModel<typeof sizes>;

export const sizesRelations = relations(sizes, ({ many }) => ({
  productsToSizes: many(productsToSizes),
}));
