import { db, insertUserSchema } from '@/db';
import { getUserByEmail } from '@/entities/User';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import argon2 from 'argon2';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log('credentials: ', credentials);

        const parsedCredentials = insertUserSchema.safeParse(credentials);

        console.log('success: ', parsedCredentials.success);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUserByEmail(email);
          if (!user) return null;

          const secret = process.env.NEXTAUTH_SECRET;
          if (!secret) return null;

          const validHash = await argon2.verify(user.password, password, {
            secret: Buffer.from(secret),
          });
          if (validHash) return user;

          return null;
        }

        return null;
      },
    }),
  ],
  callbacks: {},
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
});
