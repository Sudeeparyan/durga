import { LucideIcon } from 'lucide-react';

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  about: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Project {
  title: string;
  problem: string;
  techStack: string[];
  results: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'AI' | 'Data' | 'Cloud';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface NavItem {
  label: string;
  href: string;
}