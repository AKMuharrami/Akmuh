import React, { useEffect, useState } from 'react';
import { Hero } from '../components/arabic/Hero';
import { Skills } from '../components/arabic/Skills';
import { Projects } from '../components/arabic/Projects';
import { Experience } from '../components/arabic/Experience';
import { ChatBot } from '../components/arabic/ChatBot';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const HomeAr: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = 'أسد المحرمي | مهندس برمجيات فولستاك';
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-500/30" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-display font-bold text-white tracking-tight">
            أسد<span className="text-brand-500">.المبرمج</span>
          </span>
          
          <div className="hidden md:flex gap-8">
            <NavLink style={{marginLeft:'2%'}} href="#">الرئيسية</NavLink>
        
            <NavLink href="#skills">المهارات</NavLink>
            <NavLink href="#projects">الأعمال</NavLink>
            {/* <NavLink href="#experience">الخبرة</NavLink> */}
            <Link to="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">English</Link>
          </div>
 <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=96338791"
              className="hidden sm:block px-4 py-2 text-sm font-medium bg-white text-dark-bg rounded-full hover:bg-slate-200 transition-colors"
            >
             تواصل معي
            </a>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-400 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
             </div>
        </div>
         {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border py-6 px-6 flex flex-col gap-6 animate-fade-in-up">
            <NavLink href="#" onClick={() => setIsMenuOpen(false)}>الرئيسية</NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>المهارات</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>الأعمال</NavLink>
            {/* <NavLink href="#experience" onClick={() => setIsMenuOpen(false)}>الخبرة</NavLink> */}
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              English
            </Link>
            <a 
              // href="mailto:alex.sterling@example.com"
              className="w-full text-center px-4 py-3 text-sm font-medium bg-white text-dark-bg rounded-lg hover:bg-slate-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بي
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <Experience /> */}
      </main>

      <ChatBot />

      <footer className="py-8 border-t border-dark-border text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} أسد المحرمي. بنيت بواسطة React, Tailwind & Gemini API.</p>
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
