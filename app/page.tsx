'use client';

import { trackSocialClick, trackBusinessClick } from '@/lib/analytics';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Icons removed as they're no longer used

export default function Component() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side operations after component mounts
  useEffect(() => {
    setIsMounted(true);
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
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
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const getAge = () => {
    const birth = new Date(2004, 0, 8); // Jan 8, 2004
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if (today < new Date(today.getFullYear(), 0, 8)) age--;
    return age;
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-300">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-indigo-800">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
        
        {/* Header Section */}
        <div className="flex flex-row items-center mb-12 pt-10 md:pt-0 gap-5">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/images/work/avatar.jpeg" alt="Eshaan Kansal" width={96} height={96} quality={100} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">Hi, I&apos;m Eshaan</h1>
            <p className={`italic ${darkMode ? "text-gray-300" : "text-gray-500"} text-sm mb-1 font-light`}>founder · builder · marketer</p>
            <p className={darkMode ? "text-gray-200" : "text-gray-600"}>{getAge()} years old, INTJ-P.</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12 px-1">
          <h2 className="text-xl font-medium mb-4">About</h2>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>Indian, living in Germany. Entrepreneur by day, hybrid athlete by evening, philosopher by night. The jack of all trades, basically.</p>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>Started with content. Generated 2M+ impressions and built a 50,000-reader newsletter before pivoting to what I do now.</p>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>These days, I run a software company, building custom AI agents for businesses around the world.</p>
          <p className={`${darkMode ? 'text-gray-100' : 'text-gray-700'} mb-3`}>When I&apos;m not building, I&apos;m lifting or playing some sport. And eating burgers, completely guilt-free.</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a 
              href="https://youtube.com/@eshaankansal?si=WfrLFGocSytwD-R6" 
              onClick={() => trackSocialClick('YouTube', 'https://youtube.com/@eshaankansal?si=WfrLFGocSytwD-R6')}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:opacity-80`}
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
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

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">Experience</h2>

          <div className="space-y-6">
            {/* Socialease Labs */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden bg-white">
                  <Image src="/images/work/socialease.jpeg" alt="Socialease Labs" width={48} height={48} quality={100} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-medium">Founder</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Socialease Labs</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>Building and deploying custom multi-agent AI systems for service businesses.</p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Mar 2026 – Present</span>
            </div>

            {/* Helmit GmbH */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <Image src="/images/work/helmit-logo.png" alt="Helmit GmbH" width={48} height={48} quality={100} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">Growth Marketer</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Helmit GmbH · Munich, Germany</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>UGC campaigns hitting millions of views, Meta Ads, influencer pipeline, and an AI lead gen agent for B2B.</p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Oct 2025 – May 2026</span>
            </div>

            {/* Magic Labs */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <Image src="/images/work/wolf.png" alt="Magic Labs" width={48} height={48} quality={100} className="w-full h-full object-cover scale-125" />
                </div>
                <div>
                  <h3 className="font-medium">Co-founder</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Magic Labs</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>Built AI products and agents with go-to-market strategies to drive growth for clients.</p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Jul 2025 – Feb 2026</span>
            </div>

            {/* Content Creator */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <Image src="/images/work/main.png" alt="Eshaan Kansal" width={48} height={48} quality={100} className="w-full h-full object-cover object-center" />
                </div>
                <div>
                  <h3 className="font-medium flex items-center gap-1">
                    Creator · @eshaankansal
                    <Image src="/images/work/blue-tick.png" alt="Verified" width={14} height={14} quality={100} className="inline-block" />
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>talking about AI, tech, and whatever&apos;s on my mind.</p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Sep 2023 – Present</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">Education</h2>

          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden bg-white flex items-center justify-center p-2">
                <img src="/images/work/ku-mark.svg" alt="KU Eichstätt-Ingolstadt" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-medium">B.Sc. Data Science</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Katholische Universität Eichstätt-Ingolstadt, Germany</p>
              </div>
            </div>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Oct 2024 – Oct 2027</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Donna */}
            <a href="https://github.com/Eshaank08/donna" target="_blank" rel="noopener noreferrer" className={`block rounded-xl overflow-hidden border transition-all hover:scale-[1.02] ${darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'}`}>
              <div className="aspect-video overflow-hidden">
                <Image src="/images/projects/donna.png" alt="Donna" width={600} height={338} quality={90} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">Donna</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Personal AI chief of staff. 11 specialist agents running Gmail, Calendar, Notion, and Obsidian.</p>
              </div>
            </a>

            {/* Pocket Jarvis */}
            <a href="https://donna.magiclabs.studio" target="_blank" rel="noopener noreferrer" className={`block rounded-xl overflow-hidden border transition-all hover:scale-[1.02] ${darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'}`}>
              <div className="aspect-video overflow-hidden">
                <Image src="/images/projects/pocket-jarvis.png" alt="Pocket Jarvis" width={600} height={338} quality={90} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">Pocket Jarvis</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>AI chief of staff on WhatsApp and Telegram. No laptop, no dashboard, no friction.</p>
              </div>
            </a>

            {/* Founderskit */}
            <a href="https://founderskit.in" target="_blank" rel="noopener noreferrer" className={`block rounded-xl overflow-hidden border transition-all hover:scale-[1.02] ${darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'}`}>
              <div className="aspect-video overflow-hidden">
                <Image src="/images/projects/founderskit.png" alt="Founderskit" width={600} height={338} quality={90} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">Founderskit</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Production-ready Next.js boilerplate with auth, payments, and email baked in. Ship your startup in days.</p>
              </div>
            </a>

            {/* AgentCheck */}
            <a href="https://github.com/Eshaank08/agent-check" target="_blank" rel="noopener noreferrer" className={`block rounded-xl overflow-hidden border transition-all hover:scale-[1.02] ${darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'}`}>
              <div className="aspect-video overflow-hidden">
                <Image src="/images/projects/agentcheck.png" alt="AgentCheck" width={600} height={338} quality={90} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">AgentCheck</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Open-source CLI tool that security audits AI agents. Live on npm.</p>
              </div>
            </a>

            {/* AI Therapist */}
            <a href="https://ai-mentor-ruddy.vercel.app" target="_blank" rel="noopener noreferrer" className={`block rounded-xl overflow-hidden border transition-all hover:scale-[1.02] ${darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'}`}>
              <div className="aspect-video overflow-hidden">
                <Image src="/images/projects/ai-therapist.png" alt="AI Therapist" width={600} height={338} quality={90} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">AI Therapist</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Conversational AI therapist for Gen Z with mood tracking, habit tracking, and gamified progress.</p>
              </div>
            </a>

            {/* Socialease */}
            <a href="https://socialease-platform-anzbfrmo5-eshaank08s-projects.vercel.app" target="_blank" rel="noopener noreferrer" onClick={() => trackBusinessClick('socialease', 'https://socialease-platform-anzbfrmo5-eshaank08s-projects.vercel.app')} className={`block rounded-xl overflow-hidden border transition-all hover:scale-[1.02] ${darkMode ? 'border-gray-700 hover:border-gray-500' : 'border-gray-200 hover:border-gray-400'}`}>
              <div className="aspect-video overflow-hidden">
                <Image src="/images/projects/socialease.png" alt="Socialease" width={600} height={338} quality={90} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">AI Consulting Platform</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Connects users with AI experts within 10 minutes via smart matching. 2,000+ waitlist pre-launch.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Hackathons Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">Hackathons</h2>

          <div className="space-y-6">
            {/* EDTH Defense Hackathon */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <Image src="/images/work/edth-logo.png" alt="EDTH" width={48} height={48} quality={100} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">EDTH Defense Hackathon · Munich</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Built and deployed an ML model to classify drone audio into three categories. Real-time leaderboard, spectral analysis, REST API submission. Team of 2.</p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Oct 2025</span>
            </div>

            {/* VGI Flexi Hackathon */}
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <Image src="/images/work/vgi-logo.png" alt="VGI" width={48} height={48} quality={100} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">VGI Flexi Spatio-Temporal Hackathon · Ingolstadt</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Analysed anonymised bus travel data for rural Bavaria. Built static heatmaps and dynamic temporal visualisations of demand patterns. Team of 3.</p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} whitespace-nowrap ml-4 pt-1`}>Nov 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
