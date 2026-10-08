'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  PartyPopper, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackClientEvent } from '@/lib/analytics';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceIcons: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-4 h-4 text-[#B5532A]" />,
    PartyPopper: <PartyPopper className="w-4 h-4 text-[#B5532A]" />,
    GraduationCap: <GraduationCap className="w-4 h-4 text-[#B5532A]" />,
    Briefcase: <Briefcase className="w-4 h-4 text-[#B5532A]" />,
  };

  const services = siteConfig.navigation.find(n => n.name === 'Services & Events')?.dropdown || [];

  return (
    <>
      {/* Top Studio Micro-bar */}
      <div className="bg-[#3A2016] text-[#FAF3EA] text-[12px] py-1.5 px-4 hidden md:block border-b border-[#4D2D20]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#EFE5D8]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
              Open Today: 11:00 AM – 9:00 PM • Clifton Block 4, Karachi
            </span>
          </div>
          <div className="flex items-center gap-5 font-medium">
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              onClick={() => trackClientEvent({ type: 'phone_click', page: pathname })}
              className="hover:text-[#C88D34] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C88D34]" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <span className="text-[#6E6259]">|</span>
            <a 
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClientEvent({ type: 'whatsapp_click', page: pathname })}
              className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Studio
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF3EA]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E8DACB]' 
            : 'bg-[#FAF3EA] py-4 border-b border-[#E8DACB]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Terracotta Vase Logo Emblem + Brand Name Lockup */}
          <Link 
            href="/" 
            onClick={closeMobileMenu} 
            className="flex items-center gap-2.5 sm:gap-3 group"
            aria-label="Clay Artist Pottery"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/navbar-logo.png"
                alt="Clay Artist Pottery"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#3A2016] tracking-tight leading-none group-hover:text-[#B5532A] transition-colors">
                CLAY ARTIST
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.26em] text-[#B5532A] uppercase leading-tight mt-0.5">
                POTTERY STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-[15px] text-[#3A2016]">
            <Link 
              href="/" 
              className={`px-3.5 py-2 rounded-lg transition-all ${
                pathname === '/' ? 'text-[#B5532A] font-semibold bg-[#B5532A]/10' : 'hover:text-[#B5532A] hover:bg-black/5'
              }`}
            >
              Home
            </Link>

            {/* Services & Events Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-all ${
                  pathname.startsWith('/services') || pathname === '/event-packages' ? 'text-[#B5532A] font-semibold bg-[#B5532A]/10' : 'hover:text-[#B5532A] hover:bg-black/5'
                }`}
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services & Events</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-[#E8DACB] p-2 mt-1 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#B5532A] px-3 py-1.5 border-b border-[#F5EDE4]">
                    Our Experiences
                  </div>
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                        pathname === item.href ? 'bg-[#FAF3EA] text-[#B5532A]' : 'hover:bg-[#FAF3EA] text-[#3A2016]'
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F9EDE6] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {serviceIcons[item.icon || 'Sparkles']}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#3A2016] leading-tight">
                          {item.name}
                        </div>
                        <p className="text-xs text-[#6E6259] mt-0.5 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/gallery" 
              className={`px-3.5 py-2 rounded-lg transition-all ${
                pathname === '/gallery' ? 'text-[#B5532A] font-semibold bg-[#B5532A]/10' : 'hover:text-[#B5532A] hover:bg-black/5'
              }`}
            >
              Gallery
            </Link>

            <Link 
              href="/about" 
              className={`px-3.5 py-2 rounded-lg transition-all ${
                pathname === '/about' ? 'text-[#B5532A] font-semibold bg-[#B5532A]/10' : 'hover:text-[#B5532A] hover:bg-black/5'
              }`}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className={`px-3.5 py-2 rounded-lg transition-all ${
                pathname === '/contact' ? 'text-[#B5532A] font-semibold bg-[#B5532A]/10' : 'hover:text-[#B5532A] hover:bg-black/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#B5532A] hover:bg-[#9A421D] text-white px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide shadow-[0_4px_14px_rgba(181,83,42,0.35)] transition-all hover:shadow-[0_6px_20px_rgba(181,83,42,0.45)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FFFDF9]" />
              <span>Book a Session</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="bg-[#B5532A] hover:bg-[#9A421D] active:scale-95 text-white px-4 py-2 min-h-[40px] rounded-full font-bold text-xs tracking-wide shadow-sm flex items-center justify-center transition-all"
            >
              Book
            </Link>
            <button
              type="button"
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-[#3A2016] hover:bg-black/5 active:bg-black/10 flex items-center justify-center focus:outline-none transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
            onClick={closeMobileMenu} 
          />

          <div className="fixed inset-y-0 right-0 max-w-[320px] sm:max-w-xs w-full bg-[#FAF3EA] shadow-2xl flex flex-col p-5 sm:p-6 overflow-y-auto border-l border-[#E8DACB] animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DACB]">
              <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2.5 group" aria-label="Clay Artist Pottery">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <Image src="/navbar-logo.png" alt="Clay Artist Pottery" fill sizes="36px" className="object-contain" priority />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-title font-bold text-base text-[#3A2016] leading-tight">
                    CLAY ARTIST
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.24em] text-[#B5532A] uppercase">
                    POTTERY STUDIO
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="p-2 min-w-[44px] min-h-[44px] rounded-xl text-[#3A2016] hover:bg-black/5 flex items-center justify-center cursor-pointer"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 flex flex-col gap-1.5 font-medium">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex items-center min-h-[48px] px-4 py-3 rounded-xl text-base transition-colors ${
                  pathname === '/' ? 'bg-[#B5532A] text-white font-bold' : 'text-[#3A2016] hover:bg-black/5 active:bg-black/10'
                }`}
              >
                Home
              </Link>

              {/* Services & Events Accordion */}
              <div className="rounded-xl border border-[#E8DACB] bg-white/80 overflow-hidden shadow-xs">
                <button
                  type="button"
                  className="w-full flex items-center justify-between min-h-[48px] px-4 py-3 text-base font-bold text-[#3A2016] cursor-pointer"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services &amp; Events</span>
                  <ChevronDown className={`w-4 h-4 text-[#B5532A] transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="px-2 pb-2 space-y-1 border-t border-[#F5EDE4] pt-1.5 bg-[#FAF3EA]/40">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 min-h-[44px] p-2.5 rounded-lg text-sm transition-colors ${
                          pathname === item.href ? 'bg-[#B5532A]/15 text-[#B5532A] font-bold' : 'text-[#443C37] hover:bg-[#FAF3EA] active:bg-[#FAF3EA]'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#F9EDE6] flex items-center justify-center flex-shrink-0">
                          {serviceIcons[item.icon || 'Sparkles']}
                        </div>
                        <span className="leading-snug">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                onClick={closeMobileMenu}
                className={`flex items-center min-h-[48px] px-4 py-3 rounded-xl text-base transition-colors ${
                  pathname === '/gallery' ? 'bg-[#B5532A] text-white font-bold' : 'text-[#3A2016] hover:bg-black/5 active:bg-black/10'
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`flex items-center min-h-[48px] px-4 py-3 rounded-xl text-base transition-colors ${
                  pathname === '/about' ? 'bg-[#B5532A] text-white font-bold' : 'text-[#3A2016] hover:bg-black/5 active:bg-black/10'
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`flex items-center min-h-[48px] px-4 py-3 rounded-xl text-base transition-colors ${
                  pathname === '/contact' ? 'bg-[#B5532A] text-white font-bold' : 'text-[#3A2016] hover:bg-black/5 active:bg-black/10'
                }`}
              >
                Contact &amp; Directions
              </Link>
            </div>

            <div className="mt-auto pt-5 border-t border-[#E8DACB] space-y-3">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="w-full min-h-[48px] bg-[#B5532A] hover:bg-[#9A421D] active:scale-[0.99] text-white py-3 px-4 rounded-xl font-bold text-center flex items-center justify-center shadow-md transition-all"
              >
                Book a Session Now
              </Link>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackClientEvent({ type: 'whatsapp_click', page: pathname });
                  closeMobileMenu();
                }}
                className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#20BE5C] active:scale-[0.99] text-white py-3 px-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
