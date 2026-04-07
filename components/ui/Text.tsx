import { ReactNode } from 'react';

type TextVariant = 'body' | 'lead' | 'small' | 'caption';

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
}

export default function Text({ 
  variant = 'body', 
  children, 
  className = ''
}: TextProps) {
  const variantStyles = {
    body: 'text-base md:text-lg leading-relaxed',
    lead: 'text-xl md:text-2xl leading-relaxed font-light',
    small: 'text-sm md:text-base',
    caption: 'text-xs md:text-sm text-gray-600'
  };

  return (
    <p className={`font-roboto ${variantStyles[variant]} ${className}`}>
      {children}
    </p>
  );
}
