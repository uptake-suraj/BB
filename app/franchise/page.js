'use client';

import React, { useState } from 'react';
import RoiCalculator from '@/components/interactive/roi-calculator';
import FranchiseModal from '@/components/interactive/franchise-modal';
import {
  Store,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  MapPin,
  FileCheck,
  Hammer,
  GraduationCap,
  Rocket,
  Headphones,
  Building2,
  ChevronRight
} from 'lucide-react';

export default function FranchisePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const partnerJourney = [
    { step: '01', title: 'Location Selection', desc: 'Site evaluation, footfall assessment, and catchment area analysis.', icon: MapPin },
    { step: '02', title: 'Franchise Agreement', desc: 'Commercial terms confirmation, legal agreement signing, and territory allocation.', icon: FileCheck },
    { step: '03', title: 'Store Setup', desc: 'Store design direction, kitchen layout, equipment installation, and branding.', icon: Hammer },
    { step: '04', title: 'Staff Training', desc: 'Product preparation, hygiene standards, store routines, and Petpooja POS operation.', icon: GraduationCap },
    { step: '05', title: 'Grand Launch', desc: 'Soft opening, operational audits, local marketing kick-off, and grand opening.', icon: Rocket },
    { step: '06', title: 'Growth Support', desc: 'Continuous SOP monitoring, procurement supply, sales tracking, and local marketing support.', icon: Headphones },
  ];

  const supportPillars = [
    { title: 'Brand Identity', desc: 'Identity, standards, store design direction, and visual language.' },
    { title: 'Operations & SOP', desc: 'Store management guidance, opening/closing routines, and operational controls.' },
    { title: 'Food & BOM', desc: 'Standardized recipes, bill of materials (BOM), portion control, and taste benchmarks.' },
    { title: 'Procurement', desc: 'Approved raw materials, custom packaging, and centralized distributor supply.' },
    { title: 'Marketing', desc: 'Social media content, food reels, brand storytelling, and local store marketing.' },
    { title: 'Staff Training', desc: 'Comprehensive food prep, hygiene, customer service, and store management training.' },
    { title: 'Technology', desc: 'Petpooja POS software, inventory visibility, sales tracking, and central dashboards.' },
    { title: 'Quality Control', desc: 'Regular audits, quality direction, packaging standards, and SOP compliance.' },
  ];

  return (
    <div className="space-y-20 pb-20 pt-10 bg-baba-bg text-baba-black">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-bold text-baba-orange font-mono uppercase shadow-sm">
          <Store className="w-4 h-4" />
          <span>FRANCHISE BUSINESS OPPORTUNITY</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-baba-black font-title uppercase tracking-wide">
          OWN A HIGH-PROFIT <span className="text-baba-orange">FOOD BUSINESS</span>
        </h1>

        <p className="text-base sm:text-xl text-baba-gray max-w-3xl mx-auto leading-relaxed font-medium">
          The franchise proposition is built around a simple idea: partners should not have to create a food brand, menu system, outlet identity, and operating framework from zero.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-baba-orange hover:bg-baba-orange-dark text-white font-black px-8 py-4 rounded-full text-sm uppercase tracking-wider transition shadow-glow-orange inline-flex items-center gap-2 font-title"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply For Franchise Opportunity</span>
          </button>
        </div>
      </section>

      {/* 3 Outlet Models Grid */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-baba-black font-title uppercase">
            3 SCALABLE <span className="text-baba-orange">FRANCHISE MODELS</span>
          </h2>
          <p className="text-xs sm:text-sm text-baba-gray">
            Three formats designed for different footprints, investment capabilities, and market footprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Silver QSR */}
          <div className="bg-white border border-baba-border rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-baba-orange transition shadow-sm">
            <div className="space-y-4">
              <span className="bg-baba-lightgray text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-bold font-mono">
                Model 01
              </span>
              <h3 className="text-3xl font-black text-baba-black font-title uppercase">QSR / Silver Model</h3>
              <div className="text-xs text-baba-gray font-mono">Approx. 300–450 sq.ft.</div>
              <div className="bg-baba-bg p-4 rounded-2xl border border-baba-border">
                <div className="text-xs text-baba-gray">Franchise Fee Reference</div>
                <div className="text-3xl font-black text-baba-orange font-title mt-0.5">₹6.51 Lakh + GST</div>
                <div className="text-[11px] text-baba-gray mt-1">Compact QSR format for high-density locations</div>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-3.5 rounded-2xl bg-baba-black hover:bg-baba-orange text-white text-xs font-bold transition border border-baba-border font-title uppercase text-sm"
            >
              Select Silver Model
            </button>
          </div>

          {/* Gold Café */}
          <div className="bg-white border-2 border-baba-orange rounded-3xl p-8 space-y-6 shadow-glow-orange flex flex-col justify-between transform md:-translate-y-2">
            <div className="space-y-4">
              <span className="bg-baba-orange/10 text-baba-orange px-3 py-1 rounded-full text-xs font-bold font-mono">
                Model 02 • Recommended
              </span>
              <h3 className="text-3xl font-black text-baba-black font-title uppercase">Café / Gold Model</h3>
              <div className="text-xs text-baba-gray font-mono">Approx. 500–750 sq.ft.</div>
              <div className="bg-baba-bg p-4 rounded-2xl border border-baba-orange/30">
                <div className="text-xs text-baba-gray">Franchise Fee Reference</div>
                <div className="text-3xl font-black text-baba-black font-title mt-0.5">₹8.51 Lakh + GST</div>
                <div className="text-[11px] text-baba-gray mt-1">Larger customer dining experience & full menu</div>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-3.5 rounded-2xl bg-baba-orange hover:bg-baba-orange-dark text-white text-xs font-bold transition shadow-glow-orange font-title uppercase text-sm"
            >
              Select Gold Model
            </button>
          </div>

          {/* Platinum Lounge */}
          <div className="bg-white border border-baba-border rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-baba-orange transition shadow-sm">
            <div className="space-y-4">
              <span className="bg-baba-lightgray text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-bold font-mono">
                Model 03
              </span>
              <h3 className="text-3xl font-black text-baba-black font-title uppercase">Lounge / Platinum</h3>
              <div className="text-xs text-baba-gray font-mono">Approx. 800–1,000 sq.ft.</div>
              <div className="bg-baba-bg p-4 rounded-2xl border border-baba-border">
                <div className="text-xs text-baba-gray">Franchise Fee Reference</div>
                <div className="text-3xl font-black text-baba-orange font-title mt-0.5">₹12.50 Lakh + GST</div>
                <div className="text-[11px] text-baba-gray mt-1">Larger-format premium dining lounge experience</div>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-3.5 rounded-2xl bg-baba-black hover:bg-baba-orange text-white text-xs font-bold transition border border-baba-border font-title uppercase text-sm"
            >
              Select Platinum Model
            </button>
          </div>

        </div>
      </section>

      {/* Interactive ROI Calculator Component */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <RoiCalculator onOpenFranchiseModal={() => setModalOpen(true)} />
      </section>

      {/* 6-Step Partner Journey */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-bold uppercase tracking-widest font-display">
            <Layers className="w-4 h-4" />
            <span>Structured Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-baba-black font-title uppercase">
            THE 6-STEP <span className="text-baba-orange">PARTNER JOURNEY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerJourney.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div key={idx} className="bg-white border border-baba-border rounded-2xl p-6 space-y-4 hover:border-baba-orange transition shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-baba-orange/10 border border-baba-orange/30 text-baba-orange flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-baba-orange/40 font-title">STEP {stepItem.step}</span>
                </div>
                <h3 className="text-xl font-black text-baba-black font-title uppercase">{stepItem.title}</h3>
                <p className="text-xs text-baba-gray leading-relaxed">{stepItem.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Franchise HQ Support Ecosystem */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="bg-white border border-baba-border rounded-3xl p-8 sm:p-12 space-y-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-baba-orange uppercase tracking-widest font-mono">HQ Support Infrastructure</div>
            <h2 className="text-4xl sm:text-5xl font-black text-baba-black font-title uppercase">
              COMPLETE <span className="text-baba-orange">FRANCHISE SUPPORT</span>
            </h2>
            <p className="text-xs sm:text-sm text-baba-gray">
              Support is designed to reduce operational complexity for every franchise partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportPillars.map((pillar, idx) => (
              <div key={idx} className="bg-baba-bg p-5 rounded-2xl border border-baba-border space-y-2">
                <div className="text-sm font-bold text-baba-black font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-baba-gray leading-relaxed pl-6">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <div className="bg-white border border-baba-border rounded-3xl p-10 space-y-6 shadow-sm">
          <h3 className="text-3xl font-black text-baba-black font-title uppercase">
            START YOUR FOOD FRANCHISE JOURNEY TODAY
          </h3>
          <p className="text-xs sm:text-sm text-baba-gray max-w-lg mx-auto">
            Book an introductory franchise consultation call with our team.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-baba-orange hover:bg-baba-orange-dark text-white font-bold px-10 py-4 rounded-full text-xs uppercase tracking-wider transition shadow-glow-orange inline-flex items-center gap-2 font-title text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply For Franchise Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}
