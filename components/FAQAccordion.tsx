'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for FAQ JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* FAQ JSON-LD script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="space-y-3.5">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-white border-[#B5532A]/40 shadow-[0_4px_20px_rgba(181,83,42,0.06)]' 
                  : 'bg-white/80 border-[#E8DACB] hover:border-[#B5532A]/30'
              }`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#3A2016] focus:outline-none cursor-pointer"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 pr-4">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#B5532A] text-white' : 'bg-[#F9EDE6] text-[#B5532A]'}`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span>{item.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#B5532A] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#443C37] leading-relaxed border-t border-[#F5EDE4] animate-in fade-in duration-200">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
