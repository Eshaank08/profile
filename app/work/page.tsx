'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ViewsTipsCarousel from '@/components/views-tips-carousel';
import { ServiceComparison } from '@/components/service-comparison';
import { TestimonialsMarquee } from '@/components/testimonials-marquee';
import CaseStudyCarousel from '@/components/case-study-carousel';
import { CTAButton } from '@/components/ui/cta-button';

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

  // Portfolio items will be added later

  // No longer need handleBackClick as we're using direct Link

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link href="/" className="flex items-center mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-3">I am the marketing guy</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            I&apos;ve worked with over 150 individuals and businesses to help them establish a strong personal brand and marketing strategy.
          </p>
        </div>
        
        {/* Content Sections */}
        <div className="mb-12">
          <ViewsTipsCarousel />
          
          <CaseStudyCarousel />
          <CTAButton />
          
          <ServiceComparison />
          <CTAButton />
          
          <TestimonialsMarquee />
          <CTAButton />
        </div>
        
        {/* End of content sections */}
      </div>
    </div>
  );
}
