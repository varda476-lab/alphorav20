import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const posts = [
    {
      title: 'Fine-Tuning LLaMA-3.1-70B for Autonomous Operations: Our Findings',
      excerpt: 'How we achieved a 94.6% task completion rate on customer ticket parsing by training custom adapter weights, avoiding expensive API latency boundaries.',
      date: 'July 2, 2026',
      author: 'AI Research Lab',
      category: 'Research'
    },
    {
      title: 'Scaling Vector Databases: Pinecone vs Qdrant in Production Pipelines',
      excerpt: 'An engineering review on vector lookup latency, memory retention, and backup costs when operating multi-million document RAG architectures.',
      date: 'June 25, 2026',
      author: 'Cloud Engineering',
      category: 'Infrastructure'
    },
    {
      title: 'Securing Financial AI Agent Endpoints with Zero-Trust JWT Filters',
      excerpt: 'A blueprint on isolating webhook callbacks and setting secure IAM configurations on AWS Lambda to ensure HIPAA and SOC 2 readiness.',
      date: 'June 18, 2026',
      author: 'Cyber Security',
      category: 'Security'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-dark text-white flex flex-col pt-20">
      <Navbar />
      <div className="relative flex-grow">
        
        <div className="aurora-bg">
          <div className="aurora-glow-indigo" style={{ top: '20%', left: '5%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              ALPHORA BLOG
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">
              Engineering <span className="text-gradient-purple-cyan">Insights</span> & Updates
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              We publish detailed design reviews, benchmark scores, and white papers from our research labs and cloud engineering operations.
            </p>
          </div>

          {/* Posts list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-6 border-obsidian-border space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/35 font-semibold rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-white leading-snug hover:text-brand-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-obsidian-border flex items-center justify-between text-xs">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-purple" /> {post.author}
                  </span>
                  <Link to="/contact" className="text-brand-cyan font-bold hover:underline flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
