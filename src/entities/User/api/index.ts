import { db } from '@/db';

export const getUserByEmail = async (email?: string) => {
  if (!email) return null;

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (user) return user;

  return null;
};
