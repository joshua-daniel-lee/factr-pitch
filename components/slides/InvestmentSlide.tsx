'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { fadeInUp, VIEWPORT } from '@/constants/animations';

export default function InvestmentSlide() {
  return (
    <Slide id="investment" background="white">
      {/* Strong gradient transition to next slide */}
      <div className="absolute inset-0 bg-gradient-to-b from-white from-40% to-cyan-200 -z-10" />
      
      <Container size="xl">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            transition={fadeInUp.transition(0)}
            viewport={VIEWPORT}
          >
            <Heading level="h2" className="mb-3 sm:mb-4 gradient-text text-2xl sm:text-3xl lg:text-4xl">
              The Investment Opportunity
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg">
              Join us in building the future of journalism monetization
            </Text>
          </motion.div>
        </div>

        {/* 3-Column Layout - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: The Investment */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-2xl sm:rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 to-orange-400"
          >
            <div className="bg-gradient-to-br from-cyan-50 to-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 flex flex-col transition-shadow duration-300 h-full">
              {/* Hero Number - Mobile Optimized */}
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-[10px] sm:text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">Raising</p>
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={VIEWPORT}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text mb-1"
                >
                  $300K
                </motion.p>
                <p className="text-base sm:text-lg font-bold text-gray-700">Seed Round</p>
              </div>

              {/* Investment Details */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-between py-2 border-b border-cyan-200">
                  <span className="text-xs font-semibold text-gray-700">Equity</span>
                  <span className="text-sm sm:text-base font-bold text-cyan-600">10%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-cyan-200">
                  <span className="text-xs font-semibold text-gray-700">Runway</span>
                  <span className="text-sm sm:text-base font-bold text-cyan-600">12-15 mo</span>
                </div>
              </div>

              {/* Use of Funds */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">Use of Funds</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-gray-700">🏗️ Platform</span>
                      <span className="text-xs font-bold text-cyan-600">$120K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-gray-700">🚀 Pilots</span>
                      <span className="text-xs font-bold text-cyan-600">$105K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-gray-700">🤝 Publishers</span>
                      <span className="text-xs font-bold text-cyan-600">$75K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: The Returns - HERO CARD - Fixed scaling for mobile/tablet */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ y: -12, scale: 1.05 }}
            className="relative z-10 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl hover:shadow-3xl flex flex-col transition-all duration-300 lg:scale-110"
            animate={{
              boxShadow: [
                '0 25px 50px -12px rgba(247, 112, 36, 0.25), 0 0 40px rgba(247, 112, 36, 0.15)',
                '0 25px 50px -12px rgba(247, 112, 36, 0.35), 0 0 60px rgba(247, 112, 36, 0.25)',
                '0 25px 50px -12px rgba(247, 112, 36, 0.25), 0 0 40px rgba(247, 112, 36, 0.15)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Hero Number - Mobile Optimized */}
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-[10px] sm:text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Projected Return</p>
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={VIEWPORT}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-orange-600 mb-1"
              >
                15x
              </motion.p>
              <p className="text-base sm:text-lg font-bold text-gray-700">Base Case Multiple</p>
            </div>

            {/* Return Metrics */}
            <div className="flex-1 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-orange-200">
                <span className="text-xs font-semibold text-gray-700">Internal Rate of Return (IRR)</span>
                <span className="text-sm sm:text-base font-bold text-orange-600">18.4%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-orange-200">
                <span className="text-xs font-semibold text-gray-700">Year 5 Annual Recurring Revenue (ARR)</span>
                <span className="text-sm sm:text-base font-bold text-orange-600">$6.29M</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-orange-200">
                <span className="text-xs font-semibold text-gray-700">Break-Even</span>
                <span className="text-sm sm:text-base font-bold text-orange-600">Year 5</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Why Invest Now */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-2xl sm:rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 to-orange-400"
          >
            <div className="bg-gradient-to-br from-cyan-50 to-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 flex flex-col transition-shadow duration-300 h-full">
              {/* Header - Mobile Optimized */}
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-[10px] sm:text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Investment Thesis</p>
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-orange-400 flex items-center justify-center mb-2 shadow-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg font-bold text-gray-900">Why Invest Now</p>
              </div>

              {/* Highlights - Mobile Optimized */}
              <div className="flex-1 space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs text-gray-700 leading-relaxed">Exceptional unit economics (11.5x Lifetime Value to Customer Acquisition Cost)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs text-gray-700 leading-relaxed">Fast payback period (5 months)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs text-gray-700 leading-relaxed">$800K Series A planned for Year 2 scale</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs text-gray-700 leading-relaxed">Capital-efficient path to profitability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-xs text-gray-700 leading-relaxed">First-mover in FedCM-powered news access</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </Slide>
  );
}
