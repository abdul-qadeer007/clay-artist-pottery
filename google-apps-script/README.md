# 🏺 Clay Artist Pottery — Lead Automation Engine (Google Sheets & Apps Script)

This is a **zero-cost, subscription-free, production-ready lead automation pipeline** built on Google Apps Script and Google Sheets for Clay Artist Pottery Studio.

---

## 🚀 3-Minute Setup Guide

### Step 1: Create Google Sheet & Open Script Editor
1. Go to [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. Name it: **"Clay Artist Pottery — Studio Leads & Pipeline"**.
3. In the top menu, click **Extensions** → **Apps Script**.

### Step 2: Paste the Automation Code
1. Delete any default code in `Code.gs`.
2. Copy and paste the entire contents of [`google-apps-script/Code.gs`](./Code.gs) into the editor.
3. Click the **Save** (💾) icon.

### Step 3: Run Auto-Setup
1. In the toolbar dropdown at the top, select the function **`setupSheet`**.
2. Click **Run** (▶).
3. Google will ask for initial authorization (`Review Permissions` → choose your Google account → `Advanced` → `Go to Untitled project (unsafe)` → `Allow`).
4. Return to your Google Sheet — notice:
   - **`Leads`** tab is created with terracotta headers and interactive **Status** dropdowns (`New Lead`, `Confirmed`, etc.).
   - **`Pipeline Dashboard`** tab is populated with live `COUNTIF` KPI metric cards & conversion rates.
   - **`WhatsApp Logs`** tab is ready to log click analytics.

### Step 4: Deploy Web App Endpoint
1. In Apps Script editor, click the blue **Deploy** button (top right) → **New deployment**.
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**.
3. Configure settings:
   - **Description:** `Clay Artist Pottery Web Leads API`
   - **Execute as:** `Me (your-email@gmail.com)`
   - **Who has access:** `Anyone` *(Crucial so website form can POST without Google login)*
4. Click **Deploy**.
5. Copy the **Web App URL** (e.g. `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🔗 Connect to Next.js Website

Add the Web App URL to your `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbydZjUtuxrgjsc7xDOEaeKnQncL56eqTxEsD2Z2wolrTACKEtAVFs-AA-AXFUNo2soX/exec
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbydZjUtuxrgjsc7xDOEaeKnQncL56eqTxEsD2Z2wolrTACKEtAVFs-AA-AXFUNo2soX/exec
```

---

## ⚡ What Happens When a Customer Submits a Form?

1. **Instant Concurrency-Safe Lock:** Script locks for 15s to prevent race conditions during peak traffic.
2. **Honeypot Spam Drop:** Silently filters out bots submitting invisible trap fields.
3. **Appends to Google Sheet:** Logs customer details, preferred date, budget, group size, and sets status to `New Lead`.
4. **Admin Alert Email to `clayartistpottery@gmail.com`:**
   - Terracotta-styled summary table
   - **"Open WhatsApp Chat"** button (pre-filled with customer name and reference ID)
   - **"Call Customer Directly"** button
5. **Customer Confirmation Email:**
   - Branded thank-you message explaining the 2-hour confirmation window and Clifton studio location.
6. **Smart WhatsApp Fallback:**
   - If user network fails or offline, the form immediately prepares WhatsApp with pre-filled details so no inquiry is ever lost.
