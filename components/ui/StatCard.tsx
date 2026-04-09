'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { GRADIENT_BORDER } from '@/constants/design-tokens';
import { DURATION, VIEWPORT } from '@/constants/animations';

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  footnote?: number;
  variant: 'cyan' | 'orange';
  delay?: number;
}

const VARIANT_STYLES = {
  cyan: {
    iconColor: 'text-cyan-600',
    border: GRADIENT_BORDER.cyan,
  },
  orange: {
    iconColor: 'text-orange-600',
    border: GRADIENT_BORDER.orange,
  },
};

export default function StatCard({
  icon: Icon,
  value,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  footnote,
  variant,
  delay = 0,
}: StatCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
      style={styles.border}
    >
      <Icon className={`w-8 h-8 ${styles.iconColor} mb-3`} />
      <div className="text-3xl font-bold text-gray-900 mb-1">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        {footnote && <sup className="text-xs">{footnote}</sup>}
      </div>
      <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      <div className="text-xs text-gray-500">{sublabel}</div>
    </div>
  );
}
