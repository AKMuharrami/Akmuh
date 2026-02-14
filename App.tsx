import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-display font-bold text-white tracking-tight">
            akmuh<span className="text-brand-500">.dev</span>
          </span>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Work</NavLink>
            {/* <NavLink href="#experience">Experience</NavLink> */}
          </div>

          <a 
            href="mailto:akmuharrami@gmail.com"
            className="px-4 py-2 text-sm font-medium bg-white text-dark-bg rounded-full hover:bg-slate-200 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <ChatBot />

      <footer className="py-8 border-t border-dark-border text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Asad Al - Muharrami. Built with React, Tailwind & Gemini API.</p>
      </footer>
    </div>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default App;
