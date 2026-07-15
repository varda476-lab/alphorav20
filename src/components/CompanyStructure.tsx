import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Shield, Network, Zap, GraduationCap, ChevronRight, HardDrive, Compass } from 'lucide-react';

interface StructureNode {
  name: string;
  icon: React.ReactNode;
  desc: string;
  subNodes: string[];
}

export default function CompanyStructure() {
  const [activeDept, setActiveDept] = useState<string>('AI Engineering');

  const departments: StructureNode[] = [
    {
      name: 'AI Engineering',
      icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
      desc: 'Orchestrates our neural networks, autonomous digital employee agents, RAG search layers, and custom fine-tuned weights.',
      subNodes: ['AI Employees', 'LLM Development', 'AI Agents', 'Computer Vision', 'Voice AI']
    },
    {
      name: 'Software Engineering',
      icon: <Code className="w-5 h-5 text-brand-indigo" />,
      desc: 'Builds secure, high-throughput web frontends, cross-platform mobile products, and microservices API gateways.',
      subNodes: ['Web Apps', 'Mobile Apps', 'Enterprise Systems', 'SaaS Engines']
    },
    {
      name: 'Cloud & DevOps',
      icon: <HardDrive className="w-5 h-5 text-brand-success" />,
      desc: 'Configures auto-scaling Kubernetes pods, IaC Terraform setups, and robust CI/CD code build checks.',
      subNodes: ['Kubernetes Clusters', 'AWS / Azure / GCP', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      name: 'Cyber Security',
      icon: <Shield className="w-5 h-5 text-brand-purple" />,
      desc: 'Implements zero-trust IAM profiles, vulnerability scanning pipelines, and verifies SOC 2/HIPAA conformity.',
      subNodes: ['Penetration Audits', 'Secure Architecture', 'Zero-Trust IAM', 'GDPR/HIPAA Compliance']
    },
    {
      name: 'Research Lab',
      icon: <Compass className="w-5 h-5 text-brand-cyan" />,
      desc: 'Publishes core papers, benchmarks local LLM weights against benchmarks, and builds custom vision systems.',
      subNodes: ['Benchmark Tools', 'Paper Publications', 'Fine-Tuning Experiments', 'Open-Source Projects']
    },
    {
      name: 'Venture Studio',
      icon: <Zap className="w-5 h-5 text-brand-purple" />,
      desc: 'Incubates and funds next-generation SaaS tools, building equity streams and recurring subscription products.',
      subNodes: ['SaaS Incubation', 'Milestone Capital', 'Core Code Bootstrapping', 'Growth Operations']
    },
    {
      name: 'Academy',
      icon: <GraduationCap className="w-5 h-5 text-brand-indigo" />,
      desc: 'Runs training cohorts to keep our client engineering and core developer guilds up-to-date with AI benchmarks.',
      subNodes: ['Developer Certifications', 'Enterprise AI Workshops', 'Internship Programs', 'RAG Masterclasses']
    }
  ];

  const currentDept = departments.find(d => d.name === activeDept) || departments[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      
      {/* Departments Selector Column */}
      <div className="lg:col-span-1 flex flex-col gap-2">
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
          DEPARTMENTS (SELECT TO EXPAND)
        </div>
        {departments.map((dept) => (
          <button
            key={dept.name}
            onClick={() => setActiveDept(dept.name)}
            className={`flex items-center justify-between p-4 rounded-xl text-left border text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeDept === dept.name
                ? 'bg-brand-indigo/15 border-brand-indigo text-white shadow-glow-indigo'
                : 'bg-obsidian-card border-obsidian-border text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              {dept.icon}
              <span>{dept.name}</span>
            </div>
            <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
              activeDept === dept.name ? 'rotate-90 text-brand-cyan' : 'text-gray-500'
            }`} />
          </button>
        ))}
      </div>

      {/* Details Box Column */}
      <div className="lg:col-span-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDept.name}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25 }}
            className="glass-card p-8 border-obsidian-border h-full flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient background light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-3xl pointer-events-none rounded-full" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-lg">{currentDept.icon}</div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-mono">ALPHORA GUILD DIVISION</div>
                  <h3 className="text-xl font-bold text-white">{currentDept.name}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                {currentDept.desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-obsidian-border">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  DIVISION CAPABILITIES & NODES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentDept.subNodes.map((sub, sidx) => (
                    <div key={sidx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-obsidian-border text-xs text-gray-500">
              Alphora operational organizational structure chart — v2.0 revision.
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
