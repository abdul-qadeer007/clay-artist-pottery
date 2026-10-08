/**
 * ============================================================================
 * CLAY ARTIST POTTERY STUDIO — LEAD AUTOMATION PIPELINE
 * Google Apps Script Web App Backend (Production Ready)
 * 
 * Features:
 * 1. Sheet Auto-Setup (Leads sheet + Status dropdowns + Live Pipeline Dashboard)
 * 2. Concurrency-safe Lead Appending (LockService)
 * 3. Terracotta-Themed HTML Email Alerts to Studio Admin (clayartistpottery@gmail.com)
 * 4. Branded Customer Thank-You / Confirmation Auto-Reply
 * 5. WhatsApp Click Logger & Analytics Tracking
 * 6. Spam Protection & Standardized CORS JSON Responses
 * ============================================================================
 */

// CONFIGURATION CONSTANTS
var CONFIG = {
  ADMIN_EMAIL: 'clayartistpottery@gmail.com',
  STUDIO_NAME: 'Clay Artist Pottery Studio',
  STUDIO_PHONE: '+92 315 2984450',
  STUDIO_PHONE_RAW: '923152984450',
  STUDIO_ADDRESS: 'Clifton Block 4, Near Dolmen Mall, Karachi, Pakistan',
  MAPS_URL: 'https://maps.google.com/?q=Clifton+Block+4+Karachi',
  TIMEZONE: 'Asia/Karachi',
  LEADS_SHEET_NAME: 'Leads',
  DASHBOARD_SHEET_NAME: 'Pipeline Dashboard',
  WA_LOGS_SHEET_NAME: 'WhatsApp Logs'
};

