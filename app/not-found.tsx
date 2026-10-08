import React from 'react';
import Link from 'next/link';
import { Sparkles, Home } from 'lucide-react';
import { ClayVaseAnimatedLogo } from '@/components/ClayVaseAnimatedLogo';
import { SectionEyebrow } from '@/components/SectionEyebrow';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-clay-grain py-16 px-4 text-center">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DACB] shadow-xl">
        <div className="mb-6">
          <ClayVaseAnimatedLogo size={140} />
        </div>

        <SectionEyebrow text="404 — PAGE NOT FOUND" />

        <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016] mt-2 mb-3">
          Oops! This Pot Wobbled Off The Wheel
        </h1>

        <p className="text-sm text-[#6E6259] leading-relaxed mb-8">
          The page you are looking for might have been trimmed away, fired in a different kiln, or does not exist. Let&apos;s get you back to shaping art!
        </p>

        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md mx-auto">
          <Link
            href="/"
            className="flex-1 min-h-[44px] sm:min-h-[48px] inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#B5532A] hover:bg-[#9A421D] text-white px-3 sm:px-7 py-3 rounded-full font-semibold sm:font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>Studio Home</span>
          </Link>

          <Link
            href="/contact"
            className="flex-1 min-h-[44px] sm:min-h-[48px] inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#B5532A] border border-[#E8DACB] px-3 sm:px-6 py-3 rounded-full font-semibold sm:font-bold text-xs sm:text-sm transition-all whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Book a Session</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
