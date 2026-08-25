'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles, Building, User, Mail, Phone, MapPin, DollarSign } from 'lucide-react';

export default function FranchiseModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    model: 'QSR / Silver Model (300-450 sq.ft)',
    investment: '₹10L - ₹15L',
    experience: 'Yes - Food/Retail background',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-baba-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-baba-border rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-baba-black">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-baba-orange/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-baba-lightgray border border-baba-border text-baba-gray hover:text-baba-black hover:bg-baba-border transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 text-baba-orange text-xs font-bold uppercase tracking-widest font-mono">
                <Sparkles className="w-4 h-4" />
                <span>Official Partner Application</span>
              </div>
              <h3 className="text-3xl font-black text-baba-black font-title uppercase">
                APPLY FOR <span className="text-baba-orange">THE BURGER BABA FRANCHISE</span>
              </h3>
              <p className="text-xs sm:text-sm text-baba-gray">
                Join India's fast-growing vegetarian QSR network. Fill out the application form below and our expansion team will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-baba-black flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-baba-orange" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Manan Panchal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-baba-black flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-baba-orange" /> Mobile Number *
                  </label>
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
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-baba-black flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-baba-orange" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black font-mono focus:outline-none focus:border-baba-orange"
                  />
                </div>

                {/* Preferred City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-baba-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-baba-orange" /> Preferred City / State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmedabad, Surat, Rajkot"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                  />
                </div>
              </div>

              {/* Franchise Model Choice */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-baba-black flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-baba-orange" /> Preferred Franchise Format *
                </label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                >
                  <option value="QSR / Silver Model (300-450 sq.ft)">
                    QSR / Silver Model (300-450 sq.ft • Confidential Fee)
                  </option>
                  <option value="Café / Gold Model (500-750 sq.ft)">
                    Café / Gold Model (500-750 sq.ft • Confidential Fee)
                  </option>
                  <option value="Lounge / Platinum Model (800-1000 sq.ft)">
                    Lounge / Platinum Model (800-1,000 sq.ft • Confidential Fee)
                  </option>
                </select>
              </div>

              {/* Investment Capacity */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-baba-black flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-baba-orange" /> Total Capital Ready For Investment *
                </label>
                <select
                  value={formData.investment}
                  onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                  className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                >
                  <option value="₹10L - ₹15L">₹10 Lakh – ₹15 Lakh</option>
                  <option value="₹15L - ₹25L">₹15 Lakh – ₹25 Lakh</option>
                  <option value="Above ₹25L">Above ₹25 Lakh (Multi-Unit Franchise)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-baba-black">Additional Details / Questions</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your proposed site or business background..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-baba-bg border border-baba-border rounded-xl px-4 py-3 text-sm text-baba-black focus:outline-none focus:border-baba-orange font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-baba-orange hover:bg-baba-orange-dark text-white font-black text-sm uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2 font-title text-base"
              >
                {loading ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Franchise Application</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-baba-gray">
                By submitting this form, you agree to receive official franchise communications from The Burger Baba.
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 bg-baba-orange/10 border border-baba-orange text-baba-orange rounded-full flex items-center justify-center mx-auto shadow-glow-orange animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black text-baba-black font-title uppercase">
                APPLICATION SUBMITTED SUCCESSFULLY!
              </h3>
              <p className="text-sm text-baba-gray max-w-md mx-auto">
                Thank you, <strong className="text-baba-black">{formData.name}</strong>. Our franchise onboarding team will review your enquiry for <strong className="text-baba-orange">{formData.city}</strong> and reach out shortly.
              </p>
            </div>

            <div className="bg-baba-bg p-4 rounded-2xl border border-baba-border max-w-md mx-auto text-xs text-baba-gray text-left space-y-1">
              <div className="text-baba-black font-bold">Direct Franchise Desk:</div>
              <div>Phone: +91 8866208063</div>
              <div>Email: theburgerbaba20@gmail.com</div>
              <div>HQ: Saket Business Hub, Mehsana, Gujarat</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-baba-black hover:bg-baba-orange text-white font-bold px-8 py-3 rounded-full text-xs transition font-title uppercase tracking-wider text-sm"
            >
              Done / Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
