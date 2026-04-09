'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Text from './Text';
import { GRADIENT_BORDER } from '@/constants/design-tokens';
import { DURATION, VIEWPORT, hoverScale } from '@/constants/animations';

interface PainPointCardProps {
  emoji: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  delay?: number;
}

export default function PainPointCard({
  emoji,
  title,
  imageSrc,
  imageAlt,
  description,
  delay = 0,
}: PainPointCardProps) {
  return (
    <div
      className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer group hover:scale-105 hover:-translate-y-1"
      style={GRADIENT_BORDER.orangeStrong}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-1.5 rounded-lg mb-3 text-center font-semibold text-sm flex items-center justify-center gap-2">
        <span className="text-lg">{emoji}</span>
        {title}
      </div>
      
      {/* Illustration */}
      <div className="bg-white rounded-lg h-36 mb-3 flex items-center justify-center flex-shrink-0 overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={120}
            height={120}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Description */}
      <div className="flex-1">
        <Text variant="small" className="text-gray-600 leading-relaxed text-xs">
          {description}
        </Text>
      </div>
    </div>
  );
}
