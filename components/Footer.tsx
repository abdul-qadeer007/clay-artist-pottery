'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ArrowUpRight
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackClientEvent } from '@/lib/analytics';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3A2016] text-[#FAF3EA] border-t border-[#4D2D20] relative overflow-hidden">
      {/* Decorative terracotta top rim line */}
      <div className="h-1.5 bg-gradient-to-r from-[#B5532A] via-[#C88D34] to-[#B5532A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#4D2D20]">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Clay Artist Pottery">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-[#FAF3EA] p-1.5 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/navbar-logo.png"
                  alt="Clay Artist Pottery Karachi Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title font-bold text-xl text-[#FAF3EA] tracking-wide block leading-none">
                  CLAY ARTIST
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] text-[#C88D34] uppercase block leading-tight mt-0.5">
                  POTTERY STUDIO
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#D9C5B2] leading-relaxed max-w-sm">
              Karachi&apos;s sanctuary for tactile art, pottery wheel throwing, and ceramic craftsmanship. Connect with natural earth, learn artisan techniques, and take home creations that last a lifetime.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FBF5EE]/10 border border-[#EBDDCB]/20 hover:bg-[#B5532A] hover:border-[#B5532A] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FBF5EE]/10 border border-[#EBDDCB]/20 hover:bg-[#B5532A] hover:border-[#B5532A] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp SVG */}
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClientEvent({ type: 'whatsapp_click', page: 'footer' })}
                className="w-10 h-10 rounded-full bg-[#FBF5EE]/10 border border-[#EBDDCB]/20 hover:bg-[#B5532A] hover:border-[#B5532A] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Services & Experiences */}
          <div className="space-y-4">
            <h4 className="font-serif-title text-base font-bold text-[#FAF3EA] tracking-wide uppercase border-b border-[#4D2D20] pb-2">
              Our Experiences
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D9C5B2]">
              <li>
                <Link href="/services/daily-workshops" className="hover:text-[#C88D34] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5532A]" />
                  Daily Workshops
                </Link>
              </li>
              <li>
                <Link href="/services/birthday-parties" className="hover:text-[#C88D34] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5532A]" />
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link href="/services/school-trips" className="hover:text-[#C88D34] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5532A]" />
                  School Field Trips
                </Link>
              </li>
              <li>
                <Link href="/services/event-organizers" className="hover:text-[#C88D34] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5532A]" />
                  Event Organizers & B2B
                </Link>
              </li>
              <li>
                <Link href="/event-packages" className="hover:text-[#C88D34] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5532A]" />
                  Complete Event Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif-title text-base font-bold text-[#FAF3EA] tracking-wide uppercase border-b border-[#4D2D20] pb-2">
              Studio Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D9C5B2]">
              <li>
                <Link href="/about" className="hover:text-[#C88D34] transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C88D34] transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C88D34] transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C88D34] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C88D34] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Studio Info */}
          <div className="space-y-4">
            <h4 className="font-serif-title text-base font-bold text-[#FAF3EA] tracking-wide uppercase border-b border-[#4D2D20] pb-2">
              Visit Studio
            </h4>
            <div className="space-y-3 text-sm text-[#D9C5B2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C88D34] flex-shrink-0 mt-1" />
                <span>
                  {siteConfig.contact.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C88D34] flex-shrink-0" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => trackClientEvent({ type: 'phone_click', page: 'footer' })}
                  className="hover:text-[#C88D34] transition-colors font-semibold"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C88D34] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#C88D34] transition-colors text-xs">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C88D34] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#EFE5D8]">
                  {siteConfig.contact.openingHours}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C88D34] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89689]">
          <div>
            © {new Date().getFullYear()} {siteConfig.name} Karachi. All rights reserved. Handcrafted with clay & love.
          </div>
          <div className="flex items-center gap-4">
            <span>Clifton Block 4, Karachi</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#C88D34] transition-colors">
              Book Today
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
