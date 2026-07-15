import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, Workflow, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Workflow className="w-8 h-8 text-brand-cyan" />,
      title: 'Agentic Back-Office Automation',
      desc: 'Connect custom email, WhatsApp, and database listeners to autonomous AI agents that run invoice audits, lead sorting, and report collation.',
      metrics: '60% cost reduction in operations'
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-purple" />,
      title: 'Enterprise AI Integrations',
      desc: 'Upgrade legacy SAP, Oracle, or Salesforce platforms by overlaying secure semantic search, custom RAG indexing, and conversational LLM interfaces.',
      metrics: '85% faster database lookups'
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-brand-indigo" />,
      title: 'Zero-Trust Secure Cloud Platforms',
      desc: 'Transition critical workloads into securely containerized Kubernetes setups mapped to strict compliance criteria (GDPR, HIPAA).',
      metrics: '99.99% system uptime goal'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              ENTERPRISE SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              We Build <span className="text-gradient-purple-cyan">AI-Powered Businesses</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We build end-to-end operational software structures. Instead of adding temporary plugins, we redesign your business pipelines around automation.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="glass-card p-8 border-obsidian-border space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 rounded-xl w-fit">{sol.icon}</div>
                  <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{sol.desc}</p>
                </div>
                
                <div className="pt-6 border-t border-obsidian-border">
                  <div className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">
                    KEY RESULT: {sol.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="glass-card p-10 border-obsidian-border text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Need a Tailored AI Integration Blueprint?</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Let's analyze your legacy workflows, model dependencies, and infrastructure bottlenecks. Our team will sketch a custom engineering plan.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="btn-premium-indigo cursor-pointer">
                Request Architecture Audit
              </Link>
              <Link to="/calculator" className="btn-premium-cyan cursor-pointer">
                Estimate ROI
              </Link>
            </div>
          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
