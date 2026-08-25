'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoCanvas from '@/components/interactive/video-canvas';
import FranchiseModal from '@/components/interactive/franchise-modal';
import BrandLogo from '@/components/brand-logo';
import CounterAnimation from '@/components/interactive/counter-animation';
import { FadeInUp, FadeIn, ScaleHoverCard } from '@/components/interactive/motion-reveal';
import {
  Sparkles,
  Award,
  TrendingUp,
  Store,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building,
  Users,
  Utensils,
  MapPin,
  Flame,
  ArrowRight,
  Briefcase
} from 'lucide-react';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 bg-baba-bg text-baba-black overflow-x-hidden">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-baba-bg via-white to-baba-bg border-b border-baba-border/60">
        {/* Background glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[750px] h-[300px] sm:h-[600px] lg:h-[750px] bg-baba-orange/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              <FadeInUp delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-baba-orange/30 shadow-sm max-w-full">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-baba-orange animate-ping flex-shrink-0"></span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-baba-orange font-mono truncate">
                    PREMIUM VEGETARIAN QSR • FOOD FRANCHISE
                  </span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-[38px] xs:text-[46px] sm:text-7xl lg:text-8xl font-title font-normal text-baba-black uppercase tracking-wide leading-[0.98] sm:leading-[0.95] break-words">
                    BUILD A HIGH-PROFIT <br className="hidden sm:inline" />
                    <span className="text-baba-orange">BURGER FRANCHISE</span> <br className="hidden sm:inline" />
                    IN YOUR CITY
                  </h1>
                  <p className="text-sm sm:text-lg text-baba-gray font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                    <strong className="font-semibold text-baba-black">THE BURGER BABA</strong> provides a complete turnkey food business platform. Proven SOP systems, centralized procurement, Petpooja POS technology, and 100+ menu favorites tailored for Indian taste preferences.
                  </p>
                </div>
              </FadeInUp>

              {/* Action Buttons */}
              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 px-2 sm:px-0">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2 group font-sans"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200" />
                    <span>Apply For Franchise</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>

                  <Link
                    href="/franchise"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-baba-lightgray border border-baba-border text-baba-black font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm font-sans"
                  >
                    <span>Explore 3 Business Models</span>
                    <ArrowRight className="w-4 h-4 text-baba-orange" />
                  </Link>
                </div>
              </FadeInUp>

              {/* Count-Up Animated Stats Bar */}
              <FadeInUp delay={0.4}>
                <div className="pt-6 sm:pt-8 border-t border-baba-border grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-baba-black">
                      <CounterAnimation from={0} to={7} duration={1.8} suffix=" Outlets" />
                    </div>
                    <div className="text-[10px] sm:text-xs text-baba-gray font-normal">Operating In Gujarat</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-baba-orange">
                      <CounterAnimation from={0} to={100} duration={2.0} prefix="" suffix="+ Items" />
                    </div>
                    <div className="text-[10px] sm:text-xs text-baba-gray font-normal">100% Pure Veg QSR</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-3xl lg:text-4xl font-mono font-bold text-baba-black">
                      <CounterAnimation from={0} to={100} duration={2.2} suffix=" Target" />
                    </div>
                    <div className="text-[10px] sm:text-xs text-baba-gray font-normal">National Expansion</div>
                  </div>
                </div>
              </FadeInUp>

            </div>

            {/* Hero Official Logo Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <FadeIn delay={0.3}>
                <div className="relative w-full max-w-[320px] sm:max-w-md aspect-square bg-white rounded-3xl p-6 sm:p-8 border border-baba-border shadow-md flex flex-col items-center justify-center text-center group hover:border-baba-orange transition duration-300">
                  <div className="absolute inset-0 bg-baba-orange/5 rounded-3xl blur-xl pointer-events-none"></div>

                  <div className="relative z-10 space-y-4 sm:space-y-6">
                    {/* Official Uploaded Logo Image */}
                    <div className="relative w-32 h-32 sm:w-44 sm:h-44 mx-auto rounded-full bg-white p-2 shadow-lg border-2 border-baba-orange overflow-hidden animate-float">
                      <Image
                        src="/official_logo.png"
                        alt="The Burger Baba Official Logo"
                        width={220}
                        height={220}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-baba-orange">
                        WE BELIEVE IN QUALITY
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-title font-normal text-baba-black uppercase tracking-wide">
                        THE BURGER BABA
                      </h3>
                      <p className="text-[11px] sm:text-xs font-normal text-baba-gray px-2 sm:px-4 leading-relaxed">
                        Western-Style Food Adapted To Indian Taste Preferences • Founded 2020
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
                      <span className="bg-baba-orange/10 text-baba-orange border border-baba-orange/30 text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full font-mono">
                        100% Pure Veg QSR
                      </span>
                      <span className="bg-baba-lightgray text-baba-black border border-baba-border text-[10px] sm:text-xs font-medium px-3 sm:px-4 py-1.5 rounded-full font-mono">
                        HQ: Mehsana
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Creative Mini Video & Visual Canvas Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="space-y-2 sm:space-y-3 text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest font-mono">
              <Flame className="w-4 h-4" />
              <span>Interactive Visual Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-normal text-baba-black uppercase tracking-wide">
              CONSISTENCY AT EVERY <span className="text-baba-orange">TOUCHPOINT</span>
            </h2>
            <p className="text-xs sm:text-sm font-normal text-baba-gray max-w-xl mx-auto">
              From central kitchen preparation to store routine execution, every detail is engineered for brand excellence.
            </p>
          </div>
        </FadeInUp>

        <FadeIn delay={0.2}>
          <VideoCanvas />
        </FadeIn>
      </section>

      {/* 3 Franchise Business Models Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="space-y-2 sm:space-y-3 text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest font-mono">
              <Store className="w-4 h-4" />
              <span>Tailored Outlet Formats</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-normal text-baba-black uppercase tracking-wide">
              CHOOSE YOUR <span className="text-baba-orange">FRANCHISE MODEL</span>
            </h2>
            <p className="text-xs sm:text-sm text-baba-gray">
              Three scalable footprints designed for different location dynamics, investment budgets, and customer dining experiences.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Silver QSR */}
          <FadeInUp delay={0.1}>
            <ScaleHoverCard className="bg-white border border-baba-border rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 hover:border-baba-orange transition duration-300 relative group flex flex-col justify-between shadow-sm h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-baba-lightgray text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                    Compact QSR Format
                  </span>
                  <span className="text-xs text-baba-gray font-mono">Model 01</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-baba-black tracking-tight">QSR / Silver Model</h3>
                  <div className="text-xs text-baba-gray font-mono mt-1">Approx. 300–450 sq.ft.</div>
                </div>

                <div className="bg-baba-bg p-4 sm:p-5 rounded-2xl border border-baba-border">
                  <div className="text-xs text-baba-gray font-normal">Franchise Fee Reference</div>
                  <div className="text-xl sm:text-2xl font-bold text-baba-orange font-mono mt-0.5">₹6.51 Lakh + GST</div>
                </div>

                <ul className="space-y-2 text-xs font-normal text-baba-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Ideal for High-Footfall Express Outlets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Takeaway, Delivery & Counter Seating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Fast Setup & Lower Operating Overhead</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 rounded-2xl bg-baba-black hover:bg-baba-orange text-white text-xs font-semibold transition border border-baba-border uppercase tracking-wider font-sans mt-4 sm:mt-6"
              >
                Apply For Silver Model
              </button>
            </ScaleHoverCard>
          </FadeInUp>

          {/* Gold Café */}
          <FadeInUp delay={0.2}>
            <ScaleHoverCard className="bg-white border-2 border-baba-orange rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-glow-orange relative group flex flex-col justify-between h-full">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-baba-orange text-white text-[10px] font-semibold uppercase px-4 py-1 rounded-full tracking-wider shadow-sm font-mono whitespace-nowrap">
                Most Popular Choice
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <span className="bg-baba-orange/10 text-baba-orange px-3 py-1 rounded-full text-xs font-semibold font-mono">
                    Full Customer Experience
                  </span>
                  <span className="text-xs text-baba-gray font-mono">Model 02</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-baba-black tracking-tight">Café / Gold Model</h3>
                  <div className="text-xs text-baba-gray font-mono mt-1">Approx. 500–750 sq.ft.</div>
                </div>

                <div className="bg-baba-bg p-4 sm:p-5 rounded-2xl border border-baba-orange/30">
                  <div className="text-xs text-baba-gray font-normal">Franchise Fee Reference</div>
                  <div className="text-xl sm:text-2xl font-bold text-baba-black font-mono mt-0.5">₹8.51 Lakh + GST</div>
                </div>

                <ul className="space-y-2 text-xs font-normal text-baba-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Larger Seating Dining Layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Extended Menu (Burgers, Shakes, Coffee)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>High Youth & Student Customer Footfall</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 rounded-2xl bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold transition shadow-glow-orange uppercase tracking-wider font-sans text-xs mt-4 sm:mt-6"
              >
                Apply For Gold Model
              </button>
            </ScaleHoverCard>
          </FadeInUp>

          {/* Platinum Lounge */}
          <FadeInUp delay={0.3}>
            <ScaleHoverCard className="bg-white border border-baba-border rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 hover:border-baba-orange transition duration-300 relative group flex flex-col justify-between shadow-sm h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-baba-lightgray text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                    Flagship Lounge Format
                  </span>
                  <span className="text-xs text-baba-gray font-mono">Model 03</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-baba-black tracking-tight">Lounge / Platinum</h3>
                  <div className="text-xs text-baba-gray font-mono mt-1">Approx. 800–1,000 sq.ft.</div>
                </div>

                <div className="bg-baba-bg p-4 sm:p-5 rounded-2xl border border-baba-border">
                  <div className="text-xs text-baba-gray font-normal">Franchise Fee Reference</div>
                  <div className="text-xl sm:text-2xl font-bold text-baba-orange font-mono mt-0.5">₹12.50 Lakh + GST</div>
                </div>

                <ul className="space-y-2 text-xs font-normal text-baba-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Premium Flagship Experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Family & Event Group Dining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>Maximum Brand Visibility & Revenue Potential</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 rounded-2xl bg-baba-black hover:bg-baba-orange text-white text-xs font-semibold transition border border-baba-border uppercase tracking-wider font-sans mt-4 sm:mt-6"
              >
                Apply For Platinum Model
              </button>
            </ScaleHoverCard>
          </FadeInUp>

        </div>
      </section>

      {/* Why The Burger Baba Differentiators */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-white border border-baba-border rounded-3xl p-6 sm:p-12 space-y-8 sm:space-y-12 shadow-sm">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest font-mono">
                <Award className="w-4 h-4" />
                <span>Competitive Differentiation</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-normal text-baba-black uppercase tracking-wide">
                WHY PARTNER WITH <span className="text-baba-orange">THE BURGER BABA</span>
              </h2>
              <p className="text-xs sm:text-sm font-normal text-baba-gray">
                You don't have to build a food brand from zero. We provide a structured platform to operate under an established brand system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="bg-baba-bg p-5 sm:p-6 rounded-2xl border border-baba-border space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-baba-border text-baba-orange flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-baba-black tracking-tight">100% Pure Vegetarian QSR</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">
                  Tailored for the large Indian vegetarian consumer demographic with high trust and repeat ordering frequency.
                </p>
              </div>

              <div className="bg-baba-bg p-5 sm:p-6 rounded-2xl border border-baba-border space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-baba-border text-baba-orange flex items-center justify-center shadow-sm">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-baba-black tracking-tight">100+ Product Portfolio</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">
                  Burgers, subs, sandwiches, wraps, fries, bowls, cheese shots, coffee, shakes, combos & special promos.
                </p>
              </div>

              <div className="bg-baba-bg p-5 sm:p-6 rounded-2xl border border-baba-border space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-baba-border text-baba-orange flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-baba-black tracking-tight">Petpooja POS & Tech Roadmap</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">
                  Integrated software, sales analytics, inventory tracking, CRM, and central franchise monitoring dashboards.
                </p>
              </div>

              <div className="bg-baba-bg p-5 sm:p-6 rounded-2xl border border-baba-border space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-baba-border text-baba-orange flex items-center justify-center shadow-sm">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-baba-black tracking-tight">Central Procurement & SOP</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">
                  Standardized raw materials, recipe logic, portion control, and approved vendor network for consistent quality.
                </p>
              </div>

              <div className="bg-baba-bg p-5 sm:p-6 rounded-2xl border border-baba-border space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-baba-border text-baba-orange flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-baba-black tracking-tight">Staff Training & Launch</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">
                  Comprehensive training in kitchen preparation, hygiene, store routines, POS operation, and store launch.
                </p>
              </div>

              <div className="bg-baba-bg p-5 sm:p-6 rounded-2xl border border-baba-border space-y-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-baba-border text-baba-orange flex items-center justify-center shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-baba-black tracking-tight">Founder-Led Leadership</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">
                  Guided by Founder & CEO Manan Panchal and MD Operations Himanshu Goswami with real ground operating experience.
                </p>
              </div>

            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Outlet Locations Strip */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-white border border-baba-border rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-sm">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-[11px] sm:text-xs font-semibold text-baba-orange uppercase tracking-wider font-mono">Current Outlet Footprint</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-baba-black tracking-tight">7 Outlets Operating & Growing</h3>
              <p className="text-xs font-normal text-baba-gray">Mehsana • Vijapur • Visnagar • Ahmedabad • Surat</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              <Link
                href="/outlets"
                className="w-full md:w-auto px-6 py-3.5 rounded-full bg-baba-black hover:bg-baba-orange text-white text-xs font-semibold transition border border-baba-border flex items-center justify-center gap-2 uppercase tracking-wider font-sans"
              >
                <MapPin className="w-4 h-4 text-baba-orange" />
                <span>Locate Outlets</span>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Final Call to Action Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="relative rounded-3xl bg-gradient-to-r from-baba-orange via-amber-600 to-baba-orange p-8 sm:p-16 text-center text-white space-y-5 sm:space-y-6 shadow-glow-lg overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-normal uppercase tracking-wide">
                READY TO OWN A BURGER BABA FRANCHISE?
              </h2>
              <p className="text-xs sm:text-base font-normal opacity-95">
                Apply today to secure prime territory in your city. Partner with a structured, system-driven Indian QSR brand.
              </p>
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-baba-black hover:bg-white text-white hover:text-baba-black font-semibold px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs font-sans uppercase tracking-widest transition shadow-2xl inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-baba-orange" />
                  <span>Start Partner Application</span>
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>
    </div>
  );
}
