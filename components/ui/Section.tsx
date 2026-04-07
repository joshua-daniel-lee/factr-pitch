'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient' | 'lavender';
}

export default function Section({ 
  children, 
  className = '',
  id,
  background = 'white'
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-bunting text-white',
    gradient: 'gradient-animated text-white',
    lavender: 'bg-purple-50'
  };

  return (
    <motion.section
      id={id}
      className={`py-20 ${backgroundStyles[background]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