/**
 * Auto-initialize and style the Google Spreadsheet.
 * Run this function once from the Apps Script editor toolbar: setupSheet()
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. SETUP LEADS SHEET
  var leadsSheet = ss.getSheetByName(CONFIG.LEADS_SHEET_NAME);
  if (!leadsSheet) {
    leadsSheet = ss.insertSheet(CONFIG.LEADS_SHEET_NAME, 0);
  }
  
  var headers = [
    'Lead ID',
    'Timestamp (PKT)',
    'Full Name',
    'Phone / WhatsApp',
    'Email',
    'Service Requested',
    'Event Date',
    'Group Size',
    'Venue / Location',
    'Budget Range',
    'Special Requests',
    'Status',
    'Follow-up Notes',
    'Source Page',
    'Device / Referrer'
  ];
  
  // Format Header Row
  var headerRange = leadsSheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  headerRange.setBackground('#B5532A'); // Terracotta Clay
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setFontFamily('Arial');
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  leadsSheet.setRowHeight(1, 40);
  leadsSheet.setFrozenRows(1);
  
  // Setup Status Data Validation Dropdown (Column L)
  var statuses = [
    'New Lead',
    'WhatsApp Contacted',
    'Call Scheduled',
    'Deposit Paid',
    'Confirmed',
    'Completed',
    'Cancelled / Lost'
  ];
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(statuses, true)
    .setAllowInvalid(false)
    .build();
  
  var statusRange = leadsSheet.getRange('L2:L1000');
  statusRange.setDataValidation(statusRule);
  
  // Conditional Formatting for Statuses
  leadsSheet.clearConditionalFormatRules();
  var rules = [];
  
  var statusColors = {
    'New Lead': { bg: '#FFF3E0', text: '#E65100' },          // Soft Orange
    'WhatsApp Contacted': { bg: '#E3F2FD', text: '#0D47A1' },// Soft Blue
    'Call Scheduled': { bg: '#F3E5F5', text: '#4A148C' },    // Soft Purple
    'Deposit Paid': { bg: '#E8F5E9', text: '#1B5E20' },      // Soft Green
    'Confirmed': { bg: '#C8E6C9', text: '#1B5E20' },         // Rich Mint
    'Completed': { bg: '#E0F2F1', text: '#004D40' },         // Teal
    'Cancelled / Lost': { bg: '#FFEBEE', text: '#B71C1C' }    // Soft Red
  };
  
  for (var statusName in statusColors) {
    var col = statusColors[statusName];
    var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(statusName)
      .setBackground(col.bg)
      .setFontColor(col.text)
      .setRanges([statusRange])
      .build();
    rules.push(rule);
  }
  leadsSheet.setConditionalFormatRules(rules);
  
  // Set Column Widths for Readability
  leadsSheet.setColumnWidth(1, 100); // Lead ID
  leadsSheet.setColumnWidth(2, 150); // Timestamp
  leadsSheet.setColumnWidth(3, 160); // Full Name
  leadsSheet.setColumnWidth(4, 150); // Phone
  leadsSheet.setColumnWidth(5, 200); // Email
  leadsSheet.setColumnWidth(6, 170); // Service
  leadsSheet.setColumnWidth(7, 120); // Date
  leadsSheet.setColumnWidth(8, 120); // Group Size
  leadsSheet.setColumnWidth(9, 150); // Venue
  leadsSheet.setColumnWidth(10, 130); // Budget
  leadsSheet.setColumnWidth(11, 240); // Requests
  leadsSheet.setColumnWidth(12, 160); // Status
  leadsSheet.setColumnWidth(13, 200); // Notes
  leadsSheet.setColumnWidth(14, 130); // Page
  leadsSheet.setColumnWidth(15, 130); // Device
  
  // 2. SETUP PIPELINE DASHBOARD SHEET
  var dashSheet = ss.getSheetByName(CONFIG.DASHBOARD_SHEET_NAME);
  if (!dashSheet) {
    dashSheet = ss.insertSheet(CONFIG.DASHBOARD_SHEET_NAME, 1);
  }
  
  dashSheet.clear();
  dashSheet.setGridlines(true);
  
  // Title Banner
  dashSheet.getRange('A1:E1').merge()
    .setValue('🏺 CLAY ARTIST POTTERY STUDIO — LIVE PIPELINE DASHBOARD')
    .setBackground('#3A2016')
    .setFontColor('#FAF3EA')
    .setFontWeight('bold')
    .setFontSize(13)
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');
  dashSheet.setRowHeight(1, 45);
  
  // KPI Metrics Header & Formulas
  dashSheet.getRange('A3:E3').setValues([['Total Inquiries', 'Active Pipeline', 'Confirmed Sessions', 'Completed', 'Conversion Rate %']]);
  dashSheet.getRange('A3:E3').setBackground('#B5532A').setFontColor('#FFFFFF').setFontWeight('bold').setHorizontalAlignment('center');
  dashSheet.setRowHeight(3, 30);
  
  dashSheet.getRange('A4').setFormula('=COUNTA(Leads!A2:A)');
  dashSheet.getRange('B4').setFormula('=COUNTIF(Leads!L2:L, "New Lead") + COUNTIF(Leads!L2:L, "WhatsApp Contacted") + COUNTIF(Leads!L2:L, "Call Scheduled")');
  dashSheet.getRange('C4').setFormula('=COUNTIF(Leads!L2:L, "Confirmed") + COUNTIF(Leads!L2:L, "Deposit Paid")');
  dashSheet.getRange('D4').setFormula('=COUNTIF(Leads!L2:L, "Completed")');
  dashSheet.getRange('E4').setFormula('=IFERROR((C4 + D4) / A4, 0)');
  dashSheet.getRange('E4').setNumberFormat('0.0%');
  
  var kpiValuesRange = dashSheet.getRange('A4:E4');
  kpiValuesRange.setFontSize(16).setFontWeight('bold').setFontColor('#3A2016').setHorizontalAlignment('center').setBackground('#FAF3EA');
  dashSheet.setRowHeight(4, 40);
  
  // Service Category Breakdown
  dashSheet.getRange('A6:B6').merge().setValue('📊 INQUIRIES BY SERVICE CATEGORY')
    .setBackground('#3A2016').setFontColor('#FFFFFF').setFontWeight('bold');
  dashSheet.getRange('A7:B7').setValues([['Service Name', 'Total Leads']]).setBackground('#FAF3EA').setFontWeight('bold');
  
  var services = [
    ['Daily Workshops', '=COUNTIF(Leads!F2:F, "*workshop*") + COUNTIF(Leads!F2:F, "daily-workshops")'],
    ['Birthday Parties', '=COUNTIF(Leads!F2:F, "*birthday*") + COUNTIF(Leads!F2:F, "birthday-parties")'],
    ['School Trips', '=COUNTIF(Leads!F2:F, "*school*") + COUNTIF(Leads!F2:F, "school-trips")'],
    ['Corporate & Events', '=COUNTIF(Leads!F2:F, "*event*") + COUNTIF(Leads!F2:F, "event-organizers")'],
    ['Custom / Other', '=COUNTIF(Leads!F2:F, "*other*") + COUNTIF(Leads!F2:F, "*Custom*")']
  ];
  dashSheet.getRange('A8:B12').setValues(services);
  
  // Status Breakdown
  dashSheet.getRange('D6:E6').merge().setValue('🎯 PIPELINE STAGE BREAKDOWN')
    .setBackground('#3A2016').setFontColor('#FFFFFF').setFontWeight('bold');
  dashSheet.getRange('D7:E7').setValues([['Stage', 'Count']]).setBackground('#FAF3EA').setFontWeight('bold');
  
  var stageFormulas = [
    ['New Lead', '=COUNTIF(Leads!L2:L, "New Lead")'],
    ['WhatsApp Contacted', '=COUNTIF(Leads!L2:L, "WhatsApp Contacted")'],
    ['Call Scheduled', '=COUNTIF(Leads!L2:L, "Call Scheduled")'],
    ['Deposit Paid', '=COUNTIF(Leads!L2:L, "Deposit Paid")'],
    ['Confirmed', '=COUNTIF(Leads!L2:L, "Confirmed")'],
    ['Completed', '=COUNTIF(Leads!L2:L, "Completed")'],
    ['Cancelled / Lost', '=COUNTIF(Leads!L2:L, "Cancelled / Lost")']
  ];
  dashSheet.getRange('D8:E14').setValues(stageFormulas);
  
  dashSheet.setColumnWidth(1, 200);
  dashSheet.setColumnWidth(2, 120);
  dashSheet.setColumnWidth(3, 30);
  dashSheet.setColumnWidth(4, 200);
  dashSheet.setColumnWidth(5, 120);
  
  // 3. SETUP WHATSAPP CLICK LOGS SHEET
  var waSheet = ss.getSheetByName(CONFIG.WA_LOGS_SHEET_NAME);
  if (!waSheet) {
    waSheet = ss.insertSheet(CONFIG.WA_LOGS_SHEET_NAME, 2);
  }
  waSheet.getRange('A1:D1').setValues([['Timestamp (PKT)', 'Source Page', 'Service Context', 'Device / Agent']])
    .setBackground('#25D366').setFontColor('#FFFFFF').setFontWeight('bold');
  waSheet.setColumnWidth(1, 160);
  waSheet.setColumnWidth(2, 200);
  waSheet.setColumnWidth(3, 160);
  waSheet.setColumnWidth(4, 250);
  
  SpreadsheetApp.flush();
  Logger.log('✅ Sheet Setup Complete! Ready for incoming leads.');
}

/**
 * Handle HTTP GET Requests (Healthcheck & Quick Ping)
 */
