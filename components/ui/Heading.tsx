import { ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  gradient?: boolean;
  className?: string;
}

export default function Heading({ 
  level = 'h2', 
  children, 
  gradient = false,
  className = ''
}: HeadingProps) {
  const Component = level;
  
  // H1 uses Inter (modern sans-serif), others use Newsreader (serif)
  const baseStyles = level === 'h1' ? 'font-inter font-bold' : 'font-newsreader font-bold';
  
  const sizeStyles = {
    h1: 'text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-4xl md:text-5xl lg:text-6xl',
    h3: 'text-3xl md:text-4xl',
    h4: 'text-2xl md:text-3xl',
    h5: 'text-xl md:text-2xl',
    h6: 'text-lg md:text-xl'
  };

  const gradientClass = gradient ? 'gradient-text' : '';
  
  return (
    <Component className={`${baseStyles} ${sizeStyles[level]} ${gradientClass} ${className}`}>
      {children}
    </Component>
  );
}
