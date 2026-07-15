import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian-dark border-t border-obsidian-border text-gray-400 py-16 z-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-brand-cyan" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,15 85,80 15,80" stroke="url(#footer-grad)" strokeWidth="6" strokeLinejoin="round" />
                <circle cx="50" cy="48" r="8" fill="#a855f7" />
                <defs>
                  <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display font-bold text-xl tracking-wider text-white">ALPHORA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Alphora engineers enterprise software, AI employees, cloud platforms, mobile applications, and intelligent automation that help businesses scale globally.
            </p>

            {/* Compliance Badge Showcase */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-cyan" />
                ENTERPRISE COMPLIANCE & SECURITY
              </div>
              <div className="flex flex-wrap gap-2">
                {['SOC 2 Certified', 'ISO 27001 Ready', 'GDPR Compliant', 'HIPAA Ready', 'PCI DSS Compliant'].map((badge) => (
                  <span key={badge} className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-obsidian-card border border-obsidian-border text-gray-300 rounded-md">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2 max-w-sm space-y-3">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                SUBSCRIBE TO RESEARCH INSIGHTS
              </label>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="flex-1 px-4 py-2 text-sm bg-obsidian-card border border-obsidian-border rounded-lg text-white focus:outline-none focus:border-brand-indigo/60 transition-colors"
                />
                <button type="submit" className="p-2.5 bg-brand-indigo/15 hover:bg-brand-indigo/35 text-white border border-brand-indigo/40 rounded-lg transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Directory Links Grid */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Capabilities</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-brand-cyan transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-cyan transition-colors">Solutions</Link></li>
              <li><Link to="/industries" className="hover:text-brand-cyan transition-colors">Industries</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand-cyan transition-colors">Case Studies</Link></li>
            </ul>

            <h4 className="text-xs font-bold text-white tracking-widest uppercase mt-8 mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-brand-cyan transition-colors">SaaS Products</Link></li>
              <li><Link to="/marketplace" className="hover:text-brand-cyan transition-colors">AI Marketplace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Workspace</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/command-center" className="hover:text-brand-cyan transition-colors">Command Center</Link></li>
              <li><Link to="/playground" className="hover:text-brand-cyan transition-colors">AI Playground</Link></li>
              <li><Link to="/architecture" className="hover:text-brand-cyan transition-colors">Architecture Builder</Link></li>
              <li><Link to="/calculator" className="hover:text-brand-cyan transition-colors">ROI Calculator</Link></li>
              <li><Link to="/tracker" className="hover:text-brand-cyan transition-colors">Project Tracker</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-cyan transition-colors">Client Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link to="/research" className="hover:text-brand-cyan transition-colors">Research Lab</Link></li>
              <li><Link to="/careers" className="hover:text-brand-cyan transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-cyan transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-obsidian-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {currentYear} Alphora Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Security Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">SLA Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
