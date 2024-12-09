import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { donations } from '@/lib/db/schema';
import { nanoid } from 'nanoid';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, donorName, donorEmail, message, causeId } = body;

    const donation = await db.insert(donations).values({
      id: nanoid(),
      amount,
      donorName,
      donorEmail,
      message,
      causeId,
    }).returning();

    return NextResponse.json(donation[0]);
  } catch (error) {
    console.error('Error creating donation:', error);
    return NextResponse.json(
      { error: 'Failed to create donation' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allDonations = await db.select().from(donations);
    return NextResponse.json(allDonations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donations' },
      { status: 500 }
    );
  }
}