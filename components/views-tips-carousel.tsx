'use client'
import Card from "@/components/ui/carousel-card";

// Define tip data with placeholder content
const TIPS_DATA = [
  {
    id: 1,
    imgUrl: '/images/Views /1.png',
    content: 'Consistency is key. Post at least once daily to maintain algorithm visibility and keep your audience engaged.',
  },
  {
    id: 2,
    imgUrl: '/images/Views /2.png',
    content: 'Find your niche and stick to it. Specialized content performs better than generic content.',
  },
  {
    id: 3,
    imgUrl: '/images/Views /3.png',
    content: 'Analyze your metrics to understand what content resonates with your audience, then create more of it.',
  },
  {
    id: 4,
    imgUrl: '/images/Views /4.png',
    content: 'Engage with comments on your posts within the first hour to boost visibility in the algorithm.',
  },
  {
    id: 5,
    imgUrl: '/images/Views /5.png',
    content: 'Use trending sounds, effects, and hashtags to increase discoverability of your content.',
  },
  {
    id: 6,
    imgUrl: '/images/Views /6.png',
    content: "Create content that evokes emotion - whether it's laughter, inspiration, or curiosity.",
  },
  {
    id: 7,
    imgUrl: '/images/Views /7.png',
    content: "Cross-promote your content on multiple platforms to expand your reach and visibility.",
  },
  {
    id: 8,
    imgUrl: '/images/Views /8.png',
    content: 'Collaborate with other creators to tap into their audience and grow your following.',
  },
];

const ViewsTipsCarousel = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-medium mb-6 cursor-pointer hover:text-blue-600 transition-colors">
          Tips on how to get these kind of views. (Click on it to reveal)
        </h2>
        <div className="mb-8">
          <Card data={TIPS_DATA} cardsPerView={4} />
        </div>
      </div>
    </div>
  );
};

export default ViewsTipsCarousel;
