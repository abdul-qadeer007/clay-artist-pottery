'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Send, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  MessageCircle,
  X
} from 'lucide-react';
import { trackClientEvent } from '@/lib/analytics';

interface LeadFormProps {
  initialService?: string;
  sourcePage?: string;
  compact?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialService = 'daily-workshops',
  sourcePage = '/',
  compact = false,
  className = '',
  title = 'Book Your Pottery Session',
  subtitle = 'Reserve your wheel or request an event quote. We will confirm your slot within 2 hours.',
}) => {

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [groupSize, setGroupSize] = useState('1-2 Persons');
  const [venue, setVenue] = useState<'Our Studio (Clifton)' | 'Your Location'>('Our Studio (Clifton)');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('Instagram');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam
  const [honeypot2, setHoneypot2] = useState(''); // Anti-spam website_url_check

  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [postSubmitWaUrl, setPostSubmitWaUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [fallbackWaUrl, setFallbackWaUrl] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackClientEvent({
        type: 'form_start',
        service,
        page: sourcePage,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setFallbackWaUrl('');

    // Spam honeypot check
    if (honeypot || honeypot2) {
      // Silently discard spam bots
      return;
    }

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg('Please fill in your name, phone/WhatsApp number, and email.');
      return;
    }

    setLoading(true);

    const generatedLeadId = 'CP-' + Math.floor(1000 + Math.random() * 9000);

    const leadPayload = {
      leadId: generatedLeadId,
      name: fullName,
      fullName: fullName,
      phone: phone,
      whatsapp: phone,
      email: email,
      service: service,
      date: preferredDate || 'Flexible / Not specified',
      preferredDate: preferredDate || 'Flexible / Not specified',
      eventDate: preferredDate || 'Flexible / Not specified',
      group_size: groupSize || '1-2 Persons',
      groupSize: groupSize || '1-2 Persons',
      venue: venue || 'Our Studio (Clifton)',
      budget: budget || 'Standard Studio Package',
      notes: message || 'None',
      message: message || 'None',
      hearAboutUs: hearAboutUs || 'Website',
      sourcePage: sourcePage || '/',
      botcheck: honeypot || honeypot2 || '',
    };

    // Format complete customer message for WhatsApp dispatch
    const waText = 
`🏺 *New Pottery Reservation Request*
👤 *Name:* ${fullName || ""}
📞 *Phone:* ${phone || ""}
✉️ *Email:* ${email || ""}
🎨 *Service:* ${service || ""}
📅 *Date:* ${preferredDate || "Flexible"}
👥 *Guests:* ${groupSize || "1"}
📝 *Notes:* ${message || "None"}`;

    const confirmationUrl = `https://wa.me/923152984450?text=${encodeURIComponent(waText)}`;

    try {
      // 1. Submit single clean request directly to Google Apps Script Web App (Version 4)
      await fetch("https://script.google.com/macros/s/AKfycbydZjUtuxrgjsc7xDOEaeKnQncL56eqTxEsD2Z2wolrTACKEtAVFs-AA-AXFUNo2soX/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(leadPayload),
      });

      trackClientEvent({
        type: 'generate_lead',
        service,
        page: sourcePage,
      });

      setPostSubmitWaUrl(confirmationUrl);
      setIsSuccessModalOpen(true);
      setLoading(false);

      // Auto-open WhatsApp in a new tab with pre-filled details
      if (typeof window !== 'undefined') {
        window.open(confirmationUrl, '_blank');
      }

      // Clear form inputs
      setFullName('');
      setPhone('');
      setEmail('');
      setPreferredDate('');
      setMessage('');
      setBudget('');

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error occurred while submitting.';
      
      // Construct smart fallback WhatsApp link with pre-filled lead details
      const waMsg = encodeURIComponent(
        `Hi Clay Artist Pottery! I tried submitting an online booking for *${service}*:\n• Name: ${fullName}\n• Phone: ${phone}\n• Email: ${email}\n• Preferred Date: ${preferredDate || 'Flexible'}\n• Group Size: ${groupSize}\n• Notes: ${message || 'None'}`
      );
      const waUrl = `https://wa.me/923152984450?text=${waMsg}`;
      
      setFallbackWaUrl(waUrl);
      setErrorMsg(msg);
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🏺 Celebratory Reservation Success Modal Popup */}
      {isSuccessModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop Click to close */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsSuccessModalOpen(false)} 
            aria-hidden="true" 
          />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-lg bg-[#FFFDF9] rounded-3xl p-6 sm:p-9 border-2 border-[#B5532A] shadow-[0_25px_60px_rgba(0,0,0,0.35)] text-center animate-in zoom-in-95 duration-300 overflow-hidden">
            
            {/* Top Close 'X' Button */}
            <button
              type="button"
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#6E6259] flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Studio Brand Logo */}
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Clay Artist Studio Logo"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-3 drop-shadow-md animate-logo-float"
                priority
              />
            </div>

            {/* Heading & Text */}
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3A2016] tracking-tight mb-3">
              Reservation Request Received!
            </h3>

            <p className="text-xs sm:text-sm text-[#443C37] leading-relaxed mb-6">
              Thank you! Your pottery reservation request has been submitted. A copy has been saved to our studio registry and sent to <strong className="text-[#B5532A]">clayartistpottery@gmail.com</strong>. We will confirm your session shortly.
            </p>

            {/* Action Button */}
            <div className="w-full">
              <a
                href={postSubmitWaUrl || `https://wa.me/923152984450`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[50px] inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5C] text-white px-6 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className={`bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E8DACB] shadow-[0_12px_40px_rgba(181,83,42,0.08)] ${className}`}>
        {/* Form Header */}
        <div className="mb-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-[#F9EDE6] text-[#B5532A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Studio Reservation</span>
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3A2016] tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6259] mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm space-y-2.5">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
            <span>{errorMsg}</span>
          </div>
          {fallbackWaUrl && (
            <div className="pt-1">
              <a
                href={fallbackWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all"
              >
                <span>💬 Click Here to Send via WhatsApp Instead</span>
              </a>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} onFocus={handleStart} className="space-y-4">
        {/* Anti-spam honeypot fields */}
        <input 
          type="text" 
          name="pottery_secret_field" 
          value={honeypot} 
          onChange={(e) => setHoneypot(e.target.value)} 
          className="hidden" 
          tabIndex={-1} 
          autoComplete="off" 
        />
        <input 
          type="text" 
          name="website_url_check" 
          value={honeypot2} 
          onChange={(e) => setHoneypot2(e.target.value)} 
          className="hidden" 
          tabIndex={-1} 
          autoComplete="off" 
        />

        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
              Full Name <span className="text-[#B5532A]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-4" />
              <input
                type="text"
                required
                placeholder="e.g. Ayla Khan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
              Phone / WhatsApp <span className="text-[#B5532A]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-4" />
              <input
                type="tel"
                required
                placeholder="e.g. 0315 2984450"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Email & Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
              Email Address <span className="text-[#B5532A]">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-4" />
              <input
                type="email"
                required
                placeholder="e.g. ayla@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
              Select Experience <span className="text-[#B5532A]">*</span>
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B5532A] focus:border-transparent transition-all"
            >
              <option value="daily-workshops">Daily Wheel Workshop (Beginner / Intermediate)</option>
              <option value="birthday-parties">Birthday Party (Kids, Teens, Adults)</option>
              <option value="school-trips">School Field Trip / STEAM Group</option>
              <option value="event-organizers">Event Organizers & Corporate Team-Building</option>
              <option value="other">Custom Ceramic Project / Studio Visit</option>
            </select>
          </div>
        </div>

        {/* Non-compact extra fields */}
        {!compact && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-4" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full min-h-[48px] pl-10 pr-3 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                  Group Size
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-4" />
                  <select
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    className="w-full min-h-[48px] pl-10 pr-3 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
                  >
                    <option value="1 Person (Solo Artist)">1 Person (Solo)</option>
                    <option value="2 Persons (Couple / Duo)">2 Persons (Couple)</option>
                    <option value="3-5 Persons (Small Family)">3–5 Persons</option>
                    <option value="6-15 Persons (Party / Group)">6–15 Persons</option>
                    <option value="16-30+ Persons (Large Event)">16–30+ Persons</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                  Venue Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-4" />
                  <select
                    value={venue}
                    onChange={(e) => setVenue(e.target.value as 'Our Studio (Clifton)' | 'Your Location')}
                    className="w-full min-h-[48px] pl-10 pr-3 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
                  >
                    <option value="Our Studio (Clifton)">Our Clifton Studio</option>
                    <option value="Your Location">Your Venue (Karachi)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Budget Range & How did you hear */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                  Budget Range (PKR)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rs. 3,500 – Rs. 15,000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                  How Did You Hear About Us?
                </label>
                <select
                  value={hearAboutUs}
                  onChange={(e) => setHearAboutUs(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
                >
                  <option value="Instagram">Instagram (@clayartistpottery)</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google Search">Google Search (Pottery in Karachi)</option>
                  <option value="Friend / Family">Friend or Family Recommendation</option>
                  <option value="Dolmen Mall / Clifton Walkby">Dolmen Mall / Clifton Visit</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Let us know if it is a surprise birthday, specific time slot (e.g. 4 PM), or special requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-[#26211E] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A] resize-none"
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-[52px] py-3.5 px-6 rounded-2xl bg-[#B5532A] hover:bg-[#9A421D] active:scale-[0.99] text-white font-bold text-base tracking-wide shadow-[0_6px_20px_rgba(181,83,42,0.35)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Securing Reservation...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span>Confirm &amp; Book My Session</span>
            </>
          )}
        </button>

        {/* Security & Privacy assurance */}
        <div className="flex items-center justify-center gap-4 text-[12px] text-[#6E6259] pt-1">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
            Instant WhatsApp Confirmation
          </span>
          <span>•</span>
          <span>No prepayment required</span>
        </div>
      </form>
    </div>
    </>
  );
};
