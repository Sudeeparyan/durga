import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            // Check if the section is in the upper part of the viewport
            // 150px offset accounts for header height and some buffer
            if (rect.top <= 150 && rect.bottom >= 150) {
                current = section;
            }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 text-corporate-900 dark:text-white font-bold text-xl tracking-tight">
              <Terminal className="h-6 w-6 text-corporate-accent" />
              <span>DPR<span className="text-corporate-accent">.</span>Data</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-colors duration-300
                    ${isActive ? 'text-corporate-accent' : 'text-slate-600 dark:text-slate-300 hover:text-corporate-accent dark:hover:text-corporate-accent'}
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-corporate-accent after:transition-all after:duration-300
                    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
             <button
               onClick={toggleTheme}
               className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-corporate-accent"
               aria-label="Toggle Dark Mode"
             >
               {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
             </button>
             
             <a 
               href="#contact"
               onClick={(e) => handleNavClick(e, '#contact')}
               className="bg-corporate-900 dark:bg-corporate-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-corporate-800 dark:hover:bg-blue-600 transition-colors shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
             >
               Hire Me
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
               onClick={toggleTheme}
               className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
               aria-label="Toggle Dark Mode"
             >
               {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
             </button>
             
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-corporate-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg absolute top-16 left-0 right-0 w-full animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive ? 'text-corporate-accent bg-blue-50 dark:bg-slate-800' : 'text-slate-700 dark:text-slate-300 hover:text-corporate-accent hover:bg-slate-50 dark:hover:bg-slate-800'}
                  `}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 pb-2">
               <a 
                 href="#contact"
                 onClick={(e) => handleNavClick(e, '#contact')}
                 className="block w-full text-center bg-corporate-accent text-white px-4 py-3 rounded-md text-base font-medium hover:bg-blue-700"
               >
                 Contact Me
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;