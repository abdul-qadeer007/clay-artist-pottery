import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  PartyPopper,
  Users,
  ShieldCheck,
  Award,
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { LeadForm } from '@/components/LeadForm';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Complete Event Entertainment & Clay Packages in Karachi | Birthdays & Carnivals',
  description: 'Unforgettable birthdays, school carnivals, and private parties in Karachi. 15 premium attractions: live pottery, magic shows, clowns, puppets, jumping castles, popcorn carts, and DJ setups.',
  openGraph: {
    title: 'Complete Event Entertainment & Clay Packages | Clay Artist Pottery Karachi',
    description: 'All-in-one celebration entertainment in Karachi: Live Pottery Wheels, Magic Shows, Clowns, Puppet Theaters, Bouncy Castles, Popcorn Carts, and DJ Sound Systems.',
    images: ['/images/logo.png'],
  },
};

interface EventService {
  id: number;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  category: 'Performance' | 'Live Experience' | 'Party Attractions' | 'Audio & Décor';
}

const eventServices: EventService[] = [
  {
    id: 1,
    title: "Magic Show",
    badge: "Family Favorite",
    description: "Mind-bending illusions, interactive family magic, and sleight-of-hand that leaves both children and adults spellbound.",
    highlights: ["Interactive audience tricks", "Comic illusions & levitation", "Special birthday kid trick"],
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    category: "Performance",
  },
  {
    id: 2,
    title: "Air Clown",
    badge: "Kids Comedy",
    description: "Hilarious comedy routines, creative balloon twisting sculptures, slapstick stage humor, and joyful laughs for all ages.",
    highlights: ["Custom balloon animal twisting", "High-energy comedic sketches", "Photo sessions with kids"],
    imageUrl: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?auto=format&fit=crop&w=800&q=80",
    category: "Performance",
  },
  {
    id: 3,
    title: "Puppet Show",
    badge: "Interactive Theater",
    description: "Classic storytelling, vibrant characters, and engaging puppetry that sparks kids' imagination and delivers moral values with fun.",
    highlights: ["Live vocal voice acting", "Engaging puppet characters", "Child-friendly storylines"],
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    category: "Performance",
  },
  {
    id: 4,
    title: "Live Clay Pottery",
    badge: "Signature Experience",
    description: "Real electric pottery wheels with master artisan coaching. Guests throw their own clay pots and take home handcrafted ceramic souvenirs.",
    highlights: ["Real motorized pottery wheels", "Master artisan instructors", "Clay keepsake for every guest"],
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    category: "Live Experience",
  },
  {
    id: 5,
    title: "Popcorn Cart",
    badge: "Live Snack Bar",
    description: "Authentic vintage carnival popcorn cart serving hot, buttery, freshly popped corn in customized retro party cones.",
    highlights: ["Hot & fresh continuous popping", "Classic theatre butter flavor", "Decorative vintage cart setup"],
    imageUrl: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80",
    category: "Party Attractions",
  },
  {
    id: 6,
    title: "Balloon Decoration",
    badge: "Thematic Décor",
    description: "Grand organic balloon arches, themed stage backdrops, column pillars, and ceiling balloon drops tailored to your party theme.",
    highlights: ["Theme-matched color palettes", "Grand photo-booth arches", "Premium long-lasting balloons"],
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    category: "Audio & Décor",
  },
  {
    id: 7,
    title: "Sound System",
    badge: "Pro Audio Setup",
    description: "High-definition professional PA sound system with wireless microphones, audio mixer, and operator for speeches, announcements, and background beats.",
    highlights: ["Dual wireless microphones", "Crystal clear speech & music", "Dedicated on-site sound operator"],
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    category: "Audio & Décor",
  },
  {
    id: 8,
    title: "Face Painting",
    badge: "Art & Glamour",
    description: "Professional face painters transforming kids into superheroes, butterfly princesses, mythical animals, and glitter motifs with 100% skin-safe colors.",
    highlights: ["100% non-toxic washable paints", "Wide book of creative designs", "Quick, hygienic application"],
    imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    category: "Live Experience",
  },
  {
    id: 9,
    title: "Kids Games & Fun Activities",
    badge: "High-Energy Host",
    description: "Interactive party host organizing thrilling team competitions: tug-of-war, musical chairs, lemon-and-spoon races, and prize giveaways.",
    highlights: ["Energetic party game master", "Props & race gear included", "Exciting mini gift giveaways"],
    imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
    category: "Live Experience",
  },
  {
    id: 10,
    title: "DJ Sound System",
    badge: "Stage & Lights",
    description: "Professional party DJ playing family-friendly dance hits, vibrant rhythmic party tracks, dynamic laser stage lights, and haze atmosphere.",
    highlights: ["Pro DJ mixing station", "Dance party lighting rig", "Custom event playlist curation"],
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    category: "Audio & Décor",
  },
  {
    id: 11,
    title: "Mascot Character",
    badge: "Meet & Greet",
    description: "Hug-friendly giant teddy bear or popular cartoon mascot greeting guests, posing for family photos, and dancing during cake cutting.",
    highlights: ["High-quality clean costume", "Interactive photo moments", "Cake-cutting dance routine"],
    imageUrl: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
    category: "Performance",
  },
  {
    id: 12,
    title: "Candy Floss / Cotton Candy",
    badge: "Sweet Station",
    description: "Live spun sugar cart making cloud-like pink, blue, and vanilla cotton candy on sticks right before the delighted eyes of children.",
    highlights: ["Live on-demand spinning", "Multiple sweet pastel flavors", "Endless joyful candy clouds"],
    imageUrl: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    category: "Party Attractions",
  },
  {
    id: 13,
    title: "Food Stalls",
    badge: "Live Catering",
    description: "Live interactive carnival food stalls serving mini sliders, crispy French fries, spicy Karachi chaat, nuggets, and chilled drinks.",
    highlights: ["Live hygienic fryers & grills", "Crowd-pleasing kid snacks", "Clean branded food stalls"],
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    category: "Party Attractions",
  },
  {
    id: 14,
    title: "Jumping Castle",
    badge: "Inflatable Fun",
    description: "Commercial-grade, ultra-clean inflatable bouncy castles with safe safety walls, padded entry mats, and continuous supervision.",
    highlights: ["Heavy-duty sanitized PVC", "Safety perimeter & entry mats", "Dedicated safety attendant"],
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    category: "Party Attractions",
  },
  {
    id: 15,
    title: "Monkey Character",
    badge: "Character Mascot",
    description: "Playful roaming primate entertainer with mischievous tricks, fun high-fives, photo poses, and cheerful carnival antics.",
    highlights: ["Engaging physical comedy", "High-energy crowd walks", "Unforgettable selfie moments"],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    category: "Performance",
  },
];

