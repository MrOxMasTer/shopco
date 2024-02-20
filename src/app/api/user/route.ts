import { db } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = await req.formData();

  const email = data.get('email')?.toString();
  const password = data.get('password')?.toString();

  if (!email || !password) {
    return new NextResponse('Incorrect data', { status: 400 });
  }

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (!user) {
    return new NextResponse('Such a user does not exist', { status: 404 });
  }

  return NextResponse.json(user);
}
