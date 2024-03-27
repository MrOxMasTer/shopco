import { db } from '@/db';
import { users, type InsertUser } from '@/db/schema';

export const getUserByEmail = async (email?: string) => {
  if (!email) return null;

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (user) return user;

  return null;
};

export const insertUser = async (user: InsertUser) => {
  return db.insert(users).values(user).returning();
};
