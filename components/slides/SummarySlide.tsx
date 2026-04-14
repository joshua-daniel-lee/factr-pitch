'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import StatCard from '@/components/ui/StatCard';
import { PUBLISHER_LOGOS, STAT_CARDS } from '@/constants/slides';
import { fadeInLeft, DELAY, VIEWPORT } from '@/constants/animations';

export default function SummarySlide() {
  return (
    <Slide id="summary" background="white">
      <Container size="xl" className="overflow-x-hidden">
        {/* Publisher Logos Carousel - Mobile Optimized */}
        <div className="mb-8 sm:mb-12 overflow-hidden w-full">
          <div className="relative w-full overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            {/* Scrolling container - Responsive animation */}
            <div className="flex gap-8 sm:gap-12 items-center overflow-hidden w-full">
              <motion.div
                className="flex gap-8 sm:gap-12 items-center min-w-max"
                animate={{
                  x: [0, -1056], // 8 logos × (96px mobile + 36px gap) = 1056px base, scales up
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              >
                {/* Triple logos for seamless loop */}
                {[1, 2, 3].map((set) =>
                  PUBLISHER_LOGOS.map((logo, index) => (
                    <div
                      key={`logo-${set}-${index}`}
                      className="flex-shrink-0 w-20 sm:w-24 md:w-32 h-10 sm:h-12 md:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={`/publishers/${logo}`}
                        alt={logo.replace('.png', '')}
                        fill
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                        className="object-contain"
                      />
                    </div>
                  ))
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              transition={fadeInLeft.transition(0)}
              viewport={VIEWPORT}
            >
              <Heading level="h2" className="text-left mb-4 sm:mb-6 gradient-text text-2xl sm:text-3xl lg:text-4xl">
                The Subscription Trap
              </Heading>
              <Text variant="lead" className="text-gray-700 text-left text-base sm:text-lg">
                Digital publishers are trapped in a monetization bottleneck where rigid, high-cost subscriptions alienate 95% of high-intent readers
              </Text>
            </motion.div>

            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              transition={fadeInLeft.transition(DELAY.medium)}
              viewport={VIEWPORT}
            >
              <Text variant="body" className="text-gray-600 leading-relaxed text-left text-sm sm:text-base">
                U.S. search traffic to news publishers plummeted by 38%<sup className="text-xs">1</sup> since late 2024 due to AI-integrated search overviews, while zero-click searches surged to 69%<sup className="text-xs">2</sup> in 2025—resulting in an estimated $2 billion<sup className="text-xs">3</sup> annual advertising revenue loss for the sector.<sup className="text-xs">4</sup>
              </Text>
            </motion.div>

            {/* Inline Quote */}
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              transition={fadeInLeft.transition(DELAY.long)}
              viewport={VIEWPORT}
            >
              <Text variant="small" className="text-gray-500 italic text-left text-xs sm:text-sm">
                "This prevents universal access for information workers and creates a systemic crisis as referral traffic vanishes in a zero-click ecosystem." — Digital Content Next, 2025
              </Text>
            </motion.div>
          </div>

          {/* Right Column: Stat Cards - Mobile Optimized Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {STAT_CARDS.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
          </div>
        </div>
      </Container>
    </Slide>
  );
}
