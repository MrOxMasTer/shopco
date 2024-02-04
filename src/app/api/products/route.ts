import { Product, db, insertProductSchema, products } from '@db';

export async function POST(req: Request) {
  const body: Product = await req.json();

  const valid = insertProductSchema.safeParse(body);

  if (!valid.success) {
    return new Response(
      `Data error:\n${valid.error.issues.reduce((acc, e) => {
        const str = `Field: "${e.path[0]}" causes a mistake ${e.code} with a message: ${e.message}\n`;

        return acc + str;
      }, '')}`,
      {
        status: 422,
      },
    );
  }

  await db.insert(products).values(body);

  return new Response('Success', { status: 200 });
}
