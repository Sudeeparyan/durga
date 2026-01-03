import React from 'react';
import SectionContainer from './SectionContainer';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';
import FadeIn from './FadeIn';

const Education: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <SectionContainer id="education">
        <FadeIn>
            <h2 className="text-3xl font-bold text-corporate-900 dark:text-white mb-12 text-center">Education & Qualifications</h2>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION.map((edu, index) => (
            <FadeIn key={index} delay={index * 100} direction="left">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-corporate-accent dark:text-blue-400 hidden sm:block">
                    <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.institution}</p>
                    {edu.details && <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.details}</p>}
                    </div>
                </div>
                
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium bg-slate-50 dark:bg-slate-700/50 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.year}
                </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Education;