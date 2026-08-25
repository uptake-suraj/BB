'use client';

import React from 'react';
import Image from 'next/image';

export default function BrandLogo({ className = "w-12 h-12 sm:w-14 sm:h-14", showText = false, textLayout = "horizontal", darkText = false }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
      {/* Mascot Logo Badge (HD Circular Badge) */}
      <div className={`relative flex-shrink-0 ${className} transition-transform duration-300 group-hover:scale-105`}>
        <div className="relative w-full h-full rounded-full bg-white p-0.5 sm:p-1 shadow-[0_4px_15px_rgba(255,107,0,0.2)] border-2 border-baba-orange overflow-hidden flex items-center justify-center">
          <Image
            src="/official_logo.png"
            alt="The Burger Baba Official Logo"
            width={240}
            height={240}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Optional Side Text (Only rendered if showText is explicitly set to true) */}
      {showText && (
        <div className={`hidden sm:flex ${textLayout === "column" ? "flex-col" : "flex-col"}`}>
          <span className={`text-2xl md:text-3xl font-title font-normal tracking-wide uppercase leading-tight ${
            darkText ? "text-white" : "text-baba-black"
          }`}>
            THE BURGER <span className="text-baba-orange">BABA</span>
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-baba-gray uppercase font-medium flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-baba-orange animate-pulse flex-shrink-0"></span>
            <span>WE BELIEVE IN QUALITY</span>
          </span>
        </div>
      )}
    </div>
  );
}
