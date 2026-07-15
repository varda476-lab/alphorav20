import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import CommandCenterHero from '../components/CommandCenterHero';
import AntigravityPipelineConsole from '../components/AntigravityPipelineConsole';
import TechStack from '../components/TechStack';
import CompanyStructure from '../components/CompanyStructure';
import GlobalPresence from '../components/GlobalPresence';
import DeploymentTimeline from '../components/DeploymentTimeline';
import TiltCard from '../components/TiltCard';
import { Shield, Sparkles, Server, CheckCircle2, TrendingUp, Cpu, Award, Zap, HeartHandshake, Code, HardDrive, Play, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, idx }: { service: any; idx: number }) => {
  return (
    <TiltCard>
      <div className="relative w-full h-full bg-[#020516]/95 rounded-2xl overflow-hidden min-h-[260px]">
        {/* Pulsating glow inside when active */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute inset-0 bg-brand-purple blur-xl rounded-full"
        />
        
        {/* Glowing neon border sweep */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl">
          <motion.rect
            x="1.5"
            y="1.5"
            width="calc(100% - 3px)"
            height="calc(100% - 3px)"
            rx="16"
            fill="none"
            stroke="#FF3E3E"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />
        </svg>

        {/* Inner Content Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 1.0 + idx * 0.25, duration: 0.6, ease: "easeOut" }}
          className="glass-card p-8 border border-white/5 space-y-6 text-left h-full flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 rounded-2xl w-fit text-brand-cyan group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white font-display transition-colors group-hover:text-brand-cyan duration-300">
              {service.title}
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              {service.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </TiltCard>
  );
};

export default function LandingPage() {
  const [consoleTrigger, setConsoleTrigger] = useState(0);
  const stats = [
    { value: '2M+', label: 'API Requests Daily' },
    { value: '450+', label: 'Production Deployments' },
    { value: '99.98%', label: 'Systems Uptime' },
    { value: '48', label: 'Countries Supported' },
    { value: '80+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Proactive Monitoring' }
  ];

  const enterpriseBadges = [
    { title: 'SOC 2 Ready', desc: 'Compliant audits templates ready for execution.' },
    { title: 'ISO 27001 Certified', desc: 'Secure information security management configurations.' },
    { title: 'GDPR Compliant', desc: 'Local database storage options and user data scrub pipelines.' },
    { title: 'HIPAA Ready', desc: 'Secure medical data encryptions and transit locks.' },
    { title: '99.99% Uptime SLA', desc: 'Dedicated cluster nodes backed by financial assurances.' }
  ];

  const coreServices = [
    {
      icon: <Cpu className="w-8 h-8 text-brand-cyan" />,
      title: 'Custom Model Tuning',
      desc: 'Fine-tuning local weight LLMs (LLaMA, Claude adapters) on secure enterprise clusters for domain-specific contexts and 85%+ accuracy.'
    },
    {
      icon: <Database className="w-8 h-8 text-brand-purple" />,
      title: 'Agentic RAG Systems',
      desc: 'High-performance semantic search vector datastores (Qdrant, Pinecone) integrated directly with agentic reasoning loops.'
    },
    {
      icon: <Layers className="w-8 h-8 text-brand-indigo" />,
      title: 'Active Agent Workspaces',
      desc: 'Real-time visual control centers, live agent manager telemetry logs, task checklists, and code diff pipelines.'
    }
  ];

  const capabilityCatalog = [
    { name: 'Custom Software & SaaS', icon: <Code className="w-4 h-4 text-brand-cyan" /> },
    { name: 'Web & Corporate Sites', icon: <Server className="w-4 h-4 text-brand-indigo" /> },
    { name: 'Mobile (iOS & Android)', icon: <Cpu className="w-4 h-4 text-brand-purple" /> },
    { name: 'AI Engineering (LLMs, RAG)', icon: <Sparkles className="w-4 h-4 text-brand-success" /> },
    { name: 'QA & Automation Testing', icon: <Award className="w-4 h-4 text-brand-warning" /> },
    { name: 'Cloud & DevOps (K8s)', icon: <HardDrive className="w-4 h-4 text-brand-cyan" /> },
    { name: 'Cybersecurity & Auditing', icon: <Shield className="w-4 h-4 text-brand-purple" /> }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20 overflow-hidden">
      <Navbar />

      <div className="flex-grow space-y-44 pb-32">
        
        {/* CommandCenter Hero segment */}
        <CommandCenterHero />

        {/* Why Alphora Section (Core Services) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-cyan tracking-widest uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              WHY ALPHORA
            </span>
            <h2 className="text-[2.5rem] font-display font-extrabold text-white leading-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-250 to-brand-cyan">Core Services</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We engineer advanced digital operations. Explore our primary development capabilities built for secure execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} idx={idx} />
            ))}
          </div>
        </div>

        {/* Full Capabilities Directory */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-purple tracking-widest uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Our Full <span className="text-gradient-indigo-purple">Engineering Range</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We cover all software engineering dependencies, integrating advanced AI networks alongside traditional web, database, and cybersecurity layers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {capabilityCatalog.map((cap, idx) => (
              <TiltCard key={idx}>
                <Link
                  to="/services"
                  className="glass-card p-4 border-obsidian-border hover:border-brand-cyan/45 transition-all text-center flex flex-col items-center justify-center gap-3 group cursor-pointer h-full"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-cyan/10 transition-colors">
                    {cap.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 group-hover:text-white transition-colors leading-snug">
                    {cap.name}
                  </span>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* How We Build Timeline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-cyan tracking-widest uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              OUR PROCESS
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              How We <span className="text-gradient-purple-cyan">Build Platforms</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every client project follows a structured engineering methodology. Review our pipeline lifecycle timeline.
            </p>
          </div>
          <DeploymentTimeline />
        </div>

        {/* Antigravity Pipelines segment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 space-y-8 text-left">
              <span className="text-xs font-bold text-brand-purple tracking-widest uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20">
                ANTIGRAVITY RUNTIME
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                Deploy Agentic <span className="text-gradient-purple-cyan">Antigravity Pipelines</span> in Seconds
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Alphora implements the Google Antigravity specification to orchestrate autonomous server pipelines. Developers can bootstrap local LLM weights, register Qdrant/Pinecone indexes, and expose secure execution endpoints instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setConsoleTrigger(prev => prev + 1)}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/35 hover:to-purple-500/35 text-white border border-brand-cyan/40 text-xs font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] cursor-pointer flex items-center gap-2 group hover:scale-[1.03]"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                  Trigger Pipeline
                </button>
                <Link to="/contact" className="px-4 py-2.5 bg-white/5 border border-white/10 text-xs font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center">
                  Read CLI Docs
                </Link>
              </div>
            </div>
            <div className="lg:col-span-3">
              <AntigravityPipelineConsole runTrigger={consoleTrigger} />
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-cyan tracking-widest uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              OUR TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Full-Stack & <span className="text-gradient-cyan-indigo">AI Native</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We compile, secure, and operate enterprise systems. Our engineers work directly inside high-performance system boundaries.
            </p>
          </div>
          <TechStack />
        </div>

        {/* Stats counter showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-indigo/5 to-brand-purple/5 py-12 rounded-3xl border border-obsidian-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-cyan/5 blur-2xl rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight">{stat.value}</div>
                <div className="text-xs text-slate-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Structure Tree */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-purple tracking-widest uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20">
              HOW WE ARE ORGANIZED
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Alphora <span className="text-gradient-indigo-purple">Guild Structure</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We group specialized divisions to cover all engineering dependencies. Explore our departments capabilities.
            </p>
          </div>
          <CompanyStructure />
        </div>

        {/* Global Presence Map */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-cyan tracking-widest uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              GLOBAL PRESENCE
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Distributed <span className="text-gradient-purple-cyan">Engineering Nodes</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We deploy container registries and monitor pipelines from office hubs in Asia-Pacific, North America, Europe, and Dubai.
            </p>
          </div>
          <GlobalPresence />
        </div>

        {/* Enterprise Compliance Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-success tracking-widest uppercase bg-brand-success/10 px-3 py-1 rounded-full border border-brand-success/20">
              ENTERPRISE SECURITY
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Secure by Design, <span className="text-gradient-purple-cyan">Compliance Ready</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We operate under zero-trust guidelines. We claim compliance matrices that we verify inside client containers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {enterpriseBadges.map((badge, idx) => (
              <div key={idx} className="glass-card p-6 border-obsidian-border space-y-3 hover:border-brand-success/30 transition-colors text-left">
                <div className="p-2 bg-brand-success/10 rounded-lg w-fit">
                  <Shield className="w-5 h-5 text-brand-success" />
                </div>
                <h4 className="font-bold text-white text-sm font-display">{badge.title}</h4>
                <p className="text-[10px] text-slate-300 leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Actions CTA Callout Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 border-obsidian-border text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display">Ready to Automate Your Business?</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              Partner with Alphora to engineer custom AI products, scale secure cloud architectures, and deploy automated workflow agents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary-gradient cursor-pointer text-xs flex items-center justify-center">
                Request a Proposal
              </Link>
              <Link to="/case-studies" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold rounded-xl transition-colors cursor-pointer">
                View Case Studies
              </Link>
              <Link to="/contact" className="px-5 py-2.5 bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/40 text-xs font-semibold rounded-xl transition-colors cursor-pointer">
                Contact Sales
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
