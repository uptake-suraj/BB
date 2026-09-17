'use client';

import React, { useState } from 'react';
import FranchiseModal from '@/components/interactive/franchise-modal';
import { CONTACT_INFO } from '@/data/contact-data';
import { Phone, Mail, MapPin, Instagram, Sparkles, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    subject: 'Franchise Inquiry',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 pt-6 sm:pt-10 bg-baba-bg text-baba-black font-sans overflow-x-hidden">
      <FranchiseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-semibold text-baba-orange font-mono uppercase shadow-sm">
          <Phone className="w-4 h-4" />
          <span>CONNECT WITH CORPORATE HEADQUARTERS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-title font-normal text-baba-black uppercase tracking-wide">
          GET IN TOUCH <span className="text-baba-orange">WITH US</span>
        </h1>

        <p className="text-sm sm:text-lg text-baba-gray font-normal max-w-3xl mx-auto leading-relaxed px-2">
          Have questions regarding franchise opportunities, vendor partnerships, career openings, or customer feedback? Contact our corporate management team.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left HQ Info Card */}
          <div className="lg:col-span-5 bg-baba-black text-white p-6 sm:p-10 rounded-3xl space-y-8 shadow-xl relative overflow-hidden border border-baba-orange/40">
            <div className="absolute top-0 right-0 w-32 h-32 bg-baba-orange/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-baba-orange font-mono">
                Corporate Office
              </div>
              <h3 className="text-3xl font-title font-normal text-white uppercase">{CONTACT_INFO.companyName}</h3>
              <div className="text-xs text-gray-400 font-mono">{CONTACT_INFO.tagline}</div>
            </div>

            <div className="space-y-4 text-xs font-normal text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-baba-orange flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.hqAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-baba-orange flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-mono text-white font-bold text-sm hover:text-baba-orange transition">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-baba-orange flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono text-white hover:text-baba-orange transition">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-baba-orange flex-shrink-0" />
                <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer" className="font-mono text-white hover:text-baba-orange transition">
                  {CONTACT_INFO.instagram}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Clock className="w-5 h-5 text-baba-orange flex-shrink-0" />
                <span className="font-mono text-gray-300">{CONTACT_INFO.operatingHours}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 space-y-2">
              <div className="text-xs text-gray-400 uppercase font-mono font-semibold">Leadership Contacts:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-normal">
                {CONTACT_INFO.leadership.map((l, i) => (
                  <div key={i} className="bg-white/10 p-2.5 rounded-xl">
                    <div className="text-baba-orange font-semibold font-mono">{l.title}</div>
                    <div className="text-white font-medium">{l.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Dual Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-baba-border rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-title font-normal text-baba-black uppercase">SEND A DIRECT MESSAGE</h3>
              <p className="text-xs sm:text-sm text-baba-gray font-normal">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900 font-sans">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to The Burger Baba. Our team will contact you shortly on {formData.phone || 'your phone number'}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider font-sans"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-baba-black">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-xs text-baba-black focus:outline-none focus:border-baba-orange"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-baba-black">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-xs text-baba-black focus:outline-none focus:border-baba-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-baba-black">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-xs text-baba-black focus:outline-none focus:border-baba-orange"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-baba-black">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmedabad / Rajkot"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-xs text-baba-black focus:outline-none focus:border-baba-orange"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-baba-black">Inquiry Type</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-xs text-baba-black focus:outline-none focus:border-baba-orange"
                  >
                    <option value="Franchise Inquiry">Franchise Inquiry (Silver / Gold / Platinum)</option>
                    <option value="Vendor / Supply Partnership">Vendor / Supply Partnership</option>
                    <option value="Career Application">Career Application</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-baba-black">Message / Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirement or location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-xs text-baba-black focus:outline-none focus:border-baba-orange"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold text-xs uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-3 font-sans"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 shrink-0 mr-1.5" />
                      <span>Submit Inquiry Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
