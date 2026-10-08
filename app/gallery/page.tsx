import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';
import { GalleryGrid } from '@/components/GalleryGrid';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Pottery Studio Photo & Video Gallery | Clay Artist Pottery Karachi',
  description: 'Explore photos and videos from our daily wheel workshops, kids birthday celebrations, school art trips, and handcrafted ceramic creations in Clifton Karachi.',
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full bg-clay-grain">
      {/* Header */}
      <section className="pt-12 pb-16 border-b border-[#E8DACB] bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="STUDIO PORTFOLIO" />
          <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] mt-2">
            Moments, Smiles &amp; Handcrafted Ceramics
          </h1>
          <p className="text-sm sm:text-base text-[#6E6259] mt-4 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our daily wheel throwing sessions, lively birthday celebrations, school trips, and stunning kiln-fired finished pieces made by our guests.
          </p>
        </div>
      </section>

      {/* Filterable Masonry Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid showFilters={true} />
        </div>
      </section>

      {/* Studio Video Feature */}
      <section className="py-20 bg-[#3A2016] text-[#FAF3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow text="WATCH THE MAGIC" dark />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white mt-1">
              Pottery Wheel Throwing in Motion
            </h2>
            <p className="text-sm text-[#D9C5B2] mt-2">
              From centered clay lump to delicate flared bowl in 90 seconds.
            </p>
          </div>

          <VideoEmbed />
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-16 bg-[#FAF3EA] border-t border-[#E8DACB] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="CREATE YOUR OWN" />
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3A2016] mt-1">
            Inspired by these creations?
          </h2>
          <p className="text-sm text-[#6E6259] mt-2 mb-6">
            Book your individual wheel or group session today and sculpt your own ceramic masterpiece.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B5532A] hover:bg-[#9A421D] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-md transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#FFFDF9]" />
            <span>Book a Pottery Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
