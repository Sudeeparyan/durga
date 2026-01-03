import React from 'react';
import SectionContainer from './SectionContainer';
import { PROJECTS } from '../constants';
import { Github, ArrowUpRight, BarChart, Brain, Cloud } from 'lucide-react';
import FadeIn from './FadeIn';

const Projects: React.FC = () => {
  
  const getCategoryIcon = (category: string) => {
      switch(category) {
          case 'AI': return <Brain className="w-4 h-4" />;
          case 'Cloud': return <Cloud className="w-4 h-4" />;
          default: return <BarChart className="w-4 h-4" />;
      }
  };

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <SectionContainer id="projects">
        <FadeIn>
            <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Selected case studies demonstrating end-to-end technical implementation and measurable business outcomes.
            </p>
            </div>
        </FadeIn>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <FadeIn key={index} delay={index * 150}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 lg:p-8 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 bg-slate-50/50 dark:bg-slate-800 hover:shadow-md">
                
                <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-center space-x-2 text-xs font-bold tracking-wider text-corporate-accent dark:text-blue-400 uppercase mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.category}
                    </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    
                    <div className="pt-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="pt-6">
                        {project.githubUrl && (
                            <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-corporate-accent dark:hover:text-blue-400 transition-colors"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                View Source Code
                            </a>
                        )}
                    </div>
                </div>

                <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                    <div>
                    <h4 className="flex items-center text-slate-900 dark:text-white font-semibold mb-3">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                        The Problem
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {project.problem}
                    </p>
                    </div>

                    <div>
                    <h4 className="flex items-center text-slate-900 dark:text-white font-semibold mb-3">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Key Results
                    </h4>
                    <ul className="space-y-2">
                        {project.results.map((result, i) => (
                            <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                <ArrowUpRight className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {result}
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>

                </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Projects;