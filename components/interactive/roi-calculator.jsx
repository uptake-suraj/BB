'use client';

import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Store, Award, CheckCircle2, ChevronRight } from 'lucide-react';

const MODELS = [
  {
    id: 'silver',
    name: 'QSR / Silver Model',
    size: '300–450 sq.ft.',
    fee: '₹6.51 Lakh + GST',
    feeValue: 651000,
    baseOrders: 140,
    avgOrder: 180,
    recommendedFor: 'Compact QSR, High Footfall Market, Express Kiosk',
    badge: 'Popular',
  },
  {
    id: 'gold',
    name: 'Café / Gold Model',
    size: '500–750 sq.ft.',
    fee: '₹8.51 Lakh + GST',
    feeValue: 851000,
    baseOrders: 220,
    avgOrder: 220,
    recommendedFor: 'High-Density Dining, Youth Hangout, Full Menu',
    badge: 'High ROI',
  },
  {
    id: 'platinum',
    name: 'Lounge / Platinum Model',
    size: '800–1,000 sq.ft.',
    fee: '₹12.50 Lakh + GST',
    feeValue: 1250000,
    baseOrders: 320,
    avgOrder: 260,
    recommendedFor: 'Flagship Premium Dining, Extended Seating & Events',
    badge: 'Flagship',
  },
];

