'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CreditCard, Share2, Coins, TrendingUp } from 'lucide-react';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { fadeInUp, fadeInRight, VIEWPORT } from '@/constants/animations';

export default function BusinessModelSlide() {
  return (
    <Slide id="business" background="white">
      <Container size="xl">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(0)}
            viewport={VIEWPORT}
          >
            <Heading level="h2" className="mb-3 sm:mb-4 gradient-text text-2xl sm:text-3xl lg:text-4xl">
              A Sustainable Revenue Model
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg">
              Multiple streams create resilience while aligning publisher and users
            </Text>
          </motion.div>
        </div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Revenue Streams + Key Economics */}
          <div className="space-y-4 sm:space-y-6">
            {/* 3 Revenue Stream Cards - Stack on mobile, 3 columns on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Stream 1: Subscription-First */}
              <div className="bg-white border-2 border-cyan-400 rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] sm:text-xs font-semibold text-cyan-600 uppercase tracking-wide">Stream 1</p>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">Subscription-First</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                  Recurring monthly revenue from credit-based platform access
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Tiered access by usage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Scalable SaaS economics</span>
                  </li>
                </ul>
              </div>

              {/* Stream 2: Affiliate Partnership */}
              <div className="bg-white border-2 border-cyan-400 rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] sm:text-xs font-semibold text-cyan-600 uppercase tracking-wide">Stream 2</p>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">Affiliate Partnership</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                  Commission when users upgrade to direct publisher subscriptions
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Discovery engine, not competitor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Aligned publisher incentives</span>
                  </li>
                </ul>
              </div>

              {/* Stream 3: Credit Economy */}
              <div className="bg-white border-2 border-cyan-400 rounded-xl p-4 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] sm:text-xs font-semibold text-cyan-600 uppercase tracking-wide">Stream 3</p>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">Credit Economy</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                  Unused credits contribute to sustainable margins
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>ClassPass-style model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Reduces user friction</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Economics - Text Only */}
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              transition={fadeInUp.transition(0.4)}
              viewport={VIEWPORT}
              className="pt-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Key Economics</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                Multiple revenue streams de-risk the model while maintaining sustainability
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-base sm:text-lg">•</span>
                  <span>Publishers receive majority of credit revenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-base sm:text-lg">•</span>
                  <span>Data reciprocity unlike Apple News+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-base sm:text-lg">•</span>
                  <span>Network effects improve unit economics at scale</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Subscription Tiers Image - Mobile Optimized */}
          <motion.div
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            transition={fadeInRight.transition(0)}
            viewport={VIEWPORT}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <Image
              src="/business-model/subscription-tiers.png"
              alt="Subscription tier pricing visualization"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </Container>
    </Slide>
  );
}