const eventCombos = [
  {
    name: "Classic Celebration Bundle",
    badge: "Popular for Birthdays",
    tagline: "The perfect starter entertainment mix for home and lawn parties.",
    includes: [
      "Live Clay Pottery Wheel Station (Artisan Guided)",
      "Interactive 40-Min Magic Show",
      "Live Popcorn Cart with Unlimited Servings",
      "Face Painting Station (Skin-Safe Colors)",
      "Theme Balloon Decoration Arch"
    ],
    idealFor: "15 – 35 Kids & Families",
  },
  {
    name: "Carnival Fiesta Royale",
    badge: "Best Value All-Rounder",
    tagline: "Our most requested package for school fairs and mega birthdays.",
    includes: [
      "Dual Electric Pottery Wheels with Clay Supplies",
      "Air Clown with Balloon Animal Sculptures",
      "Commercial Inflatable Jumping Castle",
      "Live Cotton Candy / Candy Floss Station",
      "Popcorn Cart with Vintage Stall",
      "Pro Sound System & Party Music Host"
    ],
    idealFor: "40 – 100+ Guests",
  },
  {
    name: "Grand Gala Master Package",
    badge: "Full Festival Buyout",
    tagline: "Complete turnkey festival setup for corporate carnivals and massive galas.",
    includes: [
      "All 15 Entertainment Attractions Included",
      "Multiple Live Pottery Wheels & Glaze Stamping",
      "Magic Show, Puppet Theater & Comic Clown Stage",
      "Giant Mascot & Monkey Character Meet & Greets",
      "Live Food Stalls (Sliders, Fries & Chaat)",
      "Pro DJ Sound System with Moving Stage Lights",
      "Dedicated Event Coordinator & Setup Crew"
    ],
    idealFor: "Mega Carnivals & Brand Galas",
  },
];

