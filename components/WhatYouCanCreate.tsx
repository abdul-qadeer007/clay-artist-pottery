import React from 'react';
import { siteConfig } from '@/config/site';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export const WhatYouCanCreate: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.creations.map((item, idx) => (
          <div
            key={item.title}
            className="group bg-white rounded-3xl p-7 border border-[#E8DACB] hover:border-[#B5532A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#FAF3EA] text-[#B5532A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8DACB]">
                  <Sparkles className="w-3 h-3 text-[#C88D34]" />
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-[#8C7A6B]">#0{idx + 1}</span>
              </div>

              {/* Title & Subtitle */}
              <h4 className="font-serif-title text-2xl font-bold text-[#3A2016] group-hover:text-[#B5532A] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs font-semibold text-[#B5532A] uppercase tracking-wider mt-1">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-[#6E6259] mt-3.5 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#443C37]">
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Custom glaze colors & personal stamps</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#443C37]">
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Kiln-fired food-safe stoneware</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F5EDE4] flex items-center justify-between">
              <span className="text-xs font-bold text-[#3A2016]">Included in all workshops</span>
              <Link
                href="/services/daily-workshops"
                className="text-xs font-bold text-[#B5532A] group-hover:text-[#9A421D] flex items-center gap-1 hover:underline"
              >
                <span>Book This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
