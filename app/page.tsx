'use client';

import { trackSocialClick, trackBusinessClick, trackLinkClick } from '@/lib/analytics';

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center px-8 md:px-12 lg:px-16">
      <div className="max-w-md md:max-w-lg lg:max-w-2xl space-y-4 py-12 mx-auto">
        {/* Name */}
        <h1 className="text-black font-normal text-xl md:text-2xl lg:text-3xl font-playfair-display">Hi, I&apos;m Eshaan Kansal</h1>

        {/* Main description */}
        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">
          21 years old, INTJ-P. 
          <br />
          Indian, living in Germany. I call myself the jack of all trades.
          I am the marketing guy, a bit funny and mostly anxious.
        </p>

        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">I used to play football, now I train like a hybrid athlete and eat burgers for cheatmeals.</p>
        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">This is what I am doing</p>

        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">
          Building a marketplace for you to connect with experts, or show your products to the whole world,  or talk with an AI mentor to help yourself out.{" "}
          <a 
            href="https://www.socialease.space" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg font-playfair-display"
            onClick={() => trackLinkClick('Socialease', 'https://www.socialease.space', 'Product')}
          >
            Socialease
          </a>
        </p>

        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">
          You can just pay me too, if you want help in building apps or with marketing or anyother things haha.{" "}
          <a 
            href="https://calendly.com/eshaankansal0/general-meeting" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg"
            onClick={() => trackBusinessClick('Personal Consulting', 'https://calendly.com/eshaankansal0/general-meeting')}
          >
            Connect with me here
          </a>
        </p>

        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">
        We also help people become experts, and we advise other small and medium sized businesses. If you want to get in touch regarding that{" "}
          <a 
            href="https://cal.com/eshaan-kansal" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg"
            onClick={() => trackBusinessClick('Business Consulting', 'https://cal.com/eshaan-kansal')}
          >
            Connect with me here.
          </a>
        </p>

        <p className="text-black leading-relaxed text-base md:text-lg font-playfair-display">
          You will find me making vlogs on YouTube, sharing my perspectives and documenting my journey on all these
          platforms here:
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 md:gap-4 text-black text-base md:text-lg font-playfair-display">
          <a 
            href="https://www.youtube.com/@eshaankansal/videos" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg"
            onClick={() => trackSocialClick('YouTube', 'https://www.youtube.com/@eshaankansal/videos')}
          >
            YouTube
          </a>
          <a 
            href="https://x.com/eshaankansal" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg"
            onClick={() => trackSocialClick('Twitter/X', 'https://x.com/eshaankansal')}
          >
            X(formerly twitter)
          </a>
          <a 
            href="https://www.linkedin.com/in/eshaan-kansal-277876241/" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg"
            onClick={() => trackSocialClick('LinkedIn', 'https://www.linkedin.com/in/eshaan-kansal-277876241/')}
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/eshaan.kansal" 
            className="italic font-bold no-underline hover:opacity-80 text-base md:text-lg"
            onClick={() => trackSocialClick('Instagram', 'https://www.instagram.com/eshaan.kansal')}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
