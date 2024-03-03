import { db, insertUserSchema } from '@/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {} from 'next-auth/src/';

class CustomError extends Error {
  code = 'invalid core';
}

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
        // email: {},
        // password: {},
      },
      async authorize(credentials, req) {
        const parsedCredentials = insertUserSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          return parsedCredentials.data;

          // const user = await getUserByEmail(email);
          // if (!user) return null;

          // const secret = process.env.NEXTAUTH_SECRET;
          // if (!secret) return null;

          // const validHash = await argon2.verify(user.password, password, {
          //   secret: Buffer.from(secret),
          // });
          // if (validHash) return user;

          // return null;
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
