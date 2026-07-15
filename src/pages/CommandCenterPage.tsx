import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Clock, Activity, MessageSquare, ShieldAlert, Award, Server } from 'lucide-react';

export default function CommandCenterPage() {
  const [conversations, setConversations] = useState(14624);
  const [apiRequests, setApiRequests] = useState(2841129);
  const [latency, setLatency] = useState(218);
  const [gpuLoad, setGpuLoad] = useState(63);
  const [logs, setLogs] = useState<string[]>([
    '[18:34:01] Outbound agent connected to customer node.',
    '[18:34:12] Embedding indexing lookup completed for client invoice data.',
    '[18:34:25] Safe compliance checks: SOC 2 rule match validated.',
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setConversations((prev) => prev + Math.floor(Math.random() * 4) - 1);
      setApiRequests((prev) => prev + Math.floor(Math.random() * 6) + 1);
      setLatency((prev) => {
        const delta = Math.floor(Math.random() * 10) - 5;
        const next = prev + delta;
        return next > 300 || next < 150 ? 218 : next;
      });
      setGpuLoad((prev) => {
        const next = prev + Math.floor(Math.random() * 5) - 2;
        return next > 90 || next < 40 ? 63 : next;
      });
      setLogs((prev) => {
        const now = new Date().toLocaleTimeString();
        const templates = [
          `[${now}] Token usage: 4.1k input, 512 completion tokens.`,
          `[${now}] Vector index Pinecone query: 99.1% match score.`,
          `[${now}] Outbound voice call: synthesis audio stream compiled.`,
          `[${now}] API authentication verified on endpoint IP 142.250.0.1`
        ];
        const newLog = templates[Math.floor(Math.random() * templates.length)];
        return [newLog, prev[0], prev[1], prev[2], prev[3]].slice(0, 5);
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Total AI Employees', value: '248', desc: 'Active digital agents' },
    { label: 'Active Conversations', value: conversations.toLocaleString(), desc: 'Real-time client dialogues' },
    { label: 'Revenue Generated', value: '$1.8M', desc: 'Cumulative clients cost savings' },
    { label: 'Support Tickets Closed', value: '98%', desc: 'Without human advisor override' },
    { label: 'GPU Utilization', value: `${gpuLoad}%`, desc: 'Active Tensor Core pods' },
    { label: 'Current LLM Model', value: 'GPT-5.5', desc: 'Fallback: Claude-3.5-Opus' },
    { label: 'Average Latency', value: `${latency}ms`, desc: 'End-to-end token response' },
    { label: 'API Requests Today', value: apiRequests.toLocaleString(), desc: 'Secure HTTPS operations' }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '10%' }} />
          <div className="aurora-glow-cyan" style={{ bottom: '5%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-obsidian-border">
            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                OPERATIONS CONTROL ROOM
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-3">
                AI Operations Dashboard
              </h1>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="px-3.5 py-2 bg-obsidian-card border border-obsidian-border rounded-xl text-gray-300">
                FALLBACK MODEL: <span className="text-brand-purple font-bold">CLAUDE READY</span>
              </span>
              <span className="px-3.5 py-2 bg-brand-success/15 border border-brand-success/40 rounded-xl text-brand-success font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-ping" />
                SYSTEM RUNNING
              </span>
            </div>
          </div>

          {/* Stats widgets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 border-obsidian-border space-y-2">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">{stat.label}</div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight">{stat.value}</div>
                <div className="text-[10px] text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>

          {/* Chart & Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Realtime graph */}
            <div className="lg:col-span-2 glass-card p-6 border-obsidian-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">SYSTEM THROUGHPUT (REQ/SEC)</span>
                <span className="text-xs text-brand-cyan font-mono flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> {Math.floor(conversations / 100)} TPS
                </span>
              </div>
              
              <div className="h-60 bg-obsidian-dark/50 rounded-xl border border-obsidian-border relative overflow-hidden flex items-end p-2">
                {/* SVG mock graph grid */}
                <svg className="absolute inset-0 w-full h-full text-brand-cyan/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 Q20,30 40,60 T80,20 T100,40" fill="none" stroke="#6366f1" strokeWidth="2" />
                  <path d="M0,80 Q20,30 40,60 T80,20 T100,40 L100,100 L0,100 Z" fill="url(#grad)" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
                      <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Visual grid overlay lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 text-[8px] font-mono text-gray-600 px-2 pointer-events-none">
                  <div>120 TPS</div>
                  <div>80 TPS</div>
                  <div>40 TPS</div>
                  <div>0 TPS</div>
                </div>
              </div>
            </div>

            {/* Terminal logs console */}
            <div className="glass-card p-6 border-obsidian-border flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-brand-cyan" /> LIVE SERVER CONSOLE
                </span>
                <span className="text-[10px] text-gray-500 font-mono">STDOUT</span>
              </div>

              <div className="flex-1 bg-obsidian-dark border border-obsidian-border rounded-xl p-4 font-mono text-[10px] text-gray-400 space-y-2.5 overflow-hidden min-h-[180px]">
                {logs.map((log, idx) => (
                  <div key={idx} className="truncate">
                    <span className="text-brand-indigo font-bold">&gt;</span> {log}
                  </div>
                ))}
              </div>

              <div className="text-[10px] text-gray-500 font-mono">
                Log endpoints bound: socket://alphora.internal:4091
              </div>
            </div>

          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
