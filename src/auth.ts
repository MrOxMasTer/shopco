import { db } from '@/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import * as argon2 from 'argon2';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from './entities/User';
import { TFormSignIn } from './features/Auth/FormSignin';

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
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as TFormSignIn;

        // FIXME: Solve something with validation
        // if (email && password) {
        const user = await getUserByEmail(email);
        if (!user) return null;

        const secret = process.env.NEXTAUTH_SECRET;
        if (!secret) return null;

        const validHash = await argon2.verify(user.password, password, {
          secret: Buffer.from(secret),
        });
        if (validHash) return user;
        // }

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
