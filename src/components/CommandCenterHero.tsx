import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Phone, Sparkles, Terminal, Shield, ArrowRight, Activity, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';
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

  const [savings, setSavings] = useState(148293);
  const [requests, setRequests] = useState(2841129);
  const [gpuLoad, setGpuLoad] = useState(63);
  const [cpuLoad, setCpuLoad] = useState(48);
  const [apiTps, setApiTps] = useState(28);
  
  const [activeCall, setActiveCall] = useState({ client: 'Hospitality', duration: '0:14', rating: 98 });
  const [feed, setFeed] = useState<string[]>([
    'Inference: GPT-5.5 -> Active (218ms)',
    'RAG Search: Medical DB -> Match 99.2%',
    'WhatsApp Agent: Outbound campaign triggered',
  ]);

  // Clock state
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

  // Telemetry updates
  useEffect(() => {
    const timer = setInterval(() => {
      setSavings((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setRequests((prev) => prev + Math.floor(Math.random() * 8) + 2);
      
      setGpuLoad((prev) => {
        const next = prev + Math.floor(Math.random() * 7) - 3;
        return next > 95 || next < 30 ? 63 : next;
      });

      setCpuLoad((prev) => {
        const next = prev + Math.floor(Math.random() * 9) - 4;
        return next > 90 || next < 20 ? 48 : next;
      });

      setApiTps((prev) => {
        const next = prev + Math.floor(Math.random() * 5) - 2;
        return next > 80 || next < 10 ? 28 : next;
      });

      setFeed((prev) => {
        const clients = ['Healthcare', 'Banking', 'Logistics', 'Retail', 'Education'];
        const randomClient = clients[Math.floor(Math.random() * clients.length)];
        const ms = Math.floor(Math.random() * 100) + 150;
        const newLog = `Inference: ${randomClient} -> API completed (${ms}ms)`;
        return [newLog, prev[0], prev[1]];
      });
    }, 2000);

    return () => clearInterval(timer);
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
            className="w-full h-full object-contain mix-blend-screen scale-110"
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

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-auto">
          {/* Left Column: typewriter title, desc and CTA buttons */}
          <div className="space-y-6 text-left relative z-30">
            {/* Status active banner */}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20 w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> Alphora v2.0 Platform Active
            </span>

            <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[185px] flex flex-col justify-center select-none pb-2">
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight ${isGlitchingChar ? 'chromatic-glitch' : ''}`}>
                {typed1}
                {typed1 && <br />}
                <span className="text-gradient-purple-cyan">{typed2}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-1.5 h-7 sm:h-9 lg:h-11 bg-brand-cyan ml-1 align-middle"
                />
              </h1>
            </div>

            <p className="text-slate-330 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              We design and build AI platforms, enterprise software, mobile applications, cloud infrastructure, and intelligent automation that help organizations reduce costs, improve operations, and accelerate growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="btn-primary-gradient cursor-pointer flex items-center gap-2 group text-sm justify-center rounded-xl px-8 py-3.5 font-extrabold uppercase tracking-widest">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/playground" className="btn-premium-cyan cursor-pointer text-sm flex items-center justify-center rounded-xl px-8 py-3.5 font-extrabold uppercase tracking-widest">
                Explore Live Demos
              </Link>
            </div>

            <p className="text-sm font-semibold text-cyan-400 tracking-wide pt-2 max-w-xl leading-relaxed">
              Core Specializations: Autonomous AI Agents, Custom LLM Fine-Tuning, and Enterprise Cloud Infrastructure.
            </p>

            {/* Metrics */}
            <div className="flex gap-8 border-t border-white/5 pt-6 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-white">₹100Cr+</div>
                <div className="text-xs text-slate-400 font-medium">Enterprise Pipeline</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-cyan">2.8M+</div>
                <div className="text-xs text-slate-400 font-medium">Daily API Calls</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-success">99.98%</div>
                <div className="text-xs text-slate-400 font-medium">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Operations CommandCenter Telemetry Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 border-white/5 bg-[#080d24]/75 backdrop-blur-md space-y-6 relative overflow-hidden rounded-3xl shadow-2xl w-full"
          >
            {/* Subtle neon border pulse */}
            <div className="absolute inset-0 border border-brand-indigo/25 rounded-3xl animate-pulse pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-cyan animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  Operations CommandCenter
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-success bg-brand-success/10 px-2 py-0.5 rounded border border-brand-success/20">
                <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-ping" />
                ONLINE
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-black/50 border border-white/5 p-3.5 rounded-xl space-y-1.5">
                <div className="text-[9px] text-slate-350 font-bold uppercase tracking-wider font-mono">GPU UTILIZATION</div>
                <div className="flex items-baseline gap-2 justify-between">
                  <span className="text-xl font-extrabold text-white font-mono">{gpuLoad}%</span>
                  <span className="text-[8px] text-brand-cyan">V100 Node</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${gpuLoad}%` }}
                    className="bg-brand-cyan h-full rounded-full" 
                  />
                </div>
              </div>

              <div className="bg-black/50 border border-white/5 p-3.5 rounded-xl space-y-1.5">
                <div className="text-[9px] text-slate-350 font-bold uppercase tracking-wider font-mono">CPU WORKLOAD</div>
                <div className="flex items-baseline gap-2 justify-between">
                  <span className="text-xl font-extrabold text-white font-mono">{cpuLoad}%</span>
                  <span className="text-[8px] text-brand-purple">Core 64</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${cpuLoad}%` }}
                    className="bg-brand-purple h-full rounded-full" 
                  />
                </div>
              </div>

              <div className="bg-black/50 border border-white/5 p-3.5 rounded-xl space-y-1.5">
                <div className="text-[9px] text-slate-350 font-bold uppercase tracking-wider font-mono">API INGEST RATE</div>
                <div className="flex items-baseline gap-2 justify-between">
                  <span className="text-xl font-extrabold text-brand-success font-mono">{apiTps} TPS</span>
                  <span className="text-[8px] text-brand-success">Pulsing</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${apiTps}%` }}
                    className="bg-brand-success h-full rounded-full" 
                  />
                </div>
              </div>

            </div>

            {/* Active Voice Call Simulation */}
            <div className="bg-black/50 border border-white/5 p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-[10px] text-slate-300 font-bold uppercase tracking-wider font-mono">
                <span>ACTIVE VOICE CALL NODE</span>
                <span className="text-brand-purple flex items-center gap-1 font-mono text-[9px]">
                  <Phone className="w-3.5 h-3.5" /> Live (Agent 04)
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Waveform */}
                <div className="flex-1 flex gap-0.5 items-center justify-center h-8">
                  {[12, 24, 18, 30, 42, 16, 28, 38, 22, 14, 32, 20, 36, 12, 28].map((h, i) => (
                    <motion.span 
                      key={i} 
                      animate={{ height: [h, h * 0.4, h] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.05 }}
                      className="w-1 bg-brand-purple rounded-full"
                      style={{ height: h }}
                    />
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-white">{activeCall.client} call</div>
                  <div className="text-[9px] text-brand-cyan">Accuracy: {activeCall.rating}%</div>
                </div>
              </div>
            </div>

            {/* Logs Feed Terminal */}
            <div className="bg-black/70 border border-white/5 p-4 rounded-xl space-y-2 font-mono text-[10px] leading-relaxed">
              <div className="text-slate-300 flex items-center justify-between border-b border-white/5 pb-1 font-bold">
                <span>SYSTEM ACTIVITY FEED</span>
                <Terminal className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              </div>
              <div className="space-y-1 text-gray-300 text-left">
                <AnimatePresence>
                  {feed.map((log, idx) => (
                    <motion.div 
                      key={log + idx}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <span className="text-brand-cyan font-bold">&gt;</span>
                      <span className="truncate">{log}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
