'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '@/types';

// High quality pottery studio photography dataset
const defaultGalleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Wheel Throwing in Action',
    category: 'workshops',
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    description: 'Hands shaping spinning stoneware clay on the electric wheel in Clifton studio.',
  },
  {
    id: 'g-2',
    title: 'Glazed Terracotta Art',
    category: 'creations',
    imageUrl: '/images/post.jpg',
    description: 'Hand-painted ceramic vases and glazed water vessels created by our studio artists.',
  },
  {
    id: 'g-3',
    title: 'Kids Birthday Clay Sculpting',
    category: 'parties',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    description: 'Fun-filled birthday celebration with sensory clay modeling and personalized keep-sakes.',
  },
  {
    id: 'g-4',
    title: 'School Group STEAM Trip',
    category: 'school-trips',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: 'Karachi school students learning pottery wheel mechanics and tactile clay techniques.',
  },
  {
    id: 'g-5',
    title: 'Corporate Pottery Bonding',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
    description: 'Company team-building pottery session fostering mindfulness and group creativity.',
  },
  {
    id: 'g-6',
    title: 'Artisan Terracotta Vases',
    category: 'creations',
    imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
    description: 'Kiln-fired earthenware pots and decorative vases ready for home decor.',
  },
  {
    id: 'g-7',
    title: 'Glazing & Underglaze Stains',
    category: 'workshops',
    imageUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80',
    description: 'Detailed brushwork and food-safe glaze application during Sunday class.',
  },
  {
    id: 'g-8',
    title: 'Hand-built Ceramic Bowls',
    category: 'creations',
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    description: 'Pinch and coil method bowls with organic ribbed textures and earthy tones.',
  },
];

interface GalleryGridProps {
  items?: GalleryItem[];
  showFilters?: boolean;
  limit?: number;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items = defaultGalleryItems,
  showFilters = true,
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'parties', label: 'Birthday Parties' },
    { id: 'school-trips', label: 'School Trips' },
    { id: 'events', label: 'Corporate & Events' },
    { id: 'creations', label: 'Finished Pieces' },
  ];

  const filteredItems = items
    .filter((item) => (selectedCategory === 'all' ? true : item.category === selectedCategory))
    .slice(0, limit || items.length);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      {showFilters && (
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[44px] whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#B5532A] text-white shadow-md'
                  : 'bg-white text-[#443C37] border border-[#E8DACB] hover:bg-[#FAF3EA] active:bg-[#FAF3EA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8DACB] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-[#FAF3EA]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#C88D34] font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>View Fullscreen</span>
                  </div>
                  <h4 className="font-serif-title font-bold text-lg leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>

              <button
                type="button"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Zoom image"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Caption */}
            <div className="p-4 bg-white flex-1 flex flex-col justify-between">
              <h4 className="font-serif-title font-bold text-base text-[#3A2016] group-hover:text-[#B5532A] transition-colors">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-xs text-[#6E6259] mt-1 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] max-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-xl">
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold">
                {currentLightboxItem.title}
              </h3>
              {currentLightboxItem.description && (
                <p className="text-sm text-gray-300 mt-1">
                  {currentLightboxItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
