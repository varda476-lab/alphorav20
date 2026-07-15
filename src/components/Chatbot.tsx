import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  cta?: { text: string; link: string };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Welcome to Alphora. I'm your digital operations advisor. How can I help optimize your business today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presets = [
    { label: "What does Alphora do?", query: "Tell me about Alphora's core engineering services." },
    { label: "Calculate AI ROI", query: "Show me the ROI of hiring an AI employee.", link: "/calculator" },
    { label: "Deploy an AI Agent", query: "How do I deploy an agent from the marketplace?", link: "/marketplace" },
    { label: "Contact Engineering", query: "I want to schedule a technical architecture session.", link: "/contact" }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let replyText = "I've received your query. Our AI engineers are ready to build a customized pipeline. Can you tell me more about your system architecture?";
      let cta: { text: string; link: string } | undefined;

      const lowerText = text.toLowerCase();
      if (lowerText.includes('roi') || lowerText.includes('calculate')) {
        replyText = "We build AI Employees that reduce operational support and sales outreach costs by 60%+. You can run your numbers in our live ROI center.";
        cta = { text: "Open ROI Calculator", link: "/calculator" };
      } else if (lowerText.includes('marketplace') || lowerText.includes('deploy')) {
        replyText = "You can browse and test 9 standalone AI Agents (Sales, Receptionist, Recruiter, legal, etc.) in our Marketplace, which are deployable as subscription SaaS.";
        cta = { text: "Go to Marketplace", link: "/marketplace" };
      } else if (lowerText.includes('alphora') || lowerText.includes('service') || lowerText.includes('what do')) {
        replyText = "Alphora is a full-stack AI and software product engineering platform. We build custom applications, SaaS products, cloud networks, mobile systems, and intelligent digital agents.";
        cta = { text: "Explore Services", link: "/services" };
      } else if (lowerText.includes('architecture') || lowerText.includes('build')) {
        replyText = "We support interactive drag-and-drop system blueprints! You can assemble and test pipeline configurations in our Architecture Builder.";
        cta = { text: "Open Architecture Builder", link: "/architecture" };
      } else if (lowerText.includes('contact') || lowerText.includes('strategy') || lowerText.includes('schedule')) {
        replyText = "Let's align your technology vision. You can book an architecture audit with our principal AI engineers right away.";
        cta = { text: "Book Strategy Call", link: "/contact" };
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text: replyText,
          timestamp: new Date(),
          cta
        }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:shadow-glow-indigo border border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[380px] h-[500px] bg-obsidian-card border border-obsidian-border rounded-2xl flex flex-col overflow-hidden shadow-2xl z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-indigo/20 to-brand-purple/20 px-4 py-3 border-b border-obsidian-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-brand-cyan" />
                <div>
                  <div className="text-sm font-semibold text-white">Alphora Advisor</div>
                  <div className="text-[10px] text-brand-cyan flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 animate-spin" /> Autonomous Agent Active
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-brand-indigo" />
                    </div>
                  )}
                  <div className={`max-w-[75%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-brand-indigo text-white rounded-br-none' 
                      : 'bg-obsidian-dark border border-obsidian-border text-gray-300 rounded-bl-none'
                  }`}>
                    {msg.text}
                    
                    {msg.cta && (
                      <div className="mt-3">
                        <Link 
                          to={msg.cta.link} 
                          className="inline-block text-xs font-semibold px-3 py-1.5 bg-brand-cyan/20 hover:bg-brand-cyan/30 text-brand-cyan border border-brand-cyan/35 rounded-lg transition-colors cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          {msg.cta.text}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-7 h-7 rounded-full bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-brand-indigo" />
                  </div>
                  <div className="bg-obsidian-dark border border-obsidian-border p-3 rounded-xl rounded-bl-none max-w-[75%]">
                    <div className="flex gap-1.5 items-center py-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Presets List */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-obsidian-border bg-obsidian-dark/40">
                <div className="text-[10px] font-semibold text-gray-400 mb-1.5">QUICK INQUIRY PROMPTS:</div>
                <div className="flex flex-wrap gap-1.5">
                  {presets.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(preset.query)}
                      className="text-xs px-2.5 py-1 bg-obsidian-dark hover:bg-brand-indigo/10 text-gray-300 hover:text-white border border-obsidian-border rounded-lg transition-colors cursor-pointer text-left"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-3 border-t border-obsidian-border bg-obsidian-dark flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                placeholder="Ask a question..."
                className="flex-1 bg-obsidian-card border border-obsidian-border rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-indigo/60"
              />
              <button
                onClick={() => handleSend(inputValue)}
                className="p-2 bg-brand-indigo hover:bg-brand-indigo/80 text-white rounded-xl transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
