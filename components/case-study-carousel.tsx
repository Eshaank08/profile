"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type CaseStudy = {
  image: string;
  title: string;
  client: string;
  description: string;
};

// Case study data with local images in the specified sequence (png 4, png 3, png 1, png 2)
const defaultCaseStudies: CaseStudy[] = [
  {
    image: "/images/Untitled design 2/4.png",
    title: "Full-Scale Marketing Infrastructure",
    client: "Awarefluence",
    description: "I helped the client build a whole funnel strategy to generate leads through inbound, built a complete content system with different types of content pillars, and implemented CRMs for managing leads, nourishing them and converting them.",
  },
  {
    image: "/images/Untitled design 2/3.png",
    title: "Marketing Agency Setup",
    client: "Dhruv Singh",
    description: "Helped the client to set up their own marketing agency, from client acquisition to service delivery and establishing branding pillars to support the entire agency operation.",
  },
  {
    image: "/images/Untitled design 2/1.png",
    title: "Strategic Consultation",
    client: "Marquebe",
    description: "Provided targeted consultation on business setup strategy. The client successfully implemented the advice independently, creating a functional business without requiring hands-on assistance.",
  },
  {
    image: "/images/Untitled design 2/2.png",
    title: "Consultation Business Launch",
    client: "Hasin",
    description: "Helped establish a complete consultation business. The client had extensive knowledge but needed guidance on business setup and client acquisition strategies.",
  },
];

const CaseStudyCarousel = ({
  caseStudies = defaultCaseStudies,
  autoplay = true,
}: {
  caseStudies?: CaseStudy[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % caseStudies.length);
  }, [caseStudies.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="w-full py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-50">
        Case Studies
      </h2>
      
      <div className="mx-auto max-w-6xl">
        <div className="relative grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-16">
          {/* Image Section */}
          <div className="flex items-center justify-center">
              <div className="relative h-80 w-full max-w-sm">
                <AnimatePresence>
                  {caseStudies.map((study: CaseStudy, index: number) => (
                    <motion.div
                      key={study.title}
                      initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.5,
                        scale: isActive(index) ? 1 : 0.9,
                        y: isActive(index) ? 0 : 20,
                        zIndex: isActive(index) ? caseStudies.length : caseStudies.length - Math.abs(index - active),
                        rotate: isActive(index) ? '0deg' : randomRotate(),
                      }}
                      exit={{ opacity: 0, scale: 0.9, y: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom h-full w-full overflow-hidden rounded-2xl shadow-xl"
                      style={{ perspective: '1000px' }}
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        width={700}
                        height={700}
                        draggable={false}
                        className="h-full w-full object-cover object-center"
                        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                        data-component-name="CaseStudyCarousel"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${study.title.charAt(0)}`;
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
          </div>

          {/* Text and Controls Section */}
          <div className="flex flex-col justify-center py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                    {caseStudies[active].title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {caseStudies[active].client}
                  </p>
                  <motion.p className="mt-8 text-lg text-slate-700 dark:text-slate-300">
                    {caseStudies[active].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-4 pt-12">
              <button
                onClick={handlePrev}
                aria-label="Previous case study"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-500"
              >
                <ArrowLeft className="h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:-translate-x-1 dark:text-slate-300" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next case study"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-500"
              >
                <ArrowRight className="h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:translate-x-1 dark:text-slate-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarousel;
