'use client';

import React, { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/config/site';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get('id') || 'CP-9281';
  const name = searchParams.get('name') || 'Friend';
  const service = searchParams.get('service') || 'Pottery Session';

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B5532A', '#C88D34', '#FAF3EA', '#3A2016'],
      });
    } catch {
      // Ignore if canvas isn't available
    }
  }, []);

  const waLeadMsg = encodeURIComponent(
    `Hi Clay Artist Pottery! I just submitted a booking inquiry online (Ref: ${leadId}) for ${service}. My name is ${name}.`
  );
  const waDirectUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${waLeadMsg}`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      {/* Success Badge */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#25D366]/15 border-2 border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-6 shadow-lg animate-in zoom-in duration-300">
        <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#B5532A] bg-[#F9EDE6] px-4 py-1.5 rounded-full border border-[#E8DACB]">
        Booking Inquiry Received • Ref #{leadId}
      </span>

      <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] mt-4 mb-3">
        Thank You, {name}! 🏺
      </h1>

      <p className="text-base sm:text-lg text-[#443C37] max-w-xl mx-auto leading-relaxed mb-8">
        We have received your reservation request for <strong>{service}</strong>. Our studio coordinator in Clifton is reviewing your details right now.
      </p>

      {/* What Happens Next Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DACB] shadow-md text-left max-w-xl mx-auto mb-8 space-y-4">
        <h3 className="font-serif-title text-lg font-bold text-[#3A2016] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#B5532A]" />
          <span>What Happens Next?</span>
        </h3>
        
        <div className="space-y-3 text-xs sm:text-sm text-[#443C37]">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#FAF3EA] text-[#B5532A] font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
              1
            </span>
            <span>We check wheel and instructor availability for your requested date and slot.</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#FAF3EA] text-[#B5532A] font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
              2
            </span>
            <span>You will receive an instant WhatsApp confirmation message within <strong>2 hours</strong>.</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#FAF3EA] text-[#B5532A] font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
              3
            </span>
            <span>Your clay, wheels, aprons, and master mentors will be ready for you at our Clifton studio!</span>
          </div>
        </div>
      </div>

      {/* Fast Track WhatsApp Button */}
      <div className="space-y-3 max-w-md mx-auto mb-12">
        <a
          href={waDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Confirm Immediately via WhatsApp</span>
        </a>

        <p className="text-xs text-[#6E6259]">
          Direct Studio Hotline: <a href={`tel:${siteConfig.contact.phone}`} className="font-bold underline">{siteConfig.contact.phoneDisplay}</a>
        </p>
      </div>

      {/* Return Links */}
      <div className="flex items-center justify-center gap-6 text-sm font-semibold">
        <Link href="/" className="text-[#B5532A] hover:underline flex items-center gap-1">
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <span className="text-[#8C7A6B]">•</span>
        <Link href="/gallery" className="text-[#3A2016] hover:text-[#B5532A] transition-colors">
          View Studio Gallery
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-clay-grain">
      <Suspense fallback={<div className="p-12 text-center text-sm">Loading confirmation...</div>}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