const packageFaqs = [
  {
    question: "Can we mix and match individual activities to create a custom package?",
    answer: "Yes, absolutely! You can pick any combination of our 15 activities (for example: Pottery + Magic Show + Popcorn Cart) or select one of our curated bundles. We customize duration, setup size, and staff based on your venue.",
  },
  {
    question: "Do you provide on-site setup anywhere in Karachi?",
    answer: "Yes! We cater to all areas across Karachi including Clifton, DHA Phases 1–8, PECHS, KDA, Gulshan-e-Iqbal, Malir Cantt, Bahria Town, and North Nazimabad. We bring all equipment, generators if needed, materials, and staff directly to your home, school, club, or banquet.",
  },
  {
    question: "Are the pottery clay and face paints safe for children?",
    answer: "Safety is our number one priority. Our pottery clay is 100% natural, non-toxic, chemical-free stoneware that washes out effortlessly with water. Our face paints are FDA-compliant, hypoallergenic, and dermatologically tested for delicate children's skin.",
  },
  {
    question: "How much power / space is required for the inflatable jumping castle and popcorn carts?",
    answer: "Each attraction requires a standard 220V wall socket. If your venue is outdoors or has power constraints, let us know in advance and we can arrange portable silent generators for seamless operation.",
  },
  {
    question: "How far in advance should we confirm our booking?",
    answer: "We recommend reserving at least 1–2 weeks in advance to ensure your preferred entertainers, artists, and equipment are reserved exclusively for your date and time slot.",
  },
];

