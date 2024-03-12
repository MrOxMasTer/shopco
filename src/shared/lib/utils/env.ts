import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DB_HOST: z.string(),
    DB_PORT: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    NEXTAUTH_SECRET: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {
    // public/client env
  },
});
