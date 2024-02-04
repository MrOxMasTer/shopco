import { relations } from 'drizzle-orm';
import { pgTable, smallserial, varchar } from 'drizzle-orm/pg-core';
import { productsToColors } from '.';

export const colors = pgTable('colors', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull().unique(),
  value: varchar('value', { length: 128 }).notNull().unique(),
});

export const colorsRelations = relations(colors, ({ many }) => ({
  productsToColors: many(productsToColors),
}));
