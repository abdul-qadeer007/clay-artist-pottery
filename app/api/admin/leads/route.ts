import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const leads = db.getLeads();
  return NextResponse.json({ success: true, leads });
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, note, followUpDate, lostReason } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    let updatedLead = null;

    if (status) {
      updatedLead = db.updateLead(id, { status, followUpDate, lostReason });
    }

    if (note) {
      updatedLead = db.addLeadNote(id, note);
    }

    if (!updatedLead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (err) {
    console.error('Update lead error:', err);
    return NextResponse.json({ success: false, error: 'Failed to update lead' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    const deleted = db.deleteLead(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead deleted successfully' });
  } catch (err) {
    console.error('Delete lead error:', err);
    return NextResponse.json({ success: false, error: 'Failed to delete lead' }, { status: 500 });
  }
}
