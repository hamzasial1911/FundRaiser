import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { causes } from '@/lib/db/schema';
import { nanoid } from 'nanoid';

export async function GET() {
  try {
    const allCauses = await db.select().from(causes);
    return NextResponse.json(allCauses);
  } catch (error) {
    console.error('Error fetching causes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch causes' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, goal, image } = body;

    const cause = await db.insert(causes).values({
      id: nanoid(),
      title,
      description,
      goal,
      raised: 0,
      image,
    }).returning();

    return NextResponse.json(cause[0]);
  } catch (error) {
    console.error('Error creating cause:', error);
    return NextResponse.json(
      { error: 'Failed to create cause' },
      { status: 500 }
    );
  }
}