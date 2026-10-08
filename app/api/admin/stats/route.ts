import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const stats = db.getStats();
    const recentEvents = db.getEvents().slice(0, 50);
    return NextResponse.json({ success: true, stats, recentEvents });
  } catch (err) {
    console.error('Stats fetch error:', err);
    return NextResponse.json({ success: false, error: 'Failed to retrieve stats' }, { status: 500 });
  }
}
