'use client';

import React from 'react';
import Link from 'next/link';
import BrandLogo from './brand-logo';
import { Phone, Mail, MapPin, Instagram, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer({ onOpenFranchiseModal }) {
  return (
    <footer className="bg-baba-black border-t border-baba-border pt-14 sm:pt-16 pb-10 sm:pb-12 text-baba-gray relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-baba-orange/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <BrandLogo className="w-14 h-14 sm:w-16 sm:h-16" darkText={true} />
            <p className="text-xs sm:text-sm font-normal text-gray-300 leading-relaxed max-w-sm">
              <strong className="font-semibold text-white">THE BURGER BABA</strong> (The Burger Baba Pvt. Ltd.) is a premium vegetarian QSR and fast-food franchise company built on Indian taste preferences, operational excellence, and standardized scalability.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-baba-orange" />
                <span>100% Pure Veg QSR</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white font-mono">
                Est. 2020 • 7 Outlets Live
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-sans">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-normal text-gray-300">
              <li>
                <Link href="/" className="hover:text-baba-orange transition flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-baba-orange transition flex items-center gap-1">
                  Our Story & Leadership
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-baba-orange transition flex items-center gap-1">
                  Franchise Business Models
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-baba-orange transition flex items-center gap-1">
                  100+ Product Portfolio
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-baba-orange transition flex items-center gap-1">
                  Career Openings
                </Link>
              </li>
              <li>
                <Link href="/outlets" className="hover:text-baba-orange transition flex items-center gap-1">
                  Outlet Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-baba-orange transition flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Franchise Formats */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-sans">
              Franchise Models
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-baba-orange transition group">
                <div className="text-white font-semibold group-hover:text-baba-orange transition">
                  QSR / Silver Model
                </div>
                <div className="text-gray-400 font-mono font-normal">300–450 sq.ft • ₹6.51L + GST</div>
              </li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-baba-orange transition group">
                <div className="text-white font-semibold group-hover:text-baba-orange transition">
                  Café / Gold Model
                </div>
                <div className="text-gray-400 font-mono font-normal">500–750 sq.ft • ₹8.51L + GST</div>
              </li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-baba-orange transition group">
                <div className="text-white font-semibold group-hover:text-baba-orange transition">
                  Lounge / Platinum
                </div>
                <div className="text-gray-400 font-mono font-normal">800–1,000 sq.ft • ₹12.50L + GST</div>
              </li>
            </ul>
          </div>

          {/* Corporate Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-sans">
              Corporate Office
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5 font-normal">
                <MapPin className="w-4 h-4 text-baba-orange flex-shrink-0 mt-0.5" />
                <span>F-36, 37, Saket Business Hub, Radhanpur Road, Mehsana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-baba-orange flex-shrink-0" />
                <a href="tel:+918866208063" className="font-mono text-white hover:text-baba-orange transition font-medium">
                  +91 8866208063
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-baba-orange flex-shrink-0" />
                <a href="mailto:theburgerbaba20@gmail.com" className="font-mono text-white hover:text-baba-orange transition font-normal truncate">
                  theburgerbaba20@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-baba-orange flex-shrink-0" />
                <a
                  href="https://instagram.com/theburgerbabaofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-white hover:text-baba-orange transition flex items-center gap-1 font-normal"
                >
                  @theburgerbabaofficial <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenFranchiseModal}
                  className="w-full py-3 px-4 rounded-xl bg-baba-orange hover:bg-baba-orange-light text-white text-xs font-semibold transition shadow-glow-orange flex items-center justify-center gap-2 uppercase tracking-wider font-sans"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Partner With Us</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer - 100% Mobile Responsive City Wrap */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-normal text-center md:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="font-semibold text-white">The Burger Baba Pvt. Ltd.</strong> All rights reserved.
          </div>

          {/* Responsive Wrap City Names */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-gray-300 text-xs">
            <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-white font-medium">Mehsana HQ</span>
            <span className="text-baba-orange">•</span>
            <span>Vijapur</span>
            <span className="text-baba-orange">•</span>
            <span>Visnagar</span>
            <span className="text-baba-orange">•</span>
            <span>Ahmedabad</span>
            <span className="text-baba-orange">•</span>
            <span>Surat</span>
          </div>

          <div className="text-center md:text-right text-[11px] max-w-xs text-gray-400 font-normal">
            * 50 & 100 target expansion roadmap. Current operational footprint consists of 7 outlets in Gujarat.
          </div>
        </div>
      </div>
    </footer>
  );
}
