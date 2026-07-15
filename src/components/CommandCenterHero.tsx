import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Phone, Sparkles, Terminal, Shield, ArrowRight, Activity, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CommandCenterHero() {
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

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play trigger to bypass browser autoplay blocks
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay blocked: ", err);
      });
    }
  }, []);

  // Dynamic statistics updater
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

      // Update logs
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
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12">
      
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none z-0 animate-fade-in"
      >
        <source src="https://assets.vercel.com/video/upload/v1545305141/front/nextjs/nextjs-conf-2018-loop.mp4" type="video/mp4" />
      </video>

      {/* Aurora spotlight elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Neural Network SVG Connections Background */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="30%" y1="40%" x2="20%" y2="80%" stroke="#06b6d4" strokeWidth="1" />
        <line x1="80%" y1="10%" x2="60%" y2="50%" stroke="#a855f7" strokeWidth="1" strokeDasharray="5 2" />
        <circle cx="10%" cy="20%" r="3" fill="#6366f1" />
        <circle cx="30%" cy="40%" r="4" fill="#06b6d4" />
        <circle cx="20%" cy="80%" r="3" fill="#a855f7" />
        <circle cx="60%" cy="50%" r="4" fill="#6366f1" />
      </svg>

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-60 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            <Sparkles className="w-3.5 h-3.5 animate-spin" /> Alphora v2.0 Platform Active
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight">
            Enterprise AI Engineering <br />
            <span className="text-gradient-purple-cyan">Ready to Scale.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            We design and build AI platforms, enterprise software, mobile applications, cloud infrastructure, and intelligent automation that help organizations reduce costs, improve operations, and accelerate growth.
          </p>

          {/* Trust Indicators Above the Fold */}
          <div className="py-2 border-y border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="text-white font-bold tracking-wide">Trusted by Startups • SMEs • Enterprises</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-success" /> 99.98% Uptime</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan" /> 24/7 Support</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-purple" /> Global Delivery</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/contact" className="btn-primary-gradient cursor-pointer flex items-center gap-2 group text-sm justify-center">
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/playground" className="btn-premium-cyan cursor-pointer text-sm flex items-center justify-center">
              Explore Live Demos
            </Link>
          </div>

          <p className="text-sm font-semibold text-cyan-400 tracking-wide pt-2 max-w-xl leading-relaxed">
            Core Specializations: Autonomous AI Agents, Custom LLM Fine-Tuning, and Enterprise Cloud Infrastructure.
          </p>

          <div className="flex gap-8 border-t border-obsidian-border pt-6 max-w-lg">
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
        </motion.div>

        {/* Right Side Futuristic Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 border-obsidian-border space-y-6 relative overflow-hidden"
        >
          {/* Subtle neon border pulse */}
          <div className="absolute inset-0 border border-brand-indigo/20 rounded-2xl animate-pulse pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-obsidian-border">
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
            
            <div className="bg-obsidian-dark border border-obsidian-border p-3.5 rounded-xl space-y-1.5">
              <div className="text-[9px] text-slate-300 font-bold uppercase tracking-wider font-mono">GPU UTILIZATION</div>
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

            <div className="bg-obsidian-dark border border-obsidian-border p-3.5 rounded-xl space-y-1.5">
              <div className="text-[9px] text-slate-300 font-bold uppercase tracking-wider font-mono">CPU WORKLOAD</div>
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

            <div className="bg-obsidian-dark border border-obsidian-border p-3.5 rounded-xl space-y-1.5">
              <div className="text-[9px] text-slate-300 font-bold uppercase tracking-wider font-mono">API INGEST RATE</div>
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
          <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-bold uppercase tracking-wider font-mono">
              <span>ACTIVE VOICE CALL NODE</span>
              <span className="text-brand-purple flex items-center gap-1">
                <Phone className="w-3 h-3" /> Live (Agent 04)
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
          <div className="bg-obsidian-dark/95 border border-obsidian-border p-4 rounded-xl space-y-2 font-mono text-[10px] leading-relaxed">
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
  );
}
