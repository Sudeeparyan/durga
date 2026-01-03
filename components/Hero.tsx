import React from 'react';
import { Download, ChevronRight, Eye } from 'lucide-react';
import SectionContainer from './SectionContainer';
import { PROFILE } from '../constants';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-slate-50 dark:bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-300">
        {/* Abstract Background pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-200 dark:bg-slate-800/30 opacity-50 blur-3xl"></div>

      <SectionContainer id="hero" className="relative z-10">
        <div className="max-w-4xl">
          <FadeIn delay={100}>
            <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-corporate-accent dark:text-blue-400 mb-6 border border-blue-100 dark:border-blue-800">
                <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for immediate employment in Ireland (Stamp 1G)
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-corporate-900 dark:text-white mb-6 leading-tight">
                Data Analytics & AI Graduate <br/>
                <span className="text-corporate-accent">Turning Data into Business Impact</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed">
                {PROFILE.summary}
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Note: Ensure a file named 'resume.pdf' exists in your public/root directory */}
                <a 
                href="resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-corporate-900 dark:bg-corporate-accent hover:bg-corporate-800 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-900 dark:focus:ring-blue-500 shadow-sm transition-all hover:-translate-y-0.5"
                >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
                </a>
                <a 
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-accent shadow-sm transition-all hover:-translate-y-0.5"
                >
                <Eye className="mr-2 h-5 w-5" />
                View Projects
                </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={500}>
            <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase mb-4">Core Competencies</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-600 dark:text-slate-300 font-medium">
                <span className="flex items-center hover:text-corporate-accent transition-colors"><ChevronRight className="h-4 w-4 text-corporate-accent mr-1" /> Predictive Modelling</span>
                <span className="flex items-center hover:text-corporate-accent transition-colors"><ChevronRight className="h-4 w-4 text-corporate-accent mr-1" /> Azure Cloud Architectures</span>
                <span className="flex items-center hover:text-corporate-accent transition-colors"><ChevronRight className="h-4 w-4 text-corporate-accent mr-1" /> Business Intelligence</span>
                <span className="flex items-center hover:text-corporate-accent transition-colors"><ChevronRight className="h-4 w-4 text-corporate-accent mr-1" /> Generative AI</span>
                </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Hero;