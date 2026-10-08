import fs from 'fs';
import path from 'path';
import { Lead, TrackedEvent, LeadStatus } from '@/types';

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
  } catch {
    // Ignore error in read-only environments
  }
}

const leadsFilePath = path.join(dataDir, 'leads.json');
const eventsFilePath = path.join(dataDir, 'events.json');

// Initialize with sample leads if file doesn't exist
const initialSampleLeads: Lead[] = [
  {
    id: "lead-1001",
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    timestampPKT: getPKTTimestamp(new Date(Date.now() - 2 * 3600 * 1000)),
    name: "Zainab Raza",
    phone: "03001234567",
    email: "zainab.raza@gmail.com",
    service: "daily-workshops",
    preferredDate: "2026-10-12",
    groupSize: "2 Persons",
    venue: "Our Studio (Clifton)",
    budget: "Rs. 7,000",
    message: "Looking for an afternoon slot for couple's pottery wheel throwing on Saturday.",
    hearAboutUs: "Instagram",
    sourcePage: "/services/daily-workshops",
    device: "Mobile / iOS",
    status: "New",
    notes: ["Customer requested 3:00 PM slot."],
  },
  {
    id: "lead-1002",
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    timestampPKT: getPKTTimestamp(new Date(Date.now() - 24 * 3600 * 1000)),
    name: "Hamza Abbasi",
    phone: "03219876543",
    email: "h.abbasi@gmail.com",
    service: "birthday-parties",
    preferredDate: "2026-10-25",
    groupSize: "15 Kids",
    venue: "Our Studio (Clifton)",
    budget: "Rs. 35,000",
    message: "Planning an 8th birthday party for my daughter with clay sculpting and wheel demo.",
    hearAboutUs: "Google Search",
    sourcePage: "/services/birthday-parties",
    device: "Desktop / Windows",
    status: "Contacted",
    notes: ["Called on WhatsApp. Sent birthday package brochure."],
  },
  {
    id: "lead-1003",
    createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
    timestampPKT: getPKTTimestamp(new Date(Date.now() - 48 * 3600 * 1000)),
    name: "Sanam Baloch",
    phone: "03335554433",
    email: "sanam.baloch@creatives.pk",
    service: "event-organizers",
    preferredDate: "2026-11-05",
    groupSize: "30 Adults",
    venue: "Our Studio (Clifton)",
    budget: "Rs. 90,000",
    message: "Corporate pottery team-building session for creative agency design team.",
    hearAboutUs: "Word of Mouth",
    sourcePage: "/services/event-organizers",
    device: "Desktop / Mac",
    status: "Quote Sent",
    notes: ["Custom quote of Rs. 85,000 sent via email."],
  },
];

export function getPKTTimestamp(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-PK', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
}

// Memory fallback cache in case disk write is temporary
let memoryLeads: Lead[] = [...initialSampleLeads];
let memoryEvents: TrackedEvent[] = [];

function readLeadsFromFile(): Lead[] {
  try {
    if (fs.existsSync(leadsFilePath)) {
      const data = fs.readFileSync(leadsFilePath, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryLeads = parsed;
        return parsed;
      }
    }
    // Write sample leads if empty
    fs.writeFileSync(leadsFilePath, JSON.stringify(initialSampleLeads, null, 2), 'utf8');
    return initialSampleLeads;
  } catch (err) {
    console.error("Error reading leads file, using memory store:", err);
    return memoryLeads;
  }
}

function writeLeadsToFile(leads: Lead[]): void {
  memoryLeads = leads;
  try {
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), 'utf8');
  } catch (err) {
    console.error("Error writing leads file:", err);
  }
}

function readEventsFromFile(): TrackedEvent[] {
  try {
    if (fs.existsSync(eventsFilePath)) {
      const data = fs.readFileSync(eventsFilePath, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        memoryEvents = parsed;
        return parsed;
      }
    }
    return memoryEvents;
  } catch (err) {
    console.error("Error reading events file:", err);
    return memoryEvents;
  }
}

function writeEventsToFile(events: TrackedEvent[]): void {
  memoryEvents = events;
  try {
    fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2), 'utf8');
  } catch (err) {
    console.error("Error writing events file:", err);
  }
}

