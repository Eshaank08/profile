'use client';

import { trackSocialClick, trackBusinessClick } from '@/lib/analytics';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Icons removed as they're no longer used

export default function Component() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle client-side operations after component mounts
  useEffect(() => {
    setIsMounted(true);
    // Check for stored preference
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);
  
  // Update document class and save preference when dark mode changes
  useEffect(() => {
    if (!isMounted) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode, isMounted]);
  
  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // Email subscription functionality removed

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors`}>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 relative">
        {/* Theme toggle button - fixed position */}
        <button
          onClick={toggleTheme}
          className={`absolute right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 flex items-center justify-center p-2 rounded-full w-10 h-10 transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-700">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 pt-10 md:pt-0">
          <div className="md:pt-2">
            <h1 className="text-3xl font-bold mb-1">Hi, I&apos;m Eshaan</h1>
            <p className={`italic ${darkMode ? "text-gray-300" : "text-gray-500"} text-sm mb-1 font-light`}>entrepreneur</p>
            <p className={darkMode ? "text-gray-200" : "text-gray-600"}>21 years old, INTJ-P.</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12 px-1">
          <h2 className="text-xl font-medium mb-4">About</h2>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>Indian, living in Germany. I call myself the jack of all trades.</p>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>I used to play football, now I train like a hybrid athlete and eat burgers for cheatmeals.</p>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>I am the marketing guy. I yap about tech, business or anything tbh.</p>
          
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
            <a 
              href="https://instagram.com/eshaan.kansal" 
              onClick={() => trackSocialClick('Instagram', 'https://instagram.com/eshaan.kansal')}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:opacity-80`}
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>An online campus for business enthusiasts and skilled professionals to learn and earn. 1800+ people in the waitlist.</p>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Work Experience Item 2 */}
            <a 
              href="https://cal.com/eshaan-kansal/quick-chat" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackBusinessClick('magicLabs', 'https://cal.com/eshaan-kansal/quick-chat')}
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                    <Image 
                      src="/images/work/wolf.png" 
                      alt="Magic Labs" 
                      width={100} 
                      height={100}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Magic Labs</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>We develop AI products/agents for people along with go to marketing plans to drive growth. Book a call now.</p>
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
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>This is where I yap about Business, tech, marketing and my life.</p>
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
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Connect 1:1 with me (Mentorships, branding, business, etc)</p>
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
