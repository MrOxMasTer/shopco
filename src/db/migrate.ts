import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from '.';

async function main() {
  console.log('Running your migrations...');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('Woohoo! Migrations completed!');
  return;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
