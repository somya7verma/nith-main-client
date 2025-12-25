import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // very basic server-side validation
    if (!body?.fullName || !body?.email) {
      return NextResponse.json(
        { error: 'fullName and email required' },
        { status: 400 }
      );
    }

    // TODO: persist to DB or send email. For now, just echo back.
    return NextResponse.json(
      { message: `Received registration for ${body.fullName}` },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
