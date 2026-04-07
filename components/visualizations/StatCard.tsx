'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import AnimatedNumber from './AnimatedNumber';

interface StatCardProps {
  value: number | string;
  label: string;
  description?: string;
  gradient?: boolean;
  icon?: ReactNode;
  suffix?: string;
  prefix?: string;
  animated?: boolean;
}

export default function StatCard({ 
  value, 
  label, 
  description,
  gradient = false,
  icon,
  suffix = '',
  prefix = '',
  animated = true
}: StatCardProps) {
  const isNumber = typeof value === 'number';

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 border-2 border-gray-100 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-elevated)' }}
    >
      {icon && (
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
      )}
      
      <div className={`text-5xl md:text-6xl font-newsreader font-bold mb-2 ${gradient ? 'gradient-text' : 'text-bunting'}`}>
        {animated && isNumber ? (
          <AnimatedNumber value={value} suffix={suffix} prefix={prefix} />
        ) : (
          <span>{prefix}{value}{suffix}</span>
        )}
      </div>
      
      <div className="text-lg font-roboto font-medium text-gray-700 mb-1">
        {label}
      </div>
      
      {description && (
        <div className="text-sm text-gray-500 font-roboto">
          {description}
        </div>
      )}
    </motion.div>
  );
}
