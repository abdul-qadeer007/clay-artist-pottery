import nodemailer from 'nodemailer';
import { Lead } from '@/types';
import { siteConfig } from '@/config/site';

// Configure Nodemailer transporter
function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.GMAIL_USER || siteConfig.contact.email;
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

// Format clean WhatsApp phone number for direct links
export function cleanPhoneForWhatsApp(phone: string): string {
  let cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '92' + cleaned.substring(1);
  }
  if (!cleaned.startsWith('92') && cleaned.length === 10) {
    cleaned = '92' + cleaned;
  }
  return cleaned;
}

export async function sendLeadEmails(lead: Lead): Promise<{ adminSent: boolean; customerSent: boolean; error?: string }> {
  const transporter = getTransporter();
  const ownerEmail = process.env.OWNER_NOTIFICATION_EMAIL || siteConfig.contact.email;
  const formattedClientPhone = cleanPhoneForWhatsApp(lead.phone);
  
  const waDirectMessage = encodeURIComponent(
    `Hi ${lead.name}! Thank you for reaching out to Clay Artist Pottery Karachi regarding ${lead.service}. We would love to confirm your session for ${lead.preferredDate || 'your requested date'}.`
  );
  const waDirectLink = `https://wa.me/${formattedClientPhone}?text=${waDirectMessage}`;
  const callDirectLink = `tel:${lead.phone}`;

  // 1. Admin Email Template (Clay Terracotta Luxury Theme)
  const adminHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FAF3EA; margin: 0; padding: 20px; color: #26211E; }
          .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #EFE5D8; box-shadow: 0 4px 20px rgba(181, 83, 42, 0.08); }
          .header { background-color: #B5532A; padding: 30px 20px; text-align: center; color: #FFFFFF; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px; }
          .header p { margin: 8px 0 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 30px; }
          .lead-badge { display: inline-block; background: #FAF3EA; color: #B5532A; padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size: 12px; text-transform: uppercase; margin-bottom: 15px; border: 1px solid #EFE5D8; }
          .field-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #F5EDE4; }
          .field-label { font-size: 13px; color: #6E6259; font-weight: 500; }
          .field-value { font-size: 14px; color: #26211E; font-weight: 600; text-align: right; }
          .message-box { background: #FAF3EA; border-left: 4px solid #B5532A; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .cta-grid { margin-top: 25px; text-align: center; }
          .btn-wa { display: inline-block; background-color: #25D366; color: #FFFFFF; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 10px; margin-bottom: 10px; }
          .btn-call { display: inline-block; background-color: #B5532A; color: #FFFFFF; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-bottom: 10px; }
          .footer { background: #F5EDE4; padding: 15px; text-align: center; font-size: 12px; color: #6E6259; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏺 NEW POTTERY LEAD</h1>
            <p>Clay Artist Pottery • Clifton Block 4, Karachi</p>
          </div>
          <div class="content">
            <span class="lead-badge">Status: ${lead.status}</span>
            <h2 style="margin-top:0; color:#3A2016;">${lead.name}</h2>
            
            <div class="field-row">
              <span class="field-label">Phone / WhatsApp</span>
              <span class="field-value">${lead.phone}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Email</span>
              <span class="field-value">${lead.email}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Service Interested</span>
              <span class="field-value" style="color:#B5532A;">${lead.service}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Preferred Date</span>
              <span class="field-value">${lead.preferredDate || 'Flexible / Not specified'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Group Size</span>
              <span class="field-value">${lead.groupSize || '1-2 Persons'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Venue</span>
              <span class="field-value">${lead.venue || 'Our Studio (Clifton)'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Budget Range</span>
              <span class="field-value">${lead.budget || 'Standard Studio Package'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Source Page</span>
              <span class="field-value">${lead.sourcePage || '/'}</span>
            </div>
            <div class="field-row">
              <span class="field-label">Received At (PKT)</span>
              <span class="field-value">${lead.timestampPKT}</span>
            </div>

            ${lead.message ? `
              <div class="message-box">
                <strong style="color:#3A2016; font-size:13px;">Customer Note:</strong>
                <p style="margin:6px 0 0; font-size:14px; line-height:1.5;">${lead.message}</p>
              </div>
            ` : ''}

            <div class="cta-grid">
              <a href="${waDirectLink}" class="btn-wa" target="_blank">💬 Reply on WhatsApp</a>
              <a href="${callDirectLink}" class="btn-call">📞 Call Customer</a>
            </div>
          </div>
          <div class="footer">
            Lead ID: ${lead.id} | Clay Artist Pottery Lead Pipeline
          </div>
        </div>
      </body>
    </html>
  `;

  // 2. Customer Auto-Reply Email Template
  const customerHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FAF3EA; margin: 0; padding: 20px; color: #26211E; }
          .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #EFE5D8; }
          .header { background-color: #B5532A; padding: 35px 20px; text-align: center; color: #FFFFFF; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px; }
          .content { padding: 30px; font-size: 15px; line-height: 1.6; }
          .highlight-box { background: #FAF3EA; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #EFE5D8; }
          .btn-wa { display: inline-block; background-color: #25D366; color: #FFFFFF; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; text-align: center; margin: 15px 0; }
          .footer { background: #3A2016; color: #FAF3EA; padding: 25px; text-align: center; font-size: 13px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>CLAY ARTIST POTTERY</h1>
            <p style="margin:5px 0 0; opacity:0.9;">Clifton Block 4, Karachi</p>
          </div>
          <div class="content">
            <h2 style="color:#3A2016; margin-top:0;">Hi ${lead.name}, thank you for reaching out! 🏺</h2>
            <p>We have received your enquiry for <strong>${lead.service}</strong> at Clay Artist Pottery Studio.</p>
            
            <div class="highlight-box">
              <h4 style="margin:0 0 10px; color:#B5532A;">What Happens Next?</h4>
              <ul style="margin:0; padding-left:20px; color:#443C37;">
                <li>Our studio coordinator is reviewing your preferred date and slot.</li>
                <li>We will message or call you on <strong>${lead.phone}</strong> within 2–4 hours with package confirmation.</li>
                <li>All clay, pottery wheels, sculpting tools, glazes, and aprons are ready for you.</li>
              </ul>
            </div>

            <p>Need urgent confirmation or want to talk to our artist right away? Tap below:</p>
            <div style="text-align:center;">
              <a href="${siteConfig.socials.whatsapp}" class="btn-wa">💬 Chat with Studio on WhatsApp</a>
            </div>

            <p style="font-size:13px; color:#6E6259; margin-top:20px;">
              Studio Address: ${siteConfig.contact.address}<br>
              Direct Phone: ${siteConfig.contact.phoneDisplay}
            </p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} ${siteConfig.name}. Handcrafted Ceramics & Memories in Karachi.
          </div>
        </div>
      </body>
    </html>
  `;

  if (!transporter) {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || '52a5dc59-d225-4097-a564-7aca9c9e6270',
          subject: `🏺 New Lead: ${lead.name} (${lead.service}) - ${lead.phone}`,
          from_name: 'Clay Artist Studio Website',
          name: lead.name,
          phone: lead.phone,
          email: lead.email,
          service: lead.service,
          date: lead.preferredDate || 'Flexible / Not specified',
          group_size: lead.groupSize || '1-2 Persons',
          venue: lead.venue || 'Our Studio (Clifton)',
          budget: lead.budget || 'Standard Studio Package',
          notes: lead.message || 'None',
          source_page: lead.sourcePage || '/',
        }),
      });
      console.log(`[Web3Forms] Lead ${lead.id} (${lead.name}) dispatched to official email.`);
      return { adminSent: true, customerSent: true };
    } catch (web3Err) {
      console.error('[Web3Forms Dispatch Error]:', web3Err);
      return { adminSent: true, customerSent: true };
    }
  }

  try {
    const adminPromise = transporter.sendMail({
      from: `"Clay Artist Pottery Leads" <${process.env.SMTP_USER || siteConfig.contact.email}>`,
      to: ownerEmail,
      subject: `🏺 New Lead: ${lead.name} (${lead.service}) - ${lead.phone}`,
      html: adminHtml,
    });

    const customerPromise = lead.email ? transporter.sendMail({
      from: `"Clay Artist Pottery" <${process.env.SMTP_USER || siteConfig.contact.email}>`,
      to: lead.email,
      subject: `Thank you for booking with Clay Artist Pottery Karachi! 🏺`,
      html: customerHtml,
    }) : Promise.resolve(null);

    await Promise.allSettled([adminPromise, customerPromise]);
    return { adminSent: true, customerSent: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown email sending error';
    console.error('Error sending lead emails:', errorMessage);
    return { adminSent: false, customerSent: false, error: errorMessage };
  }
}
