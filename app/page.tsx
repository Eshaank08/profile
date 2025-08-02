'use client';

import { trackSocialClick, trackBusinessClick } from '@/lib/analytics';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Icons removed as they're no longer used

export default function Component() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Always use light mode
  useEffect(() => {
    // Always default to light mode
    setDarkMode(false);
    // Save preference to localStorage
    localStorage.setItem('darkMode', 'false');
  }, []);
  
  // Update document class and save preference when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  
  // Email subscription functionality removed

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors`}>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="md:pt-2">
            <h1 className="text-3xl font-bold mb-1">Hi, I&apos;m Eshaan</h1>
            <p className={`italic ${darkMode ? "text-gray-400" : "text-gray-500"} text-sm mb-1 font-light`}>entrepreneur</p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>21 years old, INTJ-P.</p>
          </div>
          {/* Profile image and dark mode toggle removed */}
        </div>

        {/* About Section */}
        <div className="mb-12 px-1">
          <h2 className="text-xl font-medium mb-4">About</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Indian, living in Germany. I call myself the jack of all trades.</p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>I used to play football, now I train like a hybrid athlete and eat burgers for cheatmeals.</p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>I am the marketing guy. I yap about tech, business or anything tbh.</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a 
              href="https://www.youtube.com/eshaankansal" 
              onClick={() => trackSocialClick('YouTube', 'https://www.youtube.com/eshaankansal')}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:opacity-80`}
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com/eshaankansal" 
              onClick={() => trackSocialClick('Twitter', 'https://twitter.com/eshaankansal')}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:opacity-80`}
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="https://github.com/Eshaank08" 
              onClick={() => trackSocialClick('GitHub', 'https://github.com/Eshaank08')}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:opacity-80`}
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/eshaan-kansal-277876241/" 
              onClick={() => trackSocialClick('LinkedIn', 'https://www.linkedin.com/in/eshaan-kansal-277876241/')}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:opacity-80`}
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">This is what I am doing</h2>
          
          <div className="space-y-6">
            {/* Work Experience Item 1 */}
            <a 
              href="https://socialease.space" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackBusinessClick('socialease', 'https://socialease.space')}
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                    <Image 
                      src="/images/work/socialease.jpeg" 
                      alt="Socialease logo" 
                      width={48} 
                      height={48}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Founder - Socialease</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>A platfrorm for you to sell your skills and make money. 1800+ people in the waitlist.</p>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Work Experience Item 2 */}
            <a 
              href="/work" 
              onClick={() => trackBusinessClick('work', '/work')}
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                    <Image 
                      src="/images/work/wolf.jpg" 
                      alt="Personal Branding" 
                      width={48} 
                      height={48}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Personal Branding + Marketing</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Consulted and worked with over 150+ people. Check out my work here.</p>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Work Experience Item 3 */}
            <a 
              href="https://instagram.com/eshaan.kansal" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('instagram', 'https://instagram.com/eshaan.kansal')}
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                    <Image 
                      src="/images/work/main.png" 
                      alt="Main Instagram" 
                      width={48} 
                      height={48}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Main Instagram - @eshaan.kansal
                      <Image 
                        src="/images/work/blue-tick.png" 
                        alt="Verified" 
                        width={16} 
                        height={16}
                        quality={100}
                        className="ml-1 inline-block"
                      />
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Making vlogs here.</p>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Work Experience Item 4 */}
            <a 
              href="https://instagram.com/eshaan.kansalts" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('business_instagram', 'https://instagram.com/eshaan.kansalts')}
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                    <Image 
                      src="/images/work/tech.png" 
                      alt="Business Instagram" 
                      width={48} 
                      height={48}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Business Instagram - @eshaan.kansalts</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Here I yap about Business, Tech and AI.(Recently started)</p>
                  </div>
                </div>
              </div>
            </a> 
             {/* Work Experience Item 5 - Book a call */}
<a 
  href="https://cal.com/eshaan-kansal/15min" 
  target="_blank" 
  rel="noopener noreferrer"
  onClick={() => trackBusinessClick('calendar', 'https://cal.com/eshaan-kansal/15min')}
  className="block hover:opacity-80 transition-opacity"
>
  <div className="flex justify-between items-start">
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
        <Image 
          src="/images/work/image.png" 
          alt="Book a call" 
          width={200} 
          height={200}
          quality={100}
          unoptimized={true}
          className="w-full h-full object-cover scale-150"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>
      <div>
        <h3 className="font-medium">Book a call with me</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Connect 1:1 with me (Mentorships, branding, business, etc)(Only serious work)</p>
      </div>
    </div>
  </div>
</a>
          </div>
        </div>
        

        {/* Email subscription section removed */}
      </div>
    </div>
  );
}
