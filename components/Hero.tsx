import React from 'react';
import { ArrowRight, Github, MessageCircleMore, Mail, ChevronDown, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
       {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Spotlight */}
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                Digital Future
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm <span className="text-white font-semibold">{RESUME_DATA.name}</span>, a {RESUME_DATA.title}. I engineer scalable, high-performance applications that bridge the gap between complex backend logic and intuitive user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <a href="#projects" className="px-8 py-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2 w-full sm:w-auto justify-center">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="mailto:akmuharrami@gmail.com" className="px-8 py-4 rounded-lg border border-dark-border bg-dark-card hover:bg-dark-border text-slate-300 hover:text-white font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-500 border-t border-dark-border pt-8">
               <span className="text-xs font-mono uppercase tracking-widest text-slate-600">Tech Stack</span>
               <div className="flex gap-6 text-sm font-medium">
                  <span className="hover:text-brand-400 transition-colors cursor-default">React</span>
                  <span className="hover:text-brand-400 transition-colors cursor-default">Node.js</span>
                  <span className="hover:text-brand-400 transition-colors cursor-default">TypeScript</span>
                  <span className="hover:text-brand-400 transition-colors cursor-default">Neon</span>
                  <span className="hover:text-brand-400 transition-colors cursor-default">Postgres</span>
               </div>
            </div>
          </div>

          {/* Right: Abstract Code Visualization */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative hidden lg:block">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-20"></div>
            
            {/* Terminal Window */}
            <div className="relative bg-[#0a0f1e] border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#0f1629]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-[#0a0f1e] rounded text-xs text-slate-400 font-mono border border-slate-800">
                  <Terminal size={10} className="text-brand-400" />
                  <span>developer.config.ts</span>
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="flex">
                  <div className="text-slate-700 select-none mr-4 text-right">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10
                  </div>
                  <div>
                    <div className="text-purple-400">export const <span className="text-blue-400">profile</span> = <span className="text-yellow-300">{'{'}</span></div>
                    <div className="pl-4 text-slate-300">name: <span className="text-green-400">'{RESUME_DATA.name}'</span>,</div>
                    <div className="pl-4 text-slate-300">title: <span className="text-green-400">'{RESUME_DATA.title}'</span>,</div>
                    <div className="pl-4 text-slate-300">expertise: <span className="text-yellow-300">['Fullstack', 'AI', 'Cloud']</span>,</div>
                    <div className="pl-4 text-slate-300">status: <span className="text-green-400">'Building scalable solutions'</span>,</div>
                    <div className="pl-4 text-slate-300">location: <span className="text-green-400">'Muscat, Oman'</span>,</div>
                    <div className="pl-4 text-slate-300">hireable: <span className="text-blue-400">true</span>,</div>
                    <div className="pl-4 text-slate-300">
                      contact: <span className="text-blue-400">async</span> () <span className="text-purple-400">=</span> <span className="text-yellow-300">{'{'}</span>
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-purple-400">return</span> <span className="text-green-400">"Let's collaborate!"</span>;
                    </div>
                    <div className="pl-4 text-yellow-300">{'}'}</div>
                    <div className="text-yellow-300">{'}'};</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center gap-2 text-slate-400">
                   <span className="text-brand-500">➜</span>
                   <span>~</span>
                   <span className="animate-pulse w-2 h-4 bg-brand-500 block"></span>
                </div>
              </div>
            </div>

            {/* Floating Socials for visual balance on desktop */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              {/* <SocialIcon href={`https://${RESUME_DATA.socials.github}`} icon={<Github size={20} />} /> */}
              <SocialIcon href={`https://${RESUME_DATA.socials.whatsapp}`} icon={<MessageCircleMore size={20} />} />
              <SocialIcon href={`mailto:${RESUME_DATA.email}`} icon={<Mail size={20} />} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300 shadow-lg"
  >
    {icon}
  </a>
);
