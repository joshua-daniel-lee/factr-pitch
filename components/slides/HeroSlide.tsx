'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { scaleIn, floating, hover3D, fadeInUp, DELAY } from '@/constants/animations';

export default function HeroSlide() {
  return (
    <Slide id="hero" background="white">
      <Container className="text-center h-full flex flex-col items-center justify-center px-4">
        {/* Hero Image - Mobile Optimized */}
        <motion.div
          initial={scaleIn.initial}
          animate={{
            ...scaleIn.animate,
            ...floating().animate,
          }}
          transition={{
            ...scaleIn.transition,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            },
          }}
          whileHover={hover3D}
          className="mb-6 sm:mb-8"
        >
          <Image
            src="/illustrations/hero-key.svg"
            alt="Universal Key to Premium Journalism"
            width={350}
            height={191}
            className="object-contain w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[350px]"
            priority
            quality={90}
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 350px"
          />
        </motion.div>

        {/* Main Heading - Mobile Responsive */}
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.long)}
        >
          <Heading
            level="h1"
            className="mb-4 sm:mb-6 gradient-text text-3xl sm:text-4xl lg:text-5xl"
          >
            The Universal Key to Premium Journalism
          </Heading>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.veryLong)}
          className="mb-8 sm:mb-12"
        >
          <Text variant="lead" className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            Premium Insights, Minus the Paywalls
          </Text>
        </motion.div>

        {/* Founders Mini Avatars - Mobile Optimized */}
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.extraLong)}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center"
        >
          {/* Danyang */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-cyan-400 shadow-lg mb-2">
              <Image
                src="/team/danyang.png"
                alt="Danyang Wang"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">Danyang Wang</p>
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
              Hustler
            </div>
          </div>

          {/* Joshua */}
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-orange-400 shadow-lg mb-2">
              <Image
                src="/team/joshua.png"
                alt="Joshua Lee"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 64px, 80px"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900">Joshua Lee</p>
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
              Hacker
            </div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition(DELAY.hero)}
          className="mt-6 sm:mt-8"
        >
          <Text variant="body" className="text-gray-500 max-w-4xl mx-auto text-xs sm:text-sm">
            Restoring the economic bridge between world-class journalism and the everyday consumer
          </Text>
        </motion.div>
      </Container>
    </Slide>
  );
}
