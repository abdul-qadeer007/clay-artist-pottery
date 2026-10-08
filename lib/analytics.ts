import { siteConfig } from '@/config/site';

export interface EventData {
  type: 'whatsapp_click' | 'phone_click' | 'form_start' | 'page_view' | 'generate_lead';
  page?: string;
  service?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  metadata?: Record<string, unknown>;
}

export function trackClientEvent(data: EventData): void {
  if (typeof window === 'undefined') return;

  const currentUrl = new URL(window.location.href);
  const utmSource = data.utmSource || currentUrl.searchParams.get('utm_source') || undefined;
  const utmMedium = data.utmMedium || currentUrl.searchParams.get('utm_medium') || undefined;
  const utmCampaign = data.utmCampaign || currentUrl.searchParams.get('utm_campaign') || undefined;
  const referrer = document.referrer || undefined;
  const page = data.page || window.location.pathname;

  // Determine device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const device = isMobile ? 'Mobile' : 'Desktop';

  const payload = {
    ...data,
    page,
    utmSource,
    utmMedium,
    utmCampaign,
    referrer,
    device,
  };

  // 1. Send to internal tracking API
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-event', JSON.stringify(payload));
    } else {
      fetch('/api/track-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Fail silently in browser
  }

  // 2. Google Analytics 4 hook (if gtag is active)
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', data.type, {
      event_category: 'Lead Engagement',
      event_label: data.service || page,
      page_location: page,
    });
  }

  // 3. Meta Pixel hook (if fbq is active)
  if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    if (data.type === 'generate_lead') {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'Lead');
    } else if (data.type === 'whatsapp_click') {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('trackCustom', 'WhatsAppClick', { page });
    }
  }
}

export function getWhatsAppLink(): string {
  const baseNumber = siteConfig.contact.whatsappRaw;
  const text = "Hi Clay Artist Studio! I am interested in booking a pottery session. Please share details.";
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(text)}`;
}
