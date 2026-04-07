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
      {/* Up Arrow */}
      {hasPrev && (
        <motion.button
          onClick={() => scrollToSection(activeIndex - 1)}
          className="p-2 rounded-full bg-accent/40 backdrop-blur-sm hover:bg-accent/60 transition-all shadow-glow-accent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 24px rgb(247 112 36 / 0.4), 0 4px 12px -2px rgb(0 0 0 / 0.05)",
              "0 0 40px rgb(247 112 36 / 0.6), 0 4px 12px -2px rgb(0 0 0 / 0.05)",
              "0 0 24px rgb(247 112 36 / 0.4), 0 4px 12px -2px rgb(0 0 0 / 0.05)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label="Previous section"
        >
          <ChevronUp className="w-4 h-4 text-white" />
        </motion.button>
      )}

      {/* Down Arrow with bounce animation */}
      {hasNext && (
        <motion.button
          onClick={() => scrollToSection(activeIndex + 1)}
          className="p-2 rounded-full bg-primary/80 backdrop-blur-sm hover:bg-primary transition-all shadow-glow-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 24px rgb(6 192 215 / 0.6), 0 4px 12px -2px rgb(0 0 0 / 0.05)",
              "0 0 40px rgb(6 192 215 / 0.8), 0 4px 12px -2px rgb(0 0 0 / 0.05)",
              "0 0 24px rgb(6 192 215 / 0.6), 0 4px 12px -2px rgb(0 0 0 / 0.05)",
            ],
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          aria-label="Next section"
        >
          <ChevronDown className="w-4 h-4 text-white" />
        </motion.button>
      )}
    </div>
  );
}
