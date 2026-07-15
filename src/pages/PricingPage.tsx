import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const tiers = [
    {
      name: 'SaaS License',
      desc: 'Deploy pre-built software suites with basic AI logic configurations directly in our secure hosting.',
      price: '$290',
      period: 'per month/starting',
      features: ['AI CRM or AI HR Platform access', 'Standard email/WhatsApp api relays', '50,000 automated queries monthly', 'Shared server infrastructure', 'Next-business-day ticketing help'],
      cta: 'Explore Products',
      link: '/products',
      primary: false
    },
    {
      name: 'Custom AI Solution',
      desc: 'Partner with our principal architects to engineer fine-tuned LLM pipelines custom-built for your company.',
      price: 'Custom',
      period: 'milestone agreements',
      features: ['Custom RAG database setups', 'Fine-tuning weights on local servers', 'Full code transfer options', 'Dedicated Kubernetes hosting support', '24/7 dedicated support engineer channel'],
      cta: 'Book Architecture Audit',
      link: '/contact',
      primary: true
    },
    {
      name: 'Enterprise Contract',
      desc: 'Dedicated enterprise clusters with maximum security clearances (SOC 2, GDPR, HIPAA ready) and custom SLAs.',
      price: 'Quote',
      period: 'annual agreements',
      features: ['HIPAA / SOC 2 secure clusters', '99.99% uptime SLA commitments', 'On-premises LLM weights deployment', 'Custom vector store security parameters', 'Annual maintenance and staff training'],
      cta: 'Contact Enterprise Team',
      link: '/contact',
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" />
          <div className="aurora-glow-purple" style={{ bottom: '15%', right: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              TRANSPARENT REVENUE MODELS
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              SaaS & Enterprise <span className="text-gradient-purple-cyan">Licensing</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Choose between ready-to-use software products, custom milestone-based engineering, or enterprise compliance contracts.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`glass-card p-8 border-obsidian-border flex flex-col justify-between relative ${
                  tier.primary ? 'border-brand-indigo/50 shadow-glow-indigo' : ''
                }`}
              >
                {tier.primary && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-brand-indigo text-[10px] font-bold uppercase tracking-wider rounded-full">
                    RECOMMENDED PARTNERSHIP
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">{tier.desc}</p>
                  </div>
                  
                  <div className="py-2 border-y border-obsidian-border">
                    <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                    <span className="text-xs text-gray-400 ml-1"> {tier.period}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-300">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link 
                    to={tier.link}
                    className={`block w-full text-center py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      tier.primary 
                        ? 'bg-brand-indigo hover:bg-brand-indigo/80 text-white' 
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Micro Pricing note */}
          <div className="glass-card p-6 border-obsidian-border flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-brand-cyan" />
              <div>
                <h4 className="text-sm font-bold text-white">Hybrid API Consumption Model</h4>
                <p className="text-xs text-gray-400 mt-0.5">High-volume workflows scale using custom token indices starting at $0.002 / thousand operations.</p>
              </div>
            </div>
            <Link to="/contact" className="text-xs text-brand-cyan hover:underline font-semibold cursor-pointer">
              Get API Token Grid →
            </Link>
          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
