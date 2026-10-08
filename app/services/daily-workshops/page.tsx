import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, 
  Users, 
  Flame, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { LeadForm } from '@/components/LeadForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Daily Pottery Workshops in Clifton Karachi | Wheel Throwing Classes',
  description: 'Book hands-on daily pottery wheel throwing and clay hand-building workshops in Clifton Karachi. Beginners welcome, all stoneware clay, glazes, and kiln firing included.',
};

export default function DailyWorkshopsPage() {
  const timetable = [
    {
      slot: "Morning Calm Batch",
      time: "11:30 AM – 1:00 PM",
      days: "Tue, Thu, Sat, Sun",
      focus: "Wheel Centering & Cylinder Pulling (Mugs & Bowls)",
      badge: "Beginner Friendly",
    },
    {
      slot: "Afternoon Artisan Session",
      time: "3:00 PM – 4:30 PM",
      days: "Daily (Tue – Sun)",
      focus: "Wheel Throwing & Trimming + Hand-building Handles",
      badge: "Most Popular",
    },
    {
      slot: "Evening Sunset Throwing",
      time: "6:00 PM – 7:30 PM",
      days: "Daily (Tue – Sun)",
      focus: "Creative Vases, Planters & Glaze Application",
      badge: "Date Nights & Friends",
    },
    {
      slot: "Night Studio Session",
      time: "7:45 PM – 9:15 PM",
      days: "Fri, Sat, Sun",
      focus: "Advanced Wheel Shaping & Sculptural Forms",
      badge: "Weekend Special",
    },
  ];

  const workshopFaqs = [
    {
      question: "I have never touched a pottery wheel. Can I do this?",
      answer: "Yes! 100% of our daily workshops are designed from the ground up for total beginners. Our instructors sit with you on the wheel, guiding your hand pressure, speed control, and shaping techniques.",
    },
    {
      question: "How many pieces do I get to make?",
      answer: "In a standard 90-minute session, you will spin 2 to 3 clay balls on the wheel. You can choose your best 1 or 2 pieces to be professionally trimmed, bisque-fired, glazed, and final-fired in our 1200°C kiln.",
    },
    {
      question: "When can I collect my finished pieces?",
      answer: "Stoneware clay requires slow drying, 1st bisque firing (1000°C), glazing, and 2nd stoneware firing (1200°C). Your waterproof, microwave-safe ceramic creation will be ready in 10 to 14 days for studio pickup or Karachi courier delivery.",
    },
    {
      question: "Can two people share a wheel?",
      answer: "Each booking guarantees your own dedicated electric pottery wheel. If you come as a couple or duo, your wheels will be placed right next to each other so you can create side-by-side.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-clay-grain">
      {/* Hero with Breadcrumb */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E8DACB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#8C7A6B] uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-[#B5532A]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#B5532A]">Services</Link>
            <span>/</span>
            <span className="text-[#B5532A]">Daily Workshops</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionEyebrow text="HANDS-ON WHEEL CLASSES" />
              
              <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] leading-tight">
                Daily Pottery Workshops &amp; Wheel Throwing in Clifton
              </h1>

              <p className="text-base sm:text-lg text-[#443C37] leading-relaxed">
                Disconnect from screens and immerse yourself in the tactile flow of clay. Master the hypnotic spin of the potter&apos;s wheel, shape organic coffee mugs and bowls, and take home ceramic pieces that carry your personal touch.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-[#FAF3EA] px-4 py-2 rounded-xl border border-[#E8DACB]">
                  <Clock className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">90 Mins / Session</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] px-4 py-2 rounded-xl border border-[#E8DACB]">
                  <Users className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Individual Wheels</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] px-4 py-2 rounded-xl border border-[#E8DACB]">
                  <Flame className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Kiln Firing Included</span>
                </div>
              </div>

              <div className="pt-4 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href="#book-workshop"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#B5532A] hover:bg-[#9A421D] text-white px-3 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-sm tracking-normal sm:tracking-wide shadow-md transition-all text-center flex items-center justify-center whitespace-nowrap"
                >
                  Reserve a Wheel Slot
                </a>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#25D366] hover:bg-[#20BE5C] text-white px-3 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-sm tracking-normal sm:tracking-wide shadow-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF3EA]">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
                  alt="Pottery workshop class in Karachi"
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

      {/* Weekly Timetable */}
      <section className="py-16 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow text="STUDIO SCHEDULE" />
            <h2 className="font-serif-title text-3xl font-bold text-[#3A2016]">
              Weekly Workshop Timetable
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
              We run multiple intimate batches daily (Monday to Sunday, open all 7 days). Pre-booking is recommended as wheels fill fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {timetable.map((slot) => (
              <div
                key={slot.slot}
                className="bg-white rounded-3xl p-6 border border-[#E8DACB] shadow-sm hover:border-[#B5532A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B5532A] bg-[#F9EDE6] px-3 py-1 rounded-full">
                      {slot.badge}
                    </span>
                    <span className="text-xs font-medium text-[#6E6259]">{slot.days}</span>
                  </div>

                  <h3 className="font-serif-title text-xl font-bold text-[#3A2016]">
                    {slot.slot}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-[#C88D34] my-2">
                    <Clock className="w-4 h-4" />
                    <span>{slot.time}</span>
                  </div>

                  <p className="text-xs text-[#443C37] leading-relaxed">
                    <strong>Focus:</strong> {slot.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EDE4] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3A2016]">Rs. 3,500 / seat</span>
                  <a
                    href="#book-workshop"
                    className="text-xs font-bold text-[#B5532A] hover:underline flex items-center gap-1"
                  >
                    <span>Book This Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow text="ALL-INCLUSIVE PROMISE" />
            <h2 className="font-serif-title text-3xl font-bold text-[#3A2016]">
              Everything Included In Your Workshop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF3EA] border border-[#E8DACB]">
              <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] flex items-center justify-center text-[#B5532A] font-bold mb-4">
                1
              </div>
              <h4 className="font-serif-title font-bold text-lg text-[#3A2016]">Pure Stoneware Clay</h4>
              <p className="text-xs text-[#6E6259] mt-2 leading-relaxed">
                Unlimited practice clay + premium prepared stoneware ball for your final pieces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF3EA] border border-[#E8DACB]">
              <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] flex items-center justify-center text-[#B5532A] font-bold mb-4">
                2
              </div>
              <h4 className="font-serif-title font-bold text-lg text-[#3A2016]">Electric Potter Wheel</h4>
              <p className="text-xs text-[#6E6259] mt-2 leading-relaxed">
                Dedicated variable-speed electric wheel per person, pottery sponges, ribs, and trimming wires.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF3EA] border border-[#E8DACB]">
              <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] flex items-center justify-center text-[#B5532A] font-bold mb-4">
                3
              </div>
              <h4 className="font-serif-title font-bold text-lg text-[#3A2016]">Underglazes &amp; Paints</h4>
              <p className="text-xs text-[#6E6259] mt-2 leading-relaxed">
                Palette of 15+ ceramic pigment colors and brushes to paint custom patterns on your wet pot.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF3EA] border border-[#E8DACB]">
              <div className="w-10 h-10 rounded-xl bg-[#F9EDE6] flex items-center justify-center text-[#B5532A] font-bold mb-4">
                4
              </div>
              <h4 className="font-serif-title font-bold text-lg text-[#3A2016]">1200°C Kiln Firing</h4>
              <p className="text-xs text-[#6E6259] mt-2 leading-relaxed">
                Complete bisque firing and clear stoneware glaze firing to ensure your piece is fully food &amp; liquid safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Booking Form & FAQ */}
      <section id="book-workshop" className="py-20 bg-[#3A2016] text-[#FAF3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionEyebrow text="RESERVE YOUR WHEEL" dark />
              
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
                Book a Daily Workshop Seat
              </h2>

              <p className="text-sm text-[#D9C5B2] leading-relaxed">
                Fill out the quick form with your preferred date and slot. Our studio team will instantly verify seat availability and confirm via WhatsApp.
              </p>

              <div className="p-5 rounded-2xl bg-[#4D2D20] border border-[#6E6259]/40 space-y-3">
                <div className="text-xs font-bold text-[#C88D34] uppercase tracking-wider">
                  Pricing &amp; Details
                </div>
                <div className="flex justify-between text-sm">
                  <span>Single Participant:</span>
                  <span className="font-bold text-white">Rs. 3,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Couple / Duo Package:</span>
                  <span className="font-bold text-white">Rs. 6,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>4-Class Month Course:</span>
                  <span className="font-bold text-white">Rs. 12,000</span>
                </div>
              </div>

              <div className="pt-4">
                <FAQAccordion items={workshopFaqs} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm 
                initialService="daily-workshops" 
                sourcePage="/services/daily-workshops"
                title="Workshop Seat Reservation"
                subtitle="Select your preferred date, batch timing, and number of participants."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
