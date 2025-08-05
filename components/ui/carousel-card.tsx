'use client'
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the type for card data
interface CardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

const Card = ({ data, showCarousel = true, cardsPerView = 3 }: CardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleCard, setIsSingleCard] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Adjust cards per view for mobile - ensure we show exactly 1 full card on mobile
  const effectiveCardsPerView = isMobile ? 1 : cardsPerView;

  useEffect(() => {
    setIsSingleCard(data?.length === 1);
  }, [data]);

  // Width percentage is calculated inline where needed

  const nextSlide = () => {
    if (isAnimating || !showCarousel || !data) return;

    // Don't allow navigation if there aren't enough cards
    if (data.length <= effectiveCardsPerView) return;

    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % data.length;

    if (containerRef.current) {
      // Apply slide out animation - smoother and slower for mobile
      containerRef.current.style.transition = `transform ${isMobile ? 400 : 300}ms ease-out`;
      containerRef.current.style.transform = `translateX(-${100 / (effectiveCardsPerView + 1)}%)`;

      // After animation completes, reset position and update index
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = "translateX(0)";

          // Force reflow
          void containerRef.current.offsetWidth;

          setIsAnimating(false);
        }
      }, isMobile ? 400 : 300);
    }
  };

  const prevSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= effectiveCardsPerView) return;

    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    
    // Update the index immediately
    setCurrentIndex(prevIndex);

    if (containerRef.current) {
      // Start from the left position (next slide is already loaded)
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(${100 / (effectiveCardsPerView + 1)}%)`;

      // Force reflow
      void containerRef.current.offsetWidth;

      // Then animate to center
      containerRef.current.style.transition = `transform ${isMobile ? 400 : 300}ms ease-out`;
      containerRef.current.style.transform = "translateX(0)";

      setTimeout(() => {
        setIsAnimating(false);
      }, isMobile ? 400 : 300);
    }
  };

  // Calculate which cards to show
  const getVisibleCards = () => {
    if (!showCarousel || !data) return data || [];

    const visibleCards = [];
    const totalCards = data.length;

    // For next slide animation, we need effectiveCardsPerView cards + 1 extra
    for (let i = 0; i < effectiveCardsPerView + 1; i++) {
      const index = (currentIndex + i) % totalCards;
      visibleCards.push(data[index]);
    }

    return visibleCards;
  };

  // Handle touch gestures for swiping
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    // Minimum distance for swipe recognition (in pixels)
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left -> Next slide
        nextSlide();
      } else {
        // Swipe right -> Previous slide
        prevSlide();
      }
    }
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!data || data.length === 0) {
    return <div>No card data available</div>;
  }

  return (
    <div className="w-full px-4 bg-white dark:bg-zinc-900 rounded-lg overflow-hidden">
      <div className={`relative ${isSingleCard ? 'max-w-sm mx-auto' : 'w-full'}`}>
        {/* Carousel Controls */}
        {showCarousel && data.length > cardsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
              disabled={isAnimating}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Cards Container Wrapper - limits visible area */}
        <div className="overflow-hidden pb-4 pt-4" 
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}>
          {/* Sliding Cards Container */}
          <div
            ref={containerRef}
            className="flex"
            style={{
              transform: "translateX(0)",
              width: showCarousel ? `${(effectiveCardsPerView + 1) * 100 / effectiveCardsPerView}%` : '100%'
            }}
          >
            {getVisibleCards().map((card, idx) => (
              <div
                key={`card-${currentIndex}-${idx}`}
                style={{
                  width: `${100 / (effectiveCardsPerView + 1)}%`,
                  minWidth: '220px'
                }}
                className="px-2"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md h-full">
                  <CardContent card={card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Card content component with click-to-reveal functionality
const CardContent = ({ card }: { card: CardData }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className="w-full h-64 cursor-pointer" onClick={toggleContent}>
        <img
          src={card.imgUrl}
          alt=""
          className="w-full h-full object-contain bg-black transition-transform duration-300 hover:scale-105"
        />
      </div>
      {isContentVisible && (
        <div className="absolute inset-0 bg-black/80 text-white p-4 overflow-y-auto">
          <div className="flex justify-between items-start">
            <p className="text-sm flex-1">{card.content}</p>
            <button 
              onClick={toggleContent} 
              className="text-white hover:text-gray-300 ml-2"
              aria-label="Close tip"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Use for mobile breakpoints
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // Consider mobile if width is less than 640px
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export default Card;
