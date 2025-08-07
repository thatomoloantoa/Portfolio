
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 text-center flex flex-col items-center">
       <div className="max-w-xl">
        <h2 className="font-mono text-lg text-light-primary dark:text-dark-primary">
            03. What’s Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mt-4">
            Get In Touch
        </h3>
        <p className="mt-6 text-md text-light-text-secondary dark:text-dark-text-secondary">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I’ll get back to you!
        </p>
        <a 
            href="mailto:thatomoloantoa127@gmail.com"
            className="inline-block mt-10 bg-transparent border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary font-mono text-lg py-4 px-8 rounded-md hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-all duration-300"
        >
            Say Hello
        </a>
       </div>
    </section>
  );
};

export default Contact;
