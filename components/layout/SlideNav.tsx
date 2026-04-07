'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const sections = [
  'hero',
  'summary',
  'problem',
  'customers',
  'solution',
  'how-it-works',
  'technology',
  'business',
  'market',
  'financials',
  'investment',
  'moat',
  'vision',
  'capstone',
  'contact'
];

export default function SlideNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const currentSection = sectionElements.findIndex(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });

      if (currentSection !== -1) {
        setActiveIndex(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < sections.length - 1;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center space-y-2">
      {/* Up Arrow with pulse rings */}
      {hasPrev && (
        <div className="relative">
          {/* Orange pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent"
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent"
            animate={{
              scale: [1, 2.5],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
          
          <motion.button
            onClick={() => scrollToSection(activeIndex - 1)}
            className="relative p-3 rounded-full bg-accent/40 backdrop-blur-sm hover:bg-accent/60 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous section"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      )}

      {/* Down Arrow with bounce and pulse rings */}
      {hasNext && (
        <div className="relative">
          {/* Cyan pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 2.5],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
          
          <motion.button
            onClick={() => scrollToSection(activeIndex + 1)}
            className="relative p-3 rounded-full bg-primary/80 backdrop-blur-sm hover:bg-primary transition-all shadow-glow-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={bounceAnimation}
            aria-label="Next section"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      )}
    </div>
  );
}
