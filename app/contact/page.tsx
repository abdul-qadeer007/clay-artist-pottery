import React from 'react';
import type { Metadata } from 'next';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { LeadForm } from '@/components/LeadForm';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact & Book a Session | Clay Artist Pottery Clifton Karachi',
  description: 'Book your pottery wheel workshop, birthday party, school trip or event at Clay Artist Pottery in Clifton Block 4, Karachi. Direct WhatsApp: +92 315 2984450.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-clay-grain">
      {/* Header */}
      <section className="pt-12 pb-14 border-b border-[#E8DACB] bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="CONNECT WITH THE STUDIO" />
          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] mt-2">
            Book Your Session &amp; Visit Us
          </h1>
          <p className="text-sm sm:text-base text-[#6E6259] mt-3 max-w-2xl mx-auto leading-relaxed">
            Have questions about wheel availability, private studio bookings, or birthday celebrations? Fill out the reservation form below or reach us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Info Cards Right */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Multi-Field Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm 
                sourcePage="/contact"
                title="Reserve Your Pottery Experience"
                subtitle="Select your preferred service, date, group size, and any special requests."
              />
            </div>

            {/* Right: Studio Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Fast Track Card */}
              <div className="bg-[#25D366]/10 border-2 border-[#25D366]/40 rounded-3xl p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B8A43]">Fastest Response</span>
                    <h3 className="font-serif-title text-xl font-bold text-[#3A2016]">WhatsApp Studio Desk</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#443C37] mb-5 leading-relaxed">
                  Chat directly with our master potter for instant wheel confirmations, custom date slots, and party arrangements.
                </p>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white py-3 rounded-xl font-bold text-sm tracking-wide text-center block shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>

              {/* Direct Phone & Email Cards */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DACB] shadow-sm space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] text-[#B5532A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">Direct Phone</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-base font-bold text-[#3A2016] hover:text-[#B5532A] block mt-0.5"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-[#F5EDE4]">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] text-[#B5532A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">Official Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base font-bold text-[#3A2016] hover:text-[#B5532A] block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-[#F5EDE4]">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] text-[#B5532A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">Studio Timings</span>
                    <p className="text-sm font-semibold text-[#3A2016] mt-0.5">
                      {siteConfig.contact.openingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Location Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DACB] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] text-[#B5532A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B]">Clifton Studio Address</span>
                    <p className="text-sm font-bold text-[#3A2016]">
                      {siteConfig.contact.address}
                    </p>
                    <p className="text-xs text-[#6E6259]">
                      Located near Dolmen Mall &amp; Marine Drive with dedicated valet/parking.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Full-width Google Map Embed */}
      <section className="py-12 bg-white border-t border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionEyebrow text="MAP &amp; DIRECTIONS" />
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3A2016]">
              Find Us In Clifton Block 4, Karachi
            </h2>
          </div>

          <GoogleMapEmbed />
        </div>
      </section>
    </div>
  );
}
