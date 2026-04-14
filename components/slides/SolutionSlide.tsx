'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import ValuePropCard from '@/components/ui/ValuePropCard';
import { VALUE_PROP_CARDS } from '@/constants/slides';
import { fadeInLeft, fadeInRight, DELAY, VIEWPORT } from '@/constants/animations';

export default function SolutionSlide() {
  return (
    <Slide id="solution" background="white">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Content - Mobile Optimized */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              transition={fadeInLeft.transition(0)}
              viewport={VIEWPORT}
            >
              <Heading level="h2" className="text-left mb-3 sm:mb-4 gradient-text text-2xl sm:text-3xl lg:text-4xl">
                One Key, All Paywalls
              </Heading>
              <Text variant="lead" className="text-gray-700 text-left mb-4 sm:mb-6 text-base sm:text-lg">
                A frictionless, credit-based access layer that utilizes browser-level identity to unlock premium journalism across the web
              </Text>
            </motion.div>

            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              transition={fadeInLeft.transition(DELAY.medium)}
              viewport={VIEWPORT}
            >
              <Text variant="body" className="text-gray-600 leading-relaxed text-left mb-6 sm:mb-8 text-sm sm:text-base">
                A credit-based marketplace solving the "Subscription Trap" with seamless access to premium journalism through a single "Universal Key" and dynamic yield-optimization.
              </Text>
            </motion.div>

            {/* Three Value Propositions - Cards Stack on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {VALUE_PROP_CARDS.map((card, index) => (
                <ValuePropCard key={index} {...card} />
              ))}
            </div>
          </div>

          {/* Right Column: App Mockup - Mobile Optimized */}
          <motion.div
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            transition={fadeInRight.transition(DELAY.medium)}
            viewport={VIEWPORT}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full aspect-[4/3] relative rounded-2xl shadow-2xl overflow-hidden"
            >
              <Image
                src="/mockups/app-interface.png"
                alt="FactrAI App Mockup"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Slide>
  );
}
