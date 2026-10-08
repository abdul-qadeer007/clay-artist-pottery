import React from 'react';

interface SectionEyebrowProps {
  text: string;
  className?: string;
  dark?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ text, className = "", dark = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 justify-center mb-3.5 ${className}`}>
      {/* Left line */}
      <span className={`h-px w-8 sm:w-12 transition-all ${dark ? 'bg-[#C88D34]/60' : 'bg-[#B5532A]/50'}`} />
      
      {/* Mini Clay Drop / Vase Icon */}
      <svg 
        className={`w-3.5 h-3.5 ${dark ? 'text-[#C88D34]' : 'text-[#B5532A]'}`} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8.5 9.2 9 10.5C9.5 11.8 8.5 13 8 14.5C7.5 16 8 18 9.5 19.5C11 21 13 21 14.5 19.5C16 18 16.5 16 16 14.5C15.5 13 14.5 11.8 15 10.5C15.5 9.2 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z" />
      </svg>
      
      {/* Eyebrow Text */}
      <span className={`text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase ${dark ? 'text-[#C88D34]' : 'text-[#B5532A]'}`}>
        {text}
      </span>
      
      {/* Right Mini Clay Drop */}
      <svg 
        className={`w-3.5 h-3.5 ${dark ? 'text-[#C88D34]' : 'text-[#B5532A]'}`} 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8.5 9.2 9 10.5C9.5 11.8 8.5 13 8 14.5C7.5 16 8 18 9.5 19.5C11 21 13 21 14.5 19.5C16 18 16.5 16 16 14.5C15.5 13 14.5 11.8 15 10.5C15.5 9.2 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z" />
      </svg>

      {/* Right line */}
      <span className={`h-px w-8 sm:w-12 transition-all ${dark ? 'bg-[#C88D34]/60' : 'bg-[#B5532A]/50'}`} />
    </div>
  );
};
