import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Brain, 
  FileText, 
  Bus, 
  Users, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { LeadForm } from '@/components/LeadForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'School Pottery Field Trips in Karachi | STEAM Clay Workshops',
  description: 'Educational pottery field trips for Karachi schools. Connect STEAM curriculum, tactile sensory fine-motor learning, and Indus Valley ceramic heritage in Clifton.',
};

export default function SchoolTripsPage() {
  const learningPillars = [
    {
      title: "STEAM & Earth Science",
      icon: <Brain className="w-6 h-6 text-[#B5532A]" />,
      description: "Students learn how sedimentary earthen minerals transform through thermal kiln vitrification at 1200°C.",
    },
    {
      title: "Tactile Sensory & Motor Skills",
      icon: <Sparkles className="w-6 h-6 text-[#B5532A]" />,
      description: "Developing bi-lateral hand coordination, finger dexterity, and pressure control while centering clay on the wheel.",
    },
    {
      title: "Cultural Ceramic Heritage",
      icon: <BookOpen className="w-6 h-6 text-[#B5532A]" />,
      description: "Appreciating Pakistan's 5,000-year Indus Valley pottery legacy (Mohenjo-daro terracotta vessels & slip painting).",
    },
    {
      title: "Mindfulness & Focus",
      icon: <ShieldCheck className="w-6 h-6 text-[#B5532A]" />,
      description: "Screen-free calming tactile art that encourages patient problem-solving, resilience, and creative pride.",
    },
  ];

  const schoolFaqs = [
    {
      question: "What age groups or grades do you accommodate?",
      answer: "We host school groups from Pre-School (ages 4+) up to O/A Level and University Fine Arts students. Our master potters adapt the instruction level, scientific depth, and hands-on complexity to match the age group.",
    },
    {
      question: "What is the maximum group size per visit?",
      answer: "Our Clifton studio can comfortably host up to 35–40 students per batch with rotating stations (wheel throwing station, slab hand-building station, and underglaze painting station). For larger batches (50-150+ students), we organize multi-session shifts or our Mobile Studio On-Campus setup.",
    },
    {
      question: "Can your mobile pottery team visit our school campus?",
      answer: "Yes! We can bring our mobile electric pottery wheels, natural clay, tools, and instructors directly to your school campus anywhere in Karachi.",
    },
    {
      question: "Are risk assessments and safety protocols provided for school administrations?",
      answer: "Yes, we provide an official Teacher Information & Safety Pack detailing studio hygiene, non-toxic materials certifications, and risk assessments for school approvals.",
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
            <span className="text-[#B5532A]">School Field Trips</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionEyebrow text="EDUCATIONAL STEAM WORKSHOPS" />
              
              <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] leading-tight">
                Hands-On Pottery Field Trips for Karachi Schools
              </h1>

              <p className="text-base sm:text-lg text-[#443C37] leading-relaxed">
                Bring art and science to life! Our structured school pottery field trips give students a memorable sensory experience, combining wheel physics, ceramic earth sciences, and creative expression in a safe, guided studio environment.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Users className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Grades Pre-K to A-Level</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Bus className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">Studio &amp; On-Campus</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <FileText className="w-4 h-4 text-[#B5532A]" />
                  <span className="text-xs font-bold text-[#3A2016]">STEAM Aligned</span>
                </div>
              </div>

              <div className="pt-4 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href="#book-trip"
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
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
                  alt="School field trip students learning pottery wheel in Karachi"
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

      {/* Educational Value Pillars */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow text="CURRICULUM BENEFITS" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016]">
              Why Karachi Educators Choose Our Pottery Trips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-7 border border-[#E8DACB] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F9EDE6] flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-[#3A2016]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6259] mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-[#E8DACB] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-[#B5532A] uppercase tracking-wider">Special Educational Rates</div>
              <h3 className="font-serif-title text-2xl font-bold text-[#3A2016] mt-1">
                From Rs. 1,500 / Student (All Materials &amp; Kiln Firing Included)
              </h3>
              <p className="text-xs text-[#6E6259] mt-1">
                Complimentary admission for coordinating teachers and accompanying faculty.
              </p>
            </div>
            <a
              href="#book-trip"
              className="bg-[#B5532A] hover:bg-[#9A421D] text-white px-7 py-3 rounded-full font-bold text-sm tracking-wide shadow-sm flex-shrink-0"
            >
              Get Custom School Quote
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form & FAQ */}
      <section id="book-trip" className="py-20 bg-[#3A2016] text-[#FAF3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionEyebrow text="SCHOOL BOOKINGS" dark />
              
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
                Book a School Field Trip
              </h2>

              <p className="text-sm text-[#D9C5B2] leading-relaxed">
                Submit your school details, target grade, expected student count, and requested dates. We will prepare an official school trip proposal and invoice for your administration.
              </p>

              <div className="p-5 rounded-2xl bg-[#4D2D20] border border-[#6E6259]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C88D34] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Teacher Resource Pack Included</span>
                </div>
                <p className="text-xs text-[#FAF3EA]/80 leading-relaxed">
                  Includes printable student pottery worksheets, Indus Valley ceramic timeline cards, and step-by-step firing guides for classrooms.
                </p>
              </div>

              <div className="pt-6">
                <FAQAccordion items={schoolFaqs} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                initialService="school-trips"
                sourcePage="/services/school-trips"
                title="School Trip Booking &amp; Proposal"
                subtitle="Provide your school name, student headcount, and requested date."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