function doGet(e) {
  var response = {
    status: 'online',
    app: CONFIG.STUDIO_NAME + ' Lead Pipeline',
    timestamp: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'dd MMM yyyy, hh:mm:ss a (z)'),
    admin: CONFIG.ADMIN_EMAIL
  };
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle HTTP POST Requests (Form Submissions & Analytics Events)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  
  try {
    // Acquire a 15-second lock to prevent simultaneous write race conditions
    lock.waitLock(15000);
    
    var rawData = {};
    if (e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        rawData = e.parameter || {};
      }
    } else if (e.parameter) {
      rawData = e.parameter;
    }
    
    // 1. SPAM HONEYPOT CHECK
    // If hidden trap fields are filled, silently drop spam submission
    if (rawData.website_url_check || rawData.pottery_secret_field || rawData.honeypot) {
      return respondJson({ success: true, leadId: 'SPAM-FILTERED', message: 'Accepted' });
    }
    
    // 2. WHATSAPP CLICK LOGGING EVENT
    if (rawData.action === 'log_whatsapp_click' || rawData.type === 'whatsapp_click') {
      return handleWhatsAppLog(rawData);
    }
    
    // 3. MAIN LEAD SUBMISSION HANDLER
    return handleLeadSubmission(rawData);
    
  } catch (err) {
    Logger.log('❌ Error in doPost: ' + err.toString());
    return respondJson({ 
      success: false, 
      error: err.toString(),
      message: 'Server error processing reservation. Please WhatsApp directly at ' + CONFIG.STUDIO_PHONE
    });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Process and append new customer lead to Google Sheet & trigger emails
 */
function handleLeadSubmission(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.LEADS_SHEET_NAME);
  
  if (!sheet) {
    setupSheet();
    sheet = ss.getSheetByName(CONFIG.LEADS_SHEET_NAME);
  }
  
  // Generate Lead ID & Timestamp
  var timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'dd MMM yyyy, hh:mm a');
  var randomSuffix = Math.floor(1000 + Math.random() * 9000);
  var leadId = data.leadId || ('CP-' + randomSuffix);
  
  var name = (data.name || data.fullName || 'Guest').trim();
  var phone = (data.phone || data.whatsapp || '').trim();
  var email = (data.email || '').trim();
  var service = data.service || 'Daily Wheel Workshop';
  var preferredDate = data.preferredDate || data.eventDate || 'Flexible / To Be Decided';
  var groupSize = data.groupSize || '1-2 Persons';
  var venue = data.venue || 'Our Studio (Clifton)';
  var budget = data.budget || 'Standard Studio Package';
  var message = data.message || data.notes || 'None';
  var status = 'New Lead';
  var followUpNotes = 'Submitted from Web Form';
  var sourcePage = data.sourcePage || data.page || '/';
  var device = data.device || (data.referrer ? 'Ref: ' + data.referrer : 'Web Client');
  
  // Format Row
  var row = [
    leadId,
    timestamp,
    name,
    phone,
    email,
    service,
    preferredDate,
    groupSize,
    venue,
    budget,
    message,
    status,
    followUpNotes,
    sourcePage,
    device
  ];
  
  sheet.appendRow(row);
  
  // Clean phone for WhatsApp direct link
  var cleanPhone = phone.replace(/[^0-9]/g, '');
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '92' + cleanPhone.substring(1);
  } else if (!cleanPhone.startsWith('92') && cleanPhone.length === 10) {
    cleanPhone = '92' + cleanPhone;
  }
  
  var waPrefillText = encodeURIComponent(
    'Hi ' + name + '! Thank you for reaching out to Clay Artist Pottery Studio Clifton regarding your ' + service + ' inquiry (Ref: ' + leadId + '). We would love to confirm your slot!'
  );
  var waDirectLink = 'https://wa.me/' + cleanPhone + '?text=' + waPrefillText;
  
  // SEND AUTOMATED EMAILS
  try {
    sendAdminAlertEmail({
      leadId: leadId,
      timestamp: timestamp,
      name: name,
      phone: phone,
      cleanPhone: cleanPhone,
      waDirectLink: waDirectLink,
      email: email,
      service: service,
      preferredDate: preferredDate,
      groupSize: groupSize,
      venue: venue,
      budget: budget,
      message: message,
      sourcePage: sourcePage
    });
  } catch (adminMailErr) {
    Logger.log('⚠️ Failed to send admin email: ' + adminMailErr);
  }
  
  if (email && email.indexOf('@') > 0) {
    try {
      sendCustomerConfirmationEmail({
        leadId: leadId,
        name: name,
        email: email,
        service: service,
        preferredDate: preferredDate,
        groupSize: groupSize
      });
    } catch (custMailErr) {
      Logger.log('⚠️ Failed to send customer email: ' + custMailErr);
    }
  }
  
  return respondJson({
    success: true,
    leadId: leadId,
    timestamp: timestamp,
    message: 'Booking enquiry recorded successfully. Confirmation on the way!',
    whatsappReplyLink: waDirectLink
  });
}

