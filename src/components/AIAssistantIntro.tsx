import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

export default function AIAssistantIntro() {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    "Hi! Welcome to Alphora.",
    "Initializing neural command centers...",
    "All grids active. Enjoy your session!"
  ];

  useEffect(() => {
    // Check if user already saw the intro in this tab session
    const hasSeenIntro = sessionStorage.getItem('alphora_intro_seen');
    if (hasSeenIntro) {
      return; // Skip intro
    }

    // Delay start slightly to let the page load
    const startTimer = setTimeout(() => {
      setIsVisible(true);
      speakMessage(messages[0]);
    }, 1500);

    return () => clearTimeout(startTimer);
  }, []);

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel active speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.15; // Electronic higher pitch feel
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (!isVisible) return;

    if (step < messages.length - 1) {
      const nextStepTimer = setTimeout(() => {
        const nextStep = step + 1;
        setStep(nextStep);
        speakMessage(messages[nextStep]);
      }, 2500);

      return () => clearTimeout(nextStepTimer);
    } else {
      // Final message, fade out after 2.5s
      const endTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('alphora_intro_seen', 'true');
      }, 2500);

      return () => clearTimeout(endTimer);
    }
  }, [step, isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 100 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-auto max-w-sm"
      >
        
        {/* Holographic Speech Bubble */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 border-brand-cyan/35 bg-[#0b0f19]/90 shadow-glow-cyan text-left space-y-1.5 relative"
        >
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#0b0f19] border-r border-b border-brand-cyan/35 transform rotate-45" />
          
          <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-brand-cyan tracking-wider">
            <Terminal className="w-3 h-3 animate-pulse" />
            <span>ALPHORA_CORE_GUIDE_v2.0</span>
          </div>
          <p className="text-xs text-white leading-relaxed font-semibold">
            {messages[step]}
          </p>
        </motion.div>

        {/* Animated Hologram Robot */}
        <div className="relative w-20 h-20">
          
          {/* Hologram Beam glow */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-8 bg-brand-cyan/20 blur-md rounded-full animate-pulse" />
          
          {/* Main Robot Vector Sphere */}
          <div className="w-20 h-20 rounded-full border border-brand-cyan/40 bg-gradient-to-b from-[#0b0f19]/80 to-brand-cyan/10 flex items-center justify-center shadow-glow-cyan relative overflow-hidden animate-bounce" style={{ animationDuration: '3s' }}>
            <svg className="w-12 h-12 text-brand-cyan" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Robot Face/Helmet */}
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="4" fill="rgba(6, 182, 212, 0.1)" />
              {/* Glowing Visor */}
              <rect x="32" y="42" width="36" height="12" rx="6" fill="#a855f7" className="animate-pulse" />
              {/* Scanline overlay */}
              <line x1="20" y1="50" x2="80" y2="50" stroke="#06b6d4" strokeWidth="2" className="animate-ping" style={{ animationDuration: '2s' }} />
              {/* Antennas */}
              <line x1="50" y1="20" x2="50" y2="8" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="6" r="3" fill="#06b6d4" />
            </svg>

            {/* Matrix lines overlay inside sphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-brand-cyan/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating particle stars */}
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping" />
          <div className="absolute top-8 right-0 w-1 h-1 bg-brand-purple rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
