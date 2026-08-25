'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Flame, Sparkles, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

export default function VideoCanvas() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for sizzle embers & glow
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: Math.random() > 0.4 ? '#FF6B00' : '#FFB800',
      speedY: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.8,
      alpha: Math.random() * 0.8 + 0.2,
    }));

    let angle = 0;

    const render = () => {
      if (!isPlaying) return;

      ctx.fillStyle = 'rgba(10, 10, 12, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        canvas.width * 0.45
      );
      gradient.addColorStop(0, 'rgba(255, 107, 0, 0.2)');
      gradient.addColorStop(0.5, 'rgba(255, 133, 51, 0.05)');
      gradient.addColorStop(1, 'rgba(10, 10, 12, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, canvas.width * 0.45, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      angle += 0.015;
      const orbitR = Math.min(canvas.width, canvas.height) * 0.35;
      const orbX = centerX + Math.cos(angle) * orbitR;
      const orbY = centerY + Math.sin(angle) * orbitR * 0.4;

      ctx.save();
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#FF6B00';
      ctx.fillStyle = '#FF6B00';
      ctx.beginPath();
      ctx.arc(orbX, orbY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-baba-orange/30 shadow-xl bg-baba-black group">
      {/* Interactive Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay Ambient Visual Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-baba-black via-transparent to-baba-black/60 flex flex-col justify-between p-4 sm:p-8 lg:p-10 pointer-events-none">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-baba-dark/90 px-3 sm:px-4 py-1.5 rounded-full border border-baba-orange/40 text-[10px] sm:text-xs font-bold text-white shadow-glow-orange backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-baba-orange animate-bounce" />
            <span className="truncate">LIVE QSR BRAND EXPERIENCE</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 sm:p-2.5 rounded-full bg-baba-dark/80 border border-baba-border text-white hover:bg-baba-orange transition"
              title={isPlaying ? 'Pause Visuals' : 'Play Visuals'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 sm:p-2.5 rounded-full bg-baba-dark/80 border border-baba-border text-white hover:bg-baba-orange transition"
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Center Animated Fast Food Showcase Graphic */}
        <div className="self-center text-center space-y-2 sm:space-y-4 pointer-events-auto my-auto px-2">
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-baba-orange/10 border border-baba-orange/40 shadow-glow-orange animate-pulse">
            <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-baba-orange" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-title font-normal text-white uppercase tracking-tight">
              CRAFTED FOR <span className="text-baba-orange">INDIAN PALATES</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-300 font-normal max-w-md mx-auto leading-relaxed">
              Western Fast-Food • Indian Taste Profile • Standardized Kitchen SOP
            </p>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 pointer-events-auto pt-3 border-t border-white/10 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 text-white font-medium">
            <ShieldCheck className="w-4 h-4 text-baba-orange flex-shrink-0" />
            <span>100% Pure Vegetarian QSR Brand</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400 font-mono text-[10px] sm:text-[11px]">
            <span>HQ: Mehsana</span>
            <span>•</span>
            <span>Petpooja POS</span>
          </div>
        </div>

      </div>
    </div>
  );
}
