import 'server-only';

import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
export const db = drizzle(pool, { schema });

await migrate(db, { migrationsFolder: 'drizzle' });

/* async function main() {
  console.log('Running your migrations...');
  console.log('Woohoo! Migrations completed!');
  return;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
}); */
