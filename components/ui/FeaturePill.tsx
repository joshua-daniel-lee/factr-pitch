'use client';

import Text from './Text';

interface FeaturePillProps {
  children: string;
  variant?: 'cyan' | 'orange';
}

const VARIANT_STYLES = {
  cyan: {
    background: 'bg-gradient-to-r from-cyan-50 to-blue-50',
    border: 'border-cyan-200 hover:border-cyan-300',
  },
  orange: {
    background: 'bg-gradient-to-r from-orange-50 to-orange-100',
    border: 'border-orange-200 hover:border-orange-300',
  },
};

export default function FeaturePill({ children, variant = 'cyan' }: FeaturePillProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`px-4 py-1.5 ${styles.background} rounded-full border ${styles.border} transition-all hover:shadow-sm`}
    >
      <Text variant="small" className="font-medium text-gray-700 text-xs whitespace-nowrap">
        {children}
      </Text>
    </div>
  );
}