// DB Methods
export const db = {
  getLeads(): Lead[] {
    const leads = readLeadsFromFile();
    return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getLeadById(id: string): Lead | undefined {
    const leads = readLeadsFromFile();
    return leads.find(lead => lead.id === id);
  },

  createLead(data: Omit<Lead, 'id' | 'createdAt' | 'timestampPKT' | 'status'> & { status?: LeadStatus }): Lead {
    const leads = readLeadsFromFile();
    const newId = `lead-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const now = new Date();
    
    const newLead: Lead = {
      ...data,
      id: newId,
      createdAt: now.toISOString(),
      timestampPKT: getPKTTimestamp(now),
      status: data.status || 'New',
      notes: data.notes || [],
    };

    leads.unshift(newLead);
    writeLeadsToFile(leads);
    return newLead;
  },

  updateLead(id: string, updates: Partial<Lead>): Lead | null {
    const leads = readLeadsFromFile();
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return null;

    leads[index] = {
      ...leads[index],
      ...updates,
    };

    writeLeadsToFile(leads);
    return leads[index];
  },

  addLeadNote(id: string, noteText: string): Lead | null {
    const leads = readLeadsFromFile();
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return null;

    const currentNotes = leads[index].notes || [];
    const formattedNote = `[${getPKTTimestamp()}] ${noteText}`;
    leads[index].notes = [formattedNote, ...currentNotes];

    writeLeadsToFile(leads);
    return leads[index];
  },

  deleteLead(id: string): boolean {
    const leads = readLeadsFromFile();
    const filtered = leads.filter(l => l.id !== id);
    if (filtered.length === leads.length) return false;
    writeLeadsToFile(filtered);
    return true;
  },

  // Event Tracking
  getEvents(): TrackedEvent[] {
    const events = readEventsFromFile();
    return events.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  },

  createEvent(data: Omit<TrackedEvent, 'id' | 'timestamp' | 'timestampPKT'>): TrackedEvent {
    const events = readEventsFromFile();
    const now = new Date();
    const newEvent: TrackedEvent = {
      ...data,
      id: `evt-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: now.toISOString(),
      timestampPKT: getPKTTimestamp(now),
    };

    events.unshift(newEvent);
    // Keep max 1000 recent events in store
    if (events.length > 1000) events.length = 1000;
    writeEventsToFile(events);
    return newEvent;
  },

  // Stats for Admin Dashboard
  getStats() {
    const leads = this.getLeads();
    const events = this.getEvents();
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const weekStart = todayStart - 7 * 24 * 3600 * 1000;
    const monthStart = todayStart - 30 * 24 * 3600 * 1000;

    const leadsToday = leads.filter(l => new Date(l.createdAt).getTime() >= todayStart).length;
    const leadsWeek = leads.filter(l => new Date(l.createdAt).getTime() >= weekStart).length;
    const leadsMonth = leads.filter(l => new Date(l.createdAt).getTime() >= monthStart).length;
    
    const confirmedCount = leads.filter(l => l.status === 'Confirmed' || l.status === 'Completed').length;
    const conversionRate = leads.length > 0 ? ((confirmedCount / leads.length) * 100).toFixed(1) : '0.0';

    const whatsappClicks = events.filter(e => e.type === 'whatsapp_click').length;
    const phoneClicks = events.filter(e => e.type === 'phone_click').length;
    const formStarts = events.filter(e => e.type === 'form_start').length;

    // Service Breakdown
    const serviceCounts: Record<string, number> = {};
    leads.forEach(l => {
      const s = l.service || 'Other';
      serviceCounts[s] = (serviceCounts[s] || 0) + 1;
    });

    // Status Breakdown
    const statusCounts: Record<string, number> = {
      New: 0,
      Contacted: 0,
      'Quote Sent': 0,
      'Follow-up': 0,
      Confirmed: 0,
      Completed: 0,
      Lost: 0,
    };
    leads.forEach(l => {
      if (statusCounts[l.status] !== undefined) {
        statusCounts[l.status]++;
      }
    });

    return {
      totalLeads: leads.length,
      leadsToday,
      leadsWeek,
      leadsMonth,
      conversionRate: `${conversionRate}%`,
      confirmedCount,
      whatsappClicks,
      phoneClicks,
      formStarts,
      serviceCounts,
      statusCounts,
    };
  }
};
