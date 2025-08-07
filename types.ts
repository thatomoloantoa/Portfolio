
export type Theme = 'light' | 'dark';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export type IconName = 'linkedin' | 'github' | 'external';
