'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { fadeInUp, VIEWPORT } from '@/constants/animations';

export default function HowItWorksSlide() {
  return (
    <Slide id="how-it-works" background="white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(0)}
            viewport={VIEWPORT}
          >
            <Heading level="h2" className="mb-4 gradient-text text-2xl sm:text-3xl lg:text-4xl">
              Three-Step Value Flow
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg">
              Universal browser key powered by FedCM creates seamless access for users and monetization for publishers
            </Text>
          </motion.div>
        </div>

        {/* 3-Card Process Flow - Mobile Stacks Vertically */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Pulsing Line - Badge to Badge - Hidden on Mobile */}
          <motion.div
            className="hidden md:block absolute -top-2 h-1 rounded-full shadow-lg shadow-cyan-500/30 mx-auto"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #06c0d7 20%, white 50%, #f77024 80%, transparent 100%)',
              backgroundSize: '200% 100%',
              filter: 'blur(2px)',
              left: '16.67%',
              right: '16.67%',
            }}
            animate={{
              backgroundPosition: ['100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Card 1: User Authentication - Image TOP */}
          <div className="relative pt-10 sm:pt-12">
            {/* Step Number Badge - Floating Above */}
            <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
              1
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50/30 border-2 border-gray-200 rounded-2xl p-4 sm:p-6 h-full hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col">
              {/* Image - TOP */}
              <div className="relative z-10 w-full h-40 rounded-xl overflow-hidden mb-6 bg-white border border-gray-200">
                <Image
                  src="/how-it-works/step-1-auth.svg"
                  alt="User Authentication with FedCM"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  User Authentication
                </h3>
                <p className="text-sm font-semibold text-cyan-600 mb-4">
                  Browser-level identity (FedCM)
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">→</span>
                    <span>One-tap OAuth/JWT token</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">→</span>
                    <span>No 3rd-party cookies needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Content Access - Image BOTTOM */}
          <div className="relative pt-10 sm:pt-12">
            {/* Step Number Badge - Floating Above */}
            <div className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
              2
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-gray-200 rounded-2xl p-4 sm:p-6 h-full hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 flex flex-col">
              {/* Content */}
              <div className="flex-1 flex flex-col mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Content Access
                </h3>
                <p className="text-sm font-semibold text-cyan-600 mb-4">
                  AI-powered pricing engine
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">→</span>
                    <span>Dynamic credit allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">→</span>
                    <span>Instant article unlock</span>
                  </li>
                </ul>
              </div>

              {/* Image - BOTTOM */}
              <div className="relative z-10 w-full h-40 rounded-xl overflow-hidden bg-white border border-gray-200">
                <Image
                  src="/how-it-works/step-2-access.svg"
                  alt="Content Access with AI-powered pricing"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Card 3: Publisher Payout - Image MIDDLE */}
          <div className="relative pt-10 sm:pt-12">
            {/* CSS Keyframe for Pulsing Glow */}
            <style jsx>{`
              @keyframes pulse-glow {
                0%,
                100% {
                  box-shadow: 0 20px 25px -5px rgba(247, 112, 36, 0.1),
                    0 8px 10px -6px rgba(247, 112, 36, 0.1);
                }
                50% {
                  box-shadow: 0 25px 50px -12px rgba(247, 112, 36, 0.4),
                    0 12px 20px -8px rgba(247, 112, 36, 0.3),
                    0 0 40px rgba(247, 112, 36, 0.2);
                }
              }
            `}</style>

            {/* Step Number Badge - Floating Above */}
            <div className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
              3
            </div>

            {/* Card with Vibrant Orange Border + Pulsing Glow */}
            <div className="relative">
              <div
                className="bg-gradient-to-br from-white to-orange-50/30 border-2 border-orange-400 rounded-2xl p-4 sm:p-6 h-full hover:scale-[1.02] transition-all duration-300 flex flex-col"
                style={{
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              >
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Publisher Payout
                </h3>

                {/* Image - MIDDLE */}
                <div className="relative z-10 w-full h-40 rounded-xl overflow-hidden mb-4 bg-white border border-gray-200">
                  <Image
                    src="/how-it-works/step-3-payout.svg"
                    alt="Publisher Payout with revenue sharing"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>

                {/* Description */}
                <p className="text-sm font-semibold text-cyan-600 mb-4">
                  65% of credit revenue
                </p>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    <span>$0.20-$0.80 per read</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">→</span>
                    <span>Plus 1st-party data sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
