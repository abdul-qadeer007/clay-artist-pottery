import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  Cake, 
  Users, 
  Gift, 
  Camera, 
  MessageCircle
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { LeadForm } from '@/components/LeadForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Pottery Birthday Parties in Karachi | Kids, Teens & Adults Celebrations',
  description: 'Host an unforgettable pottery birthday party in Clifton Karachi! Hands-on clay wheel throwing, sculpting games, keepsake ceramic party favors, and dedicated studio party space.',
};

export default function BirthdayPartiesPage() {
  const partyPackages = [
    {
      name: "Little Potters Party",
      ageGroup: "Ages 5 – 11 Years",
      price: "Rs. 25,000",
      guests: "Up to 10 Kids (Rs. 2,000/extra child)",
      duration: "2 Hours Total",
      includes: [
        "Tactile clay monster / animal hand-sculpting",
        "Individual potter's wheel experience per child",
        "Colorful ceramic painting with non-toxic underglazes",
        "Dedicated party host & clean aprons for all kids",
        "Each child takes home their fired glazed creation",
        "Dedicated cake-cutting area with studio music",
      ],
      badge: "Best for Kids",
    },
    {
      name: "Teen & Adult Artisan Soiree",
      ageGroup: "Teens & Adults (12+)",
      price: "Rs. 32,000",
      guests: "Up to 10 Guests (Rs. 2,500/extra guest)",
      duration: "2.5 Hours Total",
      includes: [
        "Full wheel-throwing workshop (mugs, bowls, planters)",
        "Advanced handle attachment and texture stamping",
        "Underglaze painting & decorative detailing",
        "Exclusive studio area buyout",
        "Bring your own cake, mocktails, and food platters",
        "Kiln-fired, microwave-safe keepsake for every guest",
      ],
      badge: "Most Popular",
    },
    {
      name: "VIP Studio Buyout Gala",
      ageGroup: "All Ages / Large Families",
      price: "Rs. 55,000",
      guests: "Up to 25 Guests",
      duration: "3 Hours Total",
      includes: [
        "Entire pottery studio reserved exclusively for your party",
        "Multiple master potters & assistants dedicated to guests",
        "Unlimited clay & multi-wheel simultaneous sessions",
        "Customized party banner & photo-booth backdrop",
        "Catering setup space with refrigeration support",
        "Fast-track priority kiln firing for all party pieces",
      ],
      badge: "VIP Exclusive",
    },
  ];

  const partyFaqs = [
    {
      question: "Can we bring our own birthday cake, snacks, and drinks?",
      answer: "Yes, 100%! We provide a dedicated clean party table for cake cutting, snacks, cupcakes, pizzas, and drinks. We have refrigerator space and a cake serving setup ready for you.",
    },
    {
      question: "Is the clay safe and washable for kids' clothes?",
      answer: "Our studio clay is 100% natural, non-toxic, and chemical-free. It washes out completely from fabrics with plain water. We also supply aprons for all kids and guests.",
    },
    {
      question: "How do guests get their finished pottery pieces after the party?",
      answer: "After the party, we dry, bisque-fire, and glaze all pieces. We pack each child's creation in a labeled gift box with their name on it, ready for the host to pick up or receive via Karachi delivery in 10-14 days.",
    },
    {
      question: "How far in advance should we reserve a birthday date?",
      answer: "Weekend afternoon slots (Saturdays and Sundays) tend to fill up 2–3 weeks in advance. We recommend reserving as early as possible with a small deposit to secure your preferred date and time.",
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
            <span className="text-[#B5532A]">Birthday Parties</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionEyebrow text="UNFORGETTABLE CELEBRATIONS" />
              
              <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] leading-tight">
                Pottery Birthday Parties That Spark Pure Wonder
              </h1>

              <p className="text-base sm:text-lg text-[#443C37] leading-relaxed">
                Skip the generic party venues! Give the birthday celebrant and their friends a tactile, laughter-filled pottery experience in Clifton Karachi. Every guest spins the wheel, creates their own pottery piece, and takes home a lifelong ceramic keepsake.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Cake className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Cake Area Provided</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Gift className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Every Kid Keeps Art</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Users className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Dedicated Host</span>
                </div>
              </div>

              <div className="pt-4 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href="#book-party"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#B5532A] hover:bg-[#9A421D] text-white px-3 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-sm tracking-normal sm:tracking-wide shadow-md transition-all text-center flex items-center justify-center whitespace-nowrap"
                >
                  Check Availability
                </a>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#25D366] hover:bg-[#20BE5C] text-white px-3 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-sm tracking-normal sm:tracking-wide shadow-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Planner</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF3EA]">
                <Image
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                  alt="Kids celebrating birthday party with pottery wheel in Karachi"
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

      {/* Party Packages */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow text="PACKAGES &amp; RATES" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016]">
              Choose Your Celebration Package
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
              All party packages include clay, wheel time, paints, glaze firing, aprons, and dedicated studio party space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-3xl p-8 border border-[#E8DACB] shadow-sm hover:border-[#B5532A] hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B5532A] bg-[#F9EDE6] px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-medium text-[#6E6259]">{pkg.duration}</span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#3A2016]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C7A6B] uppercase tracking-wider mt-0.5">
                    {pkg.ageGroup}
                  </p>

                  <div className="my-5 pb-4 border-b border-[#F5EDE4]">
                    <div className="font-serif-title text-3xl font-bold text-[#B5532A]">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-[#6E6259] mt-0.5">{pkg.guests}</div>
                  </div>

                  <div className="space-y-3">
                    {pkg.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-[#443C37]">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F5EDE4]">
                  <a
                    href="#book-party"
                    className="w-full bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#B5532A] py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center block transition-colors border border-[#E8DACB]"
                  >
                    Select This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & FAQ */}
      <section id="book-party" className="py-20 bg-[#3A2016] text-[#FAF3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionEyebrow text="PLAN YOUR PARTY" dark />
              
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
                Reserve Birthday Party Date
              </h2>

              <p className="text-sm text-[#D9C5B2] leading-relaxed">
                Provide the celebrant&apos;s details, expected guest count, and ideal date. We will check the studio schedule and message you with package confirmation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#FAF3EA]">
                  <Camera className="w-4 h-4 text-[#C88D34]" />
                  <span>Free studio photo backdrop &amp; celebration music</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#FAF3EA]">
                  <Cake className="w-4 h-4 text-[#C88D34]" />
                  <span>Outside catering &amp; birthday cakes welcome</span>
                </div>
              </div>

              <div className="pt-6">
                <FAQAccordion items={partyFaqs} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                initialService="birthday-parties"
                sourcePage="/services/birthday-parties"
                title="Birthday Party Reservation"
                subtitle="Tell us the celebrant's age, number of guests, and desired party date."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
