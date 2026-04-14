'use client';

import { motion } from 'framer-motion';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import PainPointCard from '@/components/ui/PainPointCard';
import FeaturePill from '@/components/ui/FeaturePill';
import { USER_PERSONAS, PAIN_POINT_CARDS } from '@/constants/slides';
import { fadeInUp, DELAY, VIEWPORT } from '@/constants/animations';

export default function ProductivityGapSlide() {
  return (
    <Slide id="customers" background="white">
      <Container size="xl">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(0)}
            viewport={VIEWPORT}
          >
            <Heading level="h2" className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">
              <span className="gradient-text">The Productivity Gap</span>
            </Heading>
          </motion.div>
          
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(DELAY.medium)}
            viewport={VIEWPORT}
          >
            <Text variant="lead" className="max-w-4xl mx-auto text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
              The modern reader is exhausted by friction, suffering from both financial subscription fatigue and the daily loss of their most valuable asset: <strong className="text-cyan-600">TIME</strong>
            </Text>
          </motion.div>

          {/* Target User Personas - Multiple Pills - Mobile Optimized */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(DELAY.long)}
            viewport={VIEWPORT}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {USER_PERSONAS.map((persona) => (
              <FeaturePill key={persona} variant="cyan">
                {persona}
              </FeaturePill>
            ))}
          </motion.div>
        </div>

        {/* Three-Panel Pain Journey - Mobile Stacks Vertically */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PAIN_POINT_CARDS.map((card, index) => (
            <PainPointCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </Slide>
  );
}
