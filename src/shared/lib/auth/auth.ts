import { db, insertUserSchema } from '@/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const parsedCredentials = insertUserSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
        }

        console.log('invalid credentials');
        return null;
      },
    }),
  ],
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
});
