import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../../services/geminiService';
import { ChatMessage } from '../../types';
import { Chat } from '@google/genai';
import { SYSTEM_INSTRUCTION } from '../../constantsAr';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: "مرحباً! أنا مساعد أليكس الذكي. اسألني أي شيء عن مشاريعه أو مهاراته أو خبرته!",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Keep chat session ref to persist conversation context
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    // Initialize session only once
    if (!chatSessionRef.current) {
      chatSessionRef.current = createChatSession(SYSTEM_INSTRUCTION);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div dir="rtl">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 p-4 rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-all z-50 ${isOpen ? 'hidden' : 'flex'} items-center gap-2 group`}
      >
        <Sparkles size={24} className="animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
          اسأل الذكاء الاصطناعي عن أليكس
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 left-6 w-full max-w-[380px] bg-dark-card border border-dark-border rounded-2xl shadow-2xl z-50 transform transition-all duration-300 origin-bottom-left ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-border bg-dark-bg/50 rounded-t-2xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-500/10 rounded-lg">
              <Sparkles size={18} className="text-brand-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">مساعد أليكس الذكي</h3>
              <p className="text-xs text-brand-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                متصل
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-dark-bg/95">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-brand-900'}`}>
                {msg.role === 'user' ? <User size={14} className="text-slate-300" /> : <Bot size={14} className="text-brand-300" />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-brand-600 text-white rounded-tl-none' 
                  : 'bg-dark-card border border-dark-border text-slate-200 rounded-tr-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center">
                <Bot size={14} className="text-brand-300" />
              </div>
              <div className="bg-dark-card border border-dark-border p-3 rounded-2xl rounded-tr-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce animation-delay-200"></span>
                  <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce animation-delay-400"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-dark-border bg-dark-card rounded-b-2xl">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="اسأل عن مكدس التكنولوجيا..."
              className="w-full bg-dark-bg border border-dark-border rounded-xl pr-4 pl-12 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-500 text-white rounded-lg hover:bg-brand-600 disabled:opacity-50 disabled:hover:bg-brand-500 transition-all"
            >
              <Send size={16} className="rotate-180" /> {/* Rotate send icon for RTL? No, usually points right or left depending on icon. Send icon usually points right. In RTL it should point left? Let's check Lucide Send icon. It points right. I'll rotate it 180 deg or flip it. */}
            </button>
          </div>
          {!chatSessionRef.current && (
             <div className="text-[10px] text-red-400 mt-2 text-center">
               مفتاح API مفقود: الدردشة غير متاحة.
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
