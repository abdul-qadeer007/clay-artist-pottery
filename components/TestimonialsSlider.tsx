'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '@/types';

interface TestimonialsSliderProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeItem = testimonials[currentIndex] || testimonials[0];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-12 border border-[#E8DACB] shadow-[0_12px_40px_rgba(181,83,42,0.06)] overflow-hidden">
        {/* Background decorative quote mark */}
        <Quote className="absolute -right-4 -bottom-6 w-32 sm:w-36 h-32 sm:h-36 text-[#FAF3EA] pointer-events-none select-none opacity-60" />

        <div className="relative z-10">
          {/* Top meta: Service tag & Star rating */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1.5 bg-[#FAF3EA] text-[#B5532A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8DACB]">
              <span>{activeItem.serviceType}</span>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < activeItem.rating ? 'text-[#C88D34] fill-[#C88D34]' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-xs font-bold text-[#3A2016] ml-2">5.0 Star Experience</span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="font-serif-title text-lg sm:text-2xl text-[#26211E] italic leading-relaxed mb-6 sm:mb-8">
            &ldquo;{activeItem.comment}&rdquo;
          </p>

          {/* Author Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#F5EDE4]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-serif-title font-bold text-base sm:text-lg text-[#3A2016]">
                  {activeItem.name}
                </span>
                {activeItem.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#25D366] bg-green-50 border border-green-200/60 px-2 py-0.5 rounded-full shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Studio Guest
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#6E6259]">
                {activeItem.role} • {activeItem.date}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E8DACB] bg-[#FFFDF9] hover:bg-[#B5532A] hover:text-white active:scale-95 text-[#3A2016] flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E8DACB] bg-[#FFFDF9] hover:bg-[#B5532A] hover:text-white active:scale-95 text-[#3A2016] flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              currentIndex === i ? 'w-8 bg-[#B5532A]' : 'w-2 bg-[#D9C5B2] hover:bg-[#B5532A]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
