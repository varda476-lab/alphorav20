import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Users, BookOpen, HeartPulse, Sparkles, Check, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const products = [
    {
      icon: <Users className="w-8 h-8 text-brand-cyan" />,
      name: 'AI HR Platform',
      desc: 'An automated suite running applicant parsing, background compliance matching, attendance logs, and payroll calculations autonomously.',
      features: ['Automated applicant screening & interview scoring', 'Voice check-in and attendance auditing', 'Integrated local tax & payroll engines', 'AI workforce productivity reports'],
      price: '$490/mo'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-brand-purple" />,
      name: 'AI School ERP',
      desc: 'Autonomous management system syncing teachers plans, student registers, parent messaging interfaces, and fee collections.',
      features: ['Adaptive homework & exam planning boards', 'Direct parent update channels (WhatsApp/SMS)', 'Fee collection notifications & automated gateways', 'Principal summary performance dashboards'],
      price: '$350/mo'
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-brand-indigo" />,
      name: 'AI Hospital Management',
      desc: 'HIPAA-compliant platform scheduling appointments, compiling doctor transcript charts, and submitting medical bills.',
      features: ['24/7 Voice appointment booking logs', 'Semantic medical history summarize tool', 'Billing auto-claims coding engines', 'Inventory replenishment tracking alerts'],
      price: '$890/mo'
    },
    {
      icon: <Server className="w-8 h-8 text-brand-success" />,
      name: 'AI CRM Platform',
      desc: 'Predict conversion rates, run automated cold-outreach emails, log WhatsApp replies, and track customer lead health.',
      features: ['Lead closing probability model sliders', 'WhatsApp customer dialogue bots', 'Automated email followup loops', 'Real-time sales CRM pipeline grids'],
      price: '$290/mo'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" />
          <div className="aurora-glow-purple" style={{ bottom: '10%', right: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              SUBSCRIPTION SAAS PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Recurring <span className="text-gradient-purple-cyan">AI Platforms</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We convert complex custom work into stable subscription platforms. Integrate robust, pre-trained AI backbones directly into your operations.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((prod, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-8 border-obsidian-border space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/5 rounded-xl w-fit">{prod.icon}</div>
                    <div className="text-xs font-mono font-bold px-3 py-1 bg-brand-success/15 text-brand-success border border-brand-success/30 rounded-full">
                      RECURRING LICENSE
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">{prod.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{prod.desc}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-obsidian-border">
                    {prod.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-obsidian-border flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-extrabold text-white">{prod.price}</span>
                    <span className="text-xs text-gray-400"> / starting base</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/marketplace" className="px-3.5 py-2 bg-brand-indigo/10 hover:bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/35 text-xs font-semibold rounded-lg transition-colors cursor-pointer">
                      Try Demo
                    </Link>
                    <Link to="/contact" className="px-3.5 py-2 bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/45 text-xs font-semibold rounded-lg transition-colors cursor-pointer">
                      Get Sandbox
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
