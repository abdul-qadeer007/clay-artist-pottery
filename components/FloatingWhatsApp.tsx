'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, trackClientEvent } from '@/lib/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(true);

  let pageContext = 'general';
  if (pathname.includes('birthday')) pageContext = 'birthday';
  else if (pathname.includes('school')) pageContext = 'school';
  else if (pathname.includes('event')) pageContext = 'corporate';
  else if (pathname.includes('workshop')) pageContext = 'workshop';

  const waLink = getWhatsAppLink();

  const handleClick = () => {
    trackClientEvent({
      type: 'whatsapp_click',
      page: pathname,
      service: pageContext,
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 transform-gpu will-change-transform">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#3A2016] text-[#FAF3EA] text-xs font-medium py-2 px-3.5 rounded-full shadow-lg border border-[#6E6259]/30 animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat with us on WhatsApp</span>
          <button 
            type="button"
            onClick={() => setShowTooltip(false)} 
            className="text-[#FAF3EA]/60 hover:text-white ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with Clay Artist Pottery on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:bg-[#20BE5C] hover:scale-110 active:scale-95 transition-all duration-300 animate-wa-pulse group transform-gpu will-change-transform"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};
