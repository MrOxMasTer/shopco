import { DrizzleAdapter } from '@auth/drizzle-adapter';
import * as argon2 from 'argon2';
import NextAuth, { AuthError } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { typeToFlattenedError } from 'zod';

import { db } from '@/db';

import type { InsertUser } from './db/schema';
import { insertUserSchema } from './db/schema';
import { getUserByEmail } from './entities/User';
import { env } from './shared/lib/utils';

type Fields = { [k in string]: unknown };

class CustomResponse {
  fields?: Fields;
  formErrors?: typeToFlattenedError<InsertUser, string>;
}

// FIXME: Fix on Credentialssignin
export class CustomError extends AuthError {
  fields?: Fields;
  formErrors?: typeToFlattenedError<InsertUser, string>;

  constructor(
    message?: string,
    errorOptions?: Error | CustomResponse,
    custom?: CustomResponse | Fields,
  ) {
    if (errorOptions) {
      if (errorOptions instanceof Error) {
        super(message, errorOptions);

        if (custom) {
          if (custom instanceof CustomResponse) {
            this.fields = custom.fields;
            this.formErrors = custom.formErrors;
          } else {
            this.fields = custom;
          }
        }
      } else {
        super(message);

        this.fields = errorOptions.fields;
        this.formErrors = errorOptions.formErrors;
      }
    } else {
      super(message);
    }

    if (message) {
      this.message = message;
    }
  }
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
      async authorize(credentials) {
        const valid = insertUserSchema.safeParse(credentials);

        if (valid.success) {
          const { email, password } = valid.data;

          const user = await getUserByEmail(email);
          if (!user)
            throw new CustomError('The user does not exist', {
              fields: valid.data,
            });

          const secret = env.NEXTAUTH_SECRET;

          const validHash = await argon2.verify(user.password, password, {
            secret: Buffer.from(secret),
          });
          if (validHash) return user;
        }

        // @ts-ignore
        console.log('valid Error:', valid.error);
        throw new CustomError('Incorrect data', {
          // @ts-ignore
          formErrors: valid.error.formErrors,
          fields: credentials,
        });

        // throw new CustomError('Incorrect data', {
        //   fields: credentials,
        // });
      },
    }),
  ],
  callbacks: {},
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
});
