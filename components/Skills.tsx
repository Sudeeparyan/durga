import React from 'react';
import SectionContainer from './SectionContainer';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const Skills: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <SectionContainer id="skills">
        <FadeIn>
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-900 dark:text-white mb-4">Technical Expertise</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A comprehensive toolkit built for enterprise-grade data analysis, cloud engineering, and machine learning development.
            </p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeIn key={category.title} delay={index * 100}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-slate-100 dark:border-slate-700 h-full hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-corporate-accent dark:text-blue-400 mr-4">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                    {category.skills.map((skill) => (
                        <li key={skill} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{skill}</span>
                        </li>
                    ))}
                    </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Skills;