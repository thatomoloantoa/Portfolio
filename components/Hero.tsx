import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex items-center min-h-[calc(100vh-80px)] py-20 md:py-0">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
                <p className="font-mono text-light-primary dark:text-dark-primary mb-4 text-md">
                  Hi, my name is
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text leading-tight">
                  Thato Moloantoa.
                </h1>
                <h4 className="font-bold text-light-text-secondary dark:text-dark-text-secondary leading-tight mt-1">
                  IT Support Candidate
                </h4>

                <a
                    href="mailto:thatomoloantoa127@gmail.com"
                    className="inline-block mt-12 bg-transparent border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary font-mono text-lg py-4 px-8 rounded-md hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-all duration-300"
                >
                  Get In Touch
                </a>
            </div>

            {/* Image Frame */}
            <div className="relative w-full max-w-xs mx-auto md:max-w-sm justify-self-center mt-12 md:mt-0">
                <div className="group rounded-md w-full h-full aspect-square relative">
                     {/* The decorative frame/border */}
                    <div className="absolute inset-0 border-2 border-light-primary dark:border-dark-primary rounded-md transform translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                    
                    {/* The image wrapper with overlay */}
                    <div className="relative w-full h-full rounded-md overflow-hidden z-10">
                        {/* The image */}
                        <img 
                            src="https://media.licdn.com/dms/image/v2/D4D03AQH4Y5SaqAlXrQ/profile-displayphoto-shrink_800_800/B4DZX7tWnoGwAc-/0/1743684728100?e=1757548800&v=beta&t=gSbUxJN0vLWxQA7FnuRjHHVeTEv6uJX6yI7Myw1lfFk" 
                            alt="Thato Moloantoa" 
                            className="w-full h-full object-cover object-center filter grayscale group-hover:filter-none transition-all duration-300"
                        />
                         {/* The color overlay */}
                        <div className="absolute inset-0 bg-light-primary/30 dark:bg-dark-primary/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 rounded-md"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Hero;
