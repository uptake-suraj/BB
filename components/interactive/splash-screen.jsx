'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    if (hasRunRef.current) return;

    try {
      const hasSeenSplash = sessionStorage.getItem('baba_splash_seen');
      if (!hasSeenSplash) {
        hasRunRef.current = true;
        setIsVisible(true);
        document.body.style.overflow = 'hidden';

        const startTime = Date.now();
        const duration = 1600;

        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
          setProgress(currentProgress);

          if (currentProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsVisible(false);
              document.body.style.overflow = '';
              sessionStorage.setItem('baba_splash_seen', 'true');
            }, 350);
          }
        }, 20);

        return () => {
          clearInterval(interval);
          document.body.style.overflow = '';
        };
      }
    } catch (e) {
      setIsVisible(false);
    }
  }, []);

  if (!mounted || !isVisible) return null;

  // SVG Circle stroke parameters for 100% progress ring
  const strokeWidth = 4;
  const radius = 88;
  const circumference = 2 * Math.PI * radius; // approx 552.92
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#FAF9F5] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle Ambient Warm Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[450px] h-[340px] sm:h-[450px] bg-baba-orange/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
            
            {/* Centered Logo Badge with SVG Progress Ring */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              
              {/* SVG Circular Loading Progress Ring */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                {/* Background Ring Track */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-baba-border"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Animated Glowing Orange Progress Ring */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-baba-orange transition-all duration-150 ease-out"
                  strokeWidth={strokeWidth + 1}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Centered Clean Original HD Logo Image */}
              <div className="absolute inset-[18px] rounded-full bg-white p-2.5 shadow-lg border border-baba-border overflow-hidden flex items-center justify-center">
                <Image
                  src="/official_logo.png"
                  alt="The Burger Baba Splash"
                  width={220}
                  height={220}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Percentage & Brand Tagline */}
            <div className="space-y-1.5 text-center">
              <div className="text-xl sm:text-2xl font-mono font-bold text-baba-black">
                {progress}%
              </div>
              <div className="text-xs font-mono font-semibold tracking-widest text-baba-orange uppercase flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-baba-orange animate-pulse"></span>
                <span>WE BELIEVE IN QUALITY</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
