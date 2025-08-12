
import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; index: number; children: React.ReactNode; onClick?: () => void }> = ({ href, index, children, onClick }) => (
  <li className="text-center">
    <a
      href={href}
      onClick={onClick}
      className="group font-mono text-sm text-light-text dark:text-dark-text hover:text-light-primary dark:hover:dark-primary transition-colors duration-300"
    >
      <span className="text-light-primary dark:text-dark-primary">0{index}.</span> {children}
    </a>
  </li>
);

const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="md:hidden z-50 text-light-primary dark:text-dark-primary" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
);

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="md:hidden z-50 text-light-primary dark:text-dark-primary" aria-label="Close menu">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
);


const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          <a href="#" className="font-mono font-bold text-lg text-light-primary dark:text-dark-primary">
            TM.
          </a>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <NavLink href="#about" index={1}>About</NavLink>
                <NavLink href="#projects" index={2}>Projects</NavLink>
                <NavLink href="#contact" index={3}>Contact</NavLink>
              </ul>
            </nav>
            <a 
              href="https://capeitinitiative-my.sharepoint.com/:b:/g/personal/thato_moloantoa_capaciti_org_za/EYc9iuyXXpxOro2QZqDbhsYBw231x67tlDZUpFVVvscsxw?e=Aa09H6" 
              rel="noopener noreferrer" 
              className="hidden md:inline-block font-mono text-sm border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-md px-4 py-2 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors duration-300"
            >
              Resume
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="md:hidden">
              {isMenuOpen ? <CloseIcon onClick={toggleMenu} /> : <HamburgerIcon onClick={toggleMenu} />}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <aside className={`fixed top-0 right-0 h-full w-3/4 bg-light-card dark:bg-dark-card shadow-xl z-30 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <nav className="h-full flex flex-col justify-center items-center">
              <ul className="flex flex-col space-y-8">
                  <NavLink href="#about" index={1} onClick={closeMenu}>About</NavLink>
                  <NavLink href="#projects" index={2} onClick={closeMenu}>Projects</NavLink>
                  <NavLink href="#contact" index={3} onClick={closeMenu}>Contact</NavLink>
                  <li>
                    <a 
                      href="#"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-4 font-mono text-lg border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary rounded-md px-8 py-3 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors duration-300"
                    >
                      Resume
                    </a>
                  </li>
              </ul>
          </nav>
      </aside>
      {isMenuOpen && <div className="fixed inset-0 bg-black/30 z-20" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
