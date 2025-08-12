
import React from 'react';
import Icon from './Icon';

const SocialLink: React.FC<{href: string; iconName: 'github' | 'linkedin'}> = ({href, iconName}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary/80 dark:text-dark-text-secondary/80 hover:text-light-primary dark:hover:dark-primary transition-colors">
        <Icon name={iconName} />
    </a>
)

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-light-text-secondary dark:text-dark-text-secondary">
        <div className="md:hidden flex items-center space-x-6 mb-4">
            <SocialLink href="https://github.com/thatomoloantoa" iconName="github" />
            <SocialLink href="https://www.linkedin.com/in/thato-moloantoa-6155b2308" iconName="linkedin" />
        </div>
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <a 
            href="https://github.com/thatomoloantoa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-sm hover:text-light-primary dark:hover:dark-primary transition-colors"
        >
            <div>Designed & Built by Thato Moloantoa</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
