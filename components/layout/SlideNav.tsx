'use client';

import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface SlideNavProps {
  prevSection?: string;
  nextSection?: string;
}

export default function SlideNav({ prevSection, nextSection }: SlideNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center space-y-2">
      {/* Up Arrow */}
      {prevSection && (
        <motion.button
          onClick={() => scrollToSection(prevSection)}
          className="p-3 rounded-full bg-accent/80 backdrop-blur-sm hover:bg-accent transition-all shadow-glow-accent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous section"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </motion.button>
      )}

      {/* Down Arrow with bounce animation */}
      {nextSection && (
        <motion.button
          onClick={() => scrollToSection(nextSection)}
          className="p-3 rounded-full bg-primary/80 backdrop-blur-sm hover:bg-primary transition-all shadow-glow-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={bounceAnimation}
          aria-label="Next section"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </div>
  );
}
