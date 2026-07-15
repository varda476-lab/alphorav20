import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Mic, FileText, Image, UserCheck, TrendingUp, 
  Mail, Globe, Search, FileSymlink, Sparkles, Send, Play, RefreshCw, CheckCircle2 
} from 'lucide-react';

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState('chat');
  
  // 1. AI Chat States
  const [chatInput, setChatInput] = useState('');
  const [chatLogs, setChatLogs] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'LLaMA-3.1-70B model active. Ask about our founder Khushboo Mishra, cost savings, or pricing.' }
  ]);
  const [isChatTyping, setIsChatTyping] = useState(false);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const query = chatInput;
    setChatLogs(prev => [...prev, { sender: 'user', text: query }]);
    setChatInput('');
    setIsChatTyping(true);

    setTimeout(() => {
      let response = `Completed inference for your query: "${query}". Our custom LLaMA adapter is ready to map this into your operational workflow.`;
      const lower = query.toLowerCase();
      
      if (lower.includes('founder') || lower.includes('khushboo') || lower.includes('mishra') || lower.includes('owner')) {
        response = "Alphora was founded by Khushboo Mishra, a Principal AI Architect. Her goal is to pivot traditional IT services towards high-value AI product engineering and automated digital businesses.";
      } else if (lower.includes('saving') || lower.includes('cost') || lower.includes('roi')) {
        response = "We build AI Employees and call center systems that reduce operational support and sales outreach expenses by 60%+. You can verify these calculations in our ROI center.";
      } else if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost to hire')) {
        response = "Our SaaS licensing starts at $290/mo. Custom AI solutions (including fine-tuned weights and RAG setup) are milestone-based, while Enterprise secure nodes are quoted annually.";
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        response = "Hello! I am the LLaMA-3.1-70B model sandbox. Ask me about our core services, developer tools, or founder Khushboo Mishra.";
      }

      setChatLogs(prev => [...prev, { sender: 'bot', text: response }]);
      setIsChatTyping(false);
    }, 1000);
  };

  // 2. Voice AI States
  const [voicePreset, setVoicePreset] = useState('support');
  const [voiceLog, setVoiceLog] = useState<string[]>([]);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const triggerVoiceSynthesis = () => {
    setIsPlayingVoice(true);
    setVoiceLog(['[0:00] Synthesis initialized...', '[0:02] Loading speech weights...']);
    setTimeout(() => {
      const text = voicePreset === 'support' 
        ? '"Hello, I am the automated customer service agent. How may I route your query today?"'
        : '"Hello, following up on your lead submission. Our agent is ready to schedule a call."';
      setVoiceLog(prev => [...prev, `[0:04] Synthesis completed: ${text}`]);
      setIsPlayingVoice(false);
    }, 2000);
  };

  // 3. OCR / Vision States
  const [ocrScanning, setOcrScanning] = useState(false);
  const [ocrData, setOcrData] = useState<any>(null);

  const triggerOcrScan = () => {
    setOcrScanning(true);
    setOcrData(null);
    setTimeout(() => {
      setOcrData({
        invoice_id: 'AL-9428',
        vendor: 'Alphora Inc',
        subtotal: '$1,400.00',
        tax_compliance: 'SOC 2 verified (9.0%)',
        grand_total: '$1,526.00'
      });
      setOcrScanning(false);
    }, 2000);
  };

  // 4. Resume Ranker States
  const [selectedRole, setSelectedRole] = useState('React Engineer');
  const [selectedProfile, setSelectedProfile] = useState('candidateA');
  const [rankResult, setRankResult] = useState<any>(null);
  const [rankingInProgress, setRankingInProgress] = useState(false);

  const runRanking = () => {
    setRankingInProgress(true);
    setRankResult(null);
    setTimeout(() => {
      let score = 50;
      let skillsMatched: string[] = [];
      
      if (selectedRole === 'React Engineer') {
        if (selectedProfile === 'candidateA') {
          score = 92;
          skillsMatched = ['React', 'TypeScript', 'Redux', 'Tailwind CSS'];
        } else {
          score = 64;
          skillsMatched = ['JavaScript', 'HTML/CSS'];
        }
      } else {
        if (selectedProfile === 'candidateA') {
          score = 60;
          skillsMatched = ['TypeScript'];
        } else {
          score = 95;
          skillsMatched = ['Python', 'LLaMA', 'PyTorch', 'Vector Databases'];
        }
      }

      setRankResult({
        matchPercentage: score,
        skillsMatched,
        recommendation: score >= 90 ? 'FAST-TRACK TO AUDIT CALL' : 'REJECT / KEEP IN DEPOSIT'
      });
      setRankingInProgress(false);
    }, 1500);
  };

  // 5. Lead Predictor States
  const [leadBudget, setLeadBudget] = useState(50);
  const [leadEngage, setLeadEngage] = useState(70);

  const leadScore = Math.min(100, Math.floor((leadBudget * 0.2) + (leadEngage * 0.6)));

  // 6. Email Generator States
  const [companyName, setCompanyName] = useState('Acme Corp');
  const [productCategory, setProductCategory] = useState('AI Employee');
  const [generatedEmail, setGeneratedEmail] = useState('');

  const generateEmail = () => {
    setGeneratedEmail(
      `Subject: Automate ${companyName} operations with our ${productCategory}\n\n` +
      `Hi,\n\n` +
      `I noticed your organization is managing manual client workflows. We engineered an custom ${productCategory} that automates operations, reducing support fees by up to 60%.\n\n` +
      `Let's schedule a brief strategy call next Tuesday.\n\n` +
      `Best regards,\n` +
      `Alphora Outbound Agent`
    );
  };

  // 7. Translation States
  const [translateLang, setTranslateLang] = useState('Spanish');
  const [translatedText, setTranslatedText] = useState('');

  const runTranslation = () => {
    const text = 'Hello, how can I help automate your workflow today?';
    if (translateLang === 'Spanish') {
      setTranslatedText('Hola, ¿cómo puedo ayudar a automatizar su flujo de trabajo hoy?');
    } else if (translateLang === 'German') {
      setTranslatedText('Hallo, wie kann ich Ihnen heute helfen, Ihren Arbeitsablauf zu automatisieren?');
    } else if (translateLang === 'French') {
      setTranslatedText('Bonjour, comment puis-je vous aider à automatiser votre flux de travail aujourd\'hui?');
    } else if (translateLang === 'Hindi') {
      setTranslatedText('नमस्ते, आज मैं आपके वर्कफ़्लो को स्वचालित करने में कैसे मदद कर सकता हूँ?');
    } else {
      setTranslatedText('こんにちは、今日はワークフローの自動化をどのように支援できますか？');
    }
  };

  // 8. RAG Search States
  const [searchQuery, setSearchQuery] = useState('SLA');
  const [ragResult, setRagResult] = useState<any>(null);

  const runRagSearch = () => {
    const q = searchQuery.toLowerCase();
    let match = 'No vector matches found in compliance collections.';
    let score = 0;
    
    if (q.includes('sla') || q.includes('uptime')) {
      match = '"Alphora SLAs commit to a 99.99% uptime goal for dedicated clusters, backed by proportional service credit recovery policies."';
      score = 99.4;
    } else if (q.includes('pricing') || q.includes('cost')) {
      match = '"Standard subscription SaaS licensing starts at $290/mo for CRM pipelines. Custom LLM setups are milestone-based."';
      score = 95.8;
    } else if (q.includes('founder') || q.includes('khushboo')) {
      match = '"Alphora was founded by Khushboo Mishra, Principal AI Architect, to pivot corporate solutions towards AI-native products."';
      score = 98.1;
    }

    setRagResult({ match, score });
  };

  // 9. PDF Chat States
  const [selectedPdf, setSelectedPdf] = useState('SLA.pdf');
  const [pdfQuery, setPdfQuery] = useState('What is the uptime goal?');
  const [pdfReply, setPdfReply] = useState('');

  const runPdfChat = () => {
    if (selectedPdf === 'SLA.pdf') {
      setPdfReply('According to Alphora Security SLA.pdf: The uptime goal is 99.99% with active monitoring clusters.');
    } else {
      setPdfReply('According to Workforce Report.pdf: Moving support workloads to AI employees cuts admin overheads by 60%.');
    }
  };

  // 10. Image Analysis States
  const [selectedImg, setSelectedImg] = useState('belt');
  const [visionBoxes, setVisionBoxes] = useState<any[]>([]);

  const runVisionAnalysis = () => {
    if (selectedImg === 'belt') {
      setVisionBoxes([
        { label: 'Defect: cracked belt', x: '12%', y: '10%', w: '120px', h: '60px', score: '99.8%' }
      ]);
    } else {
      setVisionBoxes([
        { label: 'Container node: active', x: '45%', y: '20%', w: '90px', h: '80px', score: '98.5%' }
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '20%' }} />
          <div className="aurora-glow-purple" style={{ bottom: '10%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
              INTERACTIVE DEMO WORKSPACE
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              AI Playground Sandbox
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Test all our AI tools live! Interact with LLaMA chat engines, speech compilation boards, OCR image scanners, RAG databases, and lead converters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Sidebar selector */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-obsidian-border pr-0 lg:pr-4">
              {[
                { id: 'chat', label: 'AI Chat', icon: <MessageSquare className="w-4 h-4" /> },
                { id: 'voice', label: 'Voice AI', icon: <Mic className="w-4 h-4" /> },
                { id: 'ocr', label: 'OCR / Vision', icon: <FileText className="w-4 h-4" /> },
                { id: 'image', label: 'Image Analysis', icon: <Image className="w-4 h-4" /> },
                { id: 'resume', label: 'Resume Ranker', icon: <UserCheck className="w-4 h-4" /> },
                { id: 'lead', label: 'Lead Predictor', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'email', label: 'Email Generator', icon: <Mail className="w-4 h-4" /> },
                { id: 'trans', label: 'Translation', icon: <Globe className="w-4 h-4" /> },
                { id: 'rag', label: 'RAG Search', icon: <Search className="w-4 h-4" /> },
                { id: 'pdf', label: 'PDF Chat', icon: <FileSymlink className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap lg:whitespace-normal w-full ${
                    activeTab === tab.id 
                      ? 'bg-brand-indigo/15 text-white border border-brand-indigo/40 shadow-glow-indigo' 
                      : 'text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Playground Panel */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-8 border-obsidian-border min-h-[400px] flex flex-col justify-between"
                >
                  {/* 1. Chat tab */}
                  {activeTab === 'chat' && (
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3 flex-grow overflow-y-auto max-h-60 p-4 bg-obsidian-dark rounded-xl border border-obsidian-border">
                        {chatLogs.map((log, idx) => (
                          <div key={idx} className={`flex gap-2.5 text-xs ${log.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-2.5 rounded-xl max-w-[80%] text-left ${log.sender === 'user' ? 'bg-brand-indigo text-white' : 'bg-white/5 border border-white/10 text-gray-300'}`}>
                              {log.text}
                            </div>
                          </div>
                        ))}
                        {isChatTyping && (
                          <div className="flex gap-2 justify-start text-xs">
                            <div className="bg-white/5 p-2 rounded-xl text-gray-500 animate-pulse">LLaMA is thinking...</div>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
                          placeholder="Ask LLaMA-3.1 something (e.g. founder, cost savings)..."
                          className="flex-1 bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-indigo/60"
                        />
                        <button onClick={handleChatSend} className="p-2.5 bg-brand-indigo rounded-lg text-white text-xs cursor-pointer hover:bg-brand-indigo/85">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 2. Voice AI Tab */}
                  {activeTab === 'voice' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <Mic className="w-5 h-5 text-brand-purple" /> Voice Synthesis Simulator
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Configure your speech template output path.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs text-gray-300 block font-semibold">Select Call Template</label>
                          <select 
                            value={voicePreset}
                            onChange={(e) => setVoicePreset(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                          >
                            <option value="support">Customer Support Greetings</option>
                            <option value="outbound">Outbound Sales Lead follow-up</option>
                          </select>
                        </div>
                        <button 
                          onClick={triggerVoiceSynthesis}
                          disabled={isPlayingVoice}
                          className="w-full btn-premium-purple py-2.5 text-xs cursor-pointer flex items-center justify-center gap-2 self-end disabled:opacity-50"
                        >
                          {isPlayingVoice ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                          Trigger Speech Compiler
                        </button>
                      </div>

                      <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl font-mono text-[10px] space-y-1">
                        <div className="text-gray-500">// Compilation log output:</div>
                        {voiceLog.map((log, idx) => (
                          <div key={idx} className="text-brand-cyan">{log}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3. OCR / Vision Tab */}
                  {activeTab === 'ocr' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <FileText className="w-5 h-5 text-brand-cyan" /> OCR Document Parser
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Scan unstructured invoice files to retrieve compliant metadata.</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <button 
                          onClick={triggerOcrScan}
                          disabled={ocrScanning}
                          className="btn-premium-cyan py-2 text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          {ocrScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Scan Sample Invoice'}
                        </button>
                        {ocrScanning && <span className="text-xs text-brand-cyan animate-pulse">Running OCR layout parser...</span>}
                      </div>

                      {ocrData ? (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="grid grid-cols-2 gap-4 p-5 bg-obsidian-dark border border-obsidian-border rounded-xl text-xs font-mono"
                        >
                          <div>
                            <span className="text-gray-500">INVOICE ID:</span>
                            <div className="text-white font-bold">{ocrData.invoice_id}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">VENDOR:</span>
                            <div className="text-white font-bold">{ocrData.vendor}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">SUBTOTAL:</span>
                            <div className="text-brand-cyan font-bold">{ocrData.subtotal}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">TAX COMPLIANCE:</span>
                            <div className="text-brand-purple font-bold">{ocrData.tax_compliance}</div>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="p-8 border-2 border-dashed border-obsidian-border rounded-xl text-center text-xs text-gray-500">
                          Click "Scan Sample Invoice" to generate parsed compliance output.
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. Image Analysis */}
                  {activeTab === 'image' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <Image className="w-5 h-5 text-brand-success" /> Computer Vision Bounding Boxes
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Isolate defects or tag hardware elements dynamically.</p>
                      </div>

                      <div className="flex gap-4">
                        <select 
                          value={selectedImg}
                          onChange={(e) => {
                            setSelectedImg(e.target.value);
                            setVisionBoxes([]);
                          }}
                          className="px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                        >
                          <option value="belt">Production Belt (cracked detection)</option>
                          <option value="rack">Server Rack (status inspection)</option>
                        </select>
                        <button 
                          onClick={runVisionAnalysis}
                          className="btn-premium-indigo py-2 text-xs cursor-pointer"
                        >
                          Run Object Detection
                        </button>
                      </div>

                      <div className="h-48 bg-obsidian-dark border border-obsidian-border rounded-xl flex items-center justify-center relative overflow-hidden">
                        {visionBoxes.map((box, i) => (
                          <div 
                            key={i} 
                            style={{ left: box.x, top: box.y, width: box.w, height: box.h }}
                            className="absolute border border-red-500 bg-red-500/10 rounded flex flex-col justify-between p-1.5 font-mono text-[8px] text-left"
                          >
                            <span className="text-red-400 font-bold uppercase">{box.label}</span>
                            <span className="text-gray-400">{box.score}</span>
                          </div>
                        ))}
                        <span className="text-xs text-gray-500 font-mono">
                          Image: {selectedImg === 'belt' ? 'production_conveyor_04.jpg' : 'server_datacenter_01.jpg'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 5. Resume Ranker */}
                  {activeTab === 'resume' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <UserCheck className="w-5 h-5 text-brand-purple" /> Recruitment Parser Score
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Cross-check job skill requirements against candidate vectors.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs text-gray-300 block font-semibold">Select Job Role</label>
                          <select 
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                          >
                            <option>React Engineer</option>
                            <option>AI Solutions Architect</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs text-gray-300 block font-semibold">Select Candidate Template</label>
                          <select 
                            value={selectedProfile}
                            onChange={(e) => setSelectedProfile(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                          >
                            <option value="candidateA">Candidate A (Frontend experience)</option>
                            <option value="candidateB">Candidate B (AI/LLM background)</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        onClick={runRanking}
                        disabled={rankingInProgress}
                        className="w-full btn-premium-indigo py-2 text-xs cursor-pointer disabled:opacity-50"
                      >
                        {rankingInProgress ? 'Computing match vectors...' : 'Run Match evaluation'}
                      </button>

                      {rankResult && (
                        <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-white">RECRUITMENT SCORE:</span>
                            <span className="text-brand-success font-bold font-mono text-base">{rankResult.matchPercentage}%</span>
                          </div>
                          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-success h-full" style={{ width: `${rankResult.matchPercentage}%` }} />
                          </div>
                          <div className="text-[10px] text-gray-400">
                            <strong>Skills Matched:</strong> {rankResult.skillsMatched.join(', ')}
                          </div>
                          <div className="text-[10px] font-bold text-brand-cyan">
                            ACTION: {rankResult.recommendation}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 6. Lead Predictor */}
                  {activeTab === 'lead' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <TrendingUp className="w-5 h-5 text-brand-cyan" /> Sales Conversion Probability
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Adjust sliders to calculate lead closing percentages.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between text-gray-400">
                            <span>Client Budget ($k)</span>
                            <span className="text-white font-bold">{leadBudget}k</span>
                          </div>
                          <input 
                            type="range" min="10" max="200" value={leadBudget}
                            onChange={(e) => setLeadBudget(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                          />
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between text-gray-400">
                            <span>Engagement Score (interactions count)</span>
                            <span className="text-white font-bold">{leadEngage}%</span>
                          </div>
                          <input 
                            type="range" min="10" max="100" value={leadEngage}
                            onChange={(e) => setLeadEngage(Number(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                          />
                        </div>

                        <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-gray-500 block">CLOSING PROBABILITY:</span>
                            <span className="text-xs text-brand-success font-semibold">
                              {leadScore >= 75 ? 'HIGH-PRIORITY LEAD' : leadScore >= 45 ? 'MID-PRIORITY NURTURE' : 'LOW CONVERSION CHANCE'}
                            </span>
                          </div>
                          <span className="text-2xl font-extrabold font-mono text-brand-cyan">
                            {leadScore}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 7. Email Generator */}
                  {activeTab === 'email' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <Mail className="w-5 h-5 text-brand-purple" /> Sales Outreach Email Generator
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Auto-compile personalized follow-up pitches.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs text-gray-300 font-semibold">Target Company Name</label>
                          <input 
                            type="text" value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-indigo/60"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs text-gray-300 font-semibold">AI Product Category</label>
                          <select 
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs text-white focus:outline-none"
                          >
                            <option>AI Employee</option>
                            <option>AI Call Center</option>
                            <option>RAG Search Engine</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        onClick={generateEmail}
                        className="w-full btn-premium-indigo py-2 text-xs cursor-pointer"
                      >
                        Generate Draft
                      </button>

                      {generatedEmail && (
                        <pre className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl text-[10px] text-gray-300 font-sans whitespace-pre-wrap leading-relaxed text-left border-l-2 border-brand-indigo">
                          {generatedEmail}
                        </pre>
                      )}
                    </div>
                  )}

                  {/* 8. Translation */}
                  {activeTab === 'trans' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <Globe className="w-5 h-5 text-brand-success" /> Multi-lingual Translator
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Translate outbound dialog text arrays.</p>
                      </div>

                      <div className="p-3 bg-obsidian-dark border border-obsidian-border rounded-xl text-xs text-gray-400 font-mono">
                        Source Text: "Hello, how can I help automate your workflow today?"
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                        <div className="space-y-1.5">
                          <label className="text-xs text-gray-300 font-semibold">Translate to</label>
                          <select 
                            value={translateLang}
                            onChange={(e) => setTranslateLang(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                          >
                            <option>Spanish</option>
                            <option>German</option>
                            <option>French</option>
                            <option>Hindi</option>
                            <option>Japanese</option>
                          </select>
                        </div>
                        <button 
                          onClick={runTranslation}
                          className="w-full btn-premium-indigo py-2.5 text-xs cursor-pointer"
                        >
                          Translate Phrase
                        </button>
                      </div>

                      {translatedText && (
                        <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl text-xs font-semibold text-brand-cyan text-left">
                          {translatedText}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 9. RAG Search */}
                  {activeTab === 'rag' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <Search className="w-5 h-5 text-brand-cyan" /> Vector Database RAG Retrieval
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Query semantic vector databases indexes. Try searching: SLA, pricing, founder.</p>
                      </div>

                      <div className="flex gap-2">
                        <input 
                          type="text" value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search keyword (SLA, pricing, founder)..."
                          className="flex-1 bg-obsidian-dark border border-obsidian-border rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                        />
                        <button 
                          onClick={runRagSearch}
                          className="px-4 py-2 bg-brand-cyan/20 border border-brand-cyan text-brand-cyan text-xs font-bold rounded-lg cursor-pointer"
                        >
                          Query Vector
                        </button>
                      </div>

                      {ragResult ? (
                        <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl space-y-2 text-xs">
                          <div className="flex justify-between items-center text-gray-500">
                            <span>MATCH FOUND:</span>
                            <span className="text-brand-success font-bold font-mono">{ragResult.score}% Cosine Similarity</span>
                          </div>
                          <p className="text-brand-cyan font-mono leading-relaxed">{ragResult.match}</p>
                        </div>
                      ) : (
                        <div className="p-8 border-2 border-dashed border-obsidian-border rounded-xl text-center text-xs text-gray-500">
                          Search "SLA" or "founder" to query mock databases.
                        </div>
                      )}
                    </div>
                  )}

                  {/* 10. PDF Chat */}
                  {activeTab === 'pdf' && (
                    <div className="space-y-6 text-left">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                          <FileSymlink className="w-5 h-5 text-brand-purple" /> PDF Context Reader
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Select a mock document context and verify answers.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs text-gray-300 block font-semibold">Select PDF Document</label>
                          <select 
                            value={selectedPdf}
                            onChange={(e) => {
                              setSelectedPdf(e.target.value);
                              setPdfReply('');
                            }}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                          >
                            <option value="SLA.pdf">Alphora Security SLA.pdf</option>
                            <option value="Report.pdf">Workforce Operations report.pdf</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-gray-300 block font-semibold">Preset Question</label>
                          <select 
                            value={pdfQuery}
                            onChange={(e) => setPdfQuery(e.target.value)}
                            className="w-full px-3 py-2 bg-obsidian-dark border border-obsidian-border rounded-lg text-xs focus:outline-none"
                          >
                            <option>What is the uptime goal?</option>
                            <option>What is the operational cost saved?</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        onClick={runPdfChat}
                        className="w-full btn-premium-indigo py-2 text-xs cursor-pointer"
                      >
                        Query Document
                      </button>

                      {pdfReply && (
                        <div className="p-4 bg-obsidian-dark border border-obsidian-border rounded-xl text-xs text-brand-cyan leading-relaxed text-left border-l-2 border-brand-purple">
                          {pdfReply}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer tag info */}
                  <div className="pt-6 mt-6 border-t border-obsidian-border text-[10px] text-gray-500 font-mono text-center flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-cyan animate-spin" /> API sandbox-v2.api.alphora.ai connected.
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}
