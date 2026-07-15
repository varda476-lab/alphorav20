import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Compass, Star } from 'lucide-react';

interface Hub {
  name: string;
  x: number;
  y: number;
  region: string;
  details: string;
}

export default function GlobalPresence() {
  const [activeHub, setActiveHub] = useState<string | null>('Bangalore');

  const hubs: Hub[] = [
    { name: 'Silicon Valley', x: 180, y: 140, region: 'North America', details: 'Core venture capital interface, client advisory boards & cloud research partnerships.' },
    { name: 'London', x: 440, y: 110, region: 'Europe', details: 'Fintech client integrations, secure bank-ledger architectures, and local policy compliance.' },
    { name: 'Dubai', x: 580, y: 170, region: 'Middle East', details: 'Logistics AI optimization contracts, smart city automated dashboards, and regional hubs support.' },
    { name: 'Bangalore', x: 670, y: 220, region: 'Asia-Pacific', details: 'Core engineering headquarters. LLM training clusters, custom software modules assembly & QA automation centers.' },
    { name: 'Singapore', x: 730, y: 240, region: 'Asia-Pacific', details: 'Cross-border cloud engineering registries, SaaS hosting configurations, and local APAC client support.' },
    { name: 'Sydney', x: 860, y: 340, region: 'Australia', details: 'Enterprise mining AI integrations, cloud platform backups, and security monitoring nodes.' }
  ];

  const currentHub = hubs.find((h) => h.name === activeHub);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      
      {/* Map display */}
      <div className="lg:col-span-2 glass-card p-6 border-obsidian-border relative overflow-hidden flex items-center justify-center min-h-[350px]">
        {/* SVG background grid lines */}
        <div className="absolute inset-0 bg-obsidian-dark/40 cyber-grid opacity-30" />
        
        <svg className="w-full max-w-[700px] aspect-[800/450] text-gray-800" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mock stylized continent dots */}
          <rect x="100" y="80" width="180" height="150" rx="30" fill="rgba(255,255,255,0.02)" />
          <rect x="400" y="70" width="120" height="90" rx="20" fill="rgba(255,255,255,0.02)" />
          <rect x="520" y="140" width="300" height="160" rx="40" fill="rgba(255,255,255,0.02)" />
          <rect x="800" y="300" width="100" height="90" rx="20" fill="rgba(255,255,255,0.02)" />

          {/* Draw connecting lines to Bangalore HQ */}
          {hubs.map((hub) => {
            if (hub.name === 'Bangalore') return null;
            return (
              <motion.path
                key={hub.name + '-line'}
                d={`M ${hub.x} ${hub.y} Q ${(hub.x + 670) / 2} ${(hub.y + 220) / 2 - 40} 670 220`}
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                fill="none"
              />
            );
          })}

          {/* Draw nodes */}
          {hubs.map((hub) => {
            const isActive = activeHub === hub.name;
            return (
              <g 
                key={hub.name} 
                onClick={() => setActiveHub(hub.name)}
                className="cursor-pointer group"
              >
                {/* Outer ring */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isActive ? 12 : 6}
                  fill={isActive ? 'rgba(6, 182, 212, 0.25)' : 'rgba(99, 102, 241, 0.15)'}
                  className="group-hover:fill-brand-cyan/20 transition-all duration-300"
                />
                {/* Center dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isActive ? 5 : 3}
                  fill={isActive ? '#06b6d4' : '#6366f1'}
                  className="transition-colors duration-300"
                />
                {/* Hub label text */}
                <text
                  x={hub.x + 10}
                  y={hub.y + 4}
                  fill={isActive ? '#ffffff' : '#94a3b8'}
                  className="text-[10px] font-semibold font-mono"
                >
                  {hub.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info panel */}
      <div className="lg:col-span-1">
        <AnimatePresence mode="wait">
          {currentHub && (
            <motion.div
              key={currentHub.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-6 border-obsidian-border space-y-4"
            >
              <div className="flex items-center gap-2 text-brand-cyan">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{currentHub.region} Node</span>
              </div>
              
              <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                {currentHub.name} {currentHub.name === 'Bangalore' && <Star className="w-4 h-4 text-brand-purple fill-brand-purple" />}
              </h3>
              
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentHub.details}
              </p>
              
              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>COORD: X:{currentHub.x} Y:{currentHub.y}</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
