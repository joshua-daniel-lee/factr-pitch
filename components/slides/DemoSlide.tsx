'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import FeaturePill from '@/components/ui/FeaturePill';
import { DEMO_FEATURES } from '@/constants/slides';
import { scaleIn, fadeInUp, DELAY, VIEWPORT } from '@/constants/animations';

export default function DemoSlide() {
  return (
    <Slide id="demo" background="white">
      <Container className="text-center h-full flex flex-col items-center justify-center px-4">
        {/* Hero Key Image - Mobile Optimized */}
        <motion.div
          initial={scaleIn.initial}
          whileInView={{
            ...scaleIn.animate,
            y: [0, -12, 0],
          }}
          transition={{
            scale: { duration: 0.8, ease: 'easeOut' },
            opacity: { duration: 0.8, ease: 'easeOut' },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            },
          }}
          viewport={VIEWPORT}
          whileHover={{
            rotateY: 5,
            rotateX: -3,
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="mb-6 sm:mb-8"
        >
          <Image
            src="/illustrations/hero-key.svg"
            alt="Universal Key to Premium Journalism"
            width={280}
            height={153}
            className="object-contain w-full max-w-[200px] sm:max-w-[280px]"
            sizes="(max-width: 640px) 200px, 280px"
          />
        </motion.div>

        {/* Heading - Mobile Responsive */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition(0)}
          viewport={VIEWPORT}
        >
          <Heading level="h1" className="mb-4 sm:mb-6 gradient-text text-3xl sm:text-4xl lg:text-5xl">
            See It In Action
          </Heading>
        </motion.div>

        {/* Lead Text - Mobile Optimized */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.medium)}
          viewport={VIEWPORT}
          className="mb-8 sm:mb-12"
        >
          <Text variant="lead" className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            Experience the power of universal access to premium journalism
          </Text>
        </motion.div>

        {/* CTA Button - Touch Optimized */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.long)}
          viewport={VIEWPORT}
        >
          <Button
            variant="gradient"
            size="lg"
            href="https://factr-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-80 shadow-lg text-base sm:text-lg py-4 sm:py-6"
          >
            Launch Interactive Demo →
          </Button>
        </motion.div>

        {/* Feature Pills - Mobile Optimized Wrapping */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.long + 0.2)}
          viewport={VIEWPORT}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {DEMO_FEATURES.map((feature) => (
            <FeaturePill key={feature} variant="orange">
              {feature}
            </FeaturePill>
          ))}
        </motion.div>
      </Container>
    </Slide>
  );
}
