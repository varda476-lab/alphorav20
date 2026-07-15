import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Server, Cpu } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'ai';
  iconName: string;
  glowColor: string;
  glowShadow: string;
  techColor: string;
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'cloud' | 'ai'>('frontend');

  const items: TechItem[] = [
    // Frontend
    { name: 'React', category: 'frontend', iconName: 'RE', glowColor: 'hover:border-blue-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]', techColor: 'text-blue-400 bg-blue-500/10' },
    { name: 'Next.js', category: 'frontend', iconName: 'NX', glowColor: 'hover:border-white/40', glowShadow: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]', techColor: 'text-white bg-white/5' },
    { name: 'Angular', category: 'frontend', iconName: 'AN', glowColor: 'hover:border-red-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]', techColor: 'text-red-500 bg-red-500/10' },
    { name: 'Vue.js', category: 'frontend', iconName: 'VU', glowColor: 'hover:border-emerald-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]', techColor: 'text-emerald-400 bg-emerald-500/10' },
    { name: 'Flutter', category: 'frontend', iconName: 'FL', glowColor: 'hover:border-cyan-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]', techColor: 'text-cyan-400 bg-cyan-500/10' },
    { name: 'React Native', category: 'frontend', iconName: 'RN', glowColor: 'hover:border-sky-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(14,165,233,0.2)]', techColor: 'text-sky-400 bg-sky-500/10' },
    // Backend
    { name: 'Node.js', category: 'backend', iconName: 'ND', glowColor: 'hover:border-green-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]', techColor: 'text-green-500 bg-green-500/10' },
    { name: 'Python', category: 'backend', iconName: 'PY', glowColor: 'hover:border-yellow-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(234,179,8,0.2)]', techColor: 'text-yellow-400 bg-yellow-500/10' },
    { name: 'Go (Golang)', category: 'backend', iconName: 'GO', glowColor: 'hover:border-cyan-400/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]', techColor: 'text-cyan-300 bg-cyan-500/10' },
    { name: 'Rust', category: 'backend', iconName: 'RS', glowColor: 'hover:border-orange-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]', techColor: 'text-orange-500 bg-orange-500/10' },
    { name: 'FastAPI', category: 'backend', iconName: 'FA', glowColor: 'hover:border-emerald-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]', techColor: 'text-emerald-400 bg-emerald-500/10' },
    { name: '.NET Core', category: 'backend', iconName: 'NT', glowColor: 'hover:border-purple-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]', techColor: 'text-purple-400 bg-purple-500/10' },
    { name: 'Spring Boot', category: 'backend', iconName: 'SB', glowColor: 'hover:border-green-600/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(22,163,74,0.2)]', techColor: 'text-green-600 bg-green-600/10' },
    // Cloud & DevOps
    { name: 'Kubernetes', category: 'cloud', iconName: 'K8', glowColor: 'hover:border-blue-600/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]', techColor: 'text-blue-500 bg-blue-600/10' },
    { name: 'Docker', category: 'cloud', iconName: 'DK', glowColor: 'hover:border-sky-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]', techColor: 'text-sky-500 bg-sky-500/10' },
    { name: 'AWS', category: 'cloud', iconName: 'AW', glowColor: 'hover:border-orange-400/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]', techColor: 'text-orange-400 bg-orange-400/10' },
    { name: 'Azure', category: 'cloud', iconName: 'AZ', glowColor: 'hover:border-blue-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]', techColor: 'text-blue-500 bg-blue-500/10' },
    { name: 'GCP Cloud', category: 'cloud', iconName: 'GC', glowColor: 'hover:border-red-400/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(248,113,113,0.2)]', techColor: 'text-red-400 bg-red-400/10' },
    // AI & Databases
    { name: 'OpenAI GPT', category: 'ai', iconName: 'OP', glowColor: 'hover:border-emerald-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]', techColor: 'text-emerald-500 bg-emerald-500/10' },
    { name: 'Claude API', category: 'ai', iconName: 'CL', glowColor: 'hover:border-amber-600/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(217,119,6,0.25)]', techColor: 'text-amber-500 bg-amber-600/10' },
    { name: 'Gemini', category: 'ai', iconName: 'GM', glowColor: 'hover:border-blue-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]', techColor: 'text-blue-500 bg-blue-500/10' },
    { name: 'Llama Weights', category: 'ai', iconName: 'LL', glowColor: 'hover:border-purple-600/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(147,51,234,0.25)]', techColor: 'text-purple-500 bg-purple-500/10' },
    { name: 'PostgreSQL', category: 'ai', iconName: 'PG', glowColor: 'hover:border-blue-400/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(96,165,250,0.2)]', techColor: 'text-blue-400 bg-blue-400/10' },
    { name: 'MongoDB', category: 'ai', iconName: 'MG', glowColor: 'hover:border-emerald-400/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]', techColor: 'text-emerald-400 bg-emerald-500/10' },
    { name: 'Redis Cache', category: 'ai', iconName: 'RD', glowColor: 'hover:border-red-600/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(220,38,38,0.25)]', techColor: 'text-red-500 bg-red-600/10' },
    { name: 'Pinecone Vector', category: 'ai', iconName: 'PC', glowColor: 'hover:border-blue-500/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]', techColor: 'text-blue-500 bg-blue-500/10' },
    { name: 'Qdrant Store', category: 'ai', iconName: 'QD', glowColor: 'hover:border-red-400/50', glowShadow: 'hover:shadow-[0_0_25px_rgba(248,113,113,0.25)]', techColor: 'text-red-400 bg-red-400/10' }
  ];

  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <div className="space-y-12">
      {/* Category Toggles */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { id: 'frontend', label: 'Frontend & Mobile', icon: <Code className="w-4 h-4" /> },
          { id: 'backend', label: 'Backend Systems', icon: <Server className="w-4 h-4" /> },
          { id: 'cloud', label: 'Cloud & DevOps', icon: <Database className="w-4 h-4" /> },
          { id: 'ai', label: 'AI & Data Stores', icon: <Cpu className="w-4 h-4" /> }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-brand-indigo/20 to-brand-purple/20 border-brand-indigo text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                  : 'bg-obsidian-card border-obsidian-border text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid container with larger items, custom glows and smooth animations */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className={`group bg-[#0b0f19]/70 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-all duration-500 cursor-default ${item.glowColor} ${item.glowShadow}`}
            >
              {/* Tech Logo with gradient/colored bg */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm transition-all duration-300 ${item.techColor} group-hover:scale-110 shadow-inner`}>
                {item.iconName}
              </div>
              <div className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors truncate w-full">
                {item.name}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
