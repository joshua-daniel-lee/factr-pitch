'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { GRADIENT_BORDER } from '@/constants/design-tokens';
import { DURATION, VIEWPORT } from '@/constants/animations';

interface ValuePropCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
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

export default function ValuePropCard({
  icon: Icon,
  title,
  description,
  variant,
  delay = 0,
}: ValuePropCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION.normal, delay }}
      viewport={{ once: VIEWPORT.once }}
      className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
      style={styles.border}
    >
      <Icon className={`w-8 h-8 ${styles.iconColor} mb-3`} />
      <div className="text-lg font-bold text-gray-900 mb-1">{title}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </motion.div>
  );
}
