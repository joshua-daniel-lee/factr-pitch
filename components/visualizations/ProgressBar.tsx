'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'accent' | 'success';
  height?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({ 
  value, 
  label,
  showPercentage = true,
  color = 'primary',
  height = 'md'
}: ProgressBarProps) {
  const colorStyles = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    success: 'bg-green-500'
  };

  const heightStyles = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6'
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between mb-2 text-sm font-roboto">
          {label && <span className="text-gray-700">{label}</span>}
          {showPercentage && <span className="text-gray-600 font-medium">{value}%</span>}
        </div>
      )}
      
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${heightStyles[height]}`}>
        <motion.div
          className={`${heightStyles[height]} ${colorStyles[color]} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
