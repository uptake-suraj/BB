'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    try {
      const hasSeenSplash = sessionStorage.getItem('baba_splash_seen');
      if (!hasSeenSplash) {
        setIsVisible(true);

        const startTime = Date.now();
        const duration = 600; // Decreased splash timer duration (~0.6s) for fast initial page loading

        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const currentProgress = Math.min(
            Math.max(Math.round((elapsed / duration) * 100), 1),
            100
          );
          setProgress(currentProgress);

          if (currentProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsVisible(false);
              sessionStorage.setItem('baba_splash_seen', 'true');
            }, 300);
          }
        }, 20);

        return () => clearInterval(interval);
      }
    } catch (e) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  // SVG Circle parameters for clean 1% -> 100% orange border line around logo
  const strokeWidth = 4;
  const radius = 86;
  const circumference = 2 * Math.PI * radius; // approx 540.35
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] bg-[#FAF9F5] flex flex-col items-center justify-center select-none pointer-events-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-baba-orange/10 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center space-y-6 px-4 text-center">
            
            {/* Centered Logo Badge with Simple Clean 1% -> 100% SVG Border Line */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
              
              {/* Clean SVG Circular Progress Border Line */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                {/* Background Subtle Gray Track Border */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-baba-border"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Clean Orange Border Line (Fills 1% to 100%) */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-baba-orange transition-all duration-100 ease-out"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Centered Original Clean HD Logo Image (Unoptimized for Maximum Resolution) */}
              <div className="absolute inset-[18px] rounded-full bg-white p-2.5 shadow-md border border-baba-border overflow-hidden flex items-center justify-center">
                <Image
                  src="/official_logo.png"
                  alt="The Burger Baba Splash"
                  width={220}
                  height={220}
                  className="w-full h-full object-contain"
                  unoptimized={true}
                  priority
                />
              </div>
            </div>

            {/* Percentage (1% -> 100%) & Clean Tagline */}
            <div className="space-y-1 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-baba-black">
                {progress}%
              </div>
              <div className="text-xs font-mono font-semibold tracking-widest text-baba-orange uppercase">
                WE BELIEVE IN QUALITY
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
