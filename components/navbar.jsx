'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from './brand-logo';
import TypewriterText from '@/components/interactive/typewriter-text';
import { Menu, X, PhoneCall, ChevronRight, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ onOpenFranchiseModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent page bleed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Franchise Model', href: '/franchise' },
    { name: 'Our Menu', href: '/menu' },
    { name: 'Careers', href: '/career' },
    { name: 'Outlets', href: '/outlets' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Header Strip with Animated Typewriter Tagline */}
      <div className="bg-baba-black text-white text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-baba-orange/30">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
          {/* Animated Typewriter Tagline: WE BELIEVE IN QUALITY */}
          <div className="flex items-center justify-center sm:justify-start gap-2 font-normal w-full sm:w-auto">
            <TypewriterText text="WE BELIEVE IN QUALITY" />
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-gray-300 text-[11px]">
            <a href="tel:+918866208063" className="hover:text-baba-orange transition flex items-center gap-1 font-semibold">
              <PhoneCall className="w-3 h-3 text-baba-orange" /> +91 8866208063
            </a>
            <span className="text-gray-500">|</span>
            <span className="truncate">theburgerbaba20@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-baba-border py-2.5 sm:py-3 shadow-sm'
            : 'bg-white/85 backdrop-blur-md py-3 sm:py-4 border-b border-baba-border/60'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Responsive Clean HD Brand Logo Only */}
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" showText={false} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-baba-lightgray/80 px-3 py-1.5 rounded-full border border-baba-border/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-baba-orange text-white font-semibold shadow-glow-orange'
                      : 'text-baba-black font-medium hover:text-baba-orange hover:bg-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenFranchiseModal}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-baba-orange via-amber-500 to-baba-orange rounded-full animate-spin-slow opacity-90 group-hover:opacity-100 transition"></span>
              <span className="relative flex items-center gap-1.5 sm:gap-2 bg-baba-orange px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white transition group-hover:bg-baba-orange-dark font-sans uppercase tracking-wider shadow-glow-orange">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span className="text-[10px] sm:text-xs font-bold">Franchise Enquiry</span>
                <ChevronRight className="hidden sm:inline w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-2xl bg-baba-lightgray border border-baba-border text-baba-black hover:bg-baba-orange hover:text-white transition flex items-center justify-center"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay (100% Solid Solid BG, Perfect Alignment) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden bg-baba-bg flex flex-col justify-between p-5 sm:p-6 overflow-y-auto animate-fadeIn select-none">
          
          {/* Top Bar inside Mobile Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-baba-border/80">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <BrandLogo className="w-12 h-12" showText={false} />
              <div className="flex flex-col">
                <span className="text-xl font-title text-baba-black uppercase">THE BURGER <span className="text-baba-orange">BABA</span></span>
                <span className="text-[9px] font-mono text-baba-orange font-semibold tracking-wider">WE BELIEVE IN QUALITY</span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white border border-baba-border text-baba-black hover:bg-baba-orange hover:text-white transition flex items-center justify-center shadow-xs"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col gap-2.5 my-auto py-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-baba-orange text-white shadow-glow-orange'
                      : 'bg-white border border-baba-border/80 text-baba-black hover:border-baba-orange shadow-xs'
                  }`}
                >
                  <span className="font-sans">{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-baba-orange'}`} />
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-baba-border/80 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenFranchiseModal) onOpenFranchiseModal();
              }}
              className="w-full py-3.5 rounded-2xl bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold text-center shadow-glow-orange flex items-center justify-center gap-2 font-sans uppercase tracking-wider text-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply For Franchise</span>
            </button>

            <div className="bg-white p-4 rounded-2xl border border-baba-border text-xs text-baba-gray space-y-1 shadow-xs">
              <div className="text-baba-black font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-baba-orange" />
                <span>Corporate HQ Office:</span>
              </div>
              <div className="font-normal text-[11px] leading-relaxed text-baba-gray pl-5">
                F-36, 37, Saket Business Hub, Opp. Domino's Pizza, Radhanpur Road, Mehsana
              </div>
              <div className="pt-1.5 pl-5 text-baba-orange font-mono font-semibold text-xs">+91 8866208063</div>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
