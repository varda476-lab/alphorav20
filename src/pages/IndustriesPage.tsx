import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, GraduationCap, Landmark, ShoppingBag, Truck, 
  Factory, Building2, ShieldCheck, Hotel, Sparkles 
} from 'lucide-react';

interface IndustryData {
  id: string;
  icon: React.ReactNode;
  name: string;
  title: string;
  desc: string;
  cases: string[];
  metrics: string;
}

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState('healthcare');

  const industries: IndustryData[] = [
    {
      id: 'healthcare',
      icon: <Stethoscope className="w-5 h-5" />,
      name: 'Healthcare',
      title: 'AI Medical Assistants & Smart Records',
      desc: 'Deploy HIPAA-compliant conversational agents that automate booking, scan diagnostic logs, and compile patient summaries.',
      cases: ['Autonomous appointment booking (96% automation)', 'Semantic patient records summaries', 'Medical voice transcription pipelines'],
      metrics: 'Saved $2.1M in medical admin costs'
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-5 h-5" />,
      name: 'Education',
      title: 'AI Education Platforms & Admin ERPs',
      desc: 'Deliver individualized study plans, automate fee logging pipelines, and let teacher agents generate student evaluations.',
      cases: ['Adaptive homework evaluation engines', 'Fee ledger automated collections', 'Custom student performance reports'],
      metrics: '55% teacher administrative hours saved'
    },
    {
      id: 'banking',
      icon: <Landmark className="w-5 h-5" />,
      name: 'Banking',
      title: 'Secure Ledger Automation & Risk Assessor',
      desc: 'Scan high-frequency transactions for compliance breaches and orchestrate intelligent customer ticket routing.',
      cases: ['Automated loan file verification pipelines', 'Real-time transaction compliance triggers', 'AI Customer Support desks'],
      metrics: '92% instant document verification rate'
    },
    {
      id: 'retail',
      icon: <ShoppingBag className="w-5 h-5" />,
      name: 'Retail & E-commerce',
      title: 'Automated CRM & Support Networks',
      desc: 'Deploy WhatsApp AI agents and lead predictors to target, convert, and retain subscription shoppers automatically.',
      cases: ['Conversational cart recovery WhatsApp agents', 'Lead closing likelihood prediction models', 'Outbound sales agents'],
      metrics: '72% support ticketing volume reduction'
    },
    {
      id: 'logistics',
      icon: <Truck className="w-5 h-5" />,
      name: 'Logistics',
      title: 'Automated Routing & Freight Audit',
      desc: 'Utilize automated vision systems to track cargo conditions and fine-tune delivery routing variables dynamically.',
      cases: ['Intelligent path optimization models', 'Bill-of-lading optical character parsing', 'Autonomous inventory sensors'],
      metrics: '40% decrease in manual cargo parsing delays'
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-5 h-5" />,
      name: 'Manufacturing',
      title: 'Predictive Defect Scans & Inventory',
      desc: 'Deploy computer vision nodes across production belts to flag defects and manage inventory pipelines automatically.',
      cases: ['Vision defect scans (99.8% precision)', 'Procurement triggers based on buffer forecasts', 'Asset health tracker logs'],
      metrics: '35% reduction in device down-time'
    },
    {
      id: 'government',
      icon: <Landmark className="w-5 h-5" />,
      name: 'Government',
      title: 'Smart Citizen Portals & File Auditing',
      desc: 'Streamline public requests, audit citizen filings, and summarize dense regulatory paperwork securely.',
      cases: ['Citizen services automated desk routing', 'Public documents OCR parsing', 'Policy change impact simulators'],
      metrics: '80% faster processing of standard forms'
    },
    {
      id: 'realestate',
      icon: <Building2 className="w-5 h-5" />,
      name: 'Real Estate',
      title: 'AI Lead Matching & Virtual Showings',
      desc: 'Analyze property portfolios, matches buyers automatically, and runs voice receptionists for listing queries.',
      cases: ['Buyer profile matching algorithms', 'Listing answering agents (24/7 coverage)', 'Automated valuation reporting'],
      metrics: '5x boost in listing call responses'
    },
    {
      id: 'insurance',
      icon: <ShieldCheck className="w-5 h-5" />,
      name: 'Insurance',
      title: 'Intelligent Claims Auditing & Risk Scan',
      desc: 'Audit insurance claims instantly by running vision and RAG validation against medical or repair invoices.',
      cases: ['Automated damage classification models', 'Policy alignment scanning engines', 'Fraudulent files anomaly alarms'],
      metrics: '60% faster claims processing duration'
    },
    {
      id: 'hospitality',
      icon: <Hotel className="w-5 h-5" />,
      name: 'Hospitality',
      title: 'AI Concierge & Smart Booking',
      desc: 'Deploy voice and text concierge systems that handle multi-lingual guest bookings and room service scheduling.',
      cases: ['Multi-lingual concierge agents', 'Booking modification chatbots', 'Guest feedback sentiment tracking'],
      metrics: '90% guest reservation automation rate'
    }
  ];

  const currentInd = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '10%', left: '10%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '15%', right: '5%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              INDUSTRIES WE EMPOWER
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Targeted <span className="text-gradient-purple-cyan">AI Solutions</span> by Sector
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We design specialized digital architectures tailored for specific industries, aligning with rigorous compliance standards.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Tabs List */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-obsidian-border pr-0 lg:pr-4">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap lg:whitespace-normal w-full ${
                    activeTab === ind.id 
                      ? 'bg-brand-indigo/15 text-white border border-brand-indigo/40 shadow-glow-indigo' 
                      : 'text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  {ind.icon}
                  <span>{ind.name}</span>
                </button>
              ))}
            </div>

            {/* Display panel */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentInd.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 border-obsidian-border space-y-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/5 blur-3xl rounded-full" />
                  
                  <div className="flex items-center gap-3 text-brand-cyan">
                    {currentInd.icon}
                    <span className="text-xs font-bold uppercase tracking-wider">{currentInd.name} Division</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white">{currentInd.title}</h2>
                  <p className="text-gray-300 leading-relaxed text-sm">{currentInd.desc}</p>

                  <div className="space-y-3 pt-4 border-t border-obsidian-border">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Example Deployments:</h4>
                    <ul className="space-y-2">
                      {currentInd.cases.map((c, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-200">
                          <Sparkles className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-obsidian-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest">IMPACT METRIC DELIVERED</div>
                      <div className="text-lg font-bold text-brand-success">{currentInd.metrics}</div>
                    </div>
                    <Link to="/contact" className="btn-premium-indigo cursor-pointer text-xs">
                      Consult with Industry Architects
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
