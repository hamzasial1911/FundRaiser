import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { subscribers } from '@/lib/db/schema';
import { nanoid } from 'nanoid';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const subscriber = await db.insert(subscribers).values({
      id: nanoid(),
      email,
    }).returning();

    return NextResponse.json(subscriber[0]);
  } catch (error) {
    console.error('Error creating subscriber:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}