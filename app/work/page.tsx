'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WorkPage() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Always use light mode
  useEffect(() => {
    // Always default to light mode
    setDarkMode(false);
    // Save preference to localStorage
    localStorage.setItem('darkMode', 'false');
  }, []);
  
  // Update document class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Define portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Client Portfolio Growth',
      description: 'Helped a client grow their Instagram following from 5K to 50K in 6 months with targeted content strategy.',
      image: '/images/work/portfolio-1.jpg'
    },
    {
      id: 2,
      title: 'Brand Identity Redesign',
      description: 'Complete brand overhaul for a tech startup resulting in 300% increase in engagement.',
      image: '/images/work/wolf.jpg'
    },
    {
      id: 3,
      title: 'Content Strategy Development',
      description: 'Developed a comprehensive content calendar and posting strategy for multiple clients.',
      image: '/images/work/portfolio-3.jpg'
    },
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={handleBackClick}
          className="flex items-center mb-8 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Home</span>
        </button>
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-3">I am the marketing guy</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            I've worked with over 150 individuals and businesses to help them establish a strong personal brand and marketing strategy.
          </p>
        </div>
        
        {/* Placeholder */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">I will make this page soon</h2>
        </div>
        
        {/* Contact */}
        <div>
          <h2 className="text-2xl font-medium mb-6">Work With Me</h2>
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <p className="mb-4">Interested in working together? Book a call to discuss your personal branding needs.</p>
            <Link 
              href="https://cal.com/eshaan-kansal/15min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-3 rounded-md ${darkMode ? 'bg-blue-600' : 'bg-black'} text-white font-medium transition-opacity hover:opacity-90`}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
