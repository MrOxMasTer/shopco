import { db } from '@/db';

export const getUserByEmail = async (email?: string) => {
  if (!email) return null;

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (user) return user;

  return null;
};

export const getUserByPhone = async (phone?: string) => {
  if (!phone) return null;

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.phone, phone),
  });

  if (user) return user;

  return null;
};
