import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface CinematicPreloaderProps {
  onComplete: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const playSynthesizedSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Ensure context is running (fixes browser suspension policies)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // 1. Deep Cyberpunk Hum (sawtooth oscillator)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // Low A frequency
      osc1.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 1.8);
      
      gain1.gain.setValueAtTime(0.001, ctx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.4);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.0);

      // 2. Synthesized Pulse Burst (triangle oscillator starting later)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(220, ctx.currentTime + 1.5);
      osc2.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 1.95);
      
      gain2.gain.setValueAtTime(0.001, ctx.currentTime + 1.5);
      gain2.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 1.85);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.3);

      // 3. Cyber resonant filter sweep
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 1.85);
      filter.Q.setValueAtTime(5, ctx.currentTime);

      // Connect nodes
      osc1.connect(gain1);
      gain1.connect(filter);

      osc2.connect(gain2);
      gain2.connect(filter);

      filter.connect(ctx.destination);

      // Start playbacks
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 2.1);

      osc2.start(ctx.currentTime + 1.5);
      osc2.stop(ctx.currentTime + 2.4);

    } catch (err) {
      console.warn("Web Audio API failed or blocked:", err);
    }
  };

  const handleInitialize = () => {
    if (isInitialized) return;
    setIsInitialized(true);
    playSynthesizedSound();

    // Glitch trigger at 1.8s, complete at 2.2s
    setTimeout(() => {
      setIsGlitching(true);
    }, 1800);

    setTimeout(() => {
      onComplete();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#03020A] flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Glitch Overlay Effect */}
      {isGlitching && (
        <div className="absolute inset-0 bg-[#0AFFA7]/5 z-50 pointer-events-none animate-glitch border-4 border-[#0AFFA7]/20" />
      )}

      {/* Main Singularity Element */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        
        {/* Neon Cyanaurora Ring 1 (Clockwise) */}
        <motion.div
          animate={isInitialized ? { scale: 3.5, opacity: 0 } : { scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          className="absolute inset-0 border border-brand-cyan/40 rounded-full animate-rotate-clockwise shadow-[0_0_20px_rgba(10,255,167,0.2)]"
          style={{ transformStyle: 'preserve-3d', rotateX: '65deg', rotateY: '15deg' }}
        />

        {/* Neon Cyanaurora Ring 2 (Counter-Clockwise) */}
        <motion.div
          animate={isInitialized ? { scale: 3.8, opacity: 0 } : { scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          className="absolute inset-2 border border-brand-cyan/20 rounded-full animate-rotate-counter shadow-[0_0_30px_rgba(10,255,167,0.15)]"
          style={{ transformStyle: 'preserve-3d', rotateX: '65deg', rotateY: '-15deg' }}
        />

        {/* Deep Violet Glowing Singularity Orb */}
        <motion.div
          animate={isInitialized ? { scale: 12, filter: 'blur(0px)', opacity: [1, 1, 0] } : { scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-black via-[#03020A] to-[#1e1b4b] border border-brand-purple/40 shadow-[0_0_50px_rgba(124,58,237,0.65),inset_0_0_20px_rgba(10,255,167,0.2)] flex items-center justify-center relative z-10"
        >
          {/* Pulsating core */}
          <div className="absolute inset-4 rounded-full bg-black border border-brand-cyan/30 animate-pulse-slow" />
        </motion.div>
      </div>

      {/* Interactive Trigger Button */}
      <div className="absolute bottom-24 z-20 flex flex-col items-center gap-3">
        <AnimatePresence mode="wait">
          {!isInitialized ? (
            <motion.button
              key="init-btn"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onClick={handleInitialize}
              className="px-8 py-3 bg-gradient-to-r from-brand-cyan/15 to-brand-purple/15 hover:from-brand-cyan/30 hover:to-brand-purple/30 text-brand-cyan border border-brand-cyan/40 text-xs font-bold uppercase tracking-[0.25em] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(10,255,167,0.15)] hover:shadow-[0_0_30px_rgba(10,255,167,0.3)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
              Initialize System
            </motion.button>
          ) : (
            <motion.div
              key="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-mono text-brand-cyan uppercase tracking-[0.4em] font-semibold animate-pulse"
            >
              Syncing Neural Core...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
