import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Users, Landmark, Stethoscope, GraduationCap, 
  ShieldCheck, Database, Server, Check, ArrowRight, Play, Cpu, Code
} from 'lucide-react';

interface AgentCard {
  title: string;
  icon: React.ReactNode;
  desc: string;
  price: string;
  features: string[];
  docSnippet: string;
}

export default function MarketplacePage() {
  const [activeModal, setActiveModal] = useState<{ type: 'demo' | 'deploy' | 'docs'; agent: string } | null>(null);
  const [deployStep, setDeployStep] = useState(0);

  const agents: AgentCard[] = [
    {
      title: 'AI Receptionist',
      icon: <Phone className="w-6 h-6 text-brand-cyan" />,
      desc: 'Autonomous voice agent answering listings, scheduling client bookings, and recording transcripts.',
      price: '$290/mo',
      features: ['24/7 outbound/inbound scheduling', 'Natural audio speech synthesis', 'Auto sync to GCal / Outlook'],
      docSnippet: 'services:\n  receptionist:\n    image: alphora/voice-receptionist:v2.1\n    environment:\n      - CALENDAR_PROVIDER=outlook\n      - VOICE_ACCENT=en-us'
    },
    {
      title: 'AI Sales Agent',
      icon: <Users className="w-6 h-6 text-brand-purple" />,
      desc: 'Crawls lead queues, scores match rate, and executes customized WhatsApp and email marketing followups.',
      price: '$390/mo',
      features: ['Email & WhatsApp outreach loops', 'Lead scoring conversion metrics', 'CRM status logging auto-triggers'],
      docSnippet: 'services:\n  sales_agent:\n    image: alphora/sales-outreach:v1.8\n    environment:\n      - CHANNELS=email,whatsapp\n      - CRM_SYNC=salesforce'
    },
    {
      title: 'AI Recruiter',
      icon: <Users className="w-6 h-6 text-brand-indigo" />,
      desc: 'Parses applicant PDFs, matches keywords to roles, and schedules screening interview tasks.',
      price: '$350/mo',
      features: ['Resume parser OCR pipelines', 'MMLU skill score evaluations', 'Automated invitation trigger routes'],
      docSnippet: 'services:\n  recruiter:\n    image: alphora/applicant-ranking:v1.0\n    environment:\n      - OCR_ENGINE=tesseract-v5\n      - THRESHOLD_SCORE=82'
    },
    {
      title: 'AI Customer Support',
      icon: <Phone className="w-6 h-6 text-brand-success" />,
      desc: 'Resolves common client help requests, connects database queries, and flags overrides for managers.',
      price: '$450/mo',
      features: ['RAG documentation lookups', 'Auto ticket classification scoring', '90%+ customer satisfaction rating'],
      docSnippet: 'services:\n  support_agent:\n    image: alphora/customer-help:v3.0\n    environment:\n      - VECTOR_STORE=qdrant\n      - COMPLIANCE_ENCRYPTION=aes-256'
    },
    {
      title: 'AI Medical Assistant',
      icon: <Stethoscope className="w-6 h-6 text-brand-cyan" />,
      desc: 'HIPAA-compliant assistant organizing appointment logs, patient briefs, and coding medical billing tags.',
      price: '$890/mo',
      features: ['HIPAA certified secure containers', 'Doctor transcripts summarize logic', 'Claims coding automations'],
      docSnippet: 'services:\n  medical_helper:\n    image: alphora/hipaa-assistant:v1.2\n    environment:\n      - SECURE_ENCRYPTION=true\n      - TRANSCRIPT_SUMMARY=standard'
    },
    {
      title: 'AI Finance Analyst',
      icon: <Landmark className="w-6 h-6 text-brand-purple" />,
      desc: 'Reconciles payment ledgers, cross-references transaction codes, and warns of anomaly activities.',
      price: '$590/mo',
      features: ['Real-time expense invoice auditing', 'Anomaly trigger warnings algorithms', 'Multi-currency ledger reports'],
      docSnippet: 'services:\n  finance_audit:\n    image: alphora/ledger-reconcile:v2.0\n    environment:\n      - TRANSACTION_INTERVAL=5s\n      - ALERTS_WEBHOOK=slack://alerts'
    },
    {
      title: 'AI Teacher',
      icon: <GraduationCap className="w-6 h-6 text-brand-indigo" />,
      desc: 'Tracks student quiz details, scores essays, and updates parental notifications channels.',
      price: '$350/mo',
      features: ['Adaptive homework feedback loop', 'Essay evaluation models custom logic', 'Grade reports generation tools'],
      docSnippet: 'services:\n  teacher_eval:\n    image: alphora/adaptive-learn:v1.1\n    environment:\n      - EXAM_ROUBLE=middle_school\n      - UPDATE_PARENT_WHATSAPP=true'
    },
    {
      title: 'AI Legal Assistant',
      icon: <ShieldCheck className="w-6 h-6 text-brand-success" />,
      desc: 'Cross-checks vendor contracts to scan for missing clauses or non-standard regulatory risks.',
      price: '$690/mo',
      features: ['Contract clauses validation index', 'Regulatory changes lookup updates', 'SLA conformance scanner boards'],
      docSnippet: 'services:\n  legal_scanner:\n    image: alphora/contract-compliance:v2.4\n    environment:\n      - COMPLIANCE_INDEX=gdpr_2026\n      - SCAN_CLAUSES=nda,sla,ip'
    },
    {
      title: 'AI Data Analyst',
      icon: <Database className="w-6 h-6 text-brand-cyan" />,
      desc: 'Queries SQL databases, compiles metric spreadsheets, and posts performance reports automatically.',
      price: '$490/mo',
      features: ['Natural language to SQL translations', 'Metrics chart generation scripts', 'Daily Slack dashboard push notifications'],
      docSnippet: 'services:\n  data_analyst:\n    image: alphora/sql-generator:v1.5\n    environment:\n      - DATABASE_URL=postgres://db\n      - PUSH_INTERVAL=daily'
    }
  ];

  const handleDeploy = (agentName: string) => {
    setActiveModal({ type: 'deploy', agent: agentName });
    setDeployStep(0);
    
    // Simulate container orchestration steps
    const timer1 = setTimeout(() => setDeployStep(1), 1000);
    const timer2 = setTimeout(() => setDeployStep(2), 2200);
    const timer3 = setTimeout(() => setDeployStep(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

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
              AI MARKETPLACE
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Deployable <span className="text-gradient-purple-cyan">AI Agents</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Launch pre-packaged, containerized agents directly onto our secure servers or export them as clean Docker registries.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-6 border-obsidian-border flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/5 rounded-xl w-fit">{agent.icon}</div>
                    <div className="text-xs font-mono text-brand-cyan font-bold">{agent.price}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white font-display">{agent.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{agent.desc}</p>

                  <div className="space-y-1.5 pt-4 border-t border-obsidian-border text-xs text-gray-300">
                    {agent.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-success flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-6 mt-4 border-t border-obsidian-border">
                  <button 
                    onClick={() => setActiveModal({ type: 'demo', agent: agent.title })}
                    className="px-3 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Try Demo
                  </button>
                  <button 
                    onClick={() => handleDeploy(agent.title)}
                    className="px-3 py-2 bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/40 text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Deploy
                  </button>
                  <button 
                    onClick={() => setActiveModal({ type: 'docs', agent: agent.title })}
                    className="col-span-2 px-3 py-2 bg-brand-indigo/10 hover:bg-brand-indigo/25 text-brand-indigo border border-brand-indigo/35 text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Documentation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Modal simulations */}
        <AnimatePresence>
          {activeModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-obsidian-card border border-obsidian-border rounded-2xl w-full max-w-lg p-6 space-y-6 shadow-2xl relative"
              >
                <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-brand-cyan animate-pulse" /> {activeModal.agent} Config
                  </h3>
                  <button 
                    onClick={() => setActiveModal(null)} 
                    className="text-gray-400 hover:text-white cursor-pointer text-sm"
                  >
                    Close
                  </button>
                </div>

                {/* Demo Content */}
                {activeModal.type === 'demo' && (
                  <div className="space-y-4 text-sm text-gray-300">
                    <p>Simulating the active {activeModal.agent} model environment:</p>
                    <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl space-y-2 font-mono text-xs">
                      <div className="text-brand-success">&gt; Connecting dialog tree... [OK]</div>
                      <div className="text-brand-cyan">&gt; Dial logic active. Listening on webhook...</div>
                      <div className="text-gray-400">&gt; Response preview: "Hello, I am the automated digital assistant. How may I route your query?"</div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      This demo mocks live query responses. You can test actual inputs in our dedicated AI Playground.
                    </p>
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="w-full btn-premium-indigo py-2 text-xs cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                )}

                {/* Deploy Content */}
                {activeModal.type === 'deploy' && (
                  <div className="space-y-4 text-sm text-gray-300">
                    <p>Deploying container for {activeModal.agent} on Alphora clusters:</p>
                    
                    <div className="space-y-3 font-mono text-xs p-4 bg-obsidian-dark border border-obsidian-border rounded-xl">
                      <div className="flex items-center gap-2">
                        {deployStep >= 0 ? <Check className="w-4 h-4 text-brand-success" /> : <Server className="w-4 h-4 text-gray-600 animate-spin" />}
                        <span>Pulling Docker registry logs...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {deployStep >= 1 ? <Check className="w-4 h-4 text-brand-success" /> : deployStep === 0 ? <Server className="w-4 h-4 text-brand-cyan animate-spin" /> : <div className="w-4 h-4 rounded-full border border-gray-600" />}
                        <span>Configuring local vector store metadata...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {deployStep >= 2 ? <Check className="w-4 h-4 text-brand-success" /> : deployStep === 1 ? <Server className="w-4 h-4 text-brand-cyan animate-spin" /> : <div className="w-4 h-4 rounded-full border border-gray-600" />}
                        <span>Orchestrating container pod in GCP cluster...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {deployStep >= 3 ? <Check className="w-4 h-4 text-brand-success" /> : deployStep === 2 ? <Server className="w-4 h-4 text-brand-cyan animate-spin" /> : <div className="w-4 h-4 rounded-full border border-gray-600" />}
                        <span>Deploy completed. Webhook route: https://api.alphora.ai/deploy</span>
                      </div>
                    </div>

                    {deployStep < 3 ? (
                      <div className="text-xs text-brand-cyan animate-pulse">Building instance...</div>
                    ) : (
                      <button 
                        onClick={() => setActiveModal(null)}
                        className="w-full btn-premium-indigo py-2 text-xs cursor-pointer"
                      >
                        Dismiss Console
                      </button>
                    )}
                  </div>
                )}

                {/* Docs Content */}
                {activeModal.type === 'docs' && (
                  <div className="space-y-4 text-sm text-gray-300">
                    <p>Compose Docker compose configurations using standard keys:</p>
                    <pre className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl font-mono text-xs text-brand-cyan overflow-x-auto">
                      {agents.find(a => a.title === activeModal.agent)?.docSnippet || ''}
                    </pre>
                    <p className="text-xs text-gray-500">
                      Configure your environment parameters to sync with local SQL or Pinecone credentials.
                    </p>
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="w-full btn-premium-indigo py-2 text-xs cursor-pointer"
                    >
                      Close Docs
                    </button>
                  </div>
                )}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
