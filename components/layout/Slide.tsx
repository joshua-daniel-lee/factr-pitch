'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideProps {
  id: string;
  children: ReactNode;
  background?: 'white' | 'gray' | 'lavender' | 'dark' | 'gradient';
  className?: string;
}

export default function Slide({ id, children, background = 'white', className = '' }: SlideProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    lavender: 'bg-purple-50',
    dark: 'bg-bunting text-white',
    gradient: 'gradient-animated text-white'
  };

  return (
    <motion.section
      id={id}
      className={`min-h-screen pt-20 flex items-center justify-center snap-start ${backgroundStyles[background]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
