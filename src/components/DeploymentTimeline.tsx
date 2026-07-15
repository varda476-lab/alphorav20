import React from 'react';
import { Check, Play, RefreshCw, Cpu, Activity, ShieldAlert, Award } from 'lucide-react';

interface Stage {
  name: string;
  status: 'completed' | 'current' | 'upcoming';
  desc: string;
}

export default function DeploymentTimeline() {
  const stages: Stage[] = [
    { name: 'Discovery', status: 'completed', desc: 'Define operations parameters, bottleneck models, and cost targets.' },
    { name: 'Research', status: 'completed', desc: 'Select baseline LLM models, test prompts, and select vector stores.' },
    { name: 'Architecture', status: 'completed', desc: 'Design microservices, database schemas, secure compliance limits, and endpoints.' },
    { name: 'Development', status: 'current', desc: 'Write code modules, set API gateways, and construct UI panels.' },
    { name: 'QA & Testing', status: 'upcoming', desc: 'Deploy automated test suites, scan security rules, and measure load constraints.' },
    { name: 'AI Training', status: 'upcoming', desc: 'Fine-tune models on local data stores, check adapters, and verify logic paths.' },
    { name: 'Cloud Deploy', status: 'upcoming', desc: 'Build container registries, orchestrate Kubernetes nodes, and direct traffic.' },
    { name: 'Monitoring', status: 'upcoming', desc: 'Trace tokens consumption rates, latency indices, and error frequency.' },
    { name: 'Optimization', status: 'upcoming', desc: 'Re-cache data queries, adjust neural weight mappings, and reduce computing loads.' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 justify-center">
        <Activity className="w-4 h-4 text-brand-purple" />
        LIFECYCLE PIPELINE Gateways
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 max-w-5xl mx-auto pl-6 md:pl-0 border-l md:border-l-0 md:border-t border-obsidian-border pt-0 md:pt-8">
        
        {stages.map((stage, idx) => {
          const isComp = stage.status === 'completed';
          const isCur = stage.status === 'current';

          return (
            <div key={idx} className="relative flex-1 group w-full text-left md:text-center">
              
              {/* Dot indicator */}
              <div className="absolute left-[-31px] md:left-1/2 top-1 md:top-[-41px] translate-y-0 md:-translate-x-1/2 flex items-center justify-center z-10">
                {isComp ? (
                  <div className="w-6 h-6 rounded-full bg-brand-success/20 border border-brand-success text-brand-success flex items-center justify-center text-[10px] font-bold">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                ) : isCur ? (
                  <div className="w-6 h-6 rounded-full bg-brand-indigo/20 border border-brand-indigo text-brand-indigo flex items-center justify-center text-[10px] font-bold animate-pulse">
                    <Play className="w-2.5 h-2.5" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-obsidian-card border border-obsidian-border text-slate-400 flex items-center justify-center text-[10px] font-mono">
                    {idx + 1}
                  </div>
                )}
              </div>

              {/* Text metadata */}
              <div className="space-y-1 pr-4">
                <h4 className={`text-sm font-bold ${
                  isComp ? 'text-brand-success' : isCur ? 'text-brand-indigo' : 'text-slate-300'
                }`}>
                  {stage.name}
                </h4>
                <p className="text-[10px] text-slate-200 leading-relaxed max-w-xs md:mx-auto">
                  {stage.desc}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
