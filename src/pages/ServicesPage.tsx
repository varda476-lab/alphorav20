import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Cpu, Code, Smartphone, HardDrive, Shield, TestTube, Globe, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: <Code className="w-6 h-6 text-brand-cyan" />,
      title: 'Engineering Capabilities',
      desc: 'High-performance core software engineering for complex corporate systems.',
      items: ['Custom Software Development', 'Enterprise Applications', 'SaaS Development', 'API Development', 'System Integration']
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-indigo" />,
      title: 'Web Development',
      desc: 'Premium frontends, administrative backends, and online stores.',
      items: ['Corporate Websites', 'Enterprise Portals', 'E-Commerce Platforms', 'Progressive Web Apps (PWAs)', 'CMS Platforms']
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-purple" />,
      title: 'Mobile Engineering',
      desc: 'Interactive and responsive mobile apps built for fast loading and native feels.',
      items: ['Android Native Apps', 'iOS Native Apps', 'Flutter Cross-Platform', 'React Native Frameworks']
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-success" />,
      title: 'AI Product Engineering',
      desc: 'Orchestrating agentic models, fine-tuned weights, and vector pipelines.',
      items: ['AI Employees (Cost-Reduction)', 'AI Agents & Automation', 'Voice AI Call Centers', 'Computer Vision Pipelines', 'RAG Systems (Semantic Search)', 'Generative AI Applications', 'Fine-Tuned Models (Adapter Weights)']
    },
    {
      icon: <TestTube className="w-6 h-6 text-brand-warning" />,
      title: 'QA & Testing',
      desc: 'Rigorous manual and automated test matrices ensuring continuous integration releases.',
      items: ['Manual Testing Matrices', 'Automation Testing Suites', 'API Integration Testing', 'Performance & Load Testing', 'Security Vulnerability Testing', 'Mobile UI Device Testing']
    },
    {
      icon: <HardDrive className="w-6 h-6 text-brand-cyan" />,
      title: 'Cloud & DevOps',
      desc: 'Distributed auto-scaling infrastructure pipelines configured using IaC.',
      items: ['AWS Cloud Deployments', 'Azure Enterprise Cloud', 'GCP Cloud Infrastructure', 'Kubernetes Orchestration', 'Docker Containers Pipelines', 'Continuous Integration / Deploy (CI/CD)']
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-purple" />,
      title: 'Cyber Security',
      desc: 'Zero-trust identity profiles, compliance frameworks alignment, and testing.',
      items: ['Penetration Testing Audits', 'Vulnerability Assessment Logs', 'Secure Infrastructure Architecture', 'Regulatory Compliance Alignments']
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '10%', left: '5%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '15%', right: '5%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              ALPHORA CAPABILITY CATALOG
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Our Service <span className="text-gradient-purple-cyan">Taxonomy</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Explore our comprehensive range of software engineering, cloud operations, cybersecurity verification, and AI native product architectures.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-6 border-obsidian-border flex flex-col justify-between"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-lg">{cat.icon}</div>
                    <h3 className="font-bold text-white text-base font-display">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{cat.desc}</p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-[10px] text-gray-300">
                      <Sparkles className="w-3 h-3 text-brand-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
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
