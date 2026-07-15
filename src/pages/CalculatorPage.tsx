import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { Server, TrendingUp, Calendar, ShieldCheck, Leaf } from 'lucide-react';

export default function CalculatorPage() {
  const [teamSize, setTeamSize] = useState(50);
  const [salary, setSalary] = useState(60000);
  const [aiAgents, setAiAgents] = useState(18);
  const [tabIndex, setTabIndex] = useState<'monthly' | 'quarterly' | 'annual'>('annual');

  // Math models
  const currentCost = teamSize * salary;
  const shiftedWorkforceCost = (aiAgents * salary); // Operational workforce cost shifted to AI
  const aiLicenseFee = aiAgents * 490 * 12; // $490/agent/month
  const annualSavings = Math.max(0, shiftedWorkforceCost - aiLicenseFee);
  
  // Breakeven timeline calculation
  const monthsToBreakeven = annualSavings > 0 
    ? Math.max(1, Math.min(12, Math.round((aiLicenseFee / shiftedWorkforceCost) * 12)))
    : 12;
  
  // Carbon savings: 0.12 Metric tons saved per shifted digital desk infrastructure
  const carbonSaved = (aiAgents * 0.12).toFixed(2);

  const getBreakdownVal = (val: number) => {
    if (tabIndex === 'monthly') return Math.round(val / 12);
    if (tabIndex === 'quarterly') return Math.round(val / 4);
    return val;
  };

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '15%' }} />
          <div className="aurora-glow-cyan" style={{ bottom: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              ROI SAVINGS ESTIMATOR
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              AI Cost & Savings Calculator
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Verify potential operational cost shifts when moving manual backend, sales outreach, or customer support tasks to autonomous AI Employee agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            
            {/* Left: Input sliders */}
            <div className="lg:col-span-2 glass-card p-8 border-obsidian-border space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-6 font-display">Workforce Variables</h3>
                
                <div className="space-y-6">
                  
                  {/* Team size slider */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Current Operations Team Size</span>
                      <span className="text-white font-bold">{teamSize} Employees</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="300" 
                      value={teamSize}
                      onChange={(e) => {
                        const nextSize = Number(e.target.value);
                        setTeamSize(nextSize);
                        if (aiAgents > nextSize) setAiAgents(nextSize - 2);
                      }}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                  </div>

                  {/* Salary slider */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Average Annual Salary</span>
                      <span className="text-white font-bold">${salary.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="20000" 
                      max="150000" 
                      step="5000"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                  </div>

                  {/* AI Employees slider */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Workloads to Shift (AI Agents Needed)</span>
                      <span className="text-white font-bold">{aiAgents} Agents</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max={Math.max(2, teamSize - 2)} 
                      value={aiAgents}
                      onChange={(e) => setAiAgents(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                  </div>

                </div>
              </div>

              {/* Stack information footnote */}
              <div className="pt-6 border-t border-obsidian-border text-[10px] text-gray-500 font-mono">
                * License rates calculated on standard base rate of $490/agent/mo.
              </div>
            </div>

            {/* Right: Calculations outputs */}
            <div className="lg:col-span-3 glass-card p-8 border-obsidian-border flex flex-col justify-between space-y-6">
              
              {/* Output statistics */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                
                <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-1">
                  <span className="text-[9px] text-gray-400 font-bold uppercase font-mono block">NET SAVINGS</span>
                  <span className="text-xl font-extrabold text-brand-success font-mono">
                    ${annualSavings.toLocaleString()}
                  </span>
                  <span className="text-[8px] text-gray-500 block">Saved per year</span>
                </div>

                <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-1">
                  <span className="text-[9px] text-gray-400 font-bold uppercase font-mono block">BREAK-EVEN</span>
                  <span className="text-xl font-extrabold text-brand-cyan font-mono">
                    {monthsToBreakeven} Months
                  </span>
                  <span className="text-[8px] text-gray-500 block">ROI Timeline</span>
                </div>

                <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-1">
                  <span className="text-[9px] text-gray-400 font-bold uppercase font-mono block">AI LICENSING COST</span>
                  <span className="text-xl font-extrabold text-white font-mono">
                    ${aiLicenseFee.toLocaleString()}
                  </span>
                  <span className="text-[8px] text-gray-500 block">Yearly support fees</span>
                </div>

                <div className="bg-obsidian-dark border border-obsidian-border p-4 rounded-xl space-y-1">
                  <span className="text-[9px] text-gray-400 font-bold uppercase font-mono block">CARBON OFFSET</span>
                  <span className="text-xl font-extrabold text-brand-success font-mono flex items-center gap-1">
                    {carbonSaved}t <Leaf className="w-4 h-4" />
                  </span>
                  <span className="text-[8px] text-gray-500 block">Metric tons CO2</span>
                </div>

              </div>

              {/* Table breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-display">Savings Breakdown Table</span>
                  
                  {/* Period switcher */}
                  <div className="flex bg-obsidian-dark border border-obsidian-border p-0.5 rounded-lg text-[9px] font-mono font-bold">
                    {['monthly', 'quarterly', 'annual'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setTabIndex(tab as any)}
                        className={`px-2 py-1 rounded cursor-pointer uppercase ${
                          tabIndex === tab ? 'bg-brand-indigo text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Data values */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Shifted Operations Workforce Cost</span>
                    <span className="text-white font-mono font-bold">${getBreakdownVal(shiftedWorkforceCost).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Alphora AI Software Licensing Cost</span>
                    <span className="text-brand-purple font-mono font-bold">-${getBreakdownVal(aiLicenseFee).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-obsidian-border font-bold text-sm">
                    <span className="text-brand-cyan">Net Operational Savings</span>
                    <span className="text-brand-success font-mono">${getBreakdownVal(annualSavings).toLocaleString()}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
