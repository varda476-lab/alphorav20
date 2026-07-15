import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Target, Sparkles, Cpu } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: <Cpu className="w-6 h-6 text-brand-cyan" />, name: 'Engineering Excellence', desc: 'We build production-ready systems using the highest standards in performance, reliability, and code hygiene.' },
    { icon: <Sparkles className="w-6 h-6 text-brand-purple" />, name: 'AI-Native Vision', desc: 'We do not just append AI APIs to old systems. We design businesses around agentic workflows and LLM reasoning.' },
    { icon: <Shield className="w-6 h-6 text-brand-indigo" />, name: 'Enterprise Integrity', desc: 'Secure by design. We strictly align all pipeline infrastructure with GDPR, HIPAA, and industry-standard security.' },
    { icon: <Target className="w-6 h-6 text-brand-success" />, name: 'Global Impact', desc: 'We deploy globally distributed platforms that support million-scale operations and cross-border API endpoints.' }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        {/* Background spotlights */}
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" />
          <div className="aurora-glow-purple" style={{ top: '20%', right: '0%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-20">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              ABOUT ALPHORA
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              We Build AI-Powered Digital Businesses That <span className="text-gradient-purple-cyan">Scale Globally</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Alphora was founded with a singular, disruptive mission: to shift the paradigm of digital delivery. We don't just sell developer hours; we construct resilient, autonomous software operations that drive business outcomes.
            </p>
          </motion.div>

          {/* Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 border-obsidian-border space-y-6"
            >
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-brand-cyan" /> Our Mission & Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By integrating cloud engineering, advanced cybersecurity architectures, and state-of-the-art Generative AI, Alphora enables traditional corporations and high-growth startups to automate operations, unlock hidden efficiencies, and launch highly scalable subscription products.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-obsidian-dark border border-obsidian-border rounded-xl">
                  <div className="text-3xl font-bold text-brand-cyan">₹1000Cr+</div>
                  <div className="text-xs text-gray-400 mt-1">Target Client Value Delivered</div>
                </div>
                <div className="flex-1 p-4 bg-obsidian-dark border border-obsidian-border rounded-xl">
                  <div className="text-3xl font-bold text-brand-purple">2M+</div>
                  <div className="text-xs text-gray-400 mt-1">Daily Automated Operations</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Our Engineering DNA</h2>
              <p className="text-gray-400 leading-relaxed">
                At Alphora, we believe that software architecture is an art. We maintain strict testing thresholds, deploy zero-trust network configurations, and fine-tune large language models in-house. We run a specialized AI Research Lab and a Venture Studio that constantly incubates next-generation SaaS startups.
              </p>
              <div className="p-5 border-l-2 border-brand-indigo bg-brand-indigo/5 rounded-r-xl">
                <p className="text-sm italic text-gray-300">
                  "Instead of selling developers, we sell solution systems. Our custom-engineered digital systems act as autonomous units that reduce operational costs by up to 60%."
                </p>
                <div className="mt-2 text-xs font-semibold text-white">— Alphora Architecture Guild</div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-center text-white font-display">Core Engineering Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 border-obsidian-border space-y-4"
                >
                  <div className="p-3 bg-white/5 rounded-lg w-fit">{value.icon}</div>
                  <h3 className="font-bold text-lg text-white">{value.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-center text-white font-display">Founder & Leadership</h2>
            <div className="glass-card p-8 border-obsidian-border max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-2xl rounded-full" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-indigo to-brand-purple flex items-center justify-center font-display font-bold text-2xl text-white shadow-glow-indigo flex-shrink-0">
                KM
              </div>
              <div className="space-y-3 flex-1 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">Khushboo Mishra</h3>
                  <div className="text-sm text-brand-cyan font-semibold">Founder & Principal AI Architect</div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Khushboo Mishra founded Alphora to pivot the software services industry towards high-value product engineering. Under her architectural leadership, the company integrates advanced RAG pipelines, fine-tuned local weights models, and zero-trust cloud network security frameworks for enterprise clients.
                </p>
                <div className="p-3 border-l-2 border-brand-purple bg-brand-purple/5 text-[10px] text-gray-300 italic">
                  "Our goal is to build autonomous, scaling digital businesses that increase client revenue streams while cutting operational expenses by 60%."
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
