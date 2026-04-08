'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

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
    gradient: 'linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1))',
  },
  orange: {
    iconColor: 'text-orange-600',
    gradient: 'linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1))',
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
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
      style={{
        background: `linear-gradient(white, white) padding-box, ${styles.gradient} border-box`,
        border: '2px solid transparent',
      }}
    >
      <Icon className={`w-8 h-8 ${styles.iconColor} mb-3`} />
      <div className="text-lg font-bold text-gray-900 mb-1">{title}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </motion.div>
  );
}
