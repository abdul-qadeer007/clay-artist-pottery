import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/SectionEyebrow';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Clay Artist Pottery Karachi',
  description: 'Terms of service, studio rules, booking cancellation and kiln firing policies at Clay Artist Pottery in Clifton Karachi.',
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-clay-grain min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DACB] shadow-sm">
        <SectionEyebrow text="STUDIO POLICIES" />
        <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-2 mb-6">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-[#8C7A6B] mb-8">
          Last updated: October 2026 • Clay Artist Pottery Karachi
        </p>

        <div className="space-y-6 text-sm text-[#443C37] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">1. Workshop Bookings &amp; Punctuality</h2>
            <p>
              Please arrive 10 minutes prior to your scheduled workshop start time to put on studio aprons and receive initial safety guidance. Late arrivals of more than 20 minutes may miss initial wheel centering demonstrations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">2. Kiln Firing &amp; Nature of Ceramics</h2>
            <p>
              Ceramics involves intense physical drying and firing at temperatures up to 1200°C. While our master potters inspect every piece with the utmost care, organic clay occasionally experiences stress cracks or air pocket shifts inside the kiln. We guarantee our best professional craftsmanship during every kiln load.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">3. Finished Piece Pickup Timeline</h2>
            <p>
              Finished and glazed ceramic pieces will be ready for pickup 10 to 14 days after your workshop date. Pieces are safely stored in our studio for up to 45 days after completion notification. Courier delivery across Karachi is available upon request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">4. Rescheduling &amp; Cancellations</h2>
            <p>
              If you need to reschedule your workshop or private party, please inform us via WhatsApp at least 24 hours in advance so we can adjust our instructor and wheel assignments.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E8DACB]">
          <Link href="/" className="text-xs font-bold text-[#B5532A] hover:underline">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
