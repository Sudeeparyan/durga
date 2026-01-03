import React from 'react';
import SectionContainer from './SectionContainer';
import { PROFILE } from '../constants';
import { User } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <SectionContainer id="about">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
             <FadeIn direction="right">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 sticky top-24 transition-colors duration-300">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-corporate-accent dark:text-blue-400">
                        <User className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-corporate-900 dark:text-white mb-2">About Me</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Focused on solving complex business problems through data-driven strategies and scalable AI solutions.
                    </p>
                </div>
             </FadeIn>
          </div>
          
          <div className="md:w-2/3">
            <FadeIn delay={200}>
                <h2 className="text-3xl font-bold text-corporate-900 dark:text-white mb-6">Professional Profile</h2>
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {PROFILE.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                </div>
            </FadeIn>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default About;