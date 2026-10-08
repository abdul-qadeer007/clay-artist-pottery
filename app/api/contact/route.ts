import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { appendLeadToGoogleSheet } from '@/lib/sheets';
import { sendLeadEmails } from '@/lib/email';

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  email: z.string().email('Valid email address is required'),
  service: z.string().default('daily-workshops'),
  preferredDate: z.string().optional(),
  groupSize: z.string().optional(),
  venue: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
  hearAboutUs: z.string().optional(),
  sourcePage: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  referrer: z.string().optional(),
  device: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.parse(body);

    // Save lead to persistent database
    const newLead = db.createLead({
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      service: validatedData.service,
      preferredDate: validatedData.preferredDate,
      groupSize: validatedData.groupSize,
      venue: validatedData.venue || 'Our Studio (Clifton)',
      budget: validatedData.budget,
      message: validatedData.message,
      hearAboutUs: validatedData.hearAboutUs,
      sourcePage: validatedData.sourcePage || '/',
      utmSource: validatedData.utmSource,
      utmMedium: validatedData.utmMedium,
      utmCampaign: validatedData.utmCampaign,
      referrer: validatedData.referrer,
      device: validatedData.device,
      status: 'New',
    });

    // Also record lead generation event in event tracker
    db.createEvent({
      type: 'generate_lead',
      page: validatedData.sourcePage || '/',
      service: validatedData.service,
      utmSource: validatedData.utmSource,
      utmMedium: validatedData.utmMedium,
      utmCampaign: validatedData.utmCampaign,
      referrer: validatedData.referrer,
      device: validatedData.device,
    });

    // Append to Google Sheets (async mirror)
    appendLeadToGoogleSheet(newLead).catch(err => {
      console.error('Background Google Sheets sync error:', err);
    });

    // Send branded emails (Admin notification + Customer auto-reply)
    sendLeadEmails(newLead).catch(err => {
      console.error('Background email dispatch error:', err);
    });

    // Generate WhatsApp direct chat link for the lead
    const waPhone = validatedData.phone.replace(/[^0-9]/g, '');
    const waOwnerReplyLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(
      `Hi ${validatedData.name}! Thank you for your inquiry at Clay Artist Pottery Karachi regarding ${validatedData.service}.`
    )}`;

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      timestamp: newLead.timestampPKT,
      message: 'Booking enquiry received successfully.',
      whatsappReplyLink: waOwnerReplyLink,
    });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || 'Validation error' },
        { status: 400 }
      );
    }
    console.error('Lead submission server error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing booking.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const leads = db.getLeads();
  return NextResponse.json({ success: true, count: leads.length, leads });
}
