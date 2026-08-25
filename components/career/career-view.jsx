'use client';

import React, { useState } from 'react';
import FranchiseModal from '@/components/interactive/franchise-modal';
import { JOB_OPENINGS } from '@/data/career-data';
import { Briefcase, MapPin, Clock, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';

export default function CareerView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 pt-6 sm:pt-10 bg-baba-bg text-baba-black font-sans overflow-x-hidden">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-semibold text-baba-orange font-mono uppercase shadow-sm">
          <Briefcase className="w-4 h-4" />
          <span>JOIN THE BURGER BABA TEAM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-title font-normal text-baba-black uppercase tracking-wide">
          BUILD YOUR CAREER <span className="text-baba-orange">WITH US</span>
        </h1>

        <p className="text-sm sm:text-lg text-baba-gray font-normal max-w-3xl mx-auto leading-relaxed px-2">
          Explore rewarding opportunities across kitchen preparation, store management, franchise sales, and brand marketing. Grow with India's fastest-growing QSR platform.
        </p>
      </section>

      {/* Job Openings Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-baba-border rounded-3xl p-6 sm:p-8 space-y-5 hover:border-baba-orange transition duration-300 flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-baba-orange/10 text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-xs font-semibold font-mono">
                    {job.type}
                  </span>
                  <span className="text-xs text-baba-gray font-mono font-medium">{job.experience}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-baba-black tracking-tight group-hover:text-baba-orange transition">
                    {job.title}
                  </h3>
                  <div className="text-xs text-baba-orange font-mono flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-normal text-baba-gray leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="pt-4 border-t border-baba-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-3 rounded-2xl bg-baba-black group-hover:bg-baba-orange text-white text-xs font-semibold transition border border-baba-border uppercase tracking-wider font-sans shadow-xs flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4 text-amber-200" />
                  <span>Apply For Position</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-baba-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-white border border-baba-border rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl text-baba-black">
            <div className="space-y-2">
              <span className="bg-baba-orange/10 text-baba-orange px-3 py-1 rounded-full text-xs font-mono font-semibold">
                Job Application
              </span>
              <h3 className="text-2xl font-title font-normal text-baba-black uppercase">{selectedJob.title}</h3>
              <p className="text-xs text-baba-gray">{selectedJob.location} • {selectedJob.type}</p>
            </div>

            <div className="p-4 rounded-2xl bg-baba-bg border border-baba-border text-xs text-baba-gray space-y-2">
              <div className="font-semibold text-baba-black">How to Apply:</div>
              <p className="leading-relaxed">
                Send your resume / CV directly to our HR team at:
              </p>
              <div className="font-mono font-bold text-baba-orange text-sm">theburgerbaba20@gmail.com</div>
              <div className="text-[11px] text-baba-gray font-normal pt-1">
                Mention job title <strong className="text-baba-black">"{selectedJob.title}"</strong> in subject line.
              </div>
            </div>

            <button
              onClick={() => setSelectedJob(null)}
              className="w-full py-3 rounded-xl bg-baba-orange text-white font-semibold text-xs uppercase tracking-wider font-sans shadow-glow-orange"
            >
              Close Application Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
