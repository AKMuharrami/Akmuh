export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillMetric {
  subject: string;
  A: number; // Current proficiency (0-100)
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}