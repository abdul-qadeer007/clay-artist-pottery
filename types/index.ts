export type ServiceType = 
  | 'daily-workshops'
  | 'birthday-parties'
  | 'school-trips'
  | 'event-organizers'
  | 'other';

export type LeadStatus = 
  | 'New'
  | 'Contacted'
  | 'Quote Sent'
  | 'Follow-up'
  | 'Confirmed'
  | 'Completed'
  | 'Lost';

export interface Lead {
  id: string;
  createdAt: string; // ISO string
  timestampPKT: string; // Formatted PKT time
  name: string;
  phone: string;
  email: string;
  service: ServiceType | string;
  preferredDate?: string;
  groupSize?: string | number;
  venue?: 'Our Studio (Clifton)' | 'Your Location' | string;
  budget?: string;
  message?: string;
  hearAboutUs?: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
  device?: string;
  status: LeadStatus;
  notes?: string[];
  followUpDate?: string;
  lostReason?: string;
}

export interface TrackedEvent {
  id: string;
  type: 'whatsapp_click' | 'phone_click' | 'form_start' | 'page_view' | 'generate_lead';
  page: string;
  service?: string;
  timestamp: string;
  timestampPKT: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
  device?: string;
  metadata?: Record<string, unknown>;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  groupSize: string;
  includes: string[];
  recommendedFor: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl?: string;
  serviceType: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'workshops' | 'parties' | 'school-trips' | 'events' | 'creations';
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  description?: string;
}