/**
 * Handle lightweight WhatsApp button tap analytics
 */
function handleWhatsAppLog(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.WA_LOGS_SHEET_NAME);
  if (!sheet) {
    setupSheet();
    sheet = ss.getSheetByName(CONFIG.WA_LOGS_SHEET_NAME);
  }
  
  var timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'dd MMM yyyy, hh:mm:ss a');
  var page = data.page || data.sourcePage || '/';
  var service = data.service || 'General Inquire';
  var device = data.device || 'Mobile/Desktop';
  
  sheet.appendRow([timestamp, page, service, device]);
  return respondJson({ success: true, message: 'WhatsApp click logged' });
}

/**
 * Dispatch terracotta-themed HTML notification to studio admin
 */
function sendAdminAlertEmail(lead) {
  var subject = '🏺 [NEW LEAD] ' + lead.name + ' — ' + lead.service + ' (' + lead.leadId + ')';
  
  var htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF3EA; margin: 0; padding: 20px; color: #26211E; }
        .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #E8DACB; box-shadow: 0 10px 30px rgba(181,83,42,0.1); }
        .header { background: #3A2016; padding: 24px; text-align: center; border-bottom: 4px solid #B5532A; }
        .header h1 { color: #FAF3EA; margin: 0; font-size: 22px; font-family: Georgia, serif; }
        .header p { color: #C88D34; margin: 6px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; }
        .content { padding: 28px; }
        .badge { display: inline-block; background: #F9EDE6; color: #B5532A; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; border: 1px solid #E8DACB; margin-bottom: 16px; }
        .lead-title { font-size: 18px; font-weight: bold; color: #3A2016; margin-bottom: 20px; border-bottom: 1px solid #F5EDE4; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        td { padding: 10px 8px; font-size: 14px; border-bottom: 1px solid #F9EDE6; }
        td.label { color: #6E6259; font-weight: bold; width: 38%; }
        td.value { color: #26211E; font-weight: 600; }
        .actions { text-align: center; padding: 20px 0 10px; border-top: 1px solid #E8DACB; }
        .btn-wa { display: inline-block; background: #25D366; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: bold; font-size: 14px; margin: 6px; }
        .btn-call { display: inline-block; background: #B5532A; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: bold; font-size: 14px; margin: 6px; }
        .footer { background: #FAF3EA; padding: 16px; text-align: center; font-size: 12px; color: #8C7A6B; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>CLAY ARTIST POTTERY STUDIO</h1>
          <p>NEW WEBSITE RESERVATION ALERT</p>
        </div>
        <div class="content">
          <div class="badge">REFERENCE #${lead.leadId}</div>
          <div class="lead-title">Customer Inquiry Details</div>
          <table>
            <tr><td class="label">Full Name:</td><td class="value">${lead.name}</td></tr>
            <tr><td class="label">Phone / WhatsApp:</td><td class="value"><a href="tel:${lead.phone}" style="color:#B5532A;">${lead.phone}</a></td></tr>
            <tr><td class="label">Email:</td><td class="value"><a href="mailto:${lead.email}" style="color:#B5532A;">${lead.email}</a></td></tr>
            <tr><td class="label">Service:</td><td class="value" style="color:#B5532A;">${lead.service}</td></tr>
            <tr><td class="label">Preferred Date:</td><td class="value">${lead.preferredDate}</td></tr>
            <tr><td class="label">Group Size:</td><td class="value">${lead.groupSize}</td></tr>
            <tr><td class="label">Venue:</td><td class="value">${lead.venue}</td></tr>
            <tr><td class="label">Budget Range:</td><td class="value">${lead.budget}</td></tr>
            <tr><td class="label">Special Notes:</td><td class="value">${lead.message}</td></tr>
            <tr><td class="label">Source Page:</td><td class="value">${lead.sourcePage}</td></tr>
            <tr><td class="label">Received At:</td><td class="value">${lead.timestamp}</td></tr>
          </table>
          <div class="actions">
            <a href="${lead.waDirectLink}" target="_blank" class="btn-wa">💬 Open WhatsApp Chat</a>
            <a href="tel:${lead.cleanPhone}" class="btn-call">📞 Call Customer Directly</a>
          </div>
        </div>
        <div class="footer">
          Clay Artist Pottery Studio • Clifton Block 4, Karachi • Automatic Lead Engine
        </div>
      </div>
    </body>
    </html>
  `;
  
  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: lead.email
  });
}

/**
 * Dispatch warm, branded confirmation thank-you email to customer
 */
function sendCustomerConfirmationEmail(cust) {
  var subject = '🏺 We have received your pottery reservation inquiry! — Ref #' + cust.leadId;
  
  var htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF3EA; margin: 0; padding: 20px; color: #26211E; }
        .card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #E8DACB; }
        .header { background: #3A2016; padding: 28px; text-align: center; border-bottom: 4px solid #B5532A; }
        .header h1 { color: #FAF3EA; margin: 0; font-size: 24px; font-family: Georgia, serif; }
        .content { padding: 32px 28px; }
        .greeting { font-size: 18px; font-weight: bold; color: #3A2016; margin-bottom: 12px; }
        p { font-size: 14px; line-height: 1.6; color: #443C37; margin: 12px 0; }
        .box { background: #FAF3EA; border-left: 4px solid #B5532A; padding: 16px; border-radius: 8px; margin: 20px 0; }
        .step { margin: 10px 0; font-size: 13px; color: #3A2016; }
        .btn-wa { display: inline-block; background: #25D366; color: #FFFFFF !important; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-weight: bold; font-size: 14px; margin-top: 15px; }
        .footer { background: #FAF3EA; padding: 20px; text-align: center; font-size: 12px; color: #8C7A6B; border-top: 1px solid #E8DACB; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>CLAY ARTIST POTTERY</h1>
          <div style="color:#C88D34; font-size:12px; letter-spacing:2px; font-weight:bold; margin-top:6px;">CLIFTON KARACHI STUDIO</div>
        </div>
        <div class="content">
          <div class="greeting">Thank You, ${cust.name}! 🏺</div>
          <p>We are delighted you want to create ceramic art with us! We have received your inquiry for <strong>${cust.service}</strong> (Ref: <strong>#${cust.leadId}</strong>).</p>
          
          <div class="box">
            <div style="font-weight:bold; color:#B5532A; margin-bottom:8px; font-size:14px;">What Happens Next?</div>
            <div class="step">✓ <strong>Step 1:</strong> Our studio coordinator is checking wheel & mentor availability for <strong>${cust.preferredDate}</strong>.</div>
            <div class="step">✓ <strong>Step 2:</strong> You will receive a personal WhatsApp message from our studio team within <strong>2 hours</strong> to confirm your slot.</div>
            <div class="step">✓ <strong>Step 3:</strong> All stoneware clay, aprons, instructor guidance, and kiln firing are completely prepared for you upon arrival!</div>
          </div>
          
          <p>Need instant confirmation or have custom requirements for your session?</p>
          <div style="text-align:center;">
            <a href="https://wa.me/${CONFIG.STUDIO_PHONE_RAW}?text=Hi%20Clay%20Artist%20Pottery!%20I%20just%20submitted%20inquiry%20Ref%20%23${cust.leadId}" target="_blank" class="btn-wa">
              💬 Fast-Track on WhatsApp (${CONFIG.STUDIO_PHONE})
            </a>
          </div>
          
          <p style="margin-top:24px; font-size:13px; color:#6E6259;">
            📍 <strong>Studio Address:</strong> Clifton Block 4 (Near Dolmen Mall), Karachi<br>
            🗺️ <a href="${CONFIG.MAPS_URL}" style="color:#B5532A; font-weight:bold;">View on Google Maps</a>
          </p>
        </div>
        <div class="footer">
          © Clay Artist Pottery Studio Karachi • Handcrafted with love & clay
        </div>
      </div>
    </body>
    </html>
  `;
  
  MailApp.sendEmail({
    to: cust.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Standardized JSON response helper with proper CORS
 */
function respondJson(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
