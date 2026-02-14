import { Project, Experience, SkillMetric } from './types';

export const RESUME_DATA = {
  name: "Asad Al Muharrami",
  title: "Senior Fullstack Engineer",
  tagline: "Building digital experiences that matter.",
  summary: "I'm a fullstack engineer with 3+ years of experience specializing in scalable React architectures and AI-driven backend systems. I bridge the gap between complex engineering and intuitive design.",
  location: "Muscat - Oman",
  email: "akmuharrami@mail.com",
  socials: {
    github: "github.com/alexsterling",
    whatsapp: "https://api.whatsapp.com/send?phone=96338791",
    twitter: "twitter.com/alexsterling"
  }
};

export const SKILLS_DATA: SkillMetric[] = [
  { subject: 'Frontend (React/Next)', A: 95, fullMark: 100 },
  { subject: 'Backend (Nodejs)', A: 95, fullMark: 100 },
  { subject: 'Cloud (Vercel)', A: 90, fullMark: 100 },
  { subject: 'AI Integration', A: 80, fullMark: 100 },
  { subject: 'Database (Neon/postgres)', A: 95, fullMark: 100 },
  { subject: 'UI/UX Design', A: 85, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Al Muhannad Services',
    description: 'A Washing service app designed to accept orders and manage them..',
    tags: ['React', 'Tailwind', 'Postgres','Database', 'Api', 'Email api'],
    imageUrl: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20072039.png',
    demoUrl: 'https://al-muhannad.com/',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'SiteMaker app',
    description: 'Specialized App for creating advanced website designs throgh given templates.',
    tags: ['NextJs', 'npm libraries', 'States','Postgres', 'Database', 'Vercel'],
    imageUrl: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20073553.png',
    demoUrl: 'http://musammim.vercel.app/',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'All Option Eccomerce',
    description: 'All option Eccomerce site, handling orders, payments, and inventory management.',
    tags: ['React', 'Tailwind', 'Gemini AI', 'api', 'Shipping api', 'Payment Gateway'],
    imageUrl: 'https://hjrm8lbtnby37npy.public.blob.vercel-storage.com/Screenshot%202026-02-14%20082522.png',
    demoUrl: 'https://van-om-v2.vercel.app/ar',
    repoUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior Staff Engineer',
    company: 'TechFlow Systems',
    period: '2021 - Present',
    description: 'Leading the core platform team. Improved system latency by 40% and mentored 5 junior engineers.'
  },
  {
    id: '2',
    role: 'Fullstack Developer',
    company: 'Orbit Creative',
    period: '2018 - 2021',
    description: 'Developed award-winning marketing sites and internal tools for Fortune 500 clients.'
  },
  {
    id: '3',
    role: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2016 - 2018',
    description: 'Worked on early-stage MVP development using MERN stack.'
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Alex Sterling, a Senior Fullstack Engineer.
Your goal is to answer questions about Alex's professional background, skills, and projects in a friendly, professional, and slightly witty manner.

Here is Alex's context:
- Name: ${RESUME_DATA.name}
- Title: ${RESUME_DATA.title}
- Experience: 8+ years.
- Top Skills: React, Node.js, AI Integration, Cloud Architecture.
- Projects: Nebula Dashboard (Analytics), Aether Lens (Medical AI), CryptoSentinel (DeFi).
- Contact: ${RESUME_DATA.email}

Rules:
1. Keep answers concise (under 3 sentences unless asked for detail).
2. If asked about rates, say "Alex is open to discussing rates based on project scope. Please email him directly."
3. Be enthusiastic about technology.
4. If you don't know something, say "I'm not sure about that detail, but I know Alex loves a good challenge!"
`;
