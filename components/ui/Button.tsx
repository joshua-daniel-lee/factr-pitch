'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'accent' | 'dark' | 'outline';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  variant = 'primary', 
  children, 
  onClick, 
  href,
  className = '',
  size = 'md'
}: ButtonProps) {
  const baseStyles = 'rounded-full font-medium transition-all duration-300 inline-block text-center';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-3.5 text-lg'
  };
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:brightness-110',
    accent: 'bg-accent text-white hover:brightness-110',
    dark: 'bg-bunting text-white hover:bg-opacity-90',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white'
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionComponent>
  );
}
