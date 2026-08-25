'use client';

import React, { useState } from 'react';
import FranchiseModal from '@/components/interactive/franchise-modal';
import { OUTLETS } from '@/data/outlets-data';
import { MapPin, Phone, Store, Sparkles, Navigation, ShieldCheck } from 'lucide-react';

export default function OutletsView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('All');

  const cities = ['All', 'Mehsana', 'Vijapur', 'Visnagar', 'Ahmedabad', 'Surat'];

  const filteredOutlets = OUTLETS.filter(
    (outlet) => selectedCity === 'All' || outlet.city === selectedCity
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 pt-8 sm:pt-10 bg-baba-bg text-baba-black font-sans">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-semibold text-baba-orange font-mono uppercase shadow-sm">
          <Store className="w-4 h-4" />
          <span>7 OUTLETS OPERATING IN GUJARAT</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-title font-normal text-baba-black uppercase tracking-wide">
          FIND A BURGER BABA <span className="text-baba-orange">NEAR YOU</span>
        </h1>

        <p className="text-sm sm:text-base text-baba-gray max-w-2xl mx-auto leading-relaxed px-2">
          Visit any of our operational locations across Mehsana, Vijapur, Visnagar, Ahmedabad, and Surat to experience 100% Pure Veg quality.
        </p>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCity === city
                  ? 'bg-baba-orange text-white shadow-glow-orange font-mono'
                  : 'bg-white text-baba-black hover:bg-baba-lightgray border border-baba-border font-mono'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredOutlets.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-white border border-baba-border rounded-3xl p-6 space-y-5 hover:border-baba-orange transition duration-300 flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-baba-orange/10 text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                    {outlet.city}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {outlet.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-baba-black tracking-tight group-hover:text-baba-orange transition">
                  {outlet.name}
                </h3>

                <div className="space-y-2 text-xs text-baba-gray font-normal">
                  <div className="flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-baba-orange flex-shrink-0 mt-0.5" />
                    <span>{outlet.address}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-baba-black font-medium">
                    <Phone className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>{outlet.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-baba-border">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(outlet.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-2xl bg-baba-lightgray group-hover:bg-baba-orange text-baba-black group-hover:text-white text-xs font-semibold transition border border-baba-border flex items-center justify-center gap-2 uppercase tracking-wider font-sans"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
