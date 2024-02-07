import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema',
  out: 'drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DB_HOST ?? 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME ?? process.exit(1),
    port: Number(process.env.DB_PORT)
  },
});
