import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Send, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50k - $150k',
    description: '',
    systems: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', budget: '$50k - $150k', description: '', systems: [] });
    }, 4000);
  };

  const toggleSystem = (sys: string) => {
    setFormData(prev => ({
      ...prev,
      systems: prev.systems.includes(sys) 
        ? prev.systems.filter(s => s !== sys) 
        : [...prev.systems, sys]
    }));
  };

  const systemPresets = ['AI Call Centers', 'AI Employees', 'SaaS Platform', 'Cloud Scale Migration', 'Cyber Audit'];

  const offices = [
    { city: 'Bangalore', location: 'Inner Ring Road, Indiranagar, Bangalore, KA, India', tel: '+91 80 4912 0000' },
    { city: 'Dubai', location: 'DIFC, The Gate District, Dubai, UAE', tel: '+971 4 412 0000' },
    { city: 'Silicon Valley', location: 'Sand Hill Road, Menlo Park, CA, USA', tel: '+1 650 412 0000' }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" />
          <div className="aurora-glow-purple" style={{ bottom: '10%', right: '5%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Schedule an <span className="text-gradient-cyan-indigo">Architecture Audit</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Partner with our core architects. Outline your requirements, select your software stack components, and request a detailed project quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Column: Office Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-display">Alphora Global Hubs</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We deploy engineers globally. Get in touch with our regional managers or book an audit directly.
                </p>
              </div>

              <div className="grid gap-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="glass-card p-5 border-obsidian-border space-y-3">
                    <div className="text-base font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-cyan" /> {office.city} Hub
                    </div>
                    <div className="text-xs text-gray-400 leading-relaxed">{office.location}</div>
                    <div className="text-xs text-brand-purple font-semibold">{office.tel}</div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 border-obsidian-border space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-purple" /> Fast-Track Call
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Prefer a direct strategy session? Book a 30-minute slot on our Calendly block to discuss requirements immediately.
                </p>
                <button className="w-full btn-premium-indigo py-2 text-xs cursor-pointer">
                  Open Booking Calendar
                </button>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-3">
              <motion.div 
                layout
                className="glass-card p-8 border-obsidian-border space-y-6 relative overflow-hidden"
              >
                {formSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#0b0f19] flex flex-col items-center justify-center text-center p-6 z-20 space-y-4"
                  >
                    <div className="w-12 h-12 bg-brand-success/20 border border-brand-success/40 text-brand-success rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Audit Request Received</h3>
                    <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                      Thank you. An engineering coordinator is compiling stack details for {formData.company || 'your firm'}. We will reach out within 24 business hours.
                    </p>
                  </motion.div>
                )}

                <h3 className="text-2xl font-bold text-white font-display">System Blueprint Inquiry</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-300 font-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-obsidian-dark border border-obsidian-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-indigo/60"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-300 font-semibold">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-obsidian-dark border border-obsidian-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-indigo/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-300 font-semibold">Organization *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 bg-obsidian-dark border border-obsidian-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-indigo/60"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-300 font-semibold">Project Budget *</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-4 py-2.5 bg-obsidian-dark border border-obsidian-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-indigo/60"
                      >
                        <option>$10k - $50k</option>
                        <option>$50k - $150k</option>
                        <option>$150k - $500k</option>
                        <option>$500k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Systems selector */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-300 font-semibold block">Target Systems Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {systemPresets.map((sys) => {
                        const active = formData.systems.includes(sys);
                        return (
                          <button
                            key={sys}
                            type="button"
                            onClick={() => toggleSystem(sys)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                              active 
                                ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan' 
                                : 'bg-obsidian-dark border-obsidian-border text-gray-400 hover:text-white'
                            }`}
                          >
                            {sys}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300 font-semibold">Project Outline / Technical Constraints</label>
                    <textarea 
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Outline integrations with CRM nodes, compliance restrictions, or latency parameters here..."
                      className="w-full px-4 py-2.5 bg-obsidian-dark border border-obsidian-border rounded-lg text-sm text-white focus:outline-none focus:border-brand-indigo/60 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-premium-indigo py-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Audit Request
                  </button>

                </form>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
