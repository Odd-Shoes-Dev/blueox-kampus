import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    if (!name || !email) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    // NOTE: placeholder - in production, hook this to an email provider or DB
    console.log('Application submitted:', { name, email, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
