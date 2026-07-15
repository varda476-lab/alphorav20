import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Stethoscope, Landmark, ShoppingBag, GraduationCap, Factory, CheckCircle2, TrendingUp } from 'lucide-react';

interface CaseStudy {
  icon: React.ReactNode;
  industry: string;
  title: string;
  desc: string;
  metrics: string[];
  savings: string;
}

export default function CaseStudiesPage() {
  const cases: CaseStudy[] = [
    {
      icon: <Stethoscope className="w-6 h-6 text-brand-cyan" />,
      industry: 'Healthcare Integration',
      title: 'AI Medical Concierge & Diagnostic Index',
      desc: 'Orchestrated secure HIPAA containers scheduling appointments and compiling medical chart transcripts for a regional healthcare provider network.',
      metrics: ['Reduced support desk costs: 72%', 'Automated appointments: 96%', 'SLA compliance score: 100%'],
      savings: 'Saved $2.1M in admin overhead'
    },
    {
      icon: <Landmark className="w-6 h-6 text-brand-purple" />,
      industry: 'Banking & Finance',
      title: 'High-Frequency Ledger Auditing Pipelines',
      desc: 'Deployed real-time transactional compliance scanning and automated expense reconciliation workflows for a global B2B fintech partner.',
      metrics: ['Audited ledger anomaly warnings: 99.2%', 'Reduced ledger query times: 85%', 'Manual review logs eliminated: 90%'],
      savings: 'Saved $1.8M in security auditing costs'
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-brand-indigo" />,
      industry: 'Retail & E-commerce',
      title: 'Multichannel Outbound Sales Agents',
      desc: 'Configured automated cart recovery WhatsApp webhooks and lead matching converters to recover dropoff transactions automatically.',
      metrics: ['Cart conversion rates recovery: 5x', 'Outbound support tickets down: 70%', 'Customer satisfaction rating: 98%'],
      savings: 'Saved $1.2M in annual recovery costs'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-success" />,
      industry: 'Education Platforms',
      title: 'Adaptive Learning ERP & Fee Ledgers',
      desc: 'Launched student performance scoring engines, fee invoicing webhooks, and parent SMS channels for a 15-campus school cluster.',
      metrics: ['Teacher administrative hours saved: 55%', 'Fee collections notifications: 88% auto', 'Parent feedback rating: 95%'],
      savings: 'Saved $890k in admin wages'
    },
    {
      icon: <Factory className="w-6 h-6 text-brand-warning" />,
      industry: 'Manufacturing Lines',
      title: 'Predictive Belt Defect Computer Vision',
      desc: 'Constructed local edge-computing vision nodes classifying defects and auto-firing inventory re-orders.',
      metrics: ['Vision defect scans precision: 99.8%', 'Belt asset down-time reduced: 35%', 'Project ROI timeline: 6 Months'],
      savings: 'Saved $1.4M in hardware wastage'
    },
    {
      icon: <Landmark className="w-6 h-6 text-brand-cyan" />,
      industry: 'Government Services',
      title: 'Smart Citizen Portals & File Auditing',
      desc: 'Isomorphic scanning pipelines compiling public claims filings and summarizing municipal code adjustments.',
      metrics: ['Public document scan speed: 80% faster', 'Application backlog cases: 94% cleared', 'Citizen query automated: 90%'],
      savings: 'Saved $2.5M in public overhead costs'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '15%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '15%' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              CLIENT SUCCESS CASE STUDIES
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Measurable <span className="text-gradient-purple-cyan">Impact & Metrics</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We focus on business outcomes. Browse detailed project timelines showing concrete cost savings and automation rates delivered.
            </p>
          </div>

          {/* Scrolling timeline list */}
          <div className="relative border-l border-obsidian-border pl-8 ml-4 space-y-12">
            {cases.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4 }}
                className="relative space-y-4"
              >
                {/* Timeline node icon */}
                <div className="absolute left-[-46px] top-1.5 w-9 h-9 rounded-full bg-obsidian-card border border-obsidian-border flex items-center justify-center">
                  {c.icon}
                </div>

                <div className="glass-card p-6 border-obsidian-border space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 blur-2xl rounded-full" />
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">{c.industry}</span>
                    <span className="text-xs font-bold text-brand-success font-mono flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 animate-pulse" /> {c.savings}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">{c.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{c.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5">
                    {c.metrics.map((met, mi) => (
                      <div key={mi} className="flex items-center gap-2 text-[10px] text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                        <span>{met}</span>
                      </div>
                    ))}
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
