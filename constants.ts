import { Project } from './types';

export const SKILLS: string[] = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Node.js',
  'HTML & (S)CSS',
  'Tailwind CSS',
  'Python',
  'MySQL',
  'GitHub',
  'Cloud Concepts',
  'SharePoint Online',
  'Vercel',
];

export const PROJECTS: Project[] = [
  {
    title: 'Content Generator',
    description: 'An intelligent system that automates content creation, leveraging AI to produce high-quality text for various needs. Built with a modern tech stack to ensure performance and scalability.',
    tags: ['AI/ML', 'Python', 'React', 'FastAPI'],
    image: 'https://www.winsavvy.com/wp-content/uploads/2024/06/ai-content-creation-1.jpg',
    githubUrl: 'https://github.com/thatomoloantoa/Educational-Content-Generator.git',
    liveUrl: 'https://educational-content-generator.vercel.app/',
  },
  {
    title: 'AI Resume Builder',
    description: 'A smart tool that assists users in creating professional, tailored resumes by analyzing job descriptions and suggesting improvements. Integrates with the Gemini API for content suggestions.',
    tags: ['React', 'Gemini API', 'Node.js', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/thatomoloantoa/AI-Resume-Generator.git',
    liveUrl: 'https://ai-resume-generator-kappa.vercel.app/',
  },
    {
    title: 'End-to-End AI Solutions',
    description: 'Developed comprehensive AI-driven platforms, from data ingestion and model training to deployment and user interface. A full-stack solution designed for enterprise-level applications.',
    tags: ['System Design', 'Cloud', 'Full Stack', 'Python'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1970&auto=format&fit=crop',
    githubUrl: 'https://github.com/thatomoloantoa',
    liveUrl: '#',
  },
];
