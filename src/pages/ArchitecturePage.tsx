import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Server, Shield, Database, Cpu, MessageSquare, LineChart, Download, Plus, Trash, Check } from 'lucide-react';

interface Block {
  id: string;
  name: string;
  icon: React.ReactNode;
  desc: string;
}

export default function ArchitecturePage() {
  const [activePipeline, setActivePipeline] = useState<Block[]>([
    { id: 'fe', name: 'Frontend React', icon: <Layers className="w-4 h-4 text-brand-cyan" />, desc: 'User interface' },
    { id: 'api', name: 'API Gateway', icon: <Server className="w-4 h-4 text-brand-indigo" />, desc: 'Reverse proxy' },
    { id: 'llm', name: 'LLaMA LLM', icon: <Cpu className="w-4 h-4 text-brand-purple" />, desc: 'Reasoning model' }
  ]);
  
  const [exportedJson, setExportedJson] = useState<string | null>(null);

  const blockTemplates: Block[] = [
    { id: 'fe', name: 'Frontend React', icon: <Layers className="w-4 h-4 text-brand-cyan" />, desc: 'User UI interface client portal' },
    { id: 'api', name: 'API Gateway', icon: <Server className="w-4 h-4 text-brand-indigo" />, desc: 'High throughput routing reverse proxy' },
    { id: 'auth', name: 'Authentication', icon: <Shield className="w-4 h-4 text-brand-purple" />, desc: 'Zero-trust JWT verification node' },
    { id: 'db', name: 'PostgreSQL DB', icon: <Database className="w-4 h-4 text-brand-success" />, desc: 'Primary transactional ledger database' },
    { id: 'vdb', name: 'Pinecone Vector', icon: <Database className="w-4 h-4 text-brand-cyan" />, desc: 'Semantic search RAG database' },
    { id: 'llm', name: 'LLaMA LLM', icon: <Cpu className="w-4 h-4 text-brand-purple" />, desc: 'Large language reasoning core weights' },
    { id: 'agent', name: 'AI Employee', icon: <Cpu className="w-4 h-4 text-brand-indigo" />, desc: 'Autonomous logic script agent executor' },
    { id: 'whatsapp', name: 'WhatsApp API', icon: <MessageSquare className="w-4 h-4 text-brand-success" />, desc: 'Message relay outbound webhooks' },
    { id: 'analytics', name: 'Analytics Board', icon: <LineChart className="w-4 h-4 text-brand-warning" />, desc: 'Activity metrics charts visual logs' }
  ];

  const addBlock = (block: Block) => {
    // Avoid double adding same block id
    if (activePipeline.some(b => b.id === block.id)) return;
    setActivePipeline(prev => [...prev, block]);
    setExportedJson(null);
  };

  const removeBlock = (id: string) => {
    setActivePipeline(prev => prev.filter(b => b.id !== id));
    setExportedJson(null);
  };

  const handleExport = () => {
    const output = {
      alphora_version: '2.0',
      pipeline_name: 'Custom AI Agent Integration',
      components: activePipeline.map((b, idx) => ({
        step: idx + 1,
        component_id: b.id,
        component_name: b.name,
        upstream_link: idx === 0 ? 'client' : activePipeline[idx - 1].id
      }))
    };
    setExportedJson(JSON.stringify(output, null, 2));
  };

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '10%' }} />
          <div className="aurora-glow-cyan" style={{ bottom: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              INTERACTIVE BUILDER
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              System Architecture Builder
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Design, test, and export your custom AI pipeline layout. Stack API adapters, RAG engines, vector stores, and customer endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Sidebar block selector */}
            <div className="glass-card p-6 border-obsidian-border space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">AVAILABLE BLOCKS</h3>
              <div className="grid gap-2">
                {blockTemplates.map((block) => {
                  const alreadyAdded = activePipeline.some(b => b.id === block.id);
                  return (
                    <button
                      key={block.id}
                      onClick={() => addBlock(block)}
                      disabled={alreadyAdded}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold text-left transition-all duration-200 cursor-pointer w-full ${
                        alreadyAdded 
                          ? 'bg-obsidian-dark border-obsidian-border text-gray-600 cursor-not-allowed' 
                          : 'bg-obsidian-card border-obsidian-border text-gray-300 hover:text-white hover:border-brand-cyan/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {block.icon}
                        <span>{block.name}</span>
                      </div>
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Canvas */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass-card p-8 border-obsidian-border space-y-6 min-h-[350px] relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-obsidian-dark/40 cyber-grid opacity-25" />
                
                {/* Header controls */}
                <div className="flex items-center justify-between border-b border-obsidian-border pb-3 relative z-10">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-display">ACTIVE BLUEPRINT CANVAS</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={handleExport}
                      className="px-3 py-1.5 bg-brand-cyan/15 hover:bg-brand-cyan/25 border border-brand-cyan/40 text-[10px] font-bold text-brand-cyan rounded-lg cursor-pointer transition-colors"
                    >
                      Compile Schema
                    </button>
                  </div>
                </div>

                {/* Pipeline Render */}
                <div className="flex flex-wrap items-center justify-start gap-4 py-8 relative z-10">
                  <AnimatePresence>
                    {activePipeline.map((block, idx) => (
                      <React.Fragment key={block.id}>
                        {idx > 0 && (
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-brand-cyan font-extrabold text-sm"
                          >
                            →
                          </motion.span>
                        )}
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 bg-obsidian-dark border border-brand-indigo/30 shadow-glow-indigo rounded-xl flex items-center gap-3 relative group"
                        >
                          <div className="p-2 bg-white/5 rounded-lg">{block.icon}</div>
                          <div>
                            <div className="text-xs font-bold text-white">{block.name}</div>
                            <div className="text-[9px] text-gray-500">{block.desc}</div>
                          </div>
                          <button 
                            onClick={() => removeBlock(block.id)}
                            className="absolute top-[-8px] right-[-8px] bg-red-500/80 hover:bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <Trash className="w-2.5 h-2.5" />
                          </button>
                        </motion.div>
                      </React.Fragment>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="text-[10px] text-gray-500 font-mono relative z-10">
                  Pipeline blocks stacked: {activePipeline.length} / 9 max nodes
                </div>
              </div>

              {/* JSON schema print out */}
              {exportedJson && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 border-obsidian-border space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-obsidian-border pb-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">EXPORTED JSON CONFIG</span>
                    <span className="text-[9px] text-brand-success flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> SCHEMA READY
                    </span>
                  </div>
                  <pre className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl font-mono text-[10px] text-brand-cyan overflow-x-auto">
                    {exportedJson}
                  </pre>
                </motion.div>
              )}

            </div>

          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
