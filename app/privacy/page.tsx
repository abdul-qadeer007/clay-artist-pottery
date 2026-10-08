import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Clay Artist Pottery Karachi',
  description: 'Privacy policy and data protection practices for Clay Artist Pottery studio guests and online visitors in Karachi.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-clay-grain min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DACB] shadow-sm">
        <SectionEyebrow text="LEGAL &amp; PRIVACY" />
        <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-2 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#8C7A6B] mb-8">
          Last updated: October 2026 • Clay Artist Pottery Karachi
        </p>

        <div className="space-y-6 text-sm text-[#443C37] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">1. Information We Collect</h2>
            <p>
              When you submit an inquiry or booking form on our website ({siteConfig.url}) or contact us via WhatsApp, we collect information including your name, contact phone number, email address, preferred workshop date, and session preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">2. How We Use Your Information</h2>
            <p>
              We use your submitted details exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#6E6259]">
              <li>Confirm your pottery workshop, birthday party, school trip, or corporate booking.</li>
              <li>Send booking confirmation emails and WhatsApp communications regarding your visit.</li>
              <li>Notify you when your kiln-fired ceramic pieces are glazed and ready for pickup or delivery.</li>
              <li>Improve studio safety, customer support, and website performance.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">3. Data Sharing &amp; Security</h2>
            <p>
              We never sell, rent, or trade your personal contact details to third-party marketers. Your data is stored securely in our private studio database and encrypted communication channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-title text-xl font-bold text-[#3A2016]">4. Contact Us</h2>
            <p>
              If you have any questions regarding your data privacy, contact our studio administrator at <a href={`mailto:${siteConfig.contact.email}`} className="text-[#B5532A] underline">{siteConfig.contact.email}</a> or visit us at Clifton Block 4, Karachi.
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
