import { relations } from 'drizzle-orm';
import { pgTable, smallserial, varchar } from 'drizzle-orm/pg-core';
import { productsToStyles } from '.';

export const styles = pgTable('styles', {
  id: smallserial('id').primaryKey(),
  value: varchar('value', { length: 128 }).notNull().unique(),
});

export const stylesRelations = relations(styles, ({ many }) => ({
  productsToStyles: many(productsToStyles),
}));
