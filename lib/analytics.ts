// Analytics utility functions for tracking user interactions with Vercel Analytics
import { track } from '@vercel/analytics';

// Track link clicks with details
export const trackLinkClick = (linkName: string, url: string, category = 'External Link') => {
  track('link_click', {
    link_name: linkName,
    link_url: url,
    category: category
  });
  
  // Also log to console for debugging (remove in production)
  console.log(`Link clicked: ${linkName} -> ${url}`);
};

// Track social media clicks specifically
export const trackSocialClick = (platform: string, url: string) => {
  track('social_click', {
    platform: platform,
    link_url: url
  });
  
  console.log(`Social link clicked: ${platform} -> ${url}`);
};

// Track business/contact links
export const trackBusinessClick = (service: string, url: string) => {
  track('business_click', {
    service: service,
    link_url: url
  });
  
  console.log(`Business link clicked: ${service} -> ${url}`);
}; 