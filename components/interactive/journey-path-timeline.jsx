'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, ShieldCheck, AlertTriangle, RefreshCw, Store, Rocket } from 'lucide-react';

const MILESTONES = [
  {
    step: '01',
    badge: '2020',
    title: 'Brand Journey Begins',
    description: 'Brand journey begins from a small cloud-kitchen setup.',
    icon: Calendar,
    color: 'border-baba-orange text-baba-orange bg-baba-orange/10',
  },
  {
    step: '02',
    badge: 'Early Stage',
    title: 'Operating Processes',
    description: 'Limited capital, limited experience and developing operating processes.',
    icon: ShieldCheck,
    color: 'border-amber-500 text-amber-500 bg-amber-500/10',
  },
  {
    step: '03',
    badge: 'Setbacks',
    title: 'Resilience & Learning',
    description: 'Two company outlets closed during the journey.',
    icon: AlertTriangle,
    color: 'border-rose-500 text-rose-500 bg-rose-500/10',
  },
  {
    step: '04',
    badge: 'Rebuild',
    title: 'Systems & Focus',
    description: 'Operations, product focus and systems were strengthened.',
    icon: RefreshCw,
    color: 'border-emerald-500 text-emerald-500 bg-emerald-500/10',
  },
  {
    step: '05',
    badge: 'Today',
    title: '7 Outlets Operating',
    description: '7-outlet network with 1 company-operated and 6 franchise-operated outlets.',
    icon: Store,
    color: 'border-baba-orange text-baba-orange bg-baba-orange/10',
  },
  {
    step: '06',
    badge: 'Next',
    title: 'Scalable Platform',
    description: 'Build a more structured, system-driven and scalable franchise platform.',
    icon: Rocket,
    color: 'border-indigo-500 text-indigo-500 bg-indigo-500/10',
  },
];

export default function JourneyPathTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-baba-orange text-xs font-semibold uppercase tracking-widest font-mono">
          <Calendar className="w-4 h-4" />
          <span>Interactive Brand Path</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-normal text-baba-black uppercase tracking-wide">
          OUR ROADMAP <span className="text-baba-orange">JOURNEY</span>
        </h2>
        <p className="text-xs sm:text-sm text-baba-gray font-normal">
          Follow our interactive scroll path from a small cloud kitchen in 2020 to a structured 7-outlet QSR franchise brand.
        </p>
      </div>

      {/* Main Path Container */}
      <div className="relative">
        {/* Animated Connecting SVG Path Line for Mobile & Desktop */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 pointer-events-none">
          {/* Static Background Path Line */}
          <div className="w-full h-full bg-baba-border/70 rounded-full"></div>

          {/* Animated Orange Path Line */}
          <motion.div
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute inset-0 w-full bg-gradient-to-b from-baba-orange via-amber-500 to-baba-orange rounded-full shadow-glow-orange"
          />
        </div>

        {/* Milestone Cards Grid */}
        <div className="space-y-8 sm:space-y-12 relative z-10">
          {MILESTONES.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card (Full width on mobile, half on desktop) */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0">
                  <div className="bg-white border border-baba-border rounded-2xl p-5 sm:p-6 space-y-3 shadow-sm hover:border-baba-orange transition duration-300 group relative">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] sm:text-xs font-mono font-semibold px-3 py-1 rounded-full border ${item.color}`}>
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-baba-gray font-semibold">Phase {item.step}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-baba-black font-sans group-hover:text-baba-orange transition">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-normal text-baba-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Node Center Badge Icon */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-baba-orange shadow-md flex items-center justify-center text-baba-orange group-hover:scale-110 transition">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* Desktop Spacer for alternating sides */}
                <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
