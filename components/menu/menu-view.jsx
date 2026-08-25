'use client';

import React, { useState } from 'react';
import FranchiseModal from '@/components/interactive/franchise-modal';
import { MENU_CATEGORIES } from '@/data/menu-data';
import { Utensils, ShieldCheck, Sparkles, Layers, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function MenuView() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 pt-8 sm:pt-10 bg-baba-bg text-baba-black font-sans">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Header Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-bold text-baba-orange font-mono uppercase shadow-sm">
          <Utensils className="w-4 h-4" />
          <span>OUR MENU CATEGORY PORTFOLIO</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-title font-normal text-baba-black uppercase tracking-wide">
          100+ VEGETARIAN <span className="text-baba-orange">PRODUCT CATEGORIES</span>
        </h1>

        <p className="text-sm sm:text-base text-baba-gray max-w-2xl mx-auto leading-relaxed px-2">
          We offer a wide range of 100% Pure Veg fast-food categories engineered for high repeat ordering, quick prep times, and strong store margins.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          <span className="bg-white border border-baba-border px-3.5 py-1.5 rounded-full text-xs font-medium text-baba-black flex items-center gap-2 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-baba-orange" />
            <span>100% Pure Veg</span>
          </span>
          <span className="bg-white border border-baba-border px-3.5 py-1.5 rounded-full text-xs font-medium text-baba-black flex items-center gap-2 shadow-xs font-mono">
            <Layers className="w-4 h-4 text-baba-orange" />
            <span>7 Core Categories</span>
          </span>
        </div>
      </section>

      {/* Category Boxes Grid with Orange Border & Light Shadow */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MENU_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border-2 border-baba-orange/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-glow-orange hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background subtle orange glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-baba-orange/5 rounded-full blur-2xl pointer-events-none group-hover:bg-baba-orange/15 transition"></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="bg-baba-orange/10 text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                    {cat.badge}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold text-baba-gray tracking-wider">
                    Category
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-title font-normal text-baba-black uppercase tracking-wide group-hover:text-baba-orange transition">
                    {cat.title}
                  </h3>
                  <div className="text-xs font-medium text-baba-orange font-mono">
                    {cat.tagline}
                  </div>
                </div>

                <div className="bg-baba-bg p-4 rounded-2xl border border-baba-border space-y-2">
                  <div className="text-[11px] font-semibold text-baba-black uppercase tracking-wider font-mono">
                    Category Offerings:
                  </div>
                  <p className="text-xs font-normal text-baba-gray leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-baba-black uppercase tracking-wider font-mono">
                    Category Highlights:
                  </div>
                  <ul className="space-y-2 text-xs font-normal text-baba-gray">
                    {cat.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-baba-orange flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 relative z-10">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3.5 rounded-2xl bg-baba-black group-hover:bg-baba-orange text-white text-xs font-semibold transition border border-baba-border flex items-center justify-center gap-2 uppercase tracking-wider font-sans shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Enquire Category Menu</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Call To Action */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-baba-border rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
          <h3 className="text-3xl sm:text-5xl font-title font-normal text-baba-black uppercase tracking-wide">
            WANT THE FULL <span className="text-baba-orange">RECIPE & PRODUCT LIST</span> FOR YOUR CITY?
          </h3>
          <p className="text-xs sm:text-sm font-normal text-baba-gray max-w-xl mx-auto">
            Get in touch with our team to receive our official franchise menu catalog, ingredient specs, and Petpooja POS category setup.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition shadow-glow-orange inline-flex items-center gap-2 font-sans"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Full Menu Catalog</span>
          </button>
        </div>
      </section>
    </div>
  );
}
