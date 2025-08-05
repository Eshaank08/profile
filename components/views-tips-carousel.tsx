'use client'
import Card from "@/components/ui/carousel-card";

// Define tip data with the user's actual tips
const TIPS_DATA = [
  {
    id: 1,
    imgUrl: '/images/Views /1.png',
    content: 'People say consistency is everything, but even consistency needs strategy, positioning, and progress. If you are not satisfied with what you are doing, you might not be sastisfied with the results also.',
  },
  {
    id: 2,
    imgUrl: '/images/Views /2.png',
    content: 'You always need to position yourself in such a way that people can look upto you for anything - lifestyle, your brand, your service, your knowledge.',
  },
  {
    id: 3,
    imgUrl: '/images/Views /3.png',
    content: 'You can build a while business by just solving problems for people on the internet, there are people who have made money by travelling, there are people who have made millions by selling their products, it all comes down to creating a (FOMO) in people and that\'s the best way to market anything you want.',
  },
  {
    id: 4,
    imgUrl: '/images/Views /4.png',
    content: 'Virality can come from hooks, good script and visuals, but only authenticity can help you retain it and progress further, One viral video does not mean you are interesting enough to watch again and again.',
  },
  {
    id: 5,
    imgUrl: '/images/Views /5.png',
    content: 'People often become blind when they gain followers, if you are not building a community which likes you for who you are, somebody can come and replace you within days.',
  },
  {
    id: 6,
    imgUrl: '/images/Views /6.png',
    content: 'It is not always about perfecting a video when you are starting out, just be someone who wants to share values without expectations. If you keep running behind views, you will not be able to have a long run in this game.',
  },
  {
    id: 7,
    imgUrl: '/images/Views /7.png',
    content: 'You can chase views all you want but it still won\'t get you sales, because you need to connect with an audience. It is the only reason why some people are making thousands of dollars with a few followers and some are broke even with lakhs of them.',
  },
  {
    id: 8,
    imgUrl: '/images/Views /8.png',
    content: 'All these advices are a waste of time to read, if you are not happy with doing what you want, these views can be replicated in any medium which you like, but you need to happy with what you are doing. If you are not happy with your own work, no amount of fame can make you happy.',
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
