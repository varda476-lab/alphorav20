import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Briefcase, Heart, BookOpen, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareersPage() {
  const positions = [
    { title: 'AI Solutions Architect', dept: 'AI Engineering', loc: 'Bangalore / Hybrid', type: 'Full-time' },
    { title: 'Senior Rust Systems Engineer', dept: 'Software Engineering', loc: 'Delhi NCR / Remote', type: 'Full-time' },
    { title: 'Lead RAG Pipeline Developer', dept: 'Research Lab', loc: 'Bangalore / Hybrid', type: 'Full-time' },
    { title: 'Cloud Infrastructure Automation Lead', dept: 'DevOps / Cloud', loc: 'Remote (India)', type: 'Full-time' }
  ];

  const benefits = [
    { title: 'Premium Health Insurance', desc: 'Comprehensive medical cover for employees and immediate dependents.' },
    { title: 'Venture Equity Pool', desc: 'Stock options (ESOPs) linked to overall Alphora valuation growth.' },
    { title: 'Dedicated Learning Stipend', desc: 'Annual budget for LLM training courses, books, and international AI conferences.' },
    { title: 'Hybrid Work Autonomy', desc: 'Flexible check-in times and support for premium work-from-home hardware.' }
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
              JOIN THE GUILD
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Engineering <span className="text-gradient-cyan-indigo">The Future</span> of Work
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We look for developers who treat coding as an art. Build global AI employee systems, design high-performance compilers, and configure safe containerized infrastructure.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white text-center">Why Build with Alphora?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((ben, idx) => (
                <div key={idx} className="glass-card p-6 border-obsidian-border space-y-3">
                  <div className="p-2 bg-brand-cyan/10 rounded-lg w-fit">
                    <Heart className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="font-bold text-white text-base">{ben.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Process */}
          <div className="glass-card p-8 border-obsidian-border space-y-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center">Our Hiring Flow</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              {[
                { step: '01', title: 'Technical Audit', desc: 'Submit repository work or write a clean compiler module in a brief sandbox assignment.' },
                { step: '02', title: 'Architecture Audit', desc: 'Discuss systemic design, database scaling boundaries, and LLM orchestration layouts.' },
                { step: '03', title: 'Cultural Sync', desc: 'Connect with core partners to align on engineering goals and compensation ESOP models.' }
              ].map((flow, idx) => (
                <div key={idx} className="space-y-2 relative z-10">
                  <div className="text-3xl font-extrabold text-brand-cyan/30 font-mono">{flow.step}</div>
                  <h4 className="font-bold text-white">{flow.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{flow.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center">Open Engineering Positions</h2>
            <div className="space-y-4">
              {positions.map((pos, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="glass-card p-5 border-obsidian-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-purple" /> {pos.title}
                    </h3>
                    <div className="text-xs text-gray-400 flex items-center gap-3">
                      <span>{pos.dept}</span>
                      <span>•</span>
                      <span>{pos.loc}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="px-2.5 py-1 text-[10px] font-semibold bg-obsidian-dark border border-obsidian-border rounded text-gray-300">
                      {pos.type}
                    </span>
                    <Link to="/contact" className="px-4 py-2 bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/40 text-xs font-semibold rounded-lg transition-colors cursor-pointer">
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
