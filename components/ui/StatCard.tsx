'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

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
    gradient: 'linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1))',
  },
  orange: {
    iconColor: 'text-orange-600',
    gradient: 'linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1))',
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
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
      style={{
        background: `linear-gradient(white, white) padding-box, ${styles.gradient} border-box`,
        border: '2px solid transparent',
      }}
    >
      <Icon className={`w-8 h-8 ${styles.iconColor} mb-3`} />
      <div className="text-3xl font-bold text-gray-900 mb-1">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        {footnote && <sup className="text-xs">{footnote}</sup>}
      </div>
      <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      <div className="text-xs text-gray-500">{sublabel}</div>
    </motion.div>
  );
}
