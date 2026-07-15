import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Key, Play, Square, RefreshCw, Layers, CheckCircle2, ShieldAlert, Award, FileText } from 'lucide-react';

interface AgentInstance {
  name: string;
  type: string;
  status: 'running' | 'stopped';
}

export default function DashboardPage() {
  const [instances, setInstances] = useState<AgentInstance[]>([
    { name: 'Support Agent v2.1', type: 'Customer Help desk', status: 'running' },
    { name: 'Outbound CRM Call', type: 'Sales outreach', status: 'stopped' },
    { name: 'Recruiter Parser', type: 'Applicant ranking', status: 'running' }
  ]);
  
  const [apiKey, setApiKey] = useState('alp_live_28ad9f4820bc71f83bd09a');
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);

  const generateNewKey = () => {
    setIsGeneratingKey(true);
    setTimeout(() => {
      const chars = '0123456789abcdef';
      let randomHex = '';
      for (let i = 0; i < 22; i++) {
        randomHex += chars[Math.floor(Math.random() * chars.length)];
      }
      setApiKey(`alp_live_${randomHex}`);
      setIsGeneratingKey(false);
    }, 900);
  };

  const toggleInstance = (idx: number) => {
    setInstances(prev => prev.map((inst, i) => {
      if (i === idx) {
        return { ...inst, status: inst.status === 'running' ? 'stopped' : 'running' };
      }
      return inst;
    }));
  };

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '10%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '15%', right: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-obsidian-border">
            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                CLIENT CONSOLE PORTAL
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-3">
                Client Workspace
              </h1>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="px-3.5 py-2 bg-obsidian-card border border-obsidian-border rounded-xl text-gray-300">
                Active Tier: <span className="text-brand-purple font-bold">ENTERPRISE SAAS</span>
              </span>
              <span className="px-3.5 py-2 bg-brand-success/15 border border-brand-success/40 rounded-xl text-brand-success font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-ping" />
                PORTAL COMPATIBLE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* Left: Active agent toggles & API key builder */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Agent Instances */}
              <div className="glass-card p-6 border-obsidian-border space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">ACTIVE INSTANCES CONTROLS</h3>
                
                <div className="space-y-4">
                  {instances.map((inst, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-obsidian-dark border border-obsidian-border rounded-xl">
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-white">{inst.name}</div>
                        <div className="text-[10px] text-gray-500">{inst.type}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded border ${
                          inst.status === 'running' 
                            ? 'bg-brand-success/15 border-brand-success/35 text-brand-success' 
                            : 'bg-red-500/15 border-red-500/35 text-red-500'
                        }`}>
                          {inst.status.toUpperCase()}
                        </span>
                        
                        <button
                          onClick={() => toggleInstance(idx)}
                          className={`p-2 rounded-lg cursor-pointer transition-colors ${
                            inst.status === 'running' 
                              ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' 
                              : 'bg-brand-success/20 text-brand-success hover:bg-brand-success/30'
                          }`}
                        >
                          {inst.status === 'running' ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Key Builder */}
              <div className="glass-card p-6 border-obsidian-border space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">API SECURE KEY MANAGER</h3>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={apiKey}
                    className="flex-1 bg-obsidian-dark border border-obsidian-border rounded-lg px-4 py-2.5 text-xs text-brand-cyan font-mono focus:outline-none"
                  />
                  <button 
                    onClick={generateNewKey}
                    disabled={isGeneratingKey}
                    className="p-2.5 bg-brand-indigo hover:bg-brand-indigo/85 text-white border border-brand-indigo/40 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isGeneratingKey ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Key className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed font-sans">
                  Treat your API secrets securely. Ensure these endpoints are mapped inside safe zero-trust environment headers.
                </p>
              </div>

            </div>

            {/* Right: Invoices, Billing summary, Credits */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Billing Summary */}
              <div className="glass-card p-6 border-obsidian-border space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">BILLING & USAGE SUMMARY</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-1">
                    <span className="text-[9px] text-gray-400 uppercase font-mono block">RUNNING BALANCE</span>
                    <span className="text-xl font-extrabold text-white font-mono">$1,480</span>
                    <span className="text-[8px] text-gray-500 block">Due August 01, 2026</span>
                  </div>

                  <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-1">
                    <span className="text-[9px] text-gray-400 uppercase font-mono block">API CREDITS</span>
                    <span className="text-xl font-extrabold text-brand-cyan font-mono">1.2M</span>
                    <span className="text-[8px] text-gray-500 block">Of 2.0M remaining</span>
                  </div>
                </div>
              </div>

              {/* Invoices List */}
              <div className="glass-card p-6 border-obsidian-border space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">CUMULATIVE INVOICES LOGS</h3>
                
                <div className="space-y-3 font-sans text-xs">
                  {[
                    { id: 'INV-4921', date: 'July 01, 2026', amt: '$1,480.00', status: 'PAID' },
                    { id: 'INV-4809', date: 'June 01, 2026', amt: '$1,290.00', status: 'PAID' }
                  ].map((inv) => (
                    <div key={inv.id} className="flex justify-between items-center py-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="font-semibold text-white">{inv.id}</div>
                          <div className="text-[9px] text-gray-500">{inv.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-semibold text-white">{inv.amt}</div>
                        <span className="text-[8px] text-brand-success font-semibold tracking-wide bg-brand-success/15 px-1.5 py-0.5 rounded border border-brand-success/35">
                          {inv.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
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
