import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Icon from './Icon';

const SectionTitle: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => (
    <h2 className="flex items-center text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text mb-10 whitespace-nowrap">
        <span className="font-mono text-xl md:text-2xl text-light-primary dark:text-dark-primary mr-3">0{index}.</span>
        {children}
        <span className="w-full h-px bg-light-card dark:bg-dark-card ml-6"></span>
    </h2>
);

const ProjectCard: React.FC<{ project: Project; reverse: boolean }> = ({ project, reverse }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = `transition-all duration-700 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  return (
    <li
      ref={cardRef}
      className={`md:grid md:grid-cols-12 md:items-center mb-20 ${animationClasses}`}
    >
      {/* Image Container */}
      <div className={`relative md:row-start-1 ${reverse ? 'md:col-start-6 md:col-span-7' : 'md:col-start-1 md:col-span-7'}`}>
        <div className="relative p-4 border-t-4 border-lime-300 dark:border-lime-400 bg-light-card/50 dark:bg-dark-card/50 rounded-lg shadow-lg">
          <a href={project.liveUrl || project.githubUrl || '#'} target="_blank" rel="noopener noreferrer" className="block">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover rounded-md"
            />
          </a>
        </div>
      </div>

      {/* Text Container */}
      <div className={`-mt-20 p-6 md:p-0 md:mt-0 relative md:row-start-1 md:z-10 ${reverse ? 'md:col-start-1 md:col-span-7 md:text-left' : 'md:col-start-6 md:col-span-7 md:text-right'}`}>
          <h3 className="text-xl md:text-2xl font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:dark-primary transition-colors mb-4">
            <a href={project.liveUrl || project.githubUrl || '#'} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg mb-4 text-left">
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">{project.description}</p>
          </div>
          <ul className={`flex flex-wrap justify-start gap-x-4 gap-y-2 font-mono text-xs text-light-text-secondary/80 dark:text-dark-text-secondary/80 mb-4 ${reverse ? 'md:justify-start' : 'md:justify-end'}`}>
            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
          <div className={`flex items-center justify-start gap-4 ${reverse ? 'md:justify-start' : 'md:justify-end'}`}>
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:dark-primary transition-colors"><Icon name="github" /></a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:dark-primary transition-colors"><Icon name="external" /></a>}
          </div>
      </div>
    </li>
  );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle index={2}>Some Things I've Built</SectionTitle>
      <ul>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;