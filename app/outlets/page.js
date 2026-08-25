'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Store, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

const OUTLETS = [
  {
    city: 'Mehsana',
    name: 'Mehsana HQ & Flagship Store',
    address: 'F-36, 37, Saket Business Hub, Opp. Domino’s Pizza, Radhanpur Road, Mehsana, Gujarat',
    type: 'Company-Operated (HQ)',
    format: 'Café / Gold Model',
    phone: '+91 8866208063',
    hours: '11:00 AM – 11:00 PM',
    status: 'Operational',
  },
  {
    city: 'Vijapur',
    name: 'Vijapur Central Express',
    address: 'Main Market Road, Near Town Hall, Vijapur, Gujarat',
    type: 'Franchise-Operated',
    format: 'QSR / Silver Model',
    phone: '+91 8866208063',
    hours: '11:30 AM – 10:30 PM',
    status: 'Operational',
  },
  {
    city: 'Visnagar',
    name: 'Visnagar Station Road Outlet',
    address: 'Station Road, Opp. Municipal Market, Visnagar, Gujarat',
    type: 'Franchise-Operated',
    format: 'QSR / Silver Model',
    phone: '+91 8866208063',
    hours: '11:00 AM – 11:00 PM',
    status: 'Operational',
  },
  {
    city: 'Ahmedabad',
    name: 'Ahmedabad University Road',
    address: 'University Road, Commerce Six Roads, Ahmedabad, Gujarat',
    type: 'Franchise-Operated',
    format: 'Café / Gold Model',
    phone: '+91 8866208063',
    hours: '11:00 AM – 11:30 PM',
    status: 'Operational',
  },
  {
    city: 'Surat',
    name: 'Surat Varachha Kiosk',
    address: 'Varachha Main Road, Opp. Central Mall, Surat, Gujarat',
    type: 'Franchise-Operated',
    format: 'QSR / Silver Model',
    phone: '+91 8866208063',
    hours: '11:00 AM – 11:00 PM',
    status: 'Operational',
  },
  {
    city: 'Ahmedabad (Future Flagship)',
    name: 'Sindhubhavan Road Master Outlet',
    address: 'Sindhubhavan Road, Bodakdev, Ahmedabad, Gujarat',
    type: 'Master Flagship Concept',
    format: 'Lounge / Platinum Model (₹1.5 Cr Planned Investment)',
    phone: '+91 8866208063',
    hours: 'Opening Soon',
    status: 'Planned Flagship',
    isFlagship: true,
  },
];

export default function OutletsPage() {
  const [selectedCity, setSelectedCity] = useState('All');

  const cities = ['All', 'Mehsana', 'Vijapur', 'Visnagar', 'Ahmedabad', 'Surat'];

  const filteredOutlets = OUTLETS.filter(
    (o) => selectedCity === 'All' || o.city.toLowerCase().includes(selectedCity.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-20 pt-10 bg-baba-bg text-baba-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-bold text-baba-orange font-mono uppercase shadow-sm">
          <MapPin className="w-4 h-4" />
          <span>CURRENT OUTLET NETWORK & EXPANSION</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-baba-black font-title uppercase tracking-wide">
          OUR OUTLET <span className="text-baba-orange">LOCATIONS</span>
        </h1>

        <p className="text-base sm:text-lg text-baba-gray max-w-2xl mx-auto leading-relaxed">
          Operating across 7 locations in Gujarat with a roadmap to expand to 50 and 100 outlets across India.
        </p>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto justify-center pt-4">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                selectedCity === city
                  ? 'bg-baba-orange text-white shadow-glow-orange'
                  : 'bg-white text-baba-black hover:bg-baba-lightgray border border-baba-border'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Outlet Cards */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOutlets.map((outlet, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-3xl p-6 space-y-4 hover:border-baba-orange transition duration-300 flex flex-col justify-between shadow-sm ${
                outlet.isFlagship ? 'border-2 border-baba-orange shadow-glow-orange' : 'border-baba-border'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-mono ${
                    outlet.type.includes('Company')
                      ? 'bg-baba-orange text-white'
                      : outlet.isFlagship
                      ? 'bg-amber-500 text-white'
                      : 'bg-baba-lightgray text-baba-orange border border-baba-orange/30'
                  }`}>
                    {outlet.type}
                  </span>
                  <span className="text-xs text-baba-gray font-mono">{outlet.status}</span>
                </div>

                <h3 className="text-2xl font-black text-baba-black font-title uppercase">{outlet.name}</h3>

                <div className="text-xs font-mono font-bold text-baba-orange">{outlet.format}</div>

                <div className="space-y-2 text-xs text-baba-gray pt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-baba-orange flex-shrink-0 mt-0.5" />
                    <span>{outlet.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span>{outlet.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <Phone className="w-4 h-4 text-baba-orange flex-shrink-0" />
                    <span className="text-baba-black font-bold">{outlet.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-baba-border">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(outlet.name + ' ' + outlet.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-baba-black hover:bg-baba-orange text-white text-xs font-bold transition border border-baba-border flex items-center justify-center gap-2 font-title uppercase tracking-wider text-sm"
                >
                  <span>Get Map Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
