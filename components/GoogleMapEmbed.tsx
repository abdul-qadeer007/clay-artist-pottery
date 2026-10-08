import React from 'react';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full rounded-3xl overflow-hidden border border-[#E8DACB] bg-white shadow-lg">
      {/* Top Banner Card */}
      <div className="p-6 sm:p-8 bg-[#FAF3EA] border-b border-[#E8DACB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B5532A] uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Studio Location</span>
          </div>
          <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-[#3A2016]">
            {siteConfig.contact.address}
          </h4>
          <p className="text-xs sm:text-sm text-[#6E6259]">
            {siteConfig.contact.openingHours} • Dedicated parking available
          </p>
        </div>

        <a
          href={siteConfig.contact.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B5532A] hover:bg-[#9A421D] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex-shrink-0"
        >
          <Navigation className="w-4 h-4" />
          <span>Get Directions</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Responsive Map Frame */}
      <div className="w-full h-80 sm:h-96 relative">
        <iframe
          src={siteConfig.contact.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clay Artist Pottery Clifton Karachi Map"
          className="w-full h-full grayscale-[15%] contrast-[105%]"
        />
      </div>
    </div>
  );
};
