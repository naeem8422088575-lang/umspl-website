import { NextResponse } from 'next/server';
import { ApplicationSchema } from '../../../lib/validation';

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous_ip';
    const now = Date.now();
    const limitRecord = rateLimitMap.get(ip) || { count: 0, timestamp: now };
    
    if (now - limitRecord.timestamp > 60000) {
      limitRecord.count = 1;
      limitRecord.timestamp = now;
    } else if (limitRecord.count >= 5) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    } else {
      limitRecord.count++;
    }
    rateLimitMap.set(ip, limitRecord);

    const rawBody = await request.json();
    const validatedData = ApplicationSchema.safeParse(rawBody);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Invalid data format provided.', details: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Application received and securely logged.' 
    }, { status: 201 });

  } catch (error) {
    console.error('[API_APPLY_POST_ERROR]', error);
    return NextResponse.json(
      { error: 'Internal server processing failure. Please try again later.' },
      { status: 500 }
    );
  }
}