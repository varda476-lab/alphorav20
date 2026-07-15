import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Cpu, Shield, Award, Users, BookOpen, Layers, Phone, Database, Server } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const companyItems = [
    { name: 'About Us', path: '/about', desc: 'Learn about our engineering culture & founder Khushboo Mishra', icon: <Users className="w-4 h-4 text-brand-indigo" /> },
    { name: 'Careers', path: '/careers', desc: 'Join our guild of AI Solutions Architects & Rust developers', icon: <Cpu className="w-4 h-4 text-brand-cyan" /> },
    { name: 'Blog', path: '/blog', desc: 'Read deep engineering insights and cloud architectures', icon: <BookOpen className="w-4 h-4 text-brand-purple" /> },
    { name: 'Pricing Plans', path: '/pricing', desc: 'SaaS licensing models & enterprise support fees', icon: <Layers className="w-4 h-4 text-brand-warning" /> }
  ];

  const servicesItems = [
    { name: 'Custom Model Tuning', path: '/services', desc: 'Fine-tune local weight LLM adapters for domain-specific accuracy', icon: <Cpu className="w-4 h-4 text-brand-cyan" /> },
    { name: 'Agentic RAG Systems', path: '/services', desc: 'High-performance semantic vector lookup database integrations', icon: <Database className="w-4 h-4 text-brand-purple" /> },
    { name: 'Autonomous AI Agents', path: '/services', desc: 'Deploy self-operating digital employee bots to automate manual pipelines', icon: <Cpu className="w-4 h-4 text-brand-indigo" /> },
    { name: 'Cloud Infrastructure', path: '/services', desc: 'Secure zero-trust Kubernetes cluster orchestrations and telemetry', icon: <Server className="w-4 h-4 text-brand-success" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-dark/80 backdrop-blur-md border-b border-obsidian-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer group" onClick={() => setIsOpen(false)}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-full h-full text-brand-cyan" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,15 85,80 15,80" stroke="url(#nav-grad)" strokeWidth="6" strokeLinejoin="round" />
                <circle cx="50" cy="48" r="8" fill="#a855f7" className="animate-pulse" />
                <defs>
                  <linearGradient id="nav-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-brand-cyan transition-colors">
              ALPHORA
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/solutions" className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${location.pathname === '/solutions' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
              Solutions
            </Link>

            {/* Services Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer ${location.pathname === '/services' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
                Services
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-80 bg-obsidian-card border border-obsidian-border rounded-xl shadow-2xl p-4 z-50 text-left"
                  >
                    <div className="grid gap-2">
                      {servicesItems.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.path}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-150 cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="mt-1 flex-shrink-0">{item.icon}</div>
                          <div>
                            <div className="text-sm font-bold text-white">{item.name}</div>
                            <div className="text-[10px] text-slate-300 mt-0.5 leading-relaxed">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/products" className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${location.pathname === '/products' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
              Products
            </Link>
            <Link to="/industries" className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${location.pathname === '/industries' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
              Industries
            </Link>
            <Link to="/case-studies" className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${location.pathname === '/case-studies' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
              Case Studies
            </Link>
            <Link to="/research" className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${location.pathname === '/research' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
              Research
            </Link>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                Company
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-80 bg-obsidian-card border border-obsidian-border rounded-xl shadow-2xl p-4 z-50 text-left"
                  >
                    <div className="grid gap-2">
                      {companyItems.map((item) => (
                        <Link 
                          key={item.path} 
                          to={item.path}
                          className={`flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-150 cursor-pointer ${
                            location.pathname === item.path ? 'bg-white/5' : ''
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="mt-1 flex-shrink-0">{item.icon}</div>
                          <div>
                            <div className="text-sm font-bold text-white">{item.name}</div>
                            <div className="text-[10px] text-gray-400 mt-0.5 leading-relaxed">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${location.pathname === '/contact' ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}>
              Contact
            </Link>
          </div>

          {/* CTA Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn-primary-gradient !py-2 !px-4 text-xs cursor-pointer flex items-center justify-center">
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-obsidian-dark border-b border-obsidian-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 text-left">
              <Link to="/solutions" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Solutions</Link>
              <Link to="/services" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/products" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Products</Link>
              <Link to="/industries" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Industries</Link>
              <Link to="/case-studies" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Case Studies</Link>
              <Link to="/research" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Research</Link>
              
              <div className="border-t border-obsidian-border my-2 pt-2 space-y-2">
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Company</span>
                {companyItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="block text-sm text-gray-400 hover:text-white pl-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link to="/contact" className="block text-sm font-semibold text-gray-300 hover:text-white py-1" onClick={() => setIsOpen(false)}>Contact</Link>

              <div className="pt-4 border-t border-obsidian-border">
                <Link
                  to="/contact"
                  className="w-full text-center block btn-primary-gradient py-2 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
