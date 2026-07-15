import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Play, Activity, Clock, Layers, ShieldAlert, Award } from 'lucide-react';

interface TaskItem {
  id: string;
  name: string;
  desc: string;
  status: 'todo' | 'development' | 'qa' | 'deployed';
}

export default function TrackerPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', name: 'Configure database structures', desc: 'Sync schema weights with PostgreSQL tables.', status: 'deployed' },
    { id: '2', name: 'Pinecone vector schema', desc: 'Define metadata payload mappings.', status: 'deployed' },
    { id: '3', name: 'Train custom adapters', desc: 'Optimize customer dialog intents weights.', status: 'qa' },
    { id: '4', name: 'WhatsApp API webhooks link', desc: 'Authorize outbound communication keys.', status: 'development' },
    { id: '5', name: 'Security penetration checks', desc: 'Run zero-trust JWT token overrides logs.', status: 'todo' }
  ]);

  const updateStatus = (id: string, nextStatus: 'todo' | 'development' | 'qa' | 'deployed') => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: nextStatus } : t));
  };

  const columns = [
    { id: 'todo', label: 'BACKLOG', color: 'border-white/10' },
    { id: 'development', label: 'DEVELOPMENT', color: 'border-brand-indigo/40' },
    { id: 'qa', label: 'AI TRAINING / QA', color: 'border-brand-purple/40' },
    { id: 'deployed', label: 'DEPLOYED', color: 'border-brand-success/40' }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '15%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-obsidian-border">
            <div>
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                ACTIVE BUILD TRACKER
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-3">
                Project Sprint Board
              </h1>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="px-3.5 py-2 bg-obsidian-card border border-obsidian-border rounded-xl text-gray-300">
                ACTIVE REVISION: <span className="text-brand-cyan font-bold">SPRINT 04</span>
              </span>
              <span className="px-3.5 py-2 bg-brand-success/15 border border-brand-success/40 rounded-xl text-brand-success font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-ping" />
                BUILD COMPILED (100%)
              </span>
            </div>
          </div>

          {/* Sprint columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {columns.map((col) => {
              const colTasks = tasks.filter(t => t.status === col.id);
              return (
                <div key={col.id} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-obsidian-border pb-2">
                    <span className="text-xs font-bold text-gray-400 tracking-wider font-mono">{col.label}</span>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400 font-mono">{colTasks.length}</span>
                  </div>
                  
                  <div className={`space-y-3 min-h-[300px] border-t-2 ${col.color} pt-3`}>
                    {colTasks.map((task) => (
                      <motion.div
                        key={task.id}
                        layout
                        className="glass-card p-4 border-obsidian-border space-y-3 relative group"
                      >
                        <h4 className="text-xs font-bold text-white font-display leading-snug">{task.name}</h4>
                        <p className="text-[10px] text-gray-400 leading-relaxed">{task.desc}</p>
                        
                        {/* Interactive state modifiers */}
                        <div className="flex gap-1.5 border-t border-white/5 pt-3">
                          {col.id !== 'todo' && (
                            <button 
                              onClick={() => {
                                const order: Array<'todo'|'development'|'qa'|'deployed'> = ['todo', 'development', 'qa', 'deployed'];
                                const currIdx = order.indexOf(col.id as any);
                                updateStatus(task.id, order[currIdx - 1]);
                              }}
                              className="text-[9px] text-gray-500 hover:text-white cursor-pointer"
                            >
                              ← Move
                            </button>
                          )}
                          {col.id !== 'deployed' && (
                            <button 
                              onClick={() => {
                                const order: Array<'todo'|'development'|'qa'|'deployed'> = ['todo', 'development', 'qa', 'deployed'];
                                const currIdx = order.indexOf(col.id as any);
                                updateStatus(task.id, order[currIdx + 1]);
                              }}
                              className="text-[9px] text-brand-cyan hover:underline cursor-pointer ml-auto"
                            >
                              Advance →
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* QA coverage & logs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Burndown chart */}
            <div className="lg:col-span-2 glass-card p-6 border-obsidian-border space-y-4">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-display">Sprint Burndown Rate</span>
                <span className="text-[10px] text-brand-cyan font-mono">TARGET: 0 Tasks remaining</span>
              </div>
              
              <div className="h-52 bg-obsidian-dark/45 border border-obsidian-border rounded-xl flex items-end p-2 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-brand-purple/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 L25,35 L50,45 L75,80 L100,100" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                  <path d="M0,20 L100,100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                <div className="absolute inset-0 flex flex-col justify-between py-4 text-[8px] font-mono text-gray-600 px-2 pointer-events-none">
                  <div>12 Tasks</div>
                  <div>8 Tasks</div>
                  <div>4 Tasks</div>
                  <div>0 Tasks</div>
                </div>
              </div>
            </div>

            {/* QA metrics */}
            <div className="glass-card p-6 border-obsidian-border flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-display">QA Build Metrics</span>
                <span className="text-[10px] text-brand-success font-mono font-bold">STABLE</span>
              </div>
              
              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-400 text-[10px]">
                    <span>Automated Tests coverage</span>
                    <span className="text-white font-mono font-bold">96.8%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-success h-full" style={{ width: '96.8%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-gray-400 text-[10px]">
                    <span>Security Penetration Assertions</span>
                    <span className="text-white font-mono font-bold">148 / 148 Passed</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-cyan h-full" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 font-mono">
                Compilation triggers on branch: release/v2.0-stable
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
