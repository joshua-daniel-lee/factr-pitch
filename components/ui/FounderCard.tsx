'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, ExternalLink } from 'lucide-react';
import { GRADIENT_BORDER } from '@/constants/design-tokens';
import { DURATION, VIEWPORT } from '@/constants/animations';

interface FounderCardProps {
  name: string;
  title: string;
  role: 'Hustler' | 'Hacker';
  bio: string;
  imageSrc: string;
  email: string;
  linkedinUrl: string;
  delay?: number;
}

const ROLE_STYLES = {
  Hustler: {
    badgeColor: 'bg-gradient-to-r from-orange-500 to-orange-600',
    border: GRADIENT_BORDER.orange,
  },
  Hacker: {
    badgeColor: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
    border: GRADIENT_BORDER.cyan,
  },
};

export default function FounderCard({
  name,
  title,
  role,
  bio,
  imageSrc,
  email,
  linkedinUrl,
  delay = 0,
}: FounderCardProps) {
  const styles = ROLE_STYLES[role];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION.slow, delay }}
      viewport={{ once: VIEWPORT.once }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      style={styles.border}
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src={imageSrc}
            alt={`${name} - ${title}`}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-3">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
        
        {/* Role Badge */}
        <div className="inline-flex">
          <span className={`${styles.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {role}
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">
        {bio}
      </p>

      {/* Contact Links */}
      <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-colors"
          aria-label={`Email ${name}`}
        >
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-colors"
          aria-label={`${name}'s LinkedIn`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
}
