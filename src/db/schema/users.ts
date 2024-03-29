import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { char, pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { nanoid } from 'nanoid';

export const rolesEnum = pgEnum('roles', ['ADMIN', 'USER']);

export const users = pgTable('users', {
  email: varchar('email', { length: 256 }).unique().notNull(),
  password: varchar('password').notNull(),
  id: char('id', { length: 21 })
    .primaryKey()
    .notNull()
    .$default(() => nanoid()),
  firstName: varchar('firstName', { length: 256 }),
  lastName: varchar('lastName', { length: 256 }),
  emailVerified: timestamp('emailVerified', {
    mode: 'date',
    withTimezone: true,
  }),
  phone: varchar('phone', { length: 128 }).unique(),
  role: rolesEnum('role').default('USER'),
  createAt: timestamp('createAt', {
    mode: 'date',
    withTimezone: true,
  }).defaultNow(),
  birthday: timestamp('birthday'),
});

export const insertUserSchema = createInsertSchema(users, {
  email: (schema) =>
    schema.email.email({
      message: 'Invalid email address',
    }),
  password: (schema) =>
    schema.password
      .min(8, {
        message: 'Must be 8 or more characters long',
      })
      .max(50, {
        message: 'Must be 50 or fewer characters long',
      })
      .regex(/^.*(?=.*[#@!$%^&*()]).*$/, {
        message: 'There must be at least 1 special character',
      })
      .regex(/^.*(?=.*[a-zа-яё]).*$/, {
        message: 'There must be at least one lowercase letter',
      })
      .regex(/^.*(?=.*[A-ZА-ЯЁ]).*$/, {
        message: 'There must be at least one uppercase letter',
      })
      .regex(/^.*(?=.*[0-9]).*$/, {
        message: 'There must be at least one digit',
      }),
});
export const selectUserSchema = createSelectSchema(users);

export type InsertUser = InferInsertModel<typeof users>;
export type SelectUser = InferSelectModel<typeof users>;
