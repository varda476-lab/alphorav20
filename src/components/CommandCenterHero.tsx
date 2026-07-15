import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Cpu, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import cyberHeroHelmet from '../assets/cyber_hero_helmet.png';

export default function CommandCenterHero() {
  const line1 = "AI Automation & Custom LLMs.";
  const line2 = "Ready to Scale.";
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [isGlitchingChar, setIsGlitchingChar] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('alphora_preloader_seen');
    const delay = hasSeenPreloader ? 100 : 2500;
    let interval: any;
    let intervalLine2: any;

    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        if (i < line1.length) {
          setTyped1(line1.substring(0, i + 1));
          if (Math.random() > 0.7) {
            setIsGlitchingChar(true);
            setTimeout(() => setIsGlitchingChar(false), 100);
          }
          i++;
        } else {
          clearInterval(interval);
          let j = 0;
          intervalLine2 = setInterval(() => {
            if (j < line2.length) {
              setTyped2(line2.substring(0, j + 1));
              if (Math.random() > 0.7) {
                setIsGlitchingChar(true);
                setTimeout(() => setIsGlitchingChar(false), 100);
              }
              j++;
            } else {
              clearInterval(intervalLine2);
            }
          }, 80);
        }
      }, 70);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
      if (intervalLine2) clearInterval(intervalLine2);
    };
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      setTimeStr(now.toLocaleTimeString('en-US', options));
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 30000);
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-6 pb-16 px-4">
      {/* Aurora glowing spot lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Subtle overlay grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Layer 1: Layered Giant Background Typography */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0 text-center">
        <h1 className="layered-hero-text font-black text-[#FAFBFD]/[0.03] select-none uppercase tracking-tighter">
          ALPHORA
        </h1>
      </div>

      {/* Layer 2: Center Cyber Visor Humanoid Portrait */}
      <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl aspect-square z-10 pointer-events-none select-none opacity-80 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020516] via-transparent to-transparent z-10" />
          <img
            src={cyberHeroHelmet}
            alt="Alphora Singularity"
            className="w-full h-full object-contain mix-blend-screen scale-110 animate-pulse-slow"
          />
        </div>
      </div>

      {/* Layer 3: Foreground Content Grid */}
      <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col justify-between h-full min-h-[75vh]">
        {/* Top Header Location Metadata Bar */}
        <div className="w-full flex items-center justify-between pb-6 border-b border-white/5 mb-12">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] sm:text-xs text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            New Delhi, India — {timeStr}
          </div>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="text-[10px] sm:text-xs font-bold text-slate-350 hover:text-white px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
              Chat With Us
            </Link>
            <Link to="/solutions" className="btn-primary-gradient text-[10px] sm:text-xs font-bold px-6 py-2.5 rounded-full">
              Start Now
            </Link>
          </div>
        </div>

        {/* Hero columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-auto">
          {/* Left Column: Slogans & Buttons */}
          <div className="space-y-6 text-left relative z-30">
            {/* Happy clients badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit text-[10px] text-slate-300 font-medium backdrop-blur-sm shadow-inner">
              <div className="flex -space-x-1.5">
                <div className="w-4 h-4 rounded-full bg-brand-cyan/20 border border-brand-cyan text-[8px] flex items-center justify-center font-bold text-brand-cyan font-mono">✓</div>
                <div className="w-4 h-4 rounded-full bg-brand-purple/20 border border-brand-purple text-[8px] flex items-center justify-center font-bold text-brand-purple font-mono">⚡</div>
                <div className="w-4 h-4 rounded-full bg-rose-650/20 border border-rose-500 text-[8px] flex items-center justify-center font-bold text-rose-500 font-mono">★</div>
              </div>
              <span className="tracking-wide">900+ Happy Clients / Over 5 years</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-display font-black text-white leading-[1.08] tracking-tight uppercase">
                Helped <br />
                Launch <span className="text-[#FF3E3E] font-digital">&gt; 100+</span> <br />
                Operations
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/solutions" className="px-8 py-3.5 bg-brand-cyan text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(255,62,62,0.3)]">
                Start Now
              </Link>
              <Link to="/contact" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl border border-white/10 hover:scale-105 active:scale-95 transition-all">
                Chat With Us &gt;
              </Link>
            </div>
          </div>

          {/* Right Column: Descriptions & Contact Box */}
          <div className="space-y-6 text-left relative z-30 lg:max-w-md ml-auto w-full">
            <div className="space-y-2">
              <p className="text-sm text-slate-350 leading-relaxed font-semibold">
                Alphora is a global engineering studio and custom AI solutions guild. We design and build high-performance autonomous models, fine-tuned adapters, and zero-trust Kubernetes pipelines.
              </p>
              <Link to="/services" className="text-xs font-bold text-[#FACC15] hover:underline flex items-center gap-1 font-condensed tracking-wider uppercase">
                How can we help you? →
              </Link>
            </div>

            {/* Glassmorphic Contact Console */}
            <div className="bg-[#080d24]/75 backdrop-blur-md border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF3E3E]/5 blur-2xl rounded-full" />
              <h4 className="text-base font-bold text-white mb-1">Contact by Email</h4>
              <p className="text-[11px] text-slate-400 mb-4 leading-normal">Enter your coordinates and our guilds will initiate telemetry.</p>
              
              <div className="flex gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-brand-cyan/15 text-brand-cyan flex items-center justify-center text-[10px] font-bold font-mono">X</span>
                <span className="w-7 h-7 rounded-full bg-white/5 text-slate-400 flex items-center justify-center text-[10px] font-bold font-mono">@</span>
                <span className="w-7 h-7 rounded-full bg-white/5 text-slate-400 flex items-center justify-center text-[10px] font-bold font-mono">in</span>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan pr-12 font-mono"
                />
                <button className="absolute right-2 top-2 w-8 h-8 rounded-lg bg-brand-cyan text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold text-xs">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
