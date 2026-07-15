import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, Terminal, CheckCircle2, ChevronRight, Cpu, Database, Server, RefreshCw, Layers } from 'lucide-react';

interface AntigravityPipelineConsoleProps {
  runTrigger: number;
}

export default function AntigravityPipelineConsole({ runTrigger }: AntigravityPipelineConsoleProps) {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'diffs' | 'logs'>('pipeline');
  const [simulationStep, setSimulationStep] = useState(0); // 0: Idle, 1: Init, 2: RAG/Model, 3: Deploying, 4: Done
  const [logs, setLogs] = useState<string[]>([]);
  const intervalRef = useRef<any>(null);

  const pipelineSteps = [
    { name: 'GCP Ingest', type: 'input', icon: <Layers className="w-4 h-4 text-cyan-400" />, desc: 'Ingesting triggers' },
    { name: 'Agent Core', type: 'agent', icon: <Cpu className="w-4 h-4 text-purple-400" />, desc: 'Antigravity routing' },
    { name: 'Vector DB', type: 'database', icon: <Database className="w-4 h-4 text-emerald-400" />, desc: 'Semantic retrieval' },
    { name: 'Deploy Pod', type: 'output', icon: <Server className="w-4 h-4 text-brand-indigo" />, desc: 'Secure live endpoint' }
  ];

  const taskList = [
    { id: 1, label: 'Initializing Antigravity Engine...', step: 1 },
    { id: 2, label: 'Orchestrating autonomous logic pipeline routes...', step: 1 },
    { id: 3, label: 'Connecting vector indices [Qdrant: production-customer-rag]...', step: 2 },
    { id: 4, label: 'Adapting local weights LLaMA-3.1-8B models...', step: 2 },
    { id: 5, label: 'Deploying dockerized container to Kubernetes cluster...', step: 3 },
    { id: 6, label: 'Verifying end-to-end telemetry (210ms target inference)...', step: 3 },
    { id: 7, label: 'Pipeline live. Secure endpoint: https://api.alphora.ai/v2/agent-pod', step: 4 }
  ];

  const logSteps = [
    '[SYSTEM] Bootstrapping Antigravity agent container environment...',
    '[SYSTEM] Vector DB authenticated. Loaded 45,000 document embeddings.',
    '[SYSTEM] LLaMA-3.1 local weights model adapter loaded in GPU memory (12.4GB).',
    '[SYSTEM] Generating container manifest for GCP cluster...',
    '[SYSTEM] Ingress gateway active. Connection verified.',
    '[SUCCESS] Antigravity Agentic Pipeline running in production!'
  ];

  const runSimulation = () => {
    setSimulationStep(1);
    setLogs([logSteps[0]]);
    if (intervalRef.current) clearInterval(intervalRef.current);

    let step = 1;
    intervalRef.current = setInterval(() => {
      if (step < 4) {
        step++;
        setSimulationStep(step);
        setLogs(prev => [...prev, logSteps[step - 1] || '']);
      } else {
        setSimulationStep(4);
        setLogs(prev => [...prev, logSteps[4], logSteps[5]]);
        clearInterval(intervalRef.current);
      }
    }, 1800);
  };

  // Listen to runTrigger prop changes from the parent to re-run
  useEffect(() => {
    if (runTrigger > 0) {
      runSimulation();
    }
  }, [runTrigger]);

  // Run automatically on first render
  useEffect(() => {
    runSimulation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full space-y-4">
      {/* Console Tab Selector */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex gap-1 bg-obsidian-dark/50 p-1 rounded-xl border border-white/5">
          {[
            { id: 'pipeline', label: 'Pipeline Editor', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'diffs', label: 'Code Diffs', icon: <Code className="w-3.5 h-3.5" /> },
            { id: 'logs', label: 'Task List & Logs', icon: <Terminal className="w-3.5 h-3.5" /> }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-indigo/15 border border-brand-indigo/30 text-white shadow-glow-indigo/5'
                    : 'text-slate-300 hover:text-white border border-transparent'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Simulator Status Indicator */}
        <div className="flex items-center gap-2">
          {simulationStep < 4 ? (
            <div className="flex items-center gap-1.5 text-[9px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
              <RefreshCw className="w-3 h-3 animate-spin" />
              EXECUTING
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <CheckCircle2 className="w-3 h-3" />
              DEPLOYED
            </div>
          )}
        </div>
      </div>

      {/* Main Console Box (Glassmorphic) */}
      <div className="backdrop-blur-md bg-obsidian-card/75 border border-brand-indigo/25 rounded-2xl p-6 min-h-[320px] shadow-glow-indigo/5 relative overflow-hidden flex flex-col justify-between">
        {/* Pulsing neon corner details */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />

        {/* Tab Content Display */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 'pipeline' && (
              <motion.div
                key="pipeline-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 w-full"
              >
                {pipelineSteps.map((node, idx) => {
                  const isNodeActive = simulationStep >= idx + 1;
                  const isCurrent = simulationStep === idx + 1;
                  return (
                    <React.Fragment key={node.name}>
                      {idx > 0 && (
                        <div className="flex flex-col items-center justify-center flex-1 relative min-w-[30px]">
                          {/* Glowing connector line */}
                          <div className="h-0.5 w-full bg-white/5 rounded relative overflow-hidden">
                            <motion.div
                              initial={{ left: '-100%' }}
                              animate={isNodeActive ? { left: '100%' } : { left: '-100%' }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col items-center gap-2 text-center relative">
                        <motion.div
                          animate={isCurrent ? { scale: [1, 1.08, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 relative border ${
                            isNodeActive
                              ? 'bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 border-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                              : 'bg-obsidian-dark border-white/5 text-slate-400'
                          }`}
                        >
                          {node.icon}
                          {isCurrent && (
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-cyan rounded-full animate-ping" />
                          )}
                        </motion.div>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${isNodeActive ? 'text-white' : 'text-slate-400'}`}>
                            {node.name}
                          </div>
                          <div className="text-[9px] text-slate-400 mt-0.5 max-w-[90px] mx-auto leading-tight">
                            {node.desc}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'diffs' && (
              <motion.div
                key="diffs-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono text-[11px] text-left p-4 bg-obsidian-dark/80 rounded-xl border border-white/5 overflow-x-auto leading-relaxed"
              >
                <div className="flex justify-between items-center text-[9px] text-slate-400 border-b border-white/5 pb-2 mb-3">
                  <span>pipeline-config.yaml</span>
                  <span className="text-cyan-400">YAML DIFF</span>
                </div>
                <div>
                  <span className="text-slate-400 select-none">1  </span>
                  <span className="text-slate-300">version: "2.0"</span>
                </div>
                <div>
                  <span className="text-slate-400 select-none">2  </span>
                  <span className="text-slate-300">pipeline:</span>
                </div>
                <div>
                  <span className="text-slate-400 select-none">3  </span>
                  <span className="text-slate-300">  name: "Customer support pipeline"</span>
                </div>
                <div className="bg-red-500/10 text-red-300 px-1 border-l-2 border-red-500">
                  <span className="text-slate-400 select-none">4 -</span>
                  <span>  orchestrator: "legacy_cron"</span>
                </div>
                <div className="bg-emerald-500/10 text-emerald-300 px-1 border-l-2 border-emerald-500 animate-pulse">
                  <span className="text-slate-400 select-none">5 +</span>
                  <span>  orchestrator: "antigravity_agent"</span>
                </div>
                <div className="bg-emerald-500/10 text-emerald-300 px-1 border-l-2 border-emerald-500">
                  <span className="text-slate-400 select-none">6 +</span>
                  <span>  concurrency_limit: 250</span>
                </div>
                <div>
                  <span className="text-slate-400 select-none">7  </span>
                  <span className="text-slate-300">  nodes:</span>
                </div>
                <div>
                  <span className="text-slate-400 select-none">8  </span>
                  <span className="text-slate-300">    - type: "qdrant_vector_store"</span>
                </div>
                <div className="bg-emerald-500/10 text-emerald-300 px-1 border-l-2 border-emerald-500">
                  <span className="text-slate-400 select-none">9 +</span>
                  <span>    - type: "llama_weights_inference"</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'logs' && (
              <motion.div
                key="logs-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 text-left"
              >
                {/* Visual Task Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-obsidian-dark/50 p-4 rounded-xl border border-white/5">
                  {taskList.map((task) => {
                    const isTaskDone = simulationStep > task.step;
                    const isTaskCurrent = simulationStep === task.step;
                    const isPending = simulationStep < task.step;

                    return (
                      <div key={task.id} className="flex items-center gap-2 text-[10px]">
                        {isTaskDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        ) : isTaskCurrent ? (
                          <span className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-full border border-white/15 flex-shrink-0" />
                        )}
                        <span className={`font-semibold ${isTaskDone ? 'text-slate-300 line-through font-normal' : isTaskCurrent ? 'text-white' : 'text-slate-450'}`}>
                          {task.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Real-time system logs console */}
                <div className="bg-black/80 rounded-xl p-4 border border-white/5 font-mono text-[10px] text-slate-350 h-28 overflow-y-auto space-y-1.5">
                  {logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-1">
                      <span className="text-slate-400 select-none">&gt;</span>
                      <span className={log.includes('[SUCCESS]') ? 'text-emerald-400 font-bold' : log.includes('[SYSTEM]') ? 'text-cyan-300' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                  {simulationStep < 4 && (
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-1.5 h-3 bg-cyan-400 inline-block"
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer controls inside console */}
        <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[9px] text-slate-400 font-mono">
          <div>ANTIGRAVITY PIPELINE RUNNER v2.0</div>
          <div>INFERENCE LATENCY: 210MS</div>
        </div>
      </div>
    </div>
  );
}
