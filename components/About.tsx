
import React from 'react';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => (
    <h2 className="flex items-center text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text mb-10 whitespace-nowrap">
        <span className="font-mono text-xl md:text-2xl text-light-primary dark:text-dark-primary mr-3">0{index}.</span>
        {children}
        <span className="w-full h-px bg-light-card dark:bg-dark-card ml-6"></span>
    </h2>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <SectionTitle index={1}>About Me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-4 text-md leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
            <p>
            Hello! I'm Thato, an IT Management graduate with a passion for creating things that live on the internet. My interest in development started back when I decided to future-proof my skills in today’s ever-evolving digital landscape — this journey led me through an intensive IT Bootcamp and a Full Stack Development training program with FNB App Academy.
            </p>
            <p>
            Fast-forward to today, and I’ve had the privilege of working on diverse projects, honing my skills in both frontend and backend technologies. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
            My sights are set on growing into a dynamic IT Manager who doesn’t just lead teams, but also architects meaningful tech strategies that fuel business growth and spark innovation.
            </p>
        </div>
        <div className="md:col-span-2">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                {SKILLS.map((skill, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <span className="text-light-primary dark:text-dark-primary">▹</span>
                        <span>{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
