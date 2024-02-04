import { Type, db, insertTypeSchema, types } from '@db';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  const body: Type = await req.json();

  const valid = insertTypeSchema.safeParse(body);

  if (!valid.success) {
    return new Response(
      `Data error:\n${valid.error.issues.reduce((acc, e) => {
        const str = `Field: "${e.path[0]}" causes a mistake ${e.code} with a message: ${e.message}\n`;

        return acc + str;
      }, '')}`,
      { status: 422 },
    );
  }

  const regExp = /(?:_| |\b)(?<!-)(\w)(?!ith )/g;

  const changedBody: Type = {
    ...body,
    value: body.value.toLocaleLowerCase().replace(regExp, (str, p1: string) => {
      return p1.toUpperCase();
    }),
  };

  const repFound = await db.query.types.findFirst({
    where: eq(types.value, changedBody.value),
  });

  if (repFound) {
    return new Response('Such a value already exists', { status: 409 });
  }

  try {
    await db.insert(types).values(changedBody);
  } catch (error) {
    return new Response(`${JSON.stringify(error)}`, { status: 422 });
  }

  return new Response('Success', { status: 200 });
}