export default function RoiCalculator({ onOpenFranchiseModal }) {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [dailyOrders, setDailyOrders] = useState(MODELS[0].baseOrders);
  const [avgOrderValue, setAvgOrderValue] = useState(MODELS[0].avgOrder);

  // Financial Calculations
  const monthlyRevenue = dailyOrders * avgOrderValue * 30;
  const foodCost = monthlyRevenue * 0.35;
  const staffRentExpenses = monthlyRevenue * 0.30;
  const netMonthlyProfit = Math.max(0, monthlyRevenue - foodCost - staffRentExpenses);
  const netProfitMargin = monthlyRevenue > 0 ? ((netMonthlyProfit / monthlyRevenue) * 100).toFixed(1) : 0;
  
  const estimatedInitialInvestment = selectedModel.feeValue * 1.8;
  const paybackMonths = netMonthlyProfit > 0 ? (estimatedInitialInvestment / netMonthlyProfit).toFixed(1) : 'N/A';

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setDailyOrders(model.baseOrders);
    setAvgOrderValue(model.avgOrder);
  };

  const formatRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full bg-white border border-baba-border rounded-3xl p-5 sm:p-10 shadow-sm relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-baba-border">
        <div>
          <div className="flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest mb-1.5 font-mono">
            <Calculator className="w-4 h-4" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-title font-normal text-baba-black uppercase tracking-wide">
            CALCULATE YOUR <span className="text-baba-orange">FRANCHISE PROFIT</span>
          </h3>
          <p className="text-xs sm:text-sm font-normal text-baba-gray mt-1">
            Simulate monthly earnings based on unit footprint, orders per day, and average ticket size.
          </p>
        </div>

        <button
          onClick={onOpenFranchiseModal}
          className="w-full md:w-auto bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold px-6 py-3 rounded-full text-xs transition shadow-glow-orange flex items-center justify-center gap-2 uppercase tracking-wider font-sans"
        >
          <span>Get Financial Deck</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Model Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-6 sm:my-8">
        {MODELS.map((model) => {
          const isSelected = selectedModel.id === model.id;
          return (
            <button
              key={model.id}
              onClick={() => handleModelChange(model)}
              className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-baba-lightgray border-baba-orange shadow-sm'
                  : 'bg-white border-baba-border hover:bg-baba-bg'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 text-baba-orange">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
              <div className="text-[10px] font-semibold uppercase tracking-wider text-baba-orange mb-1 font-mono">
                {model.badge}
              </div>
              <div className="text-base sm:text-lg font-bold text-baba-black font-sans">{model.name}</div>
              <div className="text-xs text-baba-gray mt-0.5 font-mono font-normal">{model.size}</div>
              <div className="text-xs sm:text-sm font-bold text-baba-black mt-2 sm:mt-3 font-mono">{model.fee}</div>
            </button>
          );
        })}
      </div>

      {/* Interactive Controls & Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Sliders Input Area */}
        <div className="lg:col-span-7 bg-baba-bg p-5 sm:p-8 rounded-2xl border border-baba-border space-y-6 sm:space-y-8 flex flex-col justify-center">
          {/* Slider 1: Daily Orders */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm gap-2">
              <span className="text-baba-black font-semibold flex items-center gap-2">
                <Store className="w-4 h-4 text-baba-orange" /> Estimated Orders Per Day
              </span>
              <span className="text-baba-orange font-mono font-bold text-sm sm:text-base bg-white px-2.5 py-1 rounded-lg border border-baba-border shadow-xs">
                {dailyOrders} <span className="text-[10px] sm:text-xs text-baba-gray font-normal">orders/day</span>
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="600"
              step="10"
              value={dailyOrders}
              onChange={(e) => setDailyOrders(Number(e.target.value))}
              className="w-full h-2 bg-baba-border rounded-lg appearance-none cursor-pointer accent-baba-orange touch-action-none"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] text-baba-gray font-mono font-normal">
              <span>50 orders</span>
              <span>300 orders</span>
              <span>600 orders</span>
            </div>
          </div>

          {/* Slider 2: Average Order Value */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm gap-2">
              <span className="text-baba-black font-semibold flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-baba-orange" /> Average Ticket Size (AOV)
              </span>
              <span className="text-baba-orange font-mono font-bold text-sm sm:text-base bg-white px-2.5 py-1 rounded-lg border border-baba-border shadow-xs">
                ₹{avgOrderValue} <span className="text-[10px] sm:text-xs text-baba-gray font-normal">/ order</span>
              </span>
            </div>
            <input
              type="range"
              min="120"
              max="450"
              step="10"
              value={avgOrderValue}
              onChange={(e) => setAvgOrderValue(Number(e.target.value))}
              className="w-full h-2 bg-baba-border rounded-lg appearance-none cursor-pointer accent-baba-orange touch-action-none"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] text-baba-gray font-mono font-normal">
              <span>₹120 (Snack)</span>
              <span>₹220 (Combo)</span>
              <span>₹450 (Family)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-baba-border text-xs text-baba-gray space-y-1">
            <div className="text-baba-black font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-baba-orange" /> Location Profile:
            </div>
            <div className="font-normal text-[11px] leading-relaxed">{selectedModel.recommendedFor}</div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-baba-black p-5 sm:p-8 rounded-2xl border border-baba-orange/40 flex flex-col justify-between shadow-xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-baba-orange/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-baba-orange font-mono">
              Projected Performance
            </div>

            {/* Revenue */}
            <div className="border-b border-white/15 pb-3">
              <div className="text-[11px] text-gray-400 font-normal">Estimated Monthly Gross Revenue</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-0.5">
                {formatRupees(monthlyRevenue)}
              </div>
            </div>

            {/* Breakdowns */}
            <div className="space-y-2 text-[11px] sm:text-xs font-normal">
              <div className="flex justify-between text-gray-400">
                <span>Est. Raw Material & COGS (~35%):</span>
                <span className="font-mono text-white font-medium">{formatRupees(foodCost)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Est. Operational Overhead (~30%):</span>
                <span className="font-mono text-white font-medium">{formatRupees(staffRentExpenses)}</span>
              </div>
            </div>

            {/* Net Profit */}
            <div className="bg-white/10 p-4 rounded-2xl border border-baba-orange/50 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-baba-orange font-semibold uppercase tracking-wide flex items-center gap-1 font-mono">
                  <TrendingUp className="w-3.5 h-3.5" /> Net Monthly Profit
                </span>
                <span className="text-[10px] font-mono font-semibold bg-baba-orange text-white px-2 py-0.5 rounded-full">
                  {netProfitMargin}% Margin
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                {formatRupees(netMonthlyProfit)}
              </div>
            </div>

            {/* Payback period */}
            <div className="flex items-center justify-between text-xs bg-white/5 p-3 rounded-xl border border-white/10 font-mono">
              <span className="text-gray-300 font-normal flex items-center gap-1.5 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-baba-orange" /> Est. Payback:
              </span>
              <span className="text-white font-semibold text-xs">{paybackMonths} Months</span>
            </div>
          </div>

          <button
            onClick={onOpenFranchiseModal}
            className="w-full mt-5 py-3.5 rounded-xl bg-baba-orange hover:bg-baba-orange-dark text-white font-semibold text-xs uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2 font-sans"
          >
            <span>Apply For {selectedModel.name}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
