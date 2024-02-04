import { InferInsertModel, relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { products } from '.';

export const types = pgTable('types', {
  id: serial('id').primaryKey(),
  value: varchar('value', { length: 128 }).notNull().unique(),
});

export const insertTypeSchema = createInsertSchema(types);

export type Type = InferInsertModel<typeof types>;

export const typeRelations = relations(types, ({ many }) => ({
  products: many(products),
}));