export default function EventPackagesPage() {
  return (
    <div className="flex flex-col w-full bg-clay-grain">
      {/* 1. PAGE HERO & HEADER */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E8DACB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#8C7A6B] uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-[#B5532A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#B5532A] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#B5532A]">Event Packages</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-[#F9EDE6] text-[#B5532A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8DACB]">
                <Sparkles className="w-4 h-4 text-[#B5532A]" />
                <span>ALL-IN-ONE CELEBRATION PACKAGES • KARACHI</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-tight">
                Complete Event Entertainment &amp; Clay Packages
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#443C37] leading-relaxed">
                Unforgettable birthdays, school carnivals, and private parties with live pottery making, enchanting performances, and festive activities.
              </p>

              {/* Feature tags row (3 compact pills) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <Sparkles className="w-4 h-4 text-[#B5532A] shrink-0" />
                  <span className="text-xs font-bold text-[#3A2016]">15 Live Activities</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB]">
                  <CheckCircle2 className="w-4 h-4 text-[#B5532A] shrink-0" />
                  <span className="text-xs font-bold text-[#3A2016]">Custom Packages</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF3EA] p-3 rounded-xl border border-[#E8DACB] col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-[#B5532A] shrink-0" />
                  <span className="text-xs font-bold text-[#3A2016]">All Karachi Covered</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-row items-center justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href="https://wa.me/923152984450?text=Hi%20Clay%20Artist%20Studio!%20I%20am%20interested%20in%20booking%20Event%20Packages.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#25D366] hover:bg-[#20BE5C] text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href="#quote-form"
                  className="px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#B5532A] hover:bg-[#9A421D] text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF3EA]">
                <Image
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Complete festive event entertainment & live pottery celebration in Karachi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-stretch max-w-7xl mx-auto pt-10 border-t border-[#E8DACB]/80 mt-10 lg:mt-12">
            <div className="h-full min-h-[64px] flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/90 border border-[#E7DCCE] shadow-sm text-center">
              <PartyPopper className="w-5 h-5 text-[#C05A2B] shrink-0" />
              <span className="flex items-center text-left md:text-center text-xs md:text-sm font-medium text-[#2C1810] leading-tight">
                Complete Entertainment
              </span>
            </div>
            <div className="h-full min-h-[64px] flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/90 border border-[#E7DCCE] shadow-sm text-center">
              <Users className="w-5 h-5 text-[#C05A2B] shrink-0" />
              <span className="flex items-center text-left md:text-center text-xs md:text-sm font-medium text-[#2C1810] leading-tight">
                Kids &amp; Family Friendly
              </span>
            </div>
            <div className="h-full min-h-[64px] flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/90 border border-[#E7DCCE] shadow-sm text-center">
              <ShieldCheck className="w-5 h-5 text-[#C05A2B] shrink-0" />
              <span className="flex items-center text-left md:text-center text-xs md:text-sm font-medium text-[#2C1810] leading-tight">
                Professional &amp; Trained Team
              </span>
            </div>
            <div className="h-full min-h-[64px] flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/90 border border-[#E7DCCE] shadow-sm text-center">
              <Award className="w-5 h-5 text-[#C05A2B] shrink-0" />
              <span className="flex items-center text-left md:text-center text-xs md:text-sm font-medium text-[#2C1810] leading-tight">
                100% Safe &amp; Reliable
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 15 PREMIUM EVENT CARDS (GRID LAYOUT) */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <SectionEyebrow text="15 PREMIUM ATTRACTIONS" />
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-2">
            Carnival Fun, Live Pottery &amp; Stage Shows
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
            Explore our complete roster of live studio pottery, carnival fun, stage performers, and delicious party stations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {eventServices.map((service) => {
            const waBookingUrl = `https://wa.me/923152984450?text=${encodeURIComponent(`Hi! I am interested in booking the ${service.title} for an upcoming event.`)}`;
            
            return (
              <div 
                key={service.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E8DACB] shadow-[0_6px_25px_rgba(58,32,22,0.06)] hover:shadow-[0_12px_35px_rgba(181,83,42,0.15)] hover:border-[#B5532A]/50 transition-all duration-300"
              >
                {/* Image aspect ratio 4:3 with smooth zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF3EA]">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-black/55 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.category}
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-[#B5532A] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {service.badge}
                  </div>

                  {/* Title overlay on bottom of photo */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#FFFDF9]">
                  <div>
                    <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature bullet highlights */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-[#F0E6DA]">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#443C37] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B5532A] shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to WhatsApp */}
                  <a
                    href={waBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 bg-[#FAF3EA] hover:bg-[#B5532A] text-[#3A2016] hover:text-white border border-[#E8DACB] hover:border-[#B5532A] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 group-hover:bg-[#B5532A] group-hover:text-white cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                    <span>Book Activity on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. POPULAR CURATED COMBO PACKAGES */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow text="CURATED COMBO PACKAGES" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-2">
              Popular Celebration Bundles
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
              Save time &amp; budget with our pre-configured, best-selling celebration packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventCombos.map((combo, i) => (
              <div
                key={i}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all ${
                  i === 1
                    ? 'bg-[#FAF3EA] border-2 border-[#B5532A] shadow-xl md:-translate-y-2'
                    : 'bg-[#FFFDF9] border border-[#E8DACB] shadow-md'
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B5532A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="inline-block bg-[#F9EDE6] text-[#B5532A] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {combo.badge}
                  </div>
                  <h3 className="font-serif-title text-2xl font-bold text-[#3A2016] mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6259] leading-relaxed mb-6">
                    {combo.tagline}
                  </p>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#8C7A6B] mb-3">
                    Included in this bundle:
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {combo.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3A2016]">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#E8DACB] mt-4">
                  <div className="text-xs text-[#8C7A6B] font-semibold mb-3">
                    Ideal Audience: <span className="text-[#3A2016] font-bold">{combo.idealFor}</span>
                  </div>
                  <a
                    href={`https://wa.me/923152984450?text=${encodeURIComponent(`Hi Clay Artist Studio! I am interested in booking the "${combo.name}" package.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-2xl font-bold text-sm transition-all ${
                      i === 1
                        ? 'bg-[#B5532A] hover:bg-[#9A421D] text-white shadow-md'
                        : 'bg-[#FAF3EA] hover:bg-[#E8DACB] text-[#3A2016] border border-[#E8DACB]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire About {combo.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM INQUIRY FORM SECTION */}
      <section id="quote-form" className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <LeadForm
          initialService="event-organizers"
          sourcePage="/event-packages"
          title="Request a Custom Event Package Quote"
          subtitle="Tell us which activities you would like, your event date, and estimated guest count. We will send a customized proposal within 2 hours."
        />
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#E8DACB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionEyebrow text="FREQUENTLY ASKED QUESTIONS" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-2">
              Event Planning &amp; Setup Details
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
              Everything you need to know about booking complete celebration packages in Karachi.
            </p>
          </div>
          <FAQAccordion items={packageFaqs} />
        </div>
      </section>
    </div>
  );
}
