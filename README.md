# 🏺 Clay Artist Pottery — Premium Studio Website & Lead Engine (Karachi, Pakistan)

A luxury, lightning-fast, fully responsive, and SEO-optimized website and lead capture engine built for **Clay Artist Pottery**, located in **Clifton Block 4, Near Dolmen Mall, Karachi, Pakistan**.

---

## 🚀 Live Tech Stack

- **Framework:** Next.js (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS + Lucide Icons + Custom Pottery Clay Color Tokens
- **Animations:** Pure SVG Path Keyframe Assembly + 2D Framer-Motion (No 3D / No Three.js / Zero Lag)
- **Validation:** Zod + React Hook Form + Anti-Spam Honeypots
- **Storage & Database:** SQLite / Persistent JSON Lead Store + Postgres connection support
- **Live Mirror:** Google Sheets API Sync (Automated lead row appending)
- **Email Dispatch:** Nodemailer (Gmail SMTP App Password / Custom SMTP)
- **Lead Tracking:** Real-time event analytics (WhatsApp clicks, phone calls, form starts, UTM source/medium/campaign)
- **CRM Dashboard:** Custom `/admin` portal with Kanban board, leads table, CSV export, and follow-up notes.

---

## 🎨 Brand Design Tokens

| Token | Hex / Value | Usage |
|---|---|---|
| **Terracotta Primary** | `#B5532A` | Buttons, badges, active states, keyframes |
| **Deep Kiln Brown** | `#3A2016` | Headings, dark banners, luxury footer |
| **Warm Sand Background** | `#FAF3EA` | Soft organic backdrop & section containers |
| **Soft Clay Beige** | `#F9EDE6` / `#E8DACB` | Card surfaces, borders, dividers |
| **Charcoal Body** | `#26211E` / `#443C37` | High contrast readable typography |
| **Gold-Ochre Accent** | `#C88D34` | Star ratings, highlighted labels |
| **WhatsApp Green** | `#25D366` | Floating WhatsApp trigger only |

---

## 🗺️ Website Structure & Pages

1. **Home (`/`)**: 
   - **Hero:** Hand-built inline SVG assembling the `logo1.png` emblem (stroke draw → fill fade → gentle wheel rotation float) + Arched wheel image + Trust chips + 2 CTAs.
   - **12 Sections:** Trust strip, About teaser, 4 Services cards, 5-Step Pottery Journey, What You Can Create showcase, Responsive Video block, Gallery Highlights, Testimonials slider, Transparent Pricing cards, FAQ accordion with JSON-LD, Final CTA band + lead form.
2. **/services/daily-workshops**: Wheel throwing classes, beginner/intermediate timetable, all-inclusive materials breakdown, seat reservation form.
3. **/services/birthday-parties**: Kids, teens, and adult celebration packages, cake/catering policy, studio buyout options, party booking form.
4. **/services/school-trips**: STEAM curriculum links, fine-motor/tactile sensory benefits, Indus Valley heritage, teacher resource packet, school quotation form.
5. **/services/event-organizers**: Corporate team-building retreats, brand PR activations, bridal showers, custom branding stamps, B2B quotation form.
6. **/gallery**: Filterable masonry grid (Workshops, Parties, School Trips, Corporate, Finished Pieces) with full interactive lightbox modal & video.
7. **/about**: Studio story, founder master potters, studio core values, and Clifton studio facility tour.
8. **/contact**: Left multi-step lead form, right contact info cards (phone, WhatsApp, email, timings), and full-width Google Map embed (Clifton Block 4) with *Get Directions*.
9. **/thank-you**: High-conversion booking confirmation page with lead reference number, next steps, and instant WhatsApp chat launch.
10. **/admin**: Protected studio CRM portal for the owner.
11. **/privacy** & **/terms**: Studio rules, data privacy, and kiln firing policies.
12. **404 Page**: Custom pottery-themed error page ("*Oops! This pot wobbled off the wheel*").

---

## 📋 Lead Automation Flow

When a visitor submits any booking form or clicks WhatsApp:
1. **Database Save:** The lead is saved in the database with a unique ID and PKT timestamp (Pakistan Standard Time UTC+5).
2. **Google Sheets Sync:** Appends a row to the Google Sheet with complete metadata (Name, Phone, Email, Service, Preferred Date, Group Size, Budget, Source Page, Device, UTM source).
3. **Owner Email Alert:** Sends a branded HTML email to `clayartistpottery@gmail.com` with one-tap *Reply on WhatsApp* and *Call Customer* buttons.
4. **Customer Auto-Reply:** Customer receives a branded confirmation email explaining next steps.
5. **Event Tracker:** Logs button clicks and form starts so the owner sees customer interest before submission.

---

## 🔑 How the Owner Accesses Leads & CRM

1. Navigate to: `http://localhost:3000/admin` (or `https://your-domain.com/admin`)
2. Enter the Studio Master Password:
   ```
   clayartist2026
   ```
3. Inside the Owner CRM, you can:
   - **Switch Views:** Kanban Pipeline view vs. Leads Table vs. Real-Time Visitor Interaction Stream.
   - **Update Status:** Drag or select `New` → `Contacted` → `Quote Sent` → `Follow-up` → `Confirmed` → `Completed` → `Lost`.
   - **One-Tap WhatsApp:** Click the green WhatsApp button next to any lead to open a pre-filled chat with that customer.
   - **Add Internal Notes:** Record call notes or special requests.
   - **Export CSV:** Download a spreadsheet for Excel or Google Sheets.

---

## ⚙️ Environment Configuration (`.env.example`)

```env
# Base Site URL
NEXT_PUBLIC_SITE_URL=https://clayartistpottery.pk

# Admin CRM Dashboard Password
ADMIN_PASSWORD=clayartist2026

# Studio Owner Notification Email
OWNER_NOTIFICATION_EMAIL=clayartistpottery@gmail.com

# Email Delivery (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=clayartistpottery@gmail.com
SMTP_PASS=your_gmail_app_password

# Google Sheets Live Mirror
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

---

## 📦 Local Development & Deployment

### Run Locally:
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

### Production Build:
```bash
npm run build
npm start
```

### Deploy to Vercel:
1. Push repository to GitHub.
2. Import repository into [Vercel](https://vercel.com).
3. Add environment variables from `.env.example`.
4. Deploy!
