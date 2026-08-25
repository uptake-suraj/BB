'use client';

import React, { useState } from 'react';
import FranchiseModal from '@/components/interactive/franchise-modal';
import { BUSINESS_MODELS } from '@/data/home-data';
import { ONBOARDING_STEPS } from '@/data/franchise-data';
import { Store, CheckCircle2, Sparkles, Award } from 'lucide-react';

export default function FranchiseView() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 pt-6 sm:pt-10 bg-baba-bg text-baba-black font-sans overflow-x-hidden">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-semibold text-baba-orange font-mono uppercase shadow-sm">
          <Store className="w-4 h-4" />
          <span>FRANCHISE OPPORTUNITIES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-title font-normal text-baba-black uppercase tracking-wide">
          PARTNER WITH <span className="text-baba-orange">THE BURGER BABA</span>
        </h1>

        <p className="text-sm sm:text-lg text-baba-gray font-normal max-w-3xl mx-auto leading-relaxed px-2">
          Choose from 3 flexible QSR outlet models tailored for high footfall commercial locations, express food courts, or premium dine-in lounges.
        </p>
      </section>

      {/* 3 Models Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_MODELS.map((model) => (
            <div
              key={model.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 transition duration-300 relative flex flex-col justify-between shadow-sm h-full ${
                model.isPopular ? 'border-2 border-baba-orange shadow-glow-orange' : 'border border-baba-border hover:border-baba-orange'
              }`}
            >
              {model.badgeTop && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-baba-orange text-white text-[10px] font-semibold uppercase px-4 py-1 rounded-full tracking-wider shadow-sm font-mono whitespace-nowrap">
                  {model.badgeTop}
                </div>
              )}

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold font-mono ${
                    model.isPopular ? 'bg-baba-orange/10 text-baba-orange' : 'bg-baba-lightgray text-baba-orange border border-baba-orange/30'
                  }`}>
                    {model.badge}
                  </span>
                  <span className="text-xs text-baba-gray font-mono">{model.modelNo}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-baba-black tracking-tight">{model.title}</h3>
                  <div className="text-xs text-baba-gray font-mono mt-1">{model.size}</div>
                </div>

                <div className={`p-4 sm:p-5 rounded-2xl border ${model.isPopular ? 'bg-baba-bg border-baba-orange/30' : 'bg-baba-bg border-baba-border'}`}>
                  <div className="text-xs text-baba-gray font-normal">Franchise Fee Reference</div>
                  <div className={`text-xl sm:text-2xl font-bold font-mono mt-0.5 ${model.isPopular ? 'text-baba-black' : 'text-baba-orange'}`}>
                    {model.fee}
                  </div>
                  {model.feeSub && (
                    <div className="text-[10px] text-baba-orange font-mono font-semibold mt-1">
                      {model.feeSub}
                    </div>
                  )}
                </div>

                <ul className="space-y-2 text-xs font-normal text-baba-gray">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className={`w-full py-3.5 rounded-2xl font-semibold transition text-xs uppercase tracking-wider font-sans mt-4 sm:mt-6 ${
                  model.isPopular ? 'bg-baba-orange hover:bg-baba-orange-dark text-white shadow-glow-orange' : 'bg-baba-black hover:bg-baba-orange text-white border border-baba-border'
                }`}
              >
                Apply For {model.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Franchise Partner Onboarding Roadmap */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-baba-border rounded-3xl p-6 sm:p-12 space-y-8 sm:space-y-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest font-mono">
              <Award className="w-4 h-4" />
              <span>Partner Onboarding Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-title font-normal text-baba-black uppercase tracking-wide">
              HOW TO BECOME A <span className="text-baba-orange">FRANCHISE OWNER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ONBOARDING_STEPS.map((step, idx) => (
              <div key={idx} className="bg-baba-bg p-6 rounded-2xl border border-baba-border space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-baba-orange text-white text-xs font-bold font-mono flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-baba-orange uppercase font-semibold">Step {idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-baba-black tracking-tight">{step.title}</h4>
                <p className="text-xs font-normal text-baba-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-baba-border rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
          <h3 className="text-3xl sm:text-5xl font-title font-normal text-baba-black uppercase tracking-wide">
            SECURE YOUR <span className="text-baba-orange">CITY TERRITORY</span> TODAY
          </h3>
          <p className="text-xs sm:text-sm font-normal text-baba-gray max-w-xl mx-auto">
            Speak directly with our franchise onboarding team to receive our full investment deck.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition shadow-glow-orange inline-flex items-center gap-2 font-sans"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply For Franchise</span>
          </button>
        </div>
      </section>
    </div>
  );
}
