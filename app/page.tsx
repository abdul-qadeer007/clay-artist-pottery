import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { ClayVaseAnimatedLogo } from '@/components/ClayVaseAnimatedLogo';
import { PotteryJourney } from '@/components/PotteryJourney';
import { WhatYouCanCreate } from '@/components/WhatYouCanCreate';
import { VideoEmbed } from '@/components/VideoEmbed';
import { GalleryGrid } from '@/components/GalleryGrid';
import { TestimonialsSlider } from '@/components/TestimonialsSlider';
import { FAQAccordion } from '@/components/FAQAccordion';
import { LeadForm } from '@/components/LeadForm';

export default function HomePage() {
  const trustIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B5532A]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#B5532A]" />,
    Award: <Award className="w-6 h-6 text-[#B5532A]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#B5532A]" />,
  };

  const servicesData = [
    {
      title: "Daily Workshops",
      href: "/services/daily-workshops",
      tag: "Beginner & Advanced",
      price: `Starting from Rs. ${siteConfig.pricing.startingWorkshop.toLocaleString()}`,
      description: "Step-by-step guidance on electric pottery wheels. Learn clay centering, pulling, trimming, and glaze painting in single-session or weekly batches.",
      features: ["All clay & tools provided", "1-on-1 wheel guidance", "Take home your fired pot"],
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Birthday Parties",
      href: "/services/birthday-parties",
      tag: "Kids, Teens & Adults",
      price: `Packages from Rs. ${siteConfig.pricing.startingParty.toLocaleString()}`,
      description: "Turn birthdays into tactile pottery celebrations! Wheel throwing games, hand-sculpting competitions, party photo backdrops, and take-home ceramic gifts.",
      features: ["Dedicated studio host", "Custom themes & cake setup", "Keepsake bowls for all guests"],
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "School Field Trips",
      href: "/services/school-trips",
      tag: "Educational STEAM",
      price: `From Rs. ${siteConfig.pricing.startingSchoolStudent.toLocaleString()} / Student`,
      description: "Hands-on sensory, motor-skill, and scientific exploration for Karachi schools. Students discover geology, kinetic wheel physics, and ceramic art.",
      features: ["Curriculum-aligned guides", "Safe non-toxic clay", "Teacher resource packet"],
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Event Organizers & Corporate",
      href: "/services/event-organizers",
      tag: "Team Bonding & B2B",
      price: `Custom Quotes Available`,
      description: "Unplug from digital screens with immersive pottery team-building, brand PR activations, bridal showers, and customized on-site pop-up workshops.",
      features: ["Exclusive studio buyout", "Catering & cocktail tables", "Custom branded ceramic stamps"],
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-clay-grain">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-16 lg:pb-24 border-b border-[#E8DACB]">
        {/* Subtle decorative background blur blobs */}
        <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#B5532A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#C88D34]/12 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Eyebrow + Headings + Intro Text + CTAs + Trust Chips */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <SectionEyebrow text="CLIFTON KARACHI POTTERY STUDIO" />

              <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-[#3A2016] tracking-tight leading-[1.12] mb-4 sm:mb-6">
                Shape Pure Earth. <br />
                <span className="text-[#B5532A] italic">Discover The Artisan</span> In You.
              </h1>

              <p className="text-base sm:text-lg text-[#443C37] leading-relaxed max-w-xl mb-6 sm:mb-8">
                Welcome to Karachi&apos;s premier sanctuary for wheel throwing and ceramic sculpting. Unplug from the routine, immerse your hands in cool stoneware clay, and create timeless functional pottery.
              </p>

              {/* Mobile-Only: Centered Scaled-Up Clay Logo Animation between text and CTAs */}
              <div className="lg:hidden my-6 w-full flex items-center justify-center">
                <div className="relative w-full max-w-[300px] sm:max-w-[360px] aspect-square p-4 rounded-3xl bg-white/75 backdrop-blur-md border border-[#E8DACB] shadow-xl flex items-center justify-center">
                  <ClayVaseAnimatedLogo heroMode={true} />
                </div>
              </div>

              {/* Mobile & Desktop Horizontal Side-by-Side CTAs */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-8 sm:mb-10">
                <Link
                  href="/contact"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#B5532A] hover:bg-[#9A421D] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-base tracking-normal sm:tracking-wide shadow-[0_8px_25px_rgba(181,83,42,0.35)] transition-all hover:shadow-[0_10px_30px_rgba(181,83,42,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-1.5 sm:gap-2.5 group whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFDF9] shrink-0" />
                  <span>Book a Session</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 shrink-0 hidden sm:inline-block" />
                </Link>

                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[46px] sm:min-h-[50px] bg-[#25D366] hover:bg-[#20BE5C] text-white px-3 sm:px-7 py-3 sm:py-4 rounded-full font-semibold sm:font-bold text-xs min-[375px]:text-sm sm:text-base tracking-normal sm:tracking-wide shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-1.5 sm:gap-2.5 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* 3 Trust Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 w-full max-w-lg pt-5 border-t border-[#E8DACB]/80 text-left">
                <div className="flex items-center gap-2 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#B5532A] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#3A2016]">All Clay &amp; Tools Included</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#B5532A] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#3A2016]">Keep Your Fired Creation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#B5532A] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#3A2016]">Beginner Friendly (No Exp.)</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (Desktop): Large Prominent Handcrafted Animated Clay Logo Emblem */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative w-full">
              <div className="relative w-full max-w-md aspect-square rounded-[40px] bg-white/70 backdrop-blur-md border border-[#E8DACB] shadow-[0_20px_50px_rgba(181,83,42,0.12)] flex items-center justify-center p-6 group">
                
                {/* Outer subtle decorative inner ring */}
                <div className="absolute inset-3 rounded-[32px] border border-[#E8DACB]/50 pointer-events-none" />

                {/* Scaled-up animated clay logo with full SVG piece-by-piece assembly & floating hover */}
                <ClayVaseAnimatedLogo heroMode={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-12 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.trustPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4 p-2">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF3EA] border border-[#E8DACB] flex items-center justify-center flex-shrink-0">
                  {trustIcons[point.icon || 'ShieldCheck']}
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-base text-[#3A2016]">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6E6259] mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER + STUDIO STATS */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionEyebrow text="THE CLAY ARTIST STORY" />
              
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] leading-tight">
                An Urban Oasis of Earth, Rhythm &amp; Mindful Art in Karachi
              </h2>

              <p className="text-base text-[#443C37] leading-relaxed">
                Founded with a deep love for Pakistan&apos;s historic ceramic heritage and modern artisan pottery, <strong>Clay Artist Pottery</strong> is Karachi&apos;s premier studio dedicated to making the therapeutic art of pottery accessible to everyone.
              </p>

              <p className="text-sm text-[#6E6259] leading-relaxed">
                Whether you are stepping into a studio for the very first time, celebrating a birthday with loved ones, bringing an eager school class, or booking a team-building offsite, our Clifton studio offers a warm, inspiring environment equipped with professional wheels, non-toxic clays, and artisan glazes.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8DACB]">
                <div className="text-center sm:text-left">
                  <div className="font-serif-title font-bold text-3xl text-[#B5532A]">2,500+</div>
                  <div className="text-xs text-[#6E6259] font-medium mt-0.5">Students Taught</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-serif-title font-bold text-3xl text-[#B5532A]">180+</div>
                  <div className="text-xs text-[#6E6259] font-medium mt-0.5">Parties &amp; Events</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-serif-title font-bold text-3xl text-[#B5532A]">4.9★</div>
                  <div className="text-xs text-[#6E6259] font-medium mt-0.5">Google Rating</div>
                </div>
              </div>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#B5532A] hover:text-[#9A421D] group"
                >
                  <span>Read our full studio journey &amp; meet the artists</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/post.jpg"
                  alt="Clay Artist Pottery Studio creations and glazes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES & EVENTS CARDS */}
      <section className="py-20 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow text="EXPLORE EXPERIENCES" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
              Curated Pottery Sessions for Every Occasion
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] mt-3">
              From solo wheel throwing to massive corporate celebrations, choose the perfect pottery experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.title}
                className="group bg-[#FAF3EA] rounded-3xl overflow-hidden border border-[#E8DACB] hover:border-[#B5532A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#B5532A] border border-[#E8DACB]">
                      {service.tag}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif-title text-2xl font-bold text-[#3A2016] group-hover:text-[#B5532A] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="text-xs font-bold text-[#C88D34] uppercase tracking-wider mb-3">
                      {service.price}
                    </div>

                    <p className="text-sm text-[#443C37] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 border-t border-[#E8DACB] pt-4">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-medium text-[#443C37]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="w-full bg-white hover:bg-[#B5532A] text-[#3A2016] hover:text-white border border-[#E8DACB] hover:border-[#B5532A] py-3 rounded-xl font-bold text-sm text-center transition-all shadow-sm flex items-center justify-center gap-2 group-hover:bg-[#B5532A] group-hover:text-white"
                  >
                    <span>View Details &amp; Pricing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE POTTERY JOURNEY (5 Steps) */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow text="FROM RAW CLAY TO TIMELESS CERAMIC" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
              The 4-Step Pottery Journey
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] mt-3">
              Experience the simple, fulfilling 4-step process of transforming raw clay into functional ceramic art in our Clifton studio.
            </p>
          </div>

          <PotteryJourney />
        </div>
      </section>

      {/* 6. WHAT YOU CAN CREATE */}
      <section className="py-20 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow text="STUDIO GALLERY" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
              What You Can Create With Your Own Hands
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] mt-3">
              No limits to your imagination. Here are the most popular pieces our beginners and guests sculpt.
            </p>
          </div>

          <WhatYouCanCreate />
        </div>
      </section>

      {/* 7. FEATURED VIDEO BLOCK */}
      <section className="py-20 bg-[#3A2016] text-[#FAF3EA] border-b border-[#4D2D20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow text="STUDIO IN MOTION" dark />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white mt-1">
              Feel The Rhythm of The Potter&apos;s Wheel
            </h2>
            <p className="text-sm sm:text-base text-[#D9C5B2] mt-3">
              Watch the hypnotic flow of shaping wet terracotta clay into elegant organic curves.
            </p>
          </div>

          <VideoEmbed />
        </div>
      </section>

      {/* 8. GALLERY HIGHLIGHTS */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <SectionEyebrow text="VISUAL STORIES" />
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
                Studio Moments &amp; Masterpieces
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#B5532A] hover:text-white text-[#B5532A] border border-[#E8DACB] px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm"
            >
              <span>Explore All Gallery Photos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <GalleryGrid limit={8} />
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER */}
      <section className="py-20 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionEyebrow text="KARACHI LOVES US" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
              Stories From Our Pottery Community
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] mt-3">
              Read real reviews from couples, families, school art directors, and corporate teams.
            </p>
          </div>

          <TestimonialsSlider testimonials={siteConfig.testimonials} />
        </div>
      </section>

      {/* 10. PRICING & PACKAGES TEASER */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow text="TRANSPARENT VALUE" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
              Simple, All-Inclusive Studio Pricing
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] mt-3">
              No hidden fees. Every package includes clay, wheel time, instructor mentoring, colors, and kiln firing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DACB] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#B5532A] uppercase tracking-wider">Introductory Class</span>
                <h3 className="font-serif-title text-2xl font-bold text-[#3A2016] mt-1">
                  Single Wheel Workshop
                </h3>
                <div className="my-5">
                  <span className="font-serif-title text-4xl font-bold text-[#3A2016]">Rs. 3,500</span>
                  <span className="text-xs text-[#6E6259] ml-1">/ person</span>
                </div>
                <p className="text-xs text-[#6E6259] mb-6">
                  Perfect for beginners, dates, or solo relaxation looking to try wheel throwing.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#443C37] border-t border-[#F5EDE4] pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>90 Minutes Hands-on Studio Time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>1-on-1 Wheel Centering Guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>1 Fired &amp; Glazed Creation included</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/services/daily-workshops"
                  className="w-full bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#B5532A] py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center block transition-colors border border-[#E8DACB]"
                >
                  Book Workshop Seat
                </Link>
              </div>
            </div>

            {/* Package 2: Highlighted */}
            <div className="bg-[#FAF3EA] rounded-3xl p-8 border-2 border-[#B5532A] shadow-xl flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B5532A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                ★ Most Popular
              </div>
              <div>
                <span className="text-xs font-bold text-[#B5532A] uppercase tracking-wider">Party Celebration</span>
                <h3 className="font-serif-title text-2xl font-bold text-[#3A2016] mt-1">
                  Studio Birthday Party
                </h3>
                <div className="my-5">
                  <span className="font-serif-title text-4xl font-bold text-[#3A2016]">Rs. 25,000</span>
                  <span className="text-xs text-[#6E6259] ml-1">/ up to 10 guests</span>
                </div>
                <p className="text-xs text-[#6E6259] mb-6">
                  Exclusive studio section, pottery wheel games, sculpting, and cake setup.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#443C37] border-t border-[#E8DACB] pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>2 Hours Exclusive Studio Experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Dedicated Master Artisan Host</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Every Guest Takes Home Their Creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Bring Your Own Cake &amp; Refreshments</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/services/birthday-parties"
                  className="w-full bg-[#B5532A] hover:bg-[#9A421D] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center block transition-colors shadow-md"
                >
                  Reserve Party Date
                </Link>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8DACB] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#B5532A] uppercase tracking-wider">Corporate &amp; Group</span>
                <h3 className="font-serif-title text-2xl font-bold text-[#3A2016] mt-1">
                  Team Offsite Event
                </h3>
                <div className="my-5">
                  <span className="font-serif-title text-4xl font-bold text-[#3A2016]">Rs. 45,000</span>
                  <span className="text-xs text-[#6E6259] ml-1">/ up to 15 persons</span>
                </div>
                <p className="text-xs text-[#6E6259] mb-6">
                  Therapeutic tactile bonding session to spark innovation and relieve stress.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#443C37] border-t border-[#F5EDE4] pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Complete Studio Buyout Option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Collaborative Team Sculpting Challenges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span>Branded Ceramic Stamps for Company</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/services/event-organizers"
                  className="w-full bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#B5532A] py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center block transition-colors border border-[#E8DACB]"
                >
                  Request Corporate Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="py-20 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionEyebrow text="QUESTIONS ANSWERED" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#6E6259] mt-3">
              Need clarity on wheel classes, glazing, studio location, or party arrangements?
            </p>
          </div>

          <FAQAccordion items={siteConfig.faqs} />
        </div>
      </section>

      {/* 12. FINAL CTA BAND + LEAD FORM */}
      <section className="py-20 bg-[#3A2016] text-[#FAF3EA] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#B5532A]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C88D34]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionEyebrow text="INSTANT BOOKING" dark />

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready To Get Your Hands in Clay?
              </h2>

              <p className="text-base text-[#D9C5B2] leading-relaxed">
                Whether it&apos;s a therapeutic solo session, a memorable weekend date, or a festive celebration, our wheels in Clifton Block 4 are prepped and waiting for you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B5532A] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-sm text-[#FAF3EA]">Same-day confirmation via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B5532A] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-sm text-[#FAF3EA]">All materials, aprons, and firing included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B5532A] flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="text-sm text-[#FAF3EA]">Centrally located in Clifton near Dolmen Mall</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm sourcePage="/" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
