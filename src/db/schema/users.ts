import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { char, pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { nanoid } from 'nanoid';

export const rolesEnum = pgEnum('roles', ['ADMIN', 'USER']);

export const users = pgTable('users', {
  id: char('id', { length: 21 })
    .primaryKey()
    .notNull()
    .$default(() => nanoid()),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  password: varchar('password').notNull(),
  role: rolesEnum('role').default('USER'),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export type InsertUser = InferInsertModel<typeof users>;
export type SelectUser = InferSelectModel<typeof users>;
