'use client';

import React, { useState } from 'react';
import FranchiseModal from '@/components/interactive/franchise-modal';
import BrandLogo from '@/components/brand-logo';
import JourneyPathTimeline from '@/components/interactive/journey-path-timeline';
import { ShieldCheck, Award, Sparkles, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const leaders = [
    {
      name: 'MANAN PANCHAL',
      role: 'Founder & CEO',
      bio: 'Founder and principal brand leader, responsible for long-term vision, brand strategy, expansion roadmap, and corporate growth ambition.',
    },
    {
      name: 'HIMANSHU GOSWAMI',
      role: 'Managing Director / Operations',
      bio: 'Operational leadership, execution, store systems, SOP compliance, outlet performance monitoring, and franchise operational controls.',
    },
    {
      name: 'AARTI SUTHAR',
      role: 'Sales Head',
      bio: 'Sales and franchise communication support, lead qualification, partner development, and investor onboarding.',
    },
    {
      name: 'VERNORA',
      role: 'Marketing Partner (Harshil Shah)',
      bio: 'External marketing company managing brand campaigns, social media content, local marketing guidance, and consumer demand.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 pt-6 sm:pt-10 bg-baba-bg text-baba-black font-sans overflow-x-hidden">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-semibold text-baba-orange font-mono uppercase shadow-sm">
          <Award className="w-4 h-4" />
          <span>OUR STORY & PHILOSOPHY</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-title font-normal text-baba-black uppercase tracking-wide">
          WE BELIEVE IN <span className="text-baba-orange">QUALITY</span>
        </h1>
        
        <p className="text-sm sm:text-lg text-baba-gray font-normal max-w-3xl mx-auto leading-relaxed px-2">
          From a small cloud kitchen in 2020 to a structured 7-outlet QSR franchise company in Gujarat. Built from small beginnings, rebuilt through real ground experience.
        </p>
      </section>

      {/* Interactive Path-Based Scroll Journey Section */}
      <section className="bg-white border-y border-baba-border/70 py-6 sm:py-12 shadow-xs">
        <JourneyPathTimeline />
      </section>

      {/* Corporate Overview & Philosophy */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-baba-border rounded-3xl p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center shadow-sm">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-xs font-semibold text-baba-orange uppercase tracking-widest font-mono">Operating Philosophy</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-normal text-baba-black uppercase tracking-wide">
              ONE BRAND. ONE STANDARD. CONSISTENT EXECUTION.
            </h2>
            <p className="text-xs sm:text-sm font-normal text-baba-gray leading-relaxed">
              At <strong className="font-semibold text-baba-black">THE BURGER BABA</strong>, quality is not limited to taste alone. It is a multi-touchpoint operating standard encompassing ingredient quality, preparation consistency, hygiene, packaging, customer experience, and procurement control.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-2 text-xs font-normal text-baba-black">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                <span>100% Vegetarian Western-Style Food adapted to Indian Taste Preferences</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                <span>Standardized BOM (Bill of Materials) & Portion Control Logic</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-baba-orange flex-shrink-0" />
                <span>Petpooja POS Visibility & Data-Led Central Supply Ecosystem</span>
              </div>
            </div>
          </div>

          <div className="bg-baba-bg p-6 sm:p-8 rounded-2xl border border-baba-border flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6">
            <BrandLogo className="w-24 h-24 sm:w-28 sm:h-28" showText={false} />
            <div className="space-y-2">
              <div className="text-xl sm:text-2xl font-title font-normal text-baba-black uppercase tracking-wide">Leadership Quote</div>
              <blockquote className="text-xs sm:text-sm italic font-normal text-baba-gray max-w-sm leading-relaxed">
                “Build systems that reduce founder-dependence, strengthen accountability, and make consistent execution easier across all outlets.”
              </blockquote>
              <div className="text-xs font-mono font-semibold text-baba-orange pt-2">
                — Manan Panchal, Founder & CEO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Team */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3 max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest font-mono">
            <Users className="w-4 h-4" />
            <span>Executive Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-normal text-baba-black uppercase tracking-wide">
            FOUNDER & <span className="text-baba-orange">LEADERSHIP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white border border-baba-border rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-baba-orange transition shadow-sm">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-baba-orange/10 border border-baba-orange text-baba-orange flex items-center justify-center text-xl font-bold font-title">
                  {leader.name[0]}
                </div>
                <h3 className="text-lg font-bold text-baba-black tracking-tight">{leader.name}</h3>
                <div className="text-xs font-mono font-semibold text-baba-orange">{leader.role}</div>
                <p className="text-xs font-normal text-baba-gray leading-relaxed pt-2">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-baba-border rounded-3xl p-8 sm:p-10 space-y-5 sm:space-y-6 shadow-sm">
          <h3 className="text-2xl sm:text-4xl font-title font-normal text-baba-black uppercase tracking-wide">
            WANT TO BE PART OF OUR NEXT GROWTH CHAPTER?
          </h3>
          <p className="text-xs sm:text-sm font-normal text-baba-gray max-w-xl mx-auto">
            We are looking for disciplined franchise partners in Gujarat, Rajasthan, Maharashtra and across India.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition shadow-glow-orange inline-flex items-center justify-center gap-2 font-sans"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply For Franchise</span>
          </button>
        </div>
      </section>
    </div>
  );
}
