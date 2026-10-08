import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Sparkles, 
  Heart, 
  Layers, 
  Coffee, 
  Award, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { LeadForm } from '@/components/LeadForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Corporate Pottery Events & Brand Activations Karachi | Clay Artist Pottery',
  description: 'Book bespoke corporate pottery team-building workshops, brand PR launches, bridal showers, and private studio buyouts in Clifton Karachi. Custom corporate quotes & mobile pop-ups.',
};

export default function EventOrganizersPage() {
  const eventTypes = [
    {
      title: "Corporate Team-Building & Retreats",
      icon: <Building2 className="w-6 h-6 text-[#B5532A]" />,
      description: "Break the ice, ignite cross-departmental creativity, and destress with collaborative pottery wheel challenges and team sculpting sessions.",
      badge: "HR Favorite",
    },
    {
      title: "Brand PR Activations & Influencer Mixers",
      icon: <Sparkles className="w-6 h-6 text-[#B5532A]" />,
      description: "Host memorable, Instagram-worthy product launches and experiential media mixers surrounded by earthy aesthetics and artisan craft.",
      badge: "High Aesthetic",
    },
    {
      title: "Bridal Showers & Private Celebrations",
      icon: <Heart className="w-6 h-6 text-[#B5532A]" />,
      description: "An elegant, laughter-packed alternative to standard parties. Make matching bridesmaid trinket dishes, toast with mocktails, and celebrate.",
      badge: "Memorable & Chic",
    },
    {
      title: "Mobile On-Site Studio Pop-Ups",
      icon: <Layers className="w-6 h-6 text-[#B5532A]" />,
      description: "We bring our electric pottery wheels, master potters, stoneware clay, and tools directly to your office campus, wedding venue, or festival.",
      badge: "On-Location",
    },
  ];

  const corporateFaqs = [
    {
      question: "Can we stamp our corporate logo or event hashtag into the clay pieces?",
      answer: "Yes! We can custom 3D-emboss or stamp your company logo, event date, or custom hashtag into the bottom of every mug, bowl, or coaster created during the event.",
    },
    {
      question: "Can you provide official NTN invoices and vendor documentation for corporate finance?",
      answer: "Yes, we provide official corporate invoices, itemized tax breakdowns, NTN receipts, and formal vendor registration packets.",
    },
    {
      question: "What is the lead time needed for a corporate studio buyout?",
      answer: "We recommend booking 1 to 2 weeks in advance for weekday corporate offsites, and 2 to 3 weeks for weekend buyouts to ensure master artisan staffing and exclusive studio reservation.",
    },
    {
      question: "Do you arrange catering and refreshments for corporate groups?",
      answer: "We have dedicated catering tables and can coordinate artisan high tea, gourmet finger foods, mocktail stations, or welcome coffee bars upon request.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-clay-grain">
      {/* Hero */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E8DACB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#8C7A6B] uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-[#B5532A]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#B5532A]">Services</Link>
            <span>/</span>
            <span className="text-[#B5532A]">Event Organizers</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionEyebrow text="B2B &amp; PRIVATE EXPERIENCES" />
              
              <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] leading-tight">
                Corporate Pottery Offsites &amp; Bespoke Brand Events
              </h1>

              <p className="text-base sm:text-lg text-[#443C37] leading-relaxed">
                Elevate your corporate team culture or client activation with a tactile pottery masterclass in Clifton Karachi. Screen-free, deeply engaging, and rewarding — where every colleague crafts a tangible reminder of collaboration.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Building2 className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Studio Buyouts</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Coffee className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Catering Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Award className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Custom Branding</span>
                </div>
              </div>

              <div className="pt-4 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href="#book-event"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#B5532A] hover:bg-[#9A421D] text-white px-3 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-sm tracking-normal sm:tracking-wide shadow-md transition-all text-center flex items-center justify-center whitespace-nowrap"
                >
                  Request Proposal
                </a>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#25D366] hover:bg-[#20BE5C] text-white px-3 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-sm tracking-normal sm:tracking-wide shadow-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF3EA]">
                <Image
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate pottery team-building workshop in Karachi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow text="EVENT FORMATS" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016]">
              Tailored Corporate &amp; Private Formats
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
              From intimate executive leadership retreats of 8 people to 60+ participant corporate team festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-3xl p-8 border border-[#E8DACB] shadow-sm hover:border-[#B5532A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F9EDE6] flex items-center justify-center">
                      {event.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B5532A] bg-[#FAF3EA] px-3 py-1 rounded-full border border-[#E8DACB]">
                      {event.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#3A2016]">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#6E6259] mt-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F5EDE4] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3A2016]">Custom Headcount &amp; Timings</span>
                  <a
                    href="#book-event"
                    className="text-xs font-bold text-[#B5532A] hover:underline flex items-center gap-1"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & FAQ */}
      <section id="book-event" className="py-20 bg-[#3A2016] text-[#FAF3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionEyebrow text="EVENT INQUIRY" dark />
              
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
                Request Corporate / Event Proposal
              </h2>

              <p className="text-sm text-[#D9C5B2] leading-relaxed">
                Tell us about your organization, anticipated guest headcount, preferred date, and whether you prefer our Clifton studio or your on-site venue.
              </p>

              <div className="p-5 rounded-2xl bg-[#4D2D20] border border-[#6E6259]/40 space-y-2">
                <div className="text-xs font-bold text-[#C88D34] uppercase tracking-wider">
                  Corporate Invoicing &amp; Direct Assistance
                </div>
                <p className="text-xs text-[#FAF3EA]/80 leading-relaxed">
                  Tax compliant receipts, invoice generation, and custom branding options provided. Contact our corporate desk directly at <strong>0315 2984450</strong>.
                </p>
              </div>

              <div className="pt-6">
                <FAQAccordion items={corporateFaqs} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                initialService="event-organizers"
                sourcePage="/services/event-organizers"
                title="Corporate &amp; Event Quotation"
                subtitle="Provide your company/organizer details, headcount, and event type."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
