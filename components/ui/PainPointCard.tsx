'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Text from './Text';

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
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
      style={{
        background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2)) border-box',
        border: '3px solid transparent',
      }}
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
    </motion.div>
  );
}
