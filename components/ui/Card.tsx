'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type CardVariant = 'default' | 'glass' | 'gradient';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ 
  variant = 'default', 
  children, 
  className = '',
  hoverable = true
}: CardProps) {
  const baseStyles = 'rounded-3xl p-8 shadow-soft';
  
  const variantStyles = {
    default: 'bg-white border border-gray-100',
    glass: 'glass',
    gradient: 'gradient-primary text-white'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (!hoverable) {
    return (
      <div className={combinedStyles}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={combinedStyles}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}
