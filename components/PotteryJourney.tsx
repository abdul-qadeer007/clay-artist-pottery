import React from 'react';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const PotteryJourney: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {siteConfig.journeySteps.map((step, idx) => (
          <div
            key={step.step}
            className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DACB] shadow-sm hover:shadow-xl hover:border-[#B5532A]/50 transition-all duration-300 flex flex-col justify-between h-full"
          >
            <div>
              {/* Step Number with Terracotta background */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#F9EDE6] text-[#B5532A] font-serif-title font-bold text-lg flex items-center justify-center group-hover:bg-[#B5532A] group-hover:text-white transition-colors duration-300">
                  {step.step}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C88D34]">
                  Step {idx + 1}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="font-serif-title text-xl font-bold text-[#3A2016] group-hover:text-[#B5532A] transition-colors leading-snug">
                {step.title}
              </h4>
              <p className="text-xs font-semibold text-[#B5532A] uppercase tracking-wider mt-1">
                {step.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#6E6259] mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="mt-6 pt-4 border-t border-[#F5EDE4] flex items-center justify-between text-xs text-[#8C7A6B]">
              <span>Phase {idx + 1} of 4</span>
              <span className="w-2 h-2 rounded-full bg-[#B5532A]/30 group-hover:bg-[#B5532A] transition-colors" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#B5532A] border border-[#B5532A]/40 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-sm group"
        >
          <span>Reserve Your Wheel</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
