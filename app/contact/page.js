'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle2, Building, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [tab, setTab] = useState('franchise');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-10 bg-baba-bg text-baba-black">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-baba-orange/40 text-xs font-bold text-baba-orange font-mono uppercase shadow-sm">
          <MessageSquare className="w-4 h-4" />
          <span>CORPORATE COMMUNICATION & ENQUIRY</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-baba-black font-title uppercase tracking-wide">
          GET IN <span className="text-baba-orange">TOUCH</span>
        </h1>

        <p className="text-base sm:text-lg text-baba-gray max-w-2xl mx-auto leading-relaxed">
          Whether you are looking to start a franchise, inquire about corporate catering, or give product feedback, our team is ready to connect.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: HQ Details */}
          <div className="lg:col-span-5 bg-white border border-baba-border rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="text-xs font-bold text-baba-orange uppercase tracking-widest font-mono">Headquarters</div>
              <h3 className="text-3xl font-black text-baba-black font-title uppercase">The Burger Baba Pvt. Ltd.</h3>

              <div className="space-y-5 text-xs text-baba-gray">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-baba-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-baba-black font-bold text-sm mb-1">Corporate Address</div>
                    <div>F-36, 37, Saket Business Hub, Opp. Domino's Pizza, Radhanpur Road, Mehsana, Gujarat - 384002</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-baba-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-baba-black font-bold text-sm mb-1">Direct Phone / WhatsApp</div>
                    <a href="tel:+918866208063" className="text-baba-orange font-mono text-sm font-bold hover:underline">
                      +91 8866208063
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-baba-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-baba-black font-bold text-sm mb-1">Official Email</div>
                    <a href="mailto:theburgerbaba20@gmail.com" className="text-baba-black font-mono text-sm hover:text-baba-orange">
                      theburgerbaba20@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-baba-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-baba-black font-bold text-sm mb-1">Instagram Official</div>
                    <a
                      href="https://instagram.com/theburgerbabaofficial"
                      target="_blank"
                      rel="noreferrer"
                      className="text-baba-black font-mono text-sm hover:text-baba-orange"
                    >
                      @theburgerbabaofficial
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-baba-bg p-5 rounded-2xl border border-baba-border text-xs text-baba-gray space-y-1">
              <div className="text-baba-black font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-baba-orange" /> Office Working Hours:
              </div>
              <div>Monday – Saturday: 10:00 AM – 7:00 PM IST</div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white border border-baba-border rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 bg-baba-bg p-1.5 rounded-2xl border border-baba-border">
              <button
                onClick={() => setTab('franchise')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition ${
                  tab === 'franchise'
                    ? 'bg-baba-orange text-white shadow-glow-orange font-title uppercase tracking-wider text-sm'
                    : 'text-baba-black hover:text-baba-orange'
                }`}
              >
                Franchise Enquiry
              </button>
              <button
                onClick={() => setTab('general')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition ${
                  tab === 'general'
                    ? 'bg-baba-orange text-white shadow-glow-orange font-title uppercase tracking-wider text-sm'
                    : 'text-baba-black hover:text-baba-orange'
                }`}
              >
                General Inquiry
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-baba-black">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-baba-black">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black font-mono focus:outline-none focus:border-baba-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-baba-black">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black font-mono focus:outline-none focus:border-baba-orange"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-baba-black">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mehsana, Ahmedabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-baba-black">Subject / Topic</label>
                  <input
                    type="text"
                    placeholder={tab === 'franchise' ? 'e.g. Seeking Silver QSR Franchise in Rajkot' : 'General Question'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-baba-black">Message / Detailed Query *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your query here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-baba-orange hover:bg-baba-orange-dark text-white font-black text-xs uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2 font-title text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry Message</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-baba-orange mx-auto" />
                <h3 className="text-3xl font-black text-baba-black font-title uppercase">MESSAGE SENT SUCCESSFULLY!</h3>
                <p className="text-xs text-baba-gray">
                  Thank you, <strong className="text-baba-black">{formData.name}</strong>. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-baba-black hover:bg-baba-orange text-white font-bold px-6 py-2.5 rounded-full text-xs transition border border-baba-border font-title uppercase tracking-wider text-sm"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
