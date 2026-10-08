import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, page, service, utmSource, utmMedium, utmCampaign, referrer, device, metadata } = body;

    if (!type) {
      return NextResponse.json({ success: false, error: 'Event type is required' }, { status: 400 });
    }

    const event = db.createEvent({
      type,
      page: page || '/',
      service,
      utmSource,
      utmMedium,
      utmCampaign,
      referrer,
      device,
      metadata,
    });

    return NextResponse.json({ success: true, eventId: event.id });
  } catch (err) {
    console.error('Track event error:', err);
    return NextResponse.json({ success: false, error: 'Failed to record event' }, { status: 500 });
  }
}

export async function GET() {
  const events = db.getEvents();
  return NextResponse.json({ success: true, count: events.length, events });
}
