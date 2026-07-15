import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { BookOpen, Award, Compass, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchPage() {
  const models = [
    { name: 'Alphora-Reasoning-v1', type: 'Adapter Weights LLaMA-3.1', mmlu: '88.4%', humaneval: '86.2%', status: 'Stable' },
    { name: 'Alphora-Voice-Audio-v2', type: 'Speech-to-Speech adapter', mmlu: 'N/A', humaneval: '79.4%', status: 'Beta' },
    { name: 'Alphora-Vision-OCR-v1.5', type: 'Document Bounding classifier', mmlu: 'N/A', humaneval: '82.9%', status: 'Stable' }
  ];

  const publications = [
    {
      title: 'Orchestrating Semantic Retainers: High-Throughput RAG Architectures',
      journal: 'Alphora Technical Guild — Publication #14',
      date: 'May 2026',
      desc: 'An exploration on caching vector retrieval lookups and dividing payload indexes dynamically using metadata boundaries.'
    },
    {
      title: 'Adapter Tuning vs Prompt Scaffolding: Operational Accuracy Benchmarks',
      journal: 'Alphora Technical Guild — Publication #12',
      date: 'April 2026',
      desc: 'A quantitative audit showing how adapter training reduces token fees by up to 45% compared to multi-shot prompts structures.'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '20%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              RESEARCH & BENCHMARKS
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Alphora AI Research Lab
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We train, compile, and benchmark proprietary neural networks and LLM adapters. Explore our performance scores and research publications.
            </p>
          </div>

          {/* Model Registry Table */}
          <div className="glass-card p-6 border-obsidian-border space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">MODEL REGISTRY BENCHMARKS</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-obsidian-border text-gray-500 font-mono">
                    <th className="pb-3 pr-4">MODEL NAME</th>
                    <th className="pb-3 pr-4">BASE BACKBONE</th>
                    <th className="pb-3 pr-4">MMLU SCORE</th>
                    <th className="pb-3 pr-4">HUMANEVAL</th>
                    <th className="pb-3">DEPLOY STATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {models.map((mod, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 font-bold text-white">{mod.name}</td>
                      <td className="py-4 pr-4 text-gray-400">{mod.type}</td>
                      <td className="py-4 pr-4 text-brand-cyan">{mod.mmlu}</td>
                      <td className="py-4 pr-4 text-brand-purple">{mod.humaneval}</td>
                      <td className="py-4">
                        <span className="px-2 py-0.5 bg-brand-success/15 border border-brand-success/35 text-brand-success rounded">
                          {mod.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Graphical comparison bar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Chart */}
            <div className="glass-card p-6 border-obsidian-border space-y-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">LLM Coding benchmarks (HumanEval Score)</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Alphora-Reasoning-v1', score: 86, color: 'bg-brand-cyan' },
                  { name: 'GPT-4o (baseline)', score: 81, color: 'bg-brand-indigo' },
                  { name: 'Claude-3.5-Sonnet', score: 84, color: 'bg-brand-purple' },
                  { name: 'Llama-3-70B Base', score: 72, color: 'bg-gray-500' }
                ].map((bench, idx) => (
                  <div key={idx} className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>{bench.name}</span>
                      <span className="text-white font-bold font-mono">{bench.score}%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className={`h-full ${bench.color}`} style={{ width: `${bench.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* White papers */}
            <div className="glass-card p-6 border-obsidian-border space-y-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">Technical Publications</h3>
              
              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <div key={idx} className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl space-y-2">
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-brand-purple" /> {pub.title}
                    </h4>
                    <p className="text-[10px] text-gray-500">{pub.journal} • {pub.date}</p>
                    <p className="text-[10px] text-gray-400 leading-relaxed">{pub.desc}</p>
                  </div>
                ))}
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
