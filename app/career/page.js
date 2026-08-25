'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Award, Send, CheckCircle2, X } from 'lucide-react';

const OPEN_POSITIONS = [
  {
    title: 'Store Operations Manager',
    department: 'Operations',
    location: 'Mehsana / Ahmedabad',
    type: 'Full Time',
    desc: 'Lead store operations, staff routines, inventory management, SOP compliance, and daily sales targets.',
  },
  {
    title: 'Quality Assurance Lead',
    department: 'Quality Control',
    location: 'Mehsana HQ',
    type: 'Full Time',
    desc: 'Audit store hygiene, ingredient preparation standards, packaging consistency, and conduct corrective action reviews across network.',
  },
  {
    title: 'Kitchen Supervisor & Head Cook',
    department: 'Kitchen Ops',
    location: 'Surat / Vijapur',
    type: 'Full Time',
    desc: 'Manage standardized food preparation, recipe execution, portion control, hygiene compliance, and staff training.',
  },
  {
    title: 'POS & Technology Specialist',
    department: 'Technology',
    location: 'Mehsana HQ',
    type: 'Full Time',
    desc: 'Manage Petpooja POS integrations, central franchise dashboards, sales analytics, and store hardware troubleshooting.',
  },
  {
    title: 'Franchise Sales Associate',
    department: 'Business Development',
    location: 'Ahmedabad',
    type: 'Full Time',
    desc: 'Assist Aarti Suthar in qualification of franchise leads, partner onboarding calls, presentation of models, and territory expansion.',
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-10 bg-baba-bg text-baba-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-bold text-baba-orange font-mono uppercase shadow-sm">
          <Briefcase className="w-4 h-4" />
          <span>JOIN THE BURGER BABA TEAM</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-baba-black font-title uppercase tracking-wide">
          BUILD YOUR CAREER IN <span className="text-baba-orange">QSR</span>
        </h1>

        <p className="text-base sm:text-lg text-baba-gray max-w-2xl mx-auto leading-relaxed">
          We are expanding rapidly across Gujarat and India. Join a fast-growing, system-driven food company built on merit and growth.
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black text-baba-black font-title uppercase">
            CURRENT <span className="text-baba-orange">JOB OPENINGS</span>
          </h2>
          <p className="text-xs text-baba-gray">Explore active roles across store operations, quality control, technology, and sales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPEN_POSITIONS.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border border-baba-border rounded-3xl p-6 space-y-4 hover:border-baba-orange transition duration-300 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-baba-lightgray text-baba-orange border border-baba-orange/30 px-3 py-1 rounded-full text-[10px] font-bold font-mono">
                    {job.department}
                  </span>
                  <span className="text-xs text-baba-gray font-mono">{job.type}</span>
                </div>

                <h3 className="text-2xl font-black text-baba-black font-title uppercase">{job.title}</h3>
                
                <div className="flex items-center gap-2 text-xs text-baba-gray">
                  <MapPin className="w-3.5 h-3.5 text-baba-orange" />
                  <span>{job.location}</span>
                </div>

                <p className="text-xs text-baba-gray leading-relaxed">{job.desc}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job);
                  setApplied(false);
                }}
                className="w-full py-3 rounded-2xl bg-baba-black hover:bg-baba-orange text-white text-xs font-bold transition border border-baba-border flex items-center justify-center gap-2 font-title uppercase tracking-wider text-sm"
              >
                <span>Apply For This Role</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-baba-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white border border-baba-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-baba-black">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-baba-lightgray border border-baba-border text-baba-gray hover:text-baba-black"
            >
              <X className="w-5 h-5" />
            </button>

            {!applied ? (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-baba-orange uppercase font-mono">Role Application</div>
                  <h3 className="text-2xl font-black text-baba-black font-title uppercase">{selectedJob.title}</h3>
                  <div className="text-xs text-baba-gray">{selectedJob.location} • {selectedJob.department}</div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-baba-black">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-2.5 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-baba-black">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-2.5 text-sm text-baba-black font-mono focus:outline-none focus:border-baba-orange"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-baba-black">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-2.5 text-sm text-baba-black font-mono focus:outline-none focus:border-baba-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-baba-orange hover:bg-baba-orange-dark text-white font-bold text-xs uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2 font-title text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Resume / Application</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-baba-orange mx-auto" />
                <h3 className="text-2xl font-black text-baba-black font-title uppercase">APPLICATION RECEIVED!</h3>
                <p className="text-xs text-baba-gray">
                  Thank you, <strong className="text-baba-black">{applicantName}</strong>. Our HR team will contact you if your profile matches the role requirements.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="bg-baba-black px-6 py-2.5 rounded-full text-xs text-white font-bold font-title uppercase tracking-wider text-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
